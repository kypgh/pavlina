"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Το όνομα είναι υποχρεωτικό";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Το email είναι υποχρεωτικό";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Παρακαλώ εισάγετε ένα έγκυρο email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Το τηλέφωνο είναι υποχρεωτικό";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Booking form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form and close modal after success
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/60 backdrop-blur-sm px-4"
          style={{ margin: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-dark rounded-t-3xl px-8 py-6 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-yellow transition-colors text-2xl"
                aria-label="Close modal"
              >
                ×
              </button>
              <h2 className="text-3xl md:text-4xl font-title text-white pr-8">
                Κλείσε τη Συνεδρία σου
              </h2>
              <p className="text-white/90 mt-2 text-lg">
                Συμπλήρωσε τη φόρμα και θα επικοινωνήσω μαζί σου σύντομα
              </p>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-title text-dark mb-2">
                    Επιτυχής Αποστολή!
                  </h3>
                  <p className="text-dark/70 text-lg">
                    Θα επικοινωνήσω μαζί σου σύντομα.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-dark font-medium mb-2"
                    >
                      Όνομα *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark ${
                        errors.name
                          ? "border-red-500"
                          : "border-text focus:border-yellow"
                      }`}
                      placeholder="Το όνομά σου"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-dark font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark ${
                        errors.email
                          ? "border-red-500"
                          : "border-text focus:border-yellow"
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-dark font-medium mb-2"
                    >
                      Τηλέφωνο *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors text-dark ${
                        errors.phone
                          ? "border-red-500"
                          : "border-text focus:border-yellow"
                      }`}
                      placeholder="+30 123 456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="modal-message"
                      className="block text-dark font-medium mb-2"
                    >
                      Μήνυμα (προαιρετικό)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-text rounded-lg focus:outline-none focus:border-yellow transition-colors text-dark resize-none"
                      placeholder="Πες μου λίγα λόγια για εσένα..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-full font-semibold text-lg transition-colors shadow-lg ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-yellow hover:bg-dark-yellow text-dark"
                      }`}
                    >
                      {isSubmitting ? "Αποστολή..." : "Αποστολή Αιτήματος"}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
