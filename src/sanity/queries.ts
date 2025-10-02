// GROQ queries for blog posts

// Query for blog post listing (preview data)
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }
`

// Query for individual blog post by slug
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    publishedAt,
    _createdAt,
    _updatedAt
  }
`

// Query for blog post slugs (for static generation)
export const blogPostSlugsQuery = `
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`

// Query for published blog posts only
export const publishedBlogPostsQuery = `
  *[_type == "blogPost" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }
`