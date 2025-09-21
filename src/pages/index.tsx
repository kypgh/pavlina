import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { homeContent } from '@/content/siteContent'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative">
        {/* Background Image Placeholder */}
        {homeContent.hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <Image 
              src={homeContent.hero.backgroundImage} 
              alt="Go Bright Background" 
              fill
              className="object-cover opacity-20"
            />
          </div>
        )}
        
        <div className="text-center max-w-4xl relative z-10">
          <FadeInUpImmediate>
            <h1 className="text-6xl md:text-8xl font-title text-dark mb-6">
              {homeContent.hero.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">
              {homeContent.hero.subtitle}
            </p>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow hover:bg-dark-yellow text-dark px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              Book Discovery Call
            </motion.button>
          </FadeInUpImmediate>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coach Portrait Image */}
            <FadeInUp>
              <div className="relative h-96 lg:h-[500px] rounded-2xl shadow-lg overflow-hidden bg-background/50">
                {homeContent.story.image ? (
                  <Image 
                    src={homeContent.story.image} 
                    alt="Pavlina - Go Bright Coach" 
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text/50">
                    Coach Portrait Placeholder
                  </div>
                )}
              </div>
            </FadeInUp>
            
            {/* Story Content */}
            <FadeInUp delay={0.2}>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  {homeContent.story.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text leading-relaxed mb-6">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <FadeInUp>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-background p-8 rounded-2xl shadow-lg h-full"
              >
                <h3 className="text-2xl font-title text-dark mb-6 text-center">
                  Η Αποστολή μου
                </h3>
                <p className="text-text leading-relaxed">
                  {homeContent.missionVision.mission}
                </p>
              </motion.div>
            </FadeInUp>
            
            {/* Vision Card */}
            <FadeInUp delay={0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-yellow/10 p-8 rounded-2xl shadow-lg h-full border border-yellow/20"
              >
                <h3 className="text-2xl font-title text-dark mb-6 text-center">
                  Το Όραμά μου
                </h3>
                <p className="text-text leading-relaxed">
                  {homeContent.missionVision.vision}
                </p>
              </motion.div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  )
}
