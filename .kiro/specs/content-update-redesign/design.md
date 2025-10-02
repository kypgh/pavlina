# Design Document

## Overview

This design document outlines the approach for updating the Go Bright coaching website with new content and implementing design improvements. The project focuses on three main areas: (1) exact content replacement from content.md, (2) color scheme rebalancing to reduce brown dominance while maintaining the existing palette, and (3) redesigning specific UI components including the homepage bottom section, About page layout, and creating a new Contact page.

The design draws inspiration from the provided reference screenshots (Haven, Cassandra, Cup of Tea websites) which demonstrate effective use of light backgrounds with strategic color accents, creating an airy and welcoming aesthetic.

## Architecture

### Current Color Palette
- **White/Cream**: `#fff7e7` - Light, warm background
- **Background/Beige**: `#DFC99B` - Currently dominant brown-beige (TO BE REDUCED)
- **Yellow**: `#F0C446` - Bright accent color
- **Dark Yellow**: `#9E8A3D` - Muted yellow accent
- **Text/Brown**: `#A4935B` - Medium brown (currently overused)
- **Dark**: `#4D4C1A` - Deep olive/brown for text

### New Color Distribution Strategy

Based on the reference screenshots, the new color distribution will be:

**Primary Backgrounds (60-70% of page)**
- White/Cream (`#fff7e7`) - Main page backgrounds
- Pure white (`#ffffff`) - Card backgrounds, content sections

**Secondary Backgrounds (15-20%)**
- Sage/Olive green sections (using `#4D4C1A` with low opacity or as solid blocks)
- Soft yellow accents (using `#F0C446` with low opacity)

**Accent Colors (10-15%)**
- Yellow (`#F0C446`) - CTAs, highlights, interactive elements
- Dark Yellow (`#9E8A3D`) - Secondary buttons, borders

**Text Colors**
- Dark (`#4D4C1A`) - Primary text (replaces brown)
- Text/Brown (`#A4935B`) - Secondary text, captions only
- Reduced use of brown tones overall

### Page Structure

```
Website
├── Home Page (Updated content + redesigned bottom section)
├── About Page (Redesigned layout for new content)
├── Services Page (Simplified, redundant box removed)
├── Contact Page (NEW - to be created)
└── Blog Page (NO CHANGES)
```

## Components and Interfaces

### 1. Homepage Components

#### 1.1 Hero Section
**Current State**: Title, subtitle, CTA button
**Changes**: 
- Update title to: "Το φως είναι μέσα σου. Επέλεξε να το ζήσεις!"
- Update subtitle to new content from content.md
- Update CTA to: "Κλείσε τη συνεδρία σου τώρα!"
- Change background from brown-beige to white/cream
- Use yellow for CTA button with dark text

**Design Pattern**:
```
┌─────────────────────────────────────┐
│     [Light cream background]        │
│                                     │
│   Το φως είναι μέσα σου.           │
│   Επέλεξε να το ζήσεις!            │
│                                     │
│   [Subtitle text in dark color]    │
│                                     │
│   [Yellow CTA Button]              │
└─────────────────────────────────────┘
```

#### 1.2 Introduction Section (Section 2)
**Current State**: Story content with image
**Changes**:
- Replace all text with content from "Ενότητα 2" in content.md
- Change background to white
- Use sage green accent for image border or decorative elements
- Maintain two-column layout (image + text)

**Design Pattern** (inspired by Cassandra reference):
```
┌─────────────────────────────────────┐
│     [White background]              │
│  ┌──────────┐  ┌──────────────┐   │
│  │          │  │ Μεγαλώνουμε  │   │
│  │  Image   │  │ συχνά με...  │   │
│  │          │  │              │   │
│  └──────────┘  └──────────────┘   │
└─────────────────────────────────────┘
```

#### 1.3 "What It Means to Work Together" Section (Section 3)
**Current State**: May not exist or needs update
**Changes**:
- Create section with bullet points from "Ενότητα 3"
- Use sage green background block (similar to Haven reference)
- White text on sage background
- Clean, readable list format

**Design Pattern** (inspired by Haven reference):
```
┌─────────────────────────────────────┐
│  [Sage green background block]      │
│                                     │
│  Τι σημαίνει να δουλεύουμε μαζί    │
│                                     │
│  • Δεν σου δίνω έτοιμες λύσεις...  │
│  • Εστιάζουμε στις δυνάμεις σου... │
│  • Μέσα από συζήτηση...            │
│  • Καλλιεργούμε την αυτογνωσία...  │
│  • Δημιουργούμε μαζί...            │
│                                     │
└─────────────────────────────────────┘
```

#### 1.4 Mission & Vision Section (Bottom Section - COMPLETE REDESIGN)
**Current State**: Two boxes with brown background (CLIENT DISLIKES)
**New Design**: Inspired by reference screenshots, create a flowing, modern layout

