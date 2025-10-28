import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { contactContent } from '@/content/siteContent'

export default function Contact() {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUpImmediate>
            <h1 className="text-5xl md:text-7xl font-title text-dark mb-8">
              {contactContent.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <div className="prose prose-lg max-w-none text-dark">
              {contactContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-xl leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </FadeInUpImmediate>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <ContactForm />
          </FadeInUp>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-title text-white text-center mb-8">
              Εναλλακτικοί Τρόποι Επικοινωνίας
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="space-y-6 text-white text-center">
              {/* Email Contact */}
              {contactContent.alternativeContact.email && (
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-xl font-medium">Email</h3>
                  <a 
                    href={`mailto:${contactContent.alternativeContact.email}`}
                    className="text-yellow hover:text-dark-yellow transition-colors text-lg"
                  >
                    {contactContent.alternativeContact.email}
                  </a>
                </div>
              )}

              {/* Social Media Links */}
              {contactContent.alternativeContact.socialMedia.length > 0 && (
                <div className="flex flex-col items-center gap-4 mt-8">
                  <h3 className="text-xl font-medium">Social Media</h3>
                  <div className="flex gap-6 justify-center">
                    {contactContent.alternativeContact.socialMedia.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow hover:text-dark-yellow transition-colors"
                      >
                        {/* Social media icon placeholder */}
                        <span className="text-2xl">🔗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Online Session Note */}
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-lg leading-relaxed">
                  Οι συνεδρίες πραγματοποιούνται online μέσω Zoom, ώστε να έχεις την ευελιξία να συμμετέχεις από όπου κι αν βρίσκεσαι.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
