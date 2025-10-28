import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { getAllBlogPosts } from '@/sanity/utils'
import { BlogPostPreview } from '@/sanity/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface BlogProps {
  blogPosts: BlogPostPreview[]
}

// Component to handle blog post images with error states
function BlogPostImage({ 
  src, 
  alt 
}: { 
  src: string
  alt: string
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  if (imageError) {
    return (
      <div className="w-full h-full bg-yellow/20 flex items-center justify-center">
        <div className="text-center">
          <svg 
            className="w-8 h-8 text-dark-yellow mx-auto mb-2" 
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
          <span className="text-xs text-dark font-medium">Image unavailable</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {imageLoading && (
        <div className="absolute inset-0 bg-yellow/20 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-dark-yellow/30 rounded-full"></div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImageError(true)}
        onLoad={() => setImageLoading(false)}
      />
    </>
  )
}

export default function Blog({ blogPosts }: BlogProps) {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUpImmediate>
              <h1 className="text-5xl md:text-6xl font-title text-dark mb-8">
                Blog
              </h1>
            </FadeInUpImmediate>
            
            <FadeInUpImmediate delay={0.2}>
              <p className="text-xl text-text max-w-2xl mx-auto">
                Stay updated with our latest thoughts, insights, and news. 
                Articles and updates will be published here regularly.
              </p>
            </FadeInUpImmediate>
          </div>

          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <FadeInUp key={post._id} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                    >
                      <div className="h-48 relative bg-yellow/20 flex items-center justify-center">
                        {post.featuredImage ? (
                          <BlogPostImage
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alt || post.title}
                          />
                        ) : (
                          <div className="text-center">
                            <svg 
                              className="w-8 h-8 text-dark-yellow mx-auto mb-2" 
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
                            <span className="text-xs text-dark font-medium">No Image</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="text-sm text-text mb-2">
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
                        <h2 className="text-xl font-title text-dark mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-text text-sm line-clamp-3 mb-4">
                          {post.description}
                        </p>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="text-dark-yellow font-medium text-sm hover:text-dark transition-colors inline-block"
                        >
                          Read More →
                        </motion.span>
                      </div>
                    </motion.article>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          ) : (
            <FadeInUp>
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
                  <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg 
                      className="w-12 h-12 text-dark-yellow" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-title text-dark mb-4">
                    No Blog Posts Yet
                  </h2>
                  <p className="text-text text-lg mb-6">
                    We&apos;re working on creating amazing content for you. Check back soon for our latest articles and insights!
                  </p>
                  <p className="text-sm text-text">
                    In the meantime, feel free to subscribe to our newsletter below to get notified when we publish new content.
                  </p>
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Newsletter Signup */}
          <FadeInUp delay={0.5}>
            <NewsletterSignup className="mt-20" />
          </FadeInUp>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  try {
    const blogPosts = await getAllBlogPosts()
    
    return {
      props: {
        blogPosts,
      },
      // Revalidate every hour to get new blog posts
      revalidate: 3600,
    }
  } catch (error) {
    console.error('Error fetching blog posts in getStaticProps:', error)
    
    // Return empty array on error - the component will handle the empty state
    return {
      props: {
        blogPosts: [],
      },
      // Retry more frequently on error
      revalidate: 300,
    }
  }
}