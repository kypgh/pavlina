// Sanity asset reference type
export interface SanityAsset {
  _ref: string
  _type: 'reference'
}

// Sanity image type with asset reference
export interface SanityImage {
  asset: SanityAsset
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// Slug type for Sanity documents
export interface SanitySlug {
  current: string
  _type: 'slug'
}

// Portable Text block types
export interface PortableTextBlock {
  _key: string
  _type: string
  children?: Array<{
    _key: string
    _type: 'span'
    marks: string[]
    text: string
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
  style?: string
  listItem?: string
  level?: number
}

// Image block in Portable Text
export interface PortableTextImage {
  _key: string
  _type: 'image'
  asset: SanityAsset
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// Union type for Portable Text content
export type PortableTextContent = PortableTextBlock | PortableTextImage

// Main BlogPost interface matching the Sanity schema
export interface BlogPost {
  _id: string
  _type: 'blogPost'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: SanitySlug
  description: string
  featuredImage?: SanityImage
  body: PortableTextContent[]
  publishedAt: string
}

// Simplified BlogPost interface for frontend consumption
export interface BlogPostPreview {
  _id: string
  title: string
  slug: string
  description: string
  featuredImage?: {
    url: string
    alt?: string
  }
  publishedAt: string
}

// Full BlogPost interface for individual post pages
export interface BlogPostFull extends BlogPostPreview {
  body: PortableTextContent[]
}