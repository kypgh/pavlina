import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import { PortableTextContent } from '@/sanity/types'
import { urlFor } from '@/sanity/client'
import Image from 'next/image'
import { useState } from 'react'

// Component for rendering images in portable text
function PortableTextImage({ value }: { value: { asset?: any; alt?: string } }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  if (!value?.asset) {
    return null
  }

  const imageUrl = urlFor(value).url()
  const alt = value.alt || 'Blog post image'

  if (imageError) {
    return (
      <div className="my-8 bg-yellow/20 rounded-lg p-8 text-center">
        <svg 
          className="w-12 h-12 text-dark-yellow mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="text-dark font-medium">Image could not be loaded</p>
      </div>
    )
  }

  return (
    <div className="my-8">
      <div className="relative bg-yellow/20 rounded-lg overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="w-12 h-12 bg-dark-yellow/30 rounded-full"></div>
            </div>
          </div>
        )}
        <Image
          src={imageUrl}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          onError={() => setImageError(true)}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      {value.alt && (
        <p className="text-sm text-text text-center mt-2 italic">
          {value.alt}
        </p>
      )}
    </div>
  )
}

// Custom components for different portable text block types
const portableTextComponents: PortableTextComponents = {
  types: {
    image: PortableTextImage,
  },
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-title text-dark mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-title text-dark mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-title text-dark mb-3 mt-5">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-title text-dark mb-2 mt-4">
        {children}
      </h4>
    ),
    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-text leading-relaxed mb-4">
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-yellow pl-6 my-6 italic text-text bg-yellow/5 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-text">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-text">
        {children}
      </ol>
    ),
  },
  listItem: {
    // Bullet list item
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    // Numbered list item
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    // Strong/bold text
    strong: ({ children }) => (
      <strong className="font-semibold text-dark">{children}</strong>
    ),
    // Emphasis/italic text
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Code text
    code: ({ children }) => (
      <code className="bg-yellow/20 text-dark px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Links
    link: ({ children, value }) => {
      const href = value?.href
      if (!href) {
        return <span>{children}</span>
      }
      
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-yellow hover:text-dark underline transition-colors"
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextProps {
  content: PortableTextContent[]
  className?: string
}

export default function PortableText({ content, className = '' }: PortableTextProps) {
  if (!content || content.length === 0) {
    return (
      <div className={`bg-yellow/10 border border-yellow/30 rounded-lg p-6 text-center ${className}`}>
        <p className="text-text">
          No content available for this blog post.
        </p>
      </div>
    )
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableTextReact
        value={content}
        components={portableTextComponents}
      />
    </div>
  )
}