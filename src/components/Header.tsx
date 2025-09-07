'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { name: 'Home', href: '#', id: 1 },
  { name: 'About', href: '#', id: 2 },
  { name: 'Services', href: '#', id: 3 },
  { name: 'Portfolio', href: '#', id: 4 },
  { name: 'Contact', href: '#', id: 5 },
];

const FullScreenNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 w-12 h-12 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Toggle navigation"
      >
        <div className="relative w-8 h-8">
          <motion.span
            className="absolute left-0 block w-full h-0.5 bg-white"
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="absolute left-0 block w-full h-0.5 bg-white"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.1 }}
          />
          <motion.span
            className="absolute left-0 block w-full h-0.5 bg-white"
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          />
        </div>
      </button>

      {/* Full-screen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black"
          >
            <motion.ul
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {navigationItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <a
                    href={item.href}
                    className="text-4xl md:text-6xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default FullScreenNav;
