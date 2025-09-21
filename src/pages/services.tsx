import Navigation from '@/components/Navigation'
import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { servicesContent } from '@/content/siteContent'

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <FadeInUpImmediate>
            <h1 className="text-5xl md:text-6xl font-title text-dark mb-8 text-center">
              {servicesContent.title}
            </h1>
          </FadeInUpImmediate>
          
          <FadeInUpImmediate delay={0.2}>
            <div className="text-lg md:text-xl text-text leading-relaxed max-w-3xl mx-auto">
              {servicesContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInUpImmediate>
        </div>

        {/* Service Details Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <FadeInUp delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-title text-dark mb-12 text-center">
              Λεπτομέρειες Συνεδριών
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Session Details Cards */}
            <FadeInUp delay={0.5}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-title text-dark mb-4">
                  Διάρκεια
                </h3>
                <p className="text-text text-lg">
                  60 λεπτά ανά συνεδρία
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-title text-dark mb-4">
                  Μορφή
                </h3>
                <p className="text-text text-lg">
                  Online μέσω Zoom
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-title text-dark mb-4">
                  Προσέγγιση
                </h3>
                <p className="text-text text-lg">
                  Εξατομικευμένη στον δικό σου ρυθμό
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Coaching Approach Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <FadeInUp delay={0.8}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-title text-dark mb-8 text-center">
                Η Μεθοδολογία μας
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="" 
                    alt="Coaching session illustration" 
                    className="w-full h-64 object-cover rounded-2xl bg-gray-100"
                  />
                </div>
                <div>
                  <ul className="space-y-4">
                    {servicesContent.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-text text-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Discovery Call CTA Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <FadeInUp delay={1.0}>
            <div className="bg-gradient-to-br from-yellow to-accent rounded-3xl p-8 md:p-12 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="" 
                    alt="Online meeting illustration" 
                    className="w-full h-48 object-cover rounded-2xl bg-white/20"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-title text-dark mb-6">
                    Δωρεάν Discovery Call
                  </h2>
                  <p className="text-dark text-lg mb-8 leading-relaxed">
                    {servicesContent.callToAction}
                  </p>
                  <button className="bg-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-text transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Book Discovery Call
                  </button>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </main>
    </div>
  )
}