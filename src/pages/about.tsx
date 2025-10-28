import Navigation from '@/components/Navigation'
import BookingModal from '@/components/BookingModal'
import { FadeInUp, FadeInUpImmediate, FadeInUpRobust } from '@/components/AnimatedSection'
import { aboutContent } from '@/content/siteContent'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark py-20 px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <FadeInUpImmediate>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-title text-white mb-6">
              {aboutContent.hero.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed opacity-95">
              {aboutContent.hero.subtitle}
            </p>
          </FadeInUpImmediate>
        </div>
      </section>

      <main>
        {/* Section 1: Η δική μου διαδρομή - With photo */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              {/* Professional Portrait */}
              <FadeInUp>
                <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                  {aboutContent.image ? (
                    <Image 
                      src={aboutContent.image} 
                      alt="Pavlina - Professional Portrait" 
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-background">
                      <span className="text-dark font-title text-xl">Professional Portrait</span>
                    </div>
                  )}
                </div>
              </FadeInUp>

              {/* Journey Content */}
              <div className="lg:col-span-2">
                <FadeInUpRobust delay={0.2}>
                  <h2 className="text-4xl md:text-5xl font-title text-dark mb-8">
                    Η δική μου διαδρομή
                  </h2>
                  <p className="text-dark leading-relaxed text-lg md:text-xl">
                    {aboutContent.journey}
                  </p>
                </FadeInUpRobust>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Η αναζήτηση */}
        <section className="bg-background py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
                Η αναζήτηση
              </h2>
              <div className="prose prose-xl max-w-none">
                {aboutContent.search.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-dark leading-relaxed mb-8 text-lg md:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Section 3: Σήμερα… */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
                Σήμερα…
              </h2>
              <div className="prose prose-xl max-w-none">
                <p className="text-dark leading-relaxed text-lg md:text-xl">
                  {aboutContent.today}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Section 4: Η φιλοσοφία μου */}
        <section className="bg-background py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
                Η φιλοσοφία μου
              </h2>
              <div className="prose prose-xl max-w-none">
                <p className="text-dark leading-relaxed text-lg md:text-xl">
                  {aboutContent.philosophy}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Section 5: Η Αποστολή μου - Dark block */}
        <section className="bg-dark py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-title text-white mb-10">
                Η Αποστολή μου
              </h2>
              <p className="text-white opacity-95 leading-relaxed text-xl md:text-2xl">
                {aboutContent.mission}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Section 6: Το Όραμά μου - White block */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-10">
                Το Όραμά μου
              </h2>
              <p className="text-dark leading-relaxed text-xl md:text-2xl">
                {aboutContent.vision}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Section 7: Closing quote with CTA */}
        <section className="bg-dark py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <p className="text-white opacity-95 text-xl md:text-2xl leading-relaxed mb-10 italic">
                {aboutContent.closingQuote}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow hover:bg-dark-yellow text-dark font-semibold px-12 py-5 rounded-full transition-all duration-300 text-xl hover:scale-105 shadow-lg"
              >
                Κλείσε τη συνεδρία σου τώρα!
              </button>
            </FadeInUp>
          </div>
        </section>
      </main>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}