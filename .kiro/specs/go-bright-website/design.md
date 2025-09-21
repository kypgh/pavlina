# Design Document

## Overview

The Go Bright website will be a sophisticated, empowering coaching platform that transforms the existing Next.js application to showcase Pavlina's coaching services. The design will maintain the existing warm color palette while creating an inspiring, professional experience that resonates with women seeking personal development and empowerment.

## Architecture

### Technology Stack
- **Framework**: Next.js 15.5.3 with TypeScript
- **Styling**: Tailwind CSS 4 with custom color variables
- **Animations**: Framer Motion 12.23.16
- **Smooth Scrolling**: Lenis 1.3.11
- **Fonts**: Marta Bold (titles) + Montserrat (body text)

### Page Structure
```
/                    - Homepage (Go Bright Story + Mission/Vision)
/about              - About Me (Personal journey + Credentials)  
/services           - 1:1 Coaching Sessions (Service details + Discovery Call)
/blog               - Existing blog page (unchanged)
```

## Components and Interfaces

### Layout Components

#### Navigation (Minimal Changes)
- Keep existing Navigation.tsx structure and all current menu items (Home, Services, About, Blog)
- Maintain current responsive design and animations
- Keep "Pavlina" logo as is
- Update CTA button text to "Book Discovery Call"

#### Page Layout Structure
```typescript
interface PageLayoutProps {
  children: ReactNode
  heroSection?: ReactNode
  className?: string
}
```

### Content Components

#### Hero Section Component
```typescript
interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  ctaText?: string
  ctaAction?: () => void
}
```

#### Story Section Component
```typescript
interface StorySectionProps {
  content: string
  imageUrl?: string
  imagePosition: 'left' | 'right'
}
```

#### Mission/Vision Cards Component
```typescript
interface MissionVisionProps {
  mission: string
  vision: string
}
```

#### Service Card Component
```typescript
interface ServiceCardProps {
  title: string
  description: string
  duration?: string
  format?: string
  imageUrl?: string
}
```

## Data Models

### Content Structure
```typescript
interface SiteContent {
  hero: {
    title: string
    subtitle: string
    backgroundImage: string
  }
  story: {
    content: string
    image: string
  }
  mission: string
  vision: string
  about: {
    content: string
    credentials: string[]
    image: string
  }
  services: {
    title: string
    description: string
    details: string[]
    callToAction: string
  }
}
```

## Design System

### Color Palette (Existing)
- **Primary Background**: `#DFC99B` (warm beige)
- **Secondary Background**: `#fff7e7` (cream white)
- **Primary Accent**: `#F0C446` (golden yellow)
- **Secondary Accent**: `#9E8A3D` (dark yellow)
- **Text Primary**: `#A4935B` (warm brown)
- **Text Dark**: `#4D4C1A` (deep brown)

### Typography Hierarchy
- **H1 (Hero)**: 4rem (64px) - Marta Bold
- **H2 (Section Headers)**: 3rem (48px) - Marta Bold
- **H3 (Subsections)**: 2rem (32px) - Marta Bold
- **Body Large**: 1.25rem (20px) - Montserrat
- **Body Regular**: 1rem (16px) - Montserrat
- **Body Small**: 0.875rem (14px) - Montserrat

### Spacing System
- **Section Padding**: 5rem (80px) vertical
- **Container Max Width**: 1200px
- **Content Spacing**: 2rem (32px) between elements
- **Card Padding**: 2rem (32px)

## Page Designs

### Homepage Design

#### Hero Section
- Full viewport height with centered content
- Background image placeholder (warm, inspiring image)
- Large "Go Bright" title with subtitle from content
- Prominent "Book Discovery Call" CTA button
- Subtle scroll indicator

#### Story Section
- Two-column layout (desktop) / stacked (mobile)
- Left: Image placeholder (portrait of coach)
- Right: Complete Greek story text with proper typography
- Animated entrance using existing FadeInUp components

#### Mission & Vision Section
- Side-by-side cards with subtle shadows
- Mission card with warm background
- Vision card with complementary styling
- Icons or decorative elements (placeholders)

### About Page Design

#### Personal Journey Section
- Hero-style introduction with background image
- Full biographical content in readable typography
- Timeline or milestone highlights (visual elements)
- Professional credentials prominently displayed

#### Credentials Section
- Clean, organized display of qualifications
- University logos/badges (placeholders)
- Certification highlights
- Professional approach explanation

### Services Page Design

#### Service Overview
- Hero section explaining coaching approach
- Detailed 1:1 session information
- Process explanation with visual steps
- Pricing and booking information

#### Discovery Call Section
- Prominent call-to-action
- Benefits of the discovery call
- Easy booking process explanation
- Trust indicators and testimonials (placeholders)

### Blog Page (Unchanged)
- Keep existing blog page functionality and design
- No modifications to blog content or structure
- Maintain current blog navigation and layout

## Error Handling

### User Experience
- Graceful loading states for all animations
- Fallback content for missing images
- Form validation with clear error messages
- 404 page with navigation back to main content

### Technical Error Handling
- Image loading fallbacks
- Animation performance optimization
- Mobile responsiveness testing
- Cross-browser compatibility

## Testing Strategy

### Visual Testing
- Component library documentation
- Responsive design testing across devices
- Animation performance testing
- Color contrast accessibility testing

### Content Testing
- Greek text rendering verification
- Typography hierarchy validation
- Content readability assessment
- SEO optimization verification

### User Experience Testing
- Navigation flow testing
- Form functionality testing
- Mobile interaction testing
- Loading performance testing

## Implementation Approach

### Phase 1: Foundation
- Update navigation and layout components
- Implement new page structure
- Set up content management system

### Phase 2: Content Integration
- Create homepage with story content
- Build about page with biographical content
- Implement services page with coaching details

### Phase 3: Enhancement
- Add contact form and booking system
- Implement image placeholders
- Optimize animations and performance

### Phase 4: Polish
- Fine-tune responsive design
- Add accessibility features
- Optimize for SEO and performance

## Accessibility Considerations

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images (when added)
- Keyboard navigation support
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility

## Performance Optimization

- Image optimization and lazy loading
- Animation performance monitoring
- Code splitting for better loading
- SEO optimization for Greek content
- Mobile-first responsive design