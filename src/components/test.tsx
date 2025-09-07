import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Menu,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Profile', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Works', href: '/works' },
  { title: 'Certificates', href: '/certificates' },
  { title: 'Tools', href: '/tools' },
  { title: 'Workflow', href: '/workflow' },
  { title: 'Content', href: '/content' },
];

const socialMedia = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    username: '@username',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    username: '/in/username',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    username: '@username',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com',
    username: '@username',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:contact@example.com',
    username: 'hello@example.com',
  },
];

const FullscreenNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
    setIsOpen(false);
  };

  const containerVariants = {
    closed: {
      clipPath: 'circle(0% at 100% 0%)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      clipPath: 'circle(150% at 100% 0%)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const numberVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <motion.button
        onClick={toggleNavigation}
        className="fixed top-8 right-8 z-50 w-14 h-14 flex flex-col justify-center items-center space-y-1 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="w-6 h-0.5 bg-white origin-center transition-all duration-300"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
            backgroundColor: isOpen ? '#ffffff' : '#ffffff',
          }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white transition-all duration-300"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white origin-center transition-all duration-300"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
            backgroundColor: isOpen ? '#ffffff' : '#ffffff',
          }}
        />
        <span className="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
      </motion.button>

      {/* Fullscreen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                  backgroundSize: '50px 50px',
                }}
              />
            </div>

            <div className="relative h-full flex">
              {/* Left Side - Navigation */}
              <div className="flex-1 flex flex-col justify-center pl-16 lg:pl-24">
                {/* Navigation Items */}
                <nav className="mb-16">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="relative mb-2"
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredItem(item.title)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <motion.button
                        onClick={() => handleLinkClick(item.href)}
                        className="group flex items-center text-6xl lg:text-8xl font-light text-white hover:text-gray-300 transition-colors duration-500 tracking-tight"
                        whileHover={{ x: 20 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {/* Number */}
                        <motion.span
                          className="text-lg font-mono text-gray-600 mr-8 min-w-[3rem]"
                          variants={numberVariants}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.span>

                        {/* Title */}
                        <span className="relative">
                          {item.title}
                          {hoveredItem === item.title && (
                            <motion.div
                              className="absolute -right-16 top-1/2 transform -translate-y-1/2"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ type: 'spring', stiffness: 400 }}
                            >
                              <ArrowUpRight className="w-8 h-8 text-gray-400" />
                            </motion.div>
                          )}
                        </span>
                      </motion.button>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  className="text-gray-400 space-y-2"
                  variants={itemVariants}
                >
                  <p className="text-sm font-mono tracking-wider uppercase">
                    Get in touch
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                  >
                    hello@example.com
                  </a>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                </motion.div>
              </div>

              {/* Right Side - Social & Info */}
              <div className="w-80 flex flex-col justify-between p-16 border-l border-gray-800">
                {/* Social Media */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-8">
                    Follow Me
                  </h3>
                  <div className="space-y-6">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 text-white hover:text-gray-300 transition-colors duration-300 group"
                          variants={socialVariants}
                          whileHover={{ x: 10 }}
                        >
                          <Icon className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {social.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {social.username}
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Location & Copyright */}
                <motion.div className="space-y-8" variants={itemVariants}>
                  <div>
                    <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-4">
                      Location
                    </h3>
                    <p className="text-white text-sm">
                      San Francisco, CA
                      <br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-4">
                      Local Time
                    </h3>
                    <p className="text-white text-sm font-mono">
                      {new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                      })}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-gray-800">
                    <p className="text-gray-500 text-xs">
                      © {new Date().getFullYear()} Your Name
                      <br />
                      All rights reserved
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-400 rounded-full"
              animate={{
                x: [0, 15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Background */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center text-white px-8">
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Minimal
            <br />
            <span className="font-bold">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Clean design meets powerful functionality
          </motion.p>
          <motion.div
            className="text-xs text-gray-600 font-mono tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Click menu to explore
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FullscreenNavigation;
