# Design Document

## Overview

The Sanity blog integration will transform the existing static blog page into a dynamic content management system. The solution embeds Sanity Studio within the Next.js application and creates a seamless content creation and consumption workflow. The architecture leverages Sanity's headless CMS capabilities while maintaining the existing UI design and animations.

## Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   Sanity CMS    │    │  Sanity Studio  │
│                 │    │                 │    │                 │
│  - Blog Listing │◄──►│  - Blog Schema  │◄──►│  - Content UI   │
│  - Blog Detail  │    │  - Image Assets │    │  - Rich Editor  │
│  - API Routes   │    │  - Content API  │    │  - Media Upload │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Data Flow

1. **Content Creation**: Content creators use Sanity Studio (`/studio`) to create and manage blog posts
2. **Content Storage**: Blog posts are stored in Sanity's cloud-hosted database
3. **Content Retrieval**: Next.js pages fetch content via Sanity client during build time and runtime
4. **Content Display**: Blog listing and detail pages render the fetched content with existing animations

## Components and Interfaces

### Sanity Schema

**Blog Post Schema (`blogPost.ts`)**
```typescript
{
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
```

### Next.js Integration

**Sanity Client Configuration**
- Configure Sanity client with project ID and dataset
- Set up environment variables for API access
- Create utility functions for common queries

**Page Components**
- Update `/blog` page to fetch and display Sanity content
- Create `/blog/[slug]` dynamic route for individual posts
- Implement `/studio/[[...index]]` route for embedded studio

**API Integration**
- Create Sanity client instance for server-side and client-side usage
- Implement GROQ queries for blog post retrieval
- Set up image URL generation for Sanity assets

### Studio Configuration

**Studio Setup**
- Configure Sanity Studio with custom branding
- Set up rich text editor with image support
- Configure media handling and upload settings
- Implement custom preview components

## Data Models

### BlogPost Interface
```typescript
interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  featuredImage?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  body: PortableTextBlock[]
  publishedAt: string
  _createdAt: string
  _updatedAt: string
}
```

### Portable Text Blocks
```typescript
interface PortableTextBlock {
  _type: 'block' | 'image'
  // Block-specific properties for text content
  // Image-specific properties for inline images
}
```

## Error Handling

### Client-Side Error Handling
- Implement loading states for blog post fetching
- Handle network errors with retry mechanisms
- Display user-friendly error messages for failed requests
- Implement fallback content for missing images

### Server-Side Error Handling
- Handle Sanity API connection failures
- Implement proper 404 handling for non-existent blog posts
- Log errors for debugging and monitoring
- Graceful degradation when Sanity is unavailable

### Studio Error Handling
- Handle authentication failures
- Provide feedback for content validation errors
- Implement auto-save functionality to prevent data loss

## Testing Strategy

### Unit Testing
- Test Sanity client configuration and queries
- Test blog post data transformation utilities
- Test component rendering with mock Sanity data
- Test error handling scenarios

### Integration Testing
- Test end-to-end blog post creation and display workflow
- Test image upload and rendering functionality
- Test slug generation and URL routing
- Test studio authentication and content management

### Manual Testing
- Verify studio functionality across different browsers
- Test responsive design on various devices
- Validate rich text editor functionality
- Test image optimization and loading performance

## Performance Considerations

### Content Delivery
- Implement static generation (SSG) for blog listing page
- Use incremental static regeneration (ISR) for blog posts
- Optimize image delivery through Sanity's CDN
- Implement proper caching strategies

### Bundle Optimization
- Code-split Sanity Studio to reduce main bundle size
- Lazy load rich text rendering components
- Optimize image loading with next/image integration
- Minimize client-side JavaScript for content pages

### SEO Optimization
- Generate proper meta tags from blog post content
- Implement structured data for blog posts
- Ensure proper URL structure with slugs
- Optimize images with alt text and proper sizing