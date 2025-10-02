# Implementation Plan

- [x] 1. Update global color scheme and styling

  - Modify src/styles/globals.css to implement new color distribution strategy
  - Change default backgrounds from brown-beige to white/cream
  - Update CSS variables to reduce brown dominance
  - Add new utility classes for sage green and soft yellow backgrounds
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 2. Update content structure file with new content from content.md

  - [x] 2.1 Update HomeContent interface and data in src/content/siteContent.ts

    - Add new fields for introduction section, workingTogether section, and closing section
    - Update hero title to "Το φως είναι μέσα σου. Επέλεξε να το ζήσεις!"
    - Update hero subtitle with new content
    - Update CTA text to "Κλείσε τη συνεδρία σου τώρα!"
    - Add Section 2 content (Εισαγωγή με περισσότερο βάθος)
    - Add Section 3 content (Τι σημαίνει να δουλεύουμε μαζί) as array of bullet points
    - Add Section 4 content (Κλείσιμο με πρόσκληση)
    - Update Mission and Vision content
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.10_

  - [x] 2.2 Update AboutContent interface and data in src/content/siteContent.ts

    - Restructure to include separate fields for each section
    - Add hero title "Ας Γνωριστούμε" and subtitle "Παυλίνα Κατσαλίφη /Pavlina Katsalifi"
    - Add journey section content ("Η δική μου διαδρομή")
    - Add search section content ("Η αναζήτηση")
    - Add today section content ("Σήμερα…")
    - Add philosophy section content ("Η φιλοσοφία μου")
    - Add mission content ("Η Αποστολή μου")
    - Add vision content ("Το Όραμά μου")
    - Add closing quote
    - _Requirements: 1.7, 1.10_

  - [x] 2.3 Update ServicesContent interface and data in src/content/siteContent.ts

    - Update main description with content from "Ατομικές Συνεδρίες"
    - Add discoveryCall section with title and description
    - Add approach text
    - Update CTA text
    - Remove methodology details array (will not be displayed)
    - _Requirements: 1.8, 1.9, 1.10, 4.1, 4.2, 4.3, 4.4_

  - [x] 2.4 Create ContactContent interface and data in src/content/siteContent.ts

    - Add title "Ας συνδεθούμε"
    - Add description text
    - Add form field labels (Όνομα, Email, Μήνυμα)
    - Add submit button text
    - Add placeholder for alternative contact information
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.9_

- [x] 3. Update Homepage (src/pages/index.tsx)

  - [x] 3.1 Update Hero section component

    - Replace title, subtitle, and CTA text with new content from siteContent
    - Change background color from brown-beige to white/cream
    - Update CTA button styling to use yellow background with dark text
    - _Requirements: 1.1, 1.2, 1.3, 3.2, 3.3, 3.4, 8.1, 8.4_

  - [x] 3.2 Update or create Introduction section (Section 2)

    - Replace existing story section content with new introduction content
    - Change background to white
    - Add sage green accent for image border or decorative elements
    - Maintain two-column layout (image + text)
    - _Requirements: 1.4, 3.3, 3.4, 8.2_

  - [x] 3.3 Create "Working Together" section (Section 3)

    - Create new section component with sage green background
    - Display title "Τι σημαίνει να δουλεύουμε μαζί"
    - Render bullet points from content as clean list
    - Use white text on sage background
    - _Requirements: 1.5, 3.3, 3.4, 8.2_

  - [x] 3.4 Create Closing section (Section 4)

    - Create new section with closing text and quote
    - Style quote in italics with appropriate emphasis
    - Add CTA button "Κάνε το πρώτο βήμα σήμερα!"
    - Use light background with yellow CTA
    - _Requirements: 1.6, 3.4, 8.2_

  - [x] 3.5 Completely redesign Mission & Vision section (bottom section)

    - Remove current two-box layout that client dislikes
    - Implement new side-by-side card design with accent backgrounds
    - Create Mission card with soft yellow background
    - Create Vision card with sage green background
    - Add CTA button below cards
    - Ensure responsive stacking on mobile
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3.3, 3.4, 8.2, 8.5_

- [x] 4. Redesign About page (src/pages/about.tsx)

  - [x] 4.1 Update Hero section

    - Change title to "Ας Γνωριστούμε"
    - Add subtitle "Παυλίνα Κατσαλίφη /Pavlina Katsalifi"
    - Change background to light cream
    - _Requirements: 1.7, 3.3, 5.1, 5.2, 5.3, 8.1_

  - [x] 4.2 Restructure content sections with alternating backgrounds

    - Create section for "Η δική μου διαδρομή" with white background and photo
    - Create section for "Η αναζήτηση" with sage green accent background
    - Create section for "Σήμερα…" with white background
    - Create section for "Η φιλοσοφία μου" with soft yellow accent background
    - Create two-column section for "Η Αποστολή μου" and "Το Όραμά μου" with white background
    - Add closing quote section with sage green background and CTA
    - Implement proper typography hierarchy for section titles and body text
    - _Requirements: 1.7, 3.3, 3.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 8.2, 8.3_

- [x] 5. Update Services page (src/pages/services.tsx)

  - [x] 5.1 Update main content section

    - Replace description text with new content from siteContent
    - Change background to white
    - Update typography and spacing
    - _Requirements: 1.8, 3.3, 4.3, 8.2_

  - [x] 5.2 Remove "Η Μεθοδολογία μας" box completely

    - Delete the methodology box component and all related code
    - Remove the details array rendering
    - Clean up any unused imports or styles
    - _Requirements: 4.1, 4.2, 4.4_

  - [x] 5.3 Create Discovery Call section

    - Create prominent section with title "Πρώτη γνωριμία - Discovery Call"
    - Add description from content
    - Style with soft yellow background or accent border
    - Add CTA button "Κλείσε τη συνεδρία σου τώρα"
    - _Requirements: 1.9, 3.4, 8.2_

  - [x] 5.4 Add approach note at bottom

    - Add text "Εστιασμένη στις δυνάμεις σου και προσαρμοσμένη στη δική σου πορεία"
    - Style as subtle footer note
    - _Requirements: 1.9, 8.2_

- [x] 6. Create Contact page (src/pages/contact.tsx)


  - [x] 6.1 Create page structure and Hero section

    - Create new contact.tsx file in src/pages
    - Add Navigation component
    - Create Hero section with title "Ας συνδεθούμε"
    - Add introductory text from content
    - Use light cream background
    - _Requirements: 6.1, 6.2, 6.6, 8.1_

  - [x] 6.2 Create contact form component

    - Create form with fields: Όνομα (name), Email, Μήνυμα (message)
    - Style input fields with white background and sage green borders
    - Implement focus states with yellow borders
    - Add submit button with yellow background and dark text
    - Ensure responsive layout for mobile
    - _Requirements: 6.3, 6.7, 8.2, 8.4, 8.5_

  - [x] 6.3 Implement form validation

    - Add required field validation for name, email, and message
    - Implement email format validation
    - Add character limits for message field
    - Display error messages in Greek below fields
    - Prevent submission with invalid data
    - _Requirements: 6.8_

  - [x] 6.4 Create alternative contact section

    - Create section with sage green background
    - Add heading "Alternative Contact Methods"
    - Add email contact information
    - Add social media links
    - Add note about online session availability
    - _Requirements: 6.4, 6.9, 8.2_

  - [x] 6.5 Add Contact page to navigation

    - Update Navigation component to include Contact link
    - Ensure consistent styling with other nav items
    - Test navigation from all pages
    - _Requirements: 6.6, 8.1_
