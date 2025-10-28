import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { FadeInUp, FadeInUpImmediate } from "@/components/AnimatedSection";
import { servicesContent } from "@/content/siteContent";
import { useState } from "react";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-6 pb-20">
        {/* Hero Quote Section - Prominent */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeInUpImmediate>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg">
              <p className="text-2xl md:text-3xl text-dark italic font-title leading-relaxed">
                Κάθε διαδρομή είναι μοναδική. Εδώ θα βρεις τον χώρο και τον
                χρόνο για να ανακαλύψεις τη δική σου.
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
              {servicesContent.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
            </div>
          </FadeInUpImmediate>
        </div>

        {/* Session Details Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <FadeInUp delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-title text-dark mb-12 text-center">
              Λεπτομέρειες Συνεδριών
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Duration Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-yellow rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Διάρκεια
                </h3>
                <p className="text-text">60 λεπτά ανά συνεδρία</p>
              </div>

              {/* Format Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-yellow rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">Μορφή</h3>
                <p className="text-text">Online μέσω Zoom</p>
              </div>

              {/* Approach Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-yellow rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Προσέγγιση
                </h3>
                <p className="text-text">
                  Εξατομικευμένη στον δικό σου ρυθμό
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Discovery Call Section - Dark */}
        <div className="max-w-6xl mx-auto mb-16">
          <FadeInUp delay={0.5}>
            <div className="bg-dark rounded-3xl p-12 md:p-16 shadow-xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-title text-white mb-8">
                  {servicesContent.discoveryCall.title}
                </h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 opacity-95">
                  {servicesContent.discoveryCall.description}
                </p>

                <div className="border-t border-white/20 pt-8 mt-8">
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic opacity-95">
                    Αν νιώθεις ότι ήρθε η στιγμή να επενδύσεις στον εαυτό σου,
                    θα χαρώ να σε γνωρίσω.
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

      <Footer />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