**Option A - Side-by-Side Cards with Accent Backgrounds**:
```
┌─────────────────────────────────────────────────┐
│         [Light cream background]                │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │ [Soft yellow bg] │  │ [Sage green bg]  │   │
│  │                  │  │                  │   │
│  │  Η Αποστολή μου  │  │  Το Όραμά μου   │   │
│  │                  │  │                  │   │
│  │  [Mission text]  │  │  [Vision text]   │   │
│  │                  │  │                  │   │
│  └──────────────────┘  └──────────────────┘   │
│                                                 │
│         [Yellow CTA Button]                     │
│     "Κάνε το πρώτο βήμα σήμερα!"               │
└─────────────────────────────────────────────────┘
```

**Option B - Stacked with Image Integration** (Similar to Cassandra):
```
┌─────────────────────────────────────────────────┐
│         [White background]                      │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  [Sage green background section]         │  │
│  │                                           │  │
│  │  ┌─────────┐    Η Αποστολή μου          │  │
│  │  │ Image/  │    [Mission text]           │  │
│  │  │ Icon    │                             │  │
│  │  └─────────┘                             │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  [Soft yellow background section]        │  │
│  │                                           │  │
│  │    Το Όραμά μου    ┌─────────┐          │  │
│  │    [Vision text]   │ Image/  │          │  │
│  │                    │ Icon    │          │  │
│  │                    └─────────┘          │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│         [Yellow CTA Button]                     │
└─────────────────────────────────────────────────┘
```

**Recommended**: Option A for cleaner, more modern look

### 2. About Page Components

#### 2.1 Hero Section
**Design**:
- Light cream background
- Title: "Ας Γνωριστούμε"
- Subtitle: "Παυλίνα Κατσαλίφη / Pavlina Katsalifi"
- Minimal, elegant typography

#### 2.2 Content Sections
The About page has extensive new content that needs to be organized into clear sections:

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│  Hero: "Ας Γνωριστούμε"                        │
├─────────────────────────────────────────────────┤
│  [White background]                             │
│  ┌──────────┐  ┌──────────────────────┐        │
│  │          │  │ Η δική μου διαδρομή  │        │
│  │  Photo   │  │ [Content]            │        │
│  │          │  │                      │        │
│  └──────────┘  └──────────────────────┘        │
├─────────────────────────────────────────────────┤
│  [Sage green accent section]                    │
│  Η αναζήτηση                                    │
│  [Content]                                      │
├─────────────────────────────────────────────────┤
│  [White background]                             │
│  Σήμερα…                                        │
│  [Content]                                      │
├─────────────────────────────────────────────────┤
│  [Soft yellow accent section]                   │
│  Η φιλοσοφία μου                                │
│  [Content]                                      │
├─────────────────────────────────────────────────┤
│  [White background - Two columns]               │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │ Η Αποστολή μου   │  │ Το Όραμά μου    │   │
│  │ [Content]        │  │ [Content]        │   │
│  └──────────────────┘  └──────────────────┘   │
├─────────────────────────────────────────────────┤
│  [Sage green CTA section]                       │
│  [Closing quote in italics]                     │
│  [Yellow CTA Button]                            │
└─────────────────────────────────────────────────┘
```

**Key Design Elements**:
- Alternating background colors (white, sage, yellow) for visual rhythm
- Generous spacing between sections
- Typography hierarchy: Section titles in larger font, body text readable
- Photo placement at top for personal connection

### 3. Services Page Components

#### 3.1 Main Content
**Changes**:
- Keep title "Ατομικές Συνεδρίες" (or update if content.md specifies)
- Update all descriptive text from content.md
- **REMOVE** the "Η Μεθοδολογία μας" box entirely
- Simplify layout to focus on main service description

#### 3.2 Discovery Call Section
**Design**:
- Prominent section with title "Πρώτη γνωριμία - Discovery Call"
- Content from content.md
- Yellow CTA button: "Κλείσε τη συνεδρία σου τώρα"
- White background with yellow accent border or background

**Layout**:
```
┌─────────────────────────────────────────────────┐
│  [White background]                             │
│  Ατομικές Συνεδρίες                            │
│  [Main description from content.md]             │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ [Soft yellow background]                  │ │
│  │ Πρώτη γνωριμία - Discovery Call          │ │
│  │ [Description]                             │ │
│  │ [Yellow CTA Button]                       │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Approach note at bottom]                      │
└─────────────────────────────────────────────────┘
```

### 4. Contact Page Components (NEW)

#### 4.1 Hero Section
- Title: "Ας συνδεθούμε"
- Introductory text from content.md
- Light cream background

#### 4.2 Contact Form
**Design** (inspired by modern, clean forms):
```
┌─────────────────────────────────────────────────┐
│  [White background]                             │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │  Όνομα                                    │ │
│  │  [Input field]                            │ │
│  │                                           │ │
│  │  Email                                    │ │
│  │  [Input field]                            │ │
│  │                                           │ │
│  │  Μήνυμα                                   │ │
│  │  [Textarea]                               │ │
│  │                                           │ │
│  │  [Yellow Submit Button]                   │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Sage green section]                           │
│  Alternative Contact Methods                    │
│  • Email: [email]                               │
│  • Social Media: [links]                        │
└─────────────────────────────────────────────────┘
```

**Form Styling**:
- Input fields: White background, sage green border
- Focus state: Yellow border
- Submit button: Yellow background, dark text
- Validation: Red error messages below fields
- Success: Green confirmation message

## Data Models

### Content Structure (siteContent.ts)

```typescript
// Updated content structure
export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  introduction: {
    content: string; // Section 2 content
  };
  workingTogether: {
    title: string;
    points: string[]; // Section 3 bullet points
  };
  closing: {
    content: string;
    quote: string;
    cta: string;
  };
  missionVision: {
    mission: string;
    vision: string;
  };
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
  };
  journey: string; // "Η δική μου διαδρομή"
  search: string; // "Η αναζήτηση"
  today: string; // "Σήμερα…"
  philosophy: string; // "Η φιλοσοφία μου"
  mission: string; // "Η Αποστολή μου"
  vision: string; // "Το Όραμά μου"
  closingQuote: string;
  image: string;
}

