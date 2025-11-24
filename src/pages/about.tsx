import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { aboutContent } from "@/content/siteContent";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-dark py-20 px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-title text-white mb-6 mt-10">
            {aboutContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed opacity-95">
            {aboutContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Journey Section - Image Left, Text Right */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
            <div>
              <div 
                className="relative w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 lg:w-full lg:h-auto mx-auto lg:max-w-none lg:aspect-[3/4] rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => setCurrentImageIndex((prev) => (prev % 7) + 1)}
                title="Click to change image"
              >
                <Image
                  src={`/assets/img${currentImageIndex}.jpg`}
                  alt="Pavlina - Professional Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">Image {currentImageIndex}/7</p>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-title text-dark mb-6 lg:mb-8 text-center lg:text-left">
                Η Διαδρομή μου
              </h2>
              <div className="space-y-6">
                {aboutContent.journey.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-dark leading-relaxed text-base md:text-lg lg:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today Section - Text Right */}
      <section className="bg-light-green py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-8">
                Σήμερα...
              </h2>
              <div className="space-y-6">
                {aboutContent.today.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-dark leading-relaxed text-lg md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:order-1"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Text Left */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-8">
                Η φιλοσοφία μου
              </h2>
              <p className="text-dark leading-relaxed text-lg md:text-xl">
                {aboutContent.philosophy}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Mission Section - Text Right */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-title text-white mb-8">
                Η Αποστολή μου
              </h2>
              <p className="text-white opacity-95 leading-relaxed text-xl md:text-2xl">
                {aboutContent.mission}
              </p>
            </div>
            <div className="lg:order-1"></div>
          </div>
        </div>
      </section>

      {/* Vision Section - Text Left */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-title text-dark mb-8">
                Το Όραμά μου
              </h2>
              <p className="text-dark leading-relaxed text-xl md:text-2xl">
                {aboutContent.vision}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Closing Section - Centered */}
      <section className="bg-dark py-20 px-6">
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
      </section>

      <Footer />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
