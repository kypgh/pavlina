# Implementation Plan

- [x] 1. Set up Sanity dependencies and configuration
  - Install Sanity packages (@sanity/client, @sanity/image-url, sanity, @sanity/vision)
  - Create .env.local file with placeholder environment variables for Sanity configuration
  - Initialize Sanity configuration files (sanity.config.ts, sanity.cli.ts)
  - _Requirements: 5.1, 5.2_

- [x] 2. Create Sanity schema and studio setup
  - [x] 2.1 Create blog post schema definition
    - Write blogPost schema with title, slug, description, featuredImage, body, and publishedAt fields
    - Configure rich text editor for body field with image support
    - Set up field validations and options
    - _Requirements: 1.2, 2.2_

  - [x] 2.2 Configure Sanity studio
    - Create studio configuration with blog post schema
    - Set up studio routing and custom components
    - Configure rich text editor plugins and toolbar
    - _Requirements: 1.1, 2.1_

- [x] 3. Create Sanity client and utility functions
  - [x] 3.1 Set up Sanity client configuration
    - Create Sanity client instance with environment variables
    - Configure image URL builder for asset handling
    - Create TypeScript interfaces for blog post data
    - _Requirements: 5.3, 3.1_

  - [x] 3.2 Create GROQ queries and data fetching utilities
    - Write GROQ queries for blog post listing and individual posts
    - Create utility functions for fetching blog posts
    - Implement data transformation functions for frontend consumption
    - _Requirements: 3.1, 4.1_

- [x] 4. Implement studio route and integration
  - Create /studio/[[...index]].tsx page for embedded Sanity Studio
  - Configure studio authentication and routing
  - _Requirements: 1.1, 1.3, 5.4_

- [x] 5. Update blog listing page with Sanity integration
  - [x] 5.1 Modify blog.tsx to fetch data from Sanity
    - Replace hardcoded blog posts with Sanity data fetching
    - Implement getStaticProps or getServerSideProps for data fetching

    - Update component to render Sanity blog post data

    - _Requirements: 3.1, 3.2_

  - [x] 5.2 Handle empty states and loading
    - Implement loading states for blog post fetching
    - Create empty state component when no blog posts exist
    - Add error handling for failed API requests
    - _Requirements: 3.4_

- [x] 6. Create individual blog post page

  - [x] 6.1 Create dynamic route for blog posts
    - Create /blog/[slug].tsx page for individual blog posts
    - Implement getStaticPaths and getStaticProps for static generation
    - Handle 404 cases for non-existent blog posts
    - _Requirements: 4.1, 4.3_

  - [x] 6.2 Implement blog post content rendering
    - Create component to render portable text content
    - Implement image rendering for inline images in blog body
    - Style blog post layout with existing design system
    - _Requirements: 4.2, 4.4, 2.4_

- [ ] 7. Add portable text rendering and rich content support
  - Install and configure @portabletext/react for rich text rendering
  - Create custom components for different portable text block types
  - Implement image component for inline images with proper optimization
  - _Requirements: 2.2, 2.3, 4.4_

- [ ] 8. Implement image optimization and handling
  - [ ] 8.1 Configure Sanity image optimization
    - Set up next/image integration with Sanity image URLs
    - Configure image domains in next.config.js
    - Implement responsive image loading for featured images
    - _Requirements: 4.2, 4.4_
  - [ ] 8.2 Add image handling for rich text content
    - Create custom image component for portable text
    - Implement proper alt text and accessibility features
    - Add image loading states and error handling
    - _Requirements: 2.4, 4.4_

- [ ] 9. Final integration and optimization
  - [ ] 9.1 Complete blog workflow integration
    - Verify blog post creation flow in studio works with frontend
    - Ensure blog listing page displays Sanity data correctly
    - Confirm individual blog post pages render properly
    - _Requirements: 1.4, 3.3, 4.1_
  - [ ] 9.2 Add error boundaries and production optimizations
    - Implement error boundaries for Sanity-related components
    - Add proper TypeScript types for all Sanity data
    - Optimize bundle size and loading performance
    - _Requirements: 5.3, 3.4_
