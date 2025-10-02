import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import schemas
import { schemaTypes } from './src/sanity/schemas'
import { StudioLayout } from './src/sanity/components/StudioLayout'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Pavlina Blog',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('blogPost')
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      layout: StudioLayout,
    },
  },

  basePath: '/studio',
  
  // Authentication and CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'development' 
      ? ['http://localhost:3000', 'https://localhost:3000']
      : [process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'],
  },
  
  // API configuration
  api: {
    projectId,
    dataset,
  },
})