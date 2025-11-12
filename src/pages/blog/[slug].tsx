import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/sanity/utils'
import { BlogPostFull } from '@/sanity/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import PortableText from '@/components/PortableText'

interface BlogPostPageProps {
  post: BlogPostFull | null
}

// Component to handle blog post images with error states
function BlogPostImage({ 
  src, 
  alt,
  priority = false 
}: { 
  src: string
  alt: string
  priority?: boolean
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  if (imageError) {
    return (
      <div className="w-full h-full bg-yellow/20 flex items-center justify-center">
        <div className="text-center">
          <svg 
            className="w-12 h-12 text-dark-yellow mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-sm text-dark font-medium">Image unavailable</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {imageLoading && (
        <div className="absolute inset-0 bg-yellow/20 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-dark-yellow/30 rounded-full"></div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        priority={priority}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoading(false)}
      />
    </>
  )
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const router = useRouter()

  // Show loading state during static generation
  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-16">
              <div className="animate-pulse">
                <div className="w-12 h-12 bg-dark-yellow/30 rounded-full mx-auto mb-4"></div>
              </div>
              <p className="text-text">Loading blog post...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Handle 404 case for non-existent blog posts
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInUpImmediate>
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg 
                      className="w-12 h-12 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-title text-dark mb-4">
                    Blog Post Not Found
                  </h1>
                  <p className="text-text text-lg mb-6">
                    The blog post you&apos;re looking for doesn&apos;t exist or may have been removed.
                  </p>
                  <Link href="/blog">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow hover:bg-dark-yellow text-dark px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      ← Back to Blog
                    </motion.button>
                  </Link>
                </div>
              </div>
            </FadeInUpImmediate>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <FadeInUpImmediate>
            <Link href="/blog">
              <motion.div
                whileHover={{ x: -5 }}
                className="inline-flex items-center text-text hover:text-dark transition-colors mb-8"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                Back to Blog
              </motion.div>
            </Link>
          </FadeInUpImmediate>

          {/* Blog Post Header */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            {post.featuredImage && (
              <FadeInUpImmediate delay={0.1}>
                <div className="h-64 md:h-96 relative bg-yellow/20">
                  <BlogPostImage
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    priority={true}
                  />
                </div>
              </FadeInUpImmediate>
            )}

            {/* Post Content */}
            <div className="p-8 md:p-12">
              {/* Post Meta */}
              <FadeInUpImmediate delay={0.2}>
                <div className="text-sm text-text mb-4">
                  {post.publishedAt ? (
                    new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  ) : (
                    'Date not available'
                  )}
                </div>
              </FadeInUpImmediate>

              {/* Post Title */}
              <FadeInUpImmediate delay={0.3}>
                <h1 className="text-4xl md:text-5xl font-title text-dark mb-6">
                  {post.title}
                </h1>
              </FadeInUpImmediate>

              {/* Post Description */}
              <FadeInUpImmediate delay={0.4}>
                <p className="text-xl text-text mb-8 leading-relaxed">
                  {post.description}
                </p>
              </FadeInUpImmediate>

              {/* Post Body */}
              <FadeInUp delay={0.5}>
                <PortableText content={post.body} />
              </FadeInUp>
            </div>
          </article>

          {/* Navigation to other posts could go here */}
          <FadeInUp delay={0.6}>
            <div className="mt-12 text-center">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow hover:bg-dark-yellow text-dark px-8 py-4 rounded-full font-medium transition-colors"
                >
                  View All Blog Posts
                </motion.button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const slugs = await getAllBlogPostSlugs()
    
    const paths = slugs.map((slug) => ({
      params: { slug },
    }))

    return {
      paths,
      // Enable ISR - generate pages on-demand if they don't exist at build time
      fallback: true,
    }
  } catch (error) {
    console.error('Error in getStaticPaths:', error)
    
    return {
      paths: [],
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  try {
    const slug = params?.slug as string
    
    if (!slug) {
      return {
        notFound: true,
      }
    }

    const post = await getBlogPostBySlug(slug)

    // Return 404 if post doesn't exist
    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post,
      },
      // Revalidate every hour to get updated content
      revalidate: 3600,
    }
  } catch (error) {
    console.error('Error in getStaticProps for blog post:', error)
    
    return {
      notFound: true,
    }
  }
}