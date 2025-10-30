import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

import { aboutContent } from "@/content/siteContent";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
  const containerRef = useRef<HTMLDivElement>(null);

  // Sections data for easier management
  const sections = [
    {
      id: "hero",
      type: "normal",
      component: (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark py-20 px-6">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-title text-white mb-6">
              {aboutContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed opacity-95">
              {aboutContent.hero.subtitle}
            </p>
          </div>
        </section>
      ),
    },
    {
      id: "journey",
      type: "normal",
      component: (
        <section className="bg-white min-h-screen flex items-center py-20 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                {aboutContent.image ? (
                  <Image
                    src={aboutContent.image}
                    alt="Pavlina - Professional Portrait"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-background">
                    <span className="text-dark font-title text-xl">
                      Professional Portrait
                    </span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-4xl md:text-5xl font-title text-dark mb-8">
                  Η δική μου διαδρομή
                </h2>
                <p className="text-dark leading-relaxed text-lg md:text-xl">
                  {aboutContent.journey}
                </p>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "search",
      type: "slide",
      bg: "bg-background",
      component: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
            Η αναζήτηση
          </h2>
          <div className="prose prose-xl max-w-none">
            {aboutContent.search.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-dark leading-relaxed mb-8 text-lg md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "today",
      type: "slide",
      bg: "bg-white",
      component: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
            Σήμερα…
          </h2>
          <div className="prose prose-xl max-w-none">
            <p className="text-dark leading-relaxed text-lg md:text-xl">
              {aboutContent.today}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "philosophy",
      type: "slide",
      bg: "bg-background",
      component: (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-title text-dark mb-10 text-center">
            Η φιλοσοφία μου
          </h2>
          <div className="prose prose-xl max-w-none">
            <p className="text-dark leading-relaxed text-lg md:text-xl">
              {aboutContent.philosophy}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mission",
      type: "slide",
      bg: "bg-dark",
      component: (
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-title text-white mb-10">
            Η Αποστολή μου
          </h2>
          <p className="text-white opacity-95 leading-relaxed text-xl md:text-2xl">
            {aboutContent.mission}
          </p>
        </div>
      ),
    },
    {
      id: "vision",
      type: "slide",
      bg: "bg-white",
      component: (
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-title text-dark mb-10">
            Το Όραμά μου
          </h2>
          <p className="text-dark leading-relaxed text-xl md:text-2xl">
            {aboutContent.vision}
          </p>
        </div>
      ),
    },
    {
      id: "closing",
      type: "slide",
      bg: "bg-dark",
      component: (
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white opacity-95 text-xl md:text-2xl leading-relaxed mb-10 italic">
            {aboutContent.closingQuote}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow hover:bg-dark-yellow text-dark font-semibold px-12 py-5 rounded-full transition-all duration-300 text-xl hover:scale-105 shadow-lg"
          >
            Κλείσε τη συνεδρία σου τώρα!
          </button>
        </div>
      ),
    },
  ];

  // Handle scroll with snap behavior
  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();
      setIsScrolling(true);

      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(
        0,
        Math.min(sections.length - 1, currentSection + direction)
      );

      if (newSection !== currentSection) {
        setScrollDirection(direction);
        setCurrentSection(newSection);
      }

      setTimeout(() => setIsScrolling(false), 400);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Minimum swipe distance to trigger navigation
      const minSwipeDistance = 50;

      // Determine if it's a vertical or horizontal swipe
      if (
        Math.abs(deltaY) > Math.abs(deltaX) &&
        Math.abs(deltaY) > minSwipeDistance
      ) {
        // Vertical swipe
        e.preventDefault();
        setIsScrolling(true);

        const direction = deltaY > 0 ? 1 : -1;
        const newSection = Math.max(
          0,
          Math.min(sections.length - 1, currentSection + direction)
        );

        if (newSection !== currentSection) {
          setScrollDirection(direction);
          setCurrentSection(newSection);
        }

        setTimeout(() => setIsScrolling(false), 400);
      } else if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > minSwipeDistance
      ) {
        // Horizontal swipe
        e.preventDefault();
        setIsScrolling(true);

        const direction = deltaX > 0 ? 1 : -1;
        const newSection = Math.max(
          0,
          Math.min(sections.length - 1, currentSection + direction)
        );

        if (newSection !== currentSection) {
          setScrollDirection(direction);
          setCurrentSection(newSection);
        }

        setTimeout(() => setIsScrolling(false), 400);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });

      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [currentSection, isScrolling, sections.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setScrollDirection(1);
        setCurrentSection((prev) => Math.min(sections.length - 1, prev + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setScrollDirection(-1);
        setCurrentSection((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isScrolling, sections.length]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden bg-white fixed inset-0"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Navigation />

      {/* Unified animation system for all sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={
            currentSection <= 1
              ? {
                  y: scrollDirection > 0 ? "-100%" : "100%",
                  x: 0,
                }
              : {
                  x: scrollDirection > 0 ? "100%" : "-100%",
                  y: 0,
                }
          }
          animate={{ x: 0, y: 0 }}
          exit={
            currentSection <= 1
              ? {
                  y: scrollDirection > 0 ? "100%" : "-100%",
                  x: 0,
                }
              : {
                  x: scrollDirection > 0 ? "-100%" : "100%",
                  y: 0,
                }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
        >
          {currentSection <= 1 ? (
            // Render vertical sections as full sections
            sections[currentSection].component
          ) : (
            // Render horizontal sections with proper styling
            <section
              className={`w-full h-full flex items-center justify-center py-20 px-6 ${sections[currentSection].bg}`}
            >
              {sections[currentSection].component}
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
