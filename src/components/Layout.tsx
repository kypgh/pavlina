import { ReactNode } from 'react'
import Navigation from './Navigation'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}