import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { contactContent } from '@/content/siteContent'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Το όνομα είναι υποχρεωτικό'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Το email είναι υποχρεωτικό'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Παρακαλώ εισάγετε ένα έγκυρο email'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Το μήνυμα είναι υποχρεωτικό'
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Το μήνυμα δεν μπορεί να υπερβαίνει τους 1000 χαρακτήρες'
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1000)
  }

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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-dark font-medium mb-2 text-lg">
                  {contactContent.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark ${
                    errors.name ? 'border-red-500' : 'border-text focus:border-yellow'
                  }`}
                  placeholder={contactContent.form.nameLabel}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-dark font-medium mb-2 text-lg">
                  {contactContent.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark ${
                    errors.email ? 'border-red-500' : 'border-text focus:border-yellow'
                  }`}
                  placeholder={contactContent.form.emailLabel}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-dark font-medium mb-2 text-lg">
                  {contactContent.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  maxLength={1000}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark resize-none ${
                    errors.message ? 'border-red-500' : 'border-text focus:border-yellow'
                  }`}
                  placeholder={contactContent.form.messageLabel}
                />
                <div className="flex justify-between items-start mt-1">
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                  <p className="text-text text-sm ml-auto">{formData.message.length}/1000</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`px-10 py-4 rounded-full font-medium text-lg transition-colors shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-yellow hover:bg-dark-yellow text-dark'
                  }`}
                >
                  {isSubmitting ? 'Αποστολή...' : contactContent.form.submitButton}
                </motion.button>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-yellow/20 border border-yellow text-dark rounded-lg"
                >
                  Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.
                </motion.div>
              )}
            </form>
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
