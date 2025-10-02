import { PreviewProps } from 'sanity'
import Image from 'next/image'

interface BlogPostPreviewProps extends PreviewProps {
  title?: string
  description?: string
  featuredImage?: {
    asset?: {
      url?: string
    }
  }
  publishedAt?: string
}

export function BlogPostPreview(props: BlogPostPreviewProps) {
  const { title, description, featuredImage, publishedAt } = props

  return (
    <div style={{ padding: '12px', border: '1px solid #e1e5e9', borderRadius: '4px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        {featuredImage?.asset?.url && (
          <Image
            src={featuredImage.asset.url}
            alt={title || 'Blog post'}
            width={80}
            height={60}
            style={{
              objectFit: 'cover',
              borderRadius: '4px',
            }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
            {title || 'Untitled'}
          </h3>
          {description && (
            <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#6b7280' }}>
              {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            </p>
          )}
          {publishedAt && (
            <p style={{ margin: '0', fontSize: '12px', color: '#9ca3af' }}>
              {new Date(publishedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}