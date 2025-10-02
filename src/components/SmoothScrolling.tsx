'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Lenis from 'lenis'

export default function SmoothScrolling() {
  const router = useRouter()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Don't initialize Lenis on studio routes
    if (router.pathname.startsWith('/studio')) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [router.pathname])

  // Handle route changes - scroll to top (but not on studio routes)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (lenisRef.current && !url.startsWith('/studio')) {
        lenisRef.current.scrollTo(0, { immediate: false })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}