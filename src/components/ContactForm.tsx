"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function ContactForm({ 
  onSuccess,
  className = ""
}: ContactFormProps) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
            setSubmitSuccess(false);
          }, 2000);
        } else {
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Υπήρξε πρόβλημα με την αποστολή. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-dark font-medium mb-2"
        >
          Όνομα *
        </label>
        <input
          type="text"
          id="name"
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
          htmlFor="email"
          className="block text-dark font-medium mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
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
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-dark font-medium mb-2"
        >
          Τηλέφωνο *
        </label>
        <input
          type="tel"
          id="phone"
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
          <p className="text-red-500 text-sm mt-1">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-dark font-medium mb-2"
        >
          Μήνυμα (προαιρετικό)
        </label>
        <textarea
          id="message"
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
  );
}