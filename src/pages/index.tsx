import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import BookingModal from '@/components/BookingModal'
import { homeContent } from '@/content/siteContent'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative bg-sage-green">
        <div className="text-center max-w-4xl relative z-10">
          <FadeInUpImmediate>
            <h1 className="text-6xl md:text-8xl font-title text-white mb-6">
              {homeContent.hero.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-95">
              {homeContent.hero.subtitle}
            </p>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow hover:bg-dark-yellow text-dark px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              {homeContent.hero.cta}
            </motion.button>
          </FadeInUpImmediate>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coach Portrait Image */}
            <FadeInUp>
              <div className="relative h-96 lg:h-[500px] rounded-2xl shadow-lg overflow-hidden">
                {homeContent.introduction.image ? (
                  <Image 
                    src={homeContent.introduction.image} 
                    alt="Pavlina - Go Bright Coach" 
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-dark/50 bg-sage-green-light">
                    Coach Portrait Placeholder
                  </div>
                )}
              </div>
            </FadeInUp>
            
            {/* Introduction Content */}
            <FadeInUp delay={0.2}>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  {homeContent.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-dark leading-relaxed mb-6">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-title text-dark text-center mb-12">
              {homeContent.workingTogether.title}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <ul className="space-y-6">
              {homeContent.workingTogether.points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-yellow text-2xl mt-1">•</span>
                  <p className="text-dark text-lg leading-relaxed flex-1">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 bg-sage-green">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xl text-white leading-relaxed mb-8 opacity-95">
              {homeContent.closing.content}
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-2xl md:text-3xl font-title text-white italic mb-10">
              {homeContent.closing.quote}
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow hover:bg-dark-yellow text-dark px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              {homeContent.closing.cta}
            </motion.button>
          </FadeInUp>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
