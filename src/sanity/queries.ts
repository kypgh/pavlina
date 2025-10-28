// GROQ queries for blog posts

// Query for blog post listing (preview data)
export const blogPostsQuery = `
  *[_type == "blogPost" && active == true] | order(publishedAt desc) {
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
    publishedAt,
    active
  }
`

// Query for individual blog post by slug
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug && active == true][0] {
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
    active,
    _createdAt,
    _updatedAt
  }
`

// Query for blog post slugs (for static generation)
export const blogPostSlugsQuery = `
  *[_type == "blogPost" && defined(slug.current) && active == true] {
    "slug": slug.current
  }
`

// Query for published blog posts only
export const publishedBlogPostsQuery = `
  *[_type == "blogPost" && publishedAt <= now() && active == true] | order(publishedAt desc) {
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
    publishedAt,
    active
  }
`