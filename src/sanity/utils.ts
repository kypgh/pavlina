import { client, urlFor } from './client'
import { 
  blogPostBySlugQuery, 
  blogPostSlugsQuery,
  publishedBlogPostsQuery 
} from './queries'
import type { 
  BlogPost, 
  BlogPostPreview, 
  BlogPostFull,
  SanityImage 
} from './types'

// Transform Sanity image to frontend-friendly format
export function transformSanityImage(image: SanityImage | undefined): { url: string; alt?: string } | undefined {
  if (!image?.asset) return undefined
  
  return {
    url: urlFor(image).url(),
    alt: image.alt || undefined
  }
}

// Transform full blog post data for frontend consumption
export function transformBlogPost(post: BlogPost): BlogPostFull {
  return {
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    description: post.description,
    featuredImage: transformSanityImage(post.featuredImage),
    publishedAt: post.publishedAt,
    body: post.body
  }
}

// Transform blog post for preview/listing
export function transformBlogPostPreview(post: BlogPost): BlogPostPreview {
  return {
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    description: post.description,
    featuredImage: transformSanityImage(post.featuredImage),
    publishedAt: post.publishedAt
  }
}

// Fetch all blog posts for listing page
export async function getAllBlogPosts(): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(publishedBlogPostsQuery)
    return posts.map(transformBlogPostPreview)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch individual blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPostFull | null> {
  try {
    const post = await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug })
    return post ? transformBlogPost(post) : null
  } catch (error) {
    console.error('Error fetching blog post by slug:', error)
    return null
  }
}

// Fetch all blog post slugs for static generation
export async function getAllBlogPostSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(blogPostSlugsQuery)
    return slugs.map(item => item.slug)
  } catch (error) {
    console.error('Error fetching blog post slugs:', error)
    return []
  }
}

// Fetch blog posts with optional limit for homepage or featured sections
export async function getBlogPosts(limit?: number): Promise<BlogPostPreview[]> {
  try {
    const query = limit 
      ? `${publishedBlogPostsQuery}[0...${limit}]`
      : publishedBlogPostsQuery
    
    const posts = await client.fetch<BlogPost[]>(query)
    return posts.map(transformBlogPostPreview)
  } catch (error) {
    console.error('Error fetching limited blog posts:', error)
    return []
  }
}

// Check if a blog post exists by slug
export async function blogPostExists(slug: string): Promise<boolean> {
  try {
    const post = await client.fetch<{ _id: string } | null>(
      `*[_type == "blogPost" && slug.current == $slug && active == true][0] { _id }`,
      { slug }
    )
    return !!post
  } catch (error) {
    console.error('Error checking blog post existence:', error)
    return false
  }
}