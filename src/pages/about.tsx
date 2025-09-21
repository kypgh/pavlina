import Navigation from '@/components/Navigation'
import { FadeInUp, FadeInUpImmediate, FadeInUpRobust } from '@/components/AnimatedSection'
import { aboutContent } from '@/content/siteContent'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 to-yellow/40">
          {/* Background image placeholder - empty src for now */}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeInUpImmediate>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-dark mb-6">
              Η Ιστορία Μου
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <p className="text-lg md:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              Μια διαδρομή αυτογνωσίας και ενδυνάμωσης που με οδήγησε στο coaching
            </p>
          </FadeInUpImmediate>
        </div>
      </section>

      <main className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Personal Journey Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            
            {/* Professional Portrait */}
            <FadeInUp>
              <div className="relative aspect-[3/4] rounded-2xl shadow-lg overflow-hidden bg-background/50">
                {aboutContent.image ? (
                  <Image 
                    src={aboutContent.image} 
                    alt="Pavlina - Professional Portrait" 
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text/50">
                    <span className="text-dark font-title text-xl">Professional Portrait</span>
                  </div>
                )}
              </div>
            </FadeInUp>

            {/* Story Content */}
            <div className="space-y-6">
              <FadeInUpRobust delay={0.2}>
                <div className="prose prose-lg max-w-none">
                  {aboutContent.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text leading-relaxed mb-6 text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeInUpRobust>
            </div>
          </div>

          {/* Professional Credentials Section */}
          <FadeInUp>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-title text-dark mb-4">
                  Επαγγελματικά Προσόντα
                </h2>
                <p className="text-text text-lg max-w-2xl mx-auto">
                  Η εκπαίδευση και η εμπειρία που με οδηγούν στην υποστήριξή σου
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {aboutContent.credentials.map((credential, index) => (
                  <FadeInUp key={index} delay={index * 0.1}>
                    <div className="bg-yellow/10 rounded-xl p-6 border-l-4 border-yellow">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-dark font-medium text-lg leading-relaxed">
                          {credential}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              {/* Call to Action */}
              <FadeInUp delay={0.4}>
                <div className="text-center mt-12 p-8 bg-yellow/10 rounded-xl">
                  <p className="text-text text-lg leading-relaxed mb-6">
                    Αν νιώθεις κι εσύ ότι ήρθε η στιγμή να ξεπεράσεις τις φωνές που σε κρατούν πίσω 
                    και να βρεις ξανά το δικό σου φως, είμαι εδώ για να σε υποστηρίξω σε αυτό το ταξίδι.
                  </p>
                  <p className="text-dark font-title text-xl">
                    Γιατί μέσα σου υπάρχει ήδη ό,τι χρειάζεσαι για να λάμψεις!
                  </p>
                </div>
              </FadeInUp>
            </div>
          </FadeInUp>
        </div>
      </main>
    </div>
  )
}