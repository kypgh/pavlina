import Navigation from '@/components/Navigation'
import BookingModal from '@/components/BookingModal'
import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { servicesContent } from '@/content/siteContent'
import { useState } from 'react'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-soft-yellow-medium">
      <Navigation />
      
      <main className="pt-24 px-6 pb-20">
        {/* Hero Quote Section - Prominent */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeInUpImmediate>
            <div className="bg-soft-yellow-medium rounded-3xl p-10 md:p-14">
              <p className="text-2xl md:text-3xl text-dark italic font-title leading-relaxed">
                «Κάθε διαδρομή είναι μοναδική. Εδώ θα βρεις τον χώρο και τον χρόνο για να ανακαλύψεις τη δική σου.»
              </p>
            </div>
          </FadeInUpImmediate>
        </div>

        {/* Main Content Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <FadeInUpImmediate delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-title text-dark mb-12 text-center">
              {servicesContent.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.3}>
            <div className="text-lg md:text-xl text-dark leading-relaxed max-w-4xl mx-auto">
              {servicesContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInUpImmediate>
        </div>

        {/* Discovery Call Section - Sage Green */}
        <div className="max-w-6xl mx-auto mb-16">
          <FadeInUp delay={0.5}>
            <div className="bg-sage-green rounded-3xl p-12 md:p-16 shadow-xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-title text-white mb-8">
                  {servicesContent.discoveryCall.title}
                </h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 opacity-95">
                  {servicesContent.discoveryCall.description}
                </p>
                
                <div className="border-t border-white/20 pt-8 mt-8">
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic opacity-95">
                    «Αν νιώθεις ότι ήρθε η στιγμή να επενδύσεις στον εαυτό σου, θα χαρώ να σε γνωρίσω.»
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-yellow text-dark px-12 py-5 rounded-full font-semibold text-xl hover:bg-dark-yellow transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {servicesContent.cta}
                  </button>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Approach Note */}
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0.7}>
            <p className="text-lg md:text-xl text-dark italic">
              {servicesContent.approach}
            </p>
          </FadeInUp>
        </div>
      </main>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}