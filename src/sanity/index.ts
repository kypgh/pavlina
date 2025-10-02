// Main exports for Sanity integration
export { client, urlFor } from './client'
export * from './types'
export * from './queries'
export * from './utils'

// Re-export commonly used functions for convenience
export {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAllBlogPostSlugs,
  getBlogPosts,
  blogPostExists,
  transformBlogPost,
  transformBlogPostPreview,
  transformSanityImage
} from './utils'