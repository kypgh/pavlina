import { FadeInUp, FadeInUpImmediate } from "@/components/AnimatedSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contactContent } from "@/content/siteContent";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
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
              {contactContent.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="text-xl leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </FadeInUpImmediate>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-light-green">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <ContactForm />
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
