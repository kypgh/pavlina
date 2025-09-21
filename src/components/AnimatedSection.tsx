'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Immediate animations (for hero sections, page load content)
export const FadeInUpImmediate = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const FadeInImmediate = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll-triggered animations (for content below the fold)
export const FadeInUp = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, margin: '-50px', amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const FadeIn = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideInLeft = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Robust animation for content that needs to always show
export const FadeInUpRobust = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Ensure content shows after a short delay even if animation doesn't trigger
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100 + (delay * 1000))
    
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, margin: '-50px', amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}