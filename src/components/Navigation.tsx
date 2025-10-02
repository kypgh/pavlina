"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <Image
                  src="/assets/logo1.png"
                  alt="Pavlina Logo"
                  width={80}
                  height={40}
                  // className="h-10 w-auto"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative font-body font-medium transition-colors ${
                      router.pathname === item.href
                        ? "text-dark"
                        : "text-text hover:text-dark"
                    }`}
                  >
                    {item.name}
                    {router.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow"
                        initial={false}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow hover:bg-dark-yellow text-dark px-6 py-2 rounded-full font-medium transition-colors"
              >
                Book Discovery Call
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -2,
                  }}
                  className="w-5 h-0.5 bg-dark block mb-1"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-5 h-0.5 bg-dark block mb-1"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 2,
                  }}
                  className="w-5 h-0.5 bg-dark block"
                />
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={false}
                  animate={{
                    x: isOpen ? 0 : -20,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body font-medium ${
                      router.pathname === item.href ? "text-dark" : "text-text"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={false}
                animate={{
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-yellow text-dark px-6 py-2 rounded-full font-medium w-full"
              >
                Book Discovery Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </nav>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
