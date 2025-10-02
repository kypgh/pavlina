import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface StudioAuthProps {
  children: React.ReactNode
}

export function StudioAuth({ children }: StudioAuthProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if we're in development mode or if user has access
    const checkAuth = async () => {
      try {
        // In development, allow access
        if (process.env.NODE_ENV === 'development') {
          setIsAuthenticated(true)
          setIsLoading(false)
          return
        }

        // In production, you might want to add actual authentication logic here
        // For now, we'll allow access but you can extend this
        setIsAuthenticated(true)
        setIsLoading(false)
      } catch (error) {
        console.error('Authentication check failed:', error)
        setIsAuthenticated(false)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div>Loading Studio...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Inter, sans-serif',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1>Access Denied</h1>
        <p>You don&apos;t have permission to access the studio.</p>
        <button 
          onClick={() => router.push('/')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go Home
        </button>
      </div>
    )
  }

  return <>{children}</>
}