"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ContactForm from "./ContactForm";

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
      // Store original values and current scroll position
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyTop = document.body.style.top;
      const scrollY = window.scrollY;

      // Prevent scrolling on both body and html while preserving scroll position
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Prevent wheel events on the document
      const preventWheelScroll = (e: WheelEvent) => {
        if (
          !e.target ||
          !(e.target as Element).closest("[data-modal-content]")
        ) {
          e.preventDefault();
        }
      };

      const preventTouchScroll = (e: TouchEvent) => {
        if (
          !e.target ||
          !(e.target as Element).closest("[data-modal-content]")
        ) {
          e.preventDefault();
        }
      };

      document.addEventListener("wheel", preventWheelScroll, {
        passive: false,
      });
      document.addEventListener("touchmove", preventTouchScroll, {
        passive: false,
      });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.top = originalBodyTop;
        document.body.style.width = "";
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        document.removeEventListener("wheel", preventWheelScroll);
        document.removeEventListener("touchmove", preventTouchScroll);
      };
    }
  }, [isOpen]);


  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalScroll = (e: React.UIEvent) => {
    // Allow scrolling within the modal content
    e.stopPropagation();
  };

  const handleModalWheel = (e: React.WheelEvent) => {
    // Allow wheel scrolling within modal content
    e.stopPropagation();
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
          style={{ margin: 0, overflow: "hidden" }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            data-modal-content
          >
            {/* Header */}
            <div className="bg-dark rounded-t-3xl px-8 py-6 relative flex-shrink-0">
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
            <div
              className="px-8 py-8 overflow-y-auto flex-1"
              onScroll={handleModalScroll}
              onWheel={handleModalWheel}
              data-modal-content
            >
              <ContactForm 
                onSuccess={() => {
                  setTimeout(() => {
                    onClose();
                  }, 2000);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