export interface ServicesContent {
  title: string;
  description: string;
  discoveryCall: {
    title: string;
    description: string;
  };
  approach: string;
  cta: string;
}

export interface ContactContent {
  title: string;
  description: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
  };
  alternativeContact: {
    email: string;
    socialMedia: string[];
  };
}
```

## Error Handling

### Content Validation
- Verify all Greek text is preserved exactly as in content.md
- Check for missing or truncated content
- Validate special characters and diacritics are rendered correctly

### Form Validation (Contact Page)
- Required field validation for name, email, message
- Email format validation
- Character limits for message field
- Display clear error messages in Greek
- Prevent submission with invalid data

### Responsive Design
- Test all layouts on mobile, tablet, desktop
- Ensure text remains readable at all sizes
- Verify color contrast meets accessibility standards
- Check that redesigned sections work on small screens

## Testing Strategy

### Content Accuracy Testing
1. **Manual Review**: Compare each page against content.md line by line
2. **Character Verification**: Ensure Greek characters, quotes, and special symbols render correctly
3. **Completeness Check**: Verify no content is missing or truncated

### Visual Design Testing
1. **Color Distribution**: Verify brown is no longer dominant
2. **Reference Comparison**: Compare against Haven, Cassandra, Cup of Tea screenshots
3. **Consistency Check**: Ensure design language is consistent across pages
4. **Responsive Testing**: Test on multiple device sizes

### Component Testing
1. **Homepage Bottom Section**: Verify new design replaces old boxes
2. **About Page Layout**: Check all sections display correctly with new content
3. **Services Page**: Confirm redundant box is removed
4. **Contact Form**: Test form validation and submission
5. **Navigation**: Ensure Contact page is accessible from navigation

### Cross-Browser Testing
- Test on Chrome, Firefox, Safari, Edge
- Verify color rendering is consistent
- Check font rendering and spacing

### Accessibility Testing
- Color contrast ratios (WCAG AA minimum)
- Keyboard navigation for forms
- Screen reader compatibility
- Focus states on interactive elements

## Implementation Notes

### Phase 1: Content Update
1. Update siteContent.ts with all new content from content.md
2. Verify exact text preservation
3. Update all page components to use new content

### Phase 2: Color Scheme Update
1. Update CSS variables to reduce brown usage
2. Change default backgrounds to white/cream
3. Update component styles to use new color distribution
4. Test color contrast

### Phase 3: Component Redesign
1. Redesign homepage bottom section (Mission/Vision)
2. Redesign About page layout
3. Simplify Services page (remove redundant box)
4. Create Contact page from scratch

### Phase 4: Testing & Refinement
1. Content accuracy verification
2. Visual design review
3. Responsive testing
4. Accessibility audit
5. Client review and feedback

## Design Decisions & Rationales

### Why Reduce Brown Dominance?
The current brown-heavy design creates a heavy, dated feel. The reference screenshots demonstrate that light backgrounds with strategic color accents create a more modern, welcoming aesthetic that better suits a coaching/wellness brand.

### Why Redesign Homepage Bottom Section?
The current box design doesn't effectively showcase the Mission and Vision content. A more flowing, integrated design will better engage visitors and encourage them to take action.

### Why Remove Services Page Redundant Box?
The methodology details are already covered in the main description. Removing redundancy creates a cleaner, more focused user experience.

### Why Create Separate Contact Page?
A dedicated contact page provides a clear call-to-action destination and makes it easier for potential clients to reach out. It also allows for more detailed contact information and form functionality.

### Color Psychology
- **Yellow**: Energy, optimism, warmth - perfect for CTAs and highlights
- **Sage Green**: Growth, balance, calm - ideal for coaching/wellness context
- **White/Cream**: Purity, clarity, openness - creates breathing room
- **Dark Olive**: Grounding, stability - used sparingly for text

This color strategy aligns with the coaching brand while creating a lighter, more inviting aesthetic.
