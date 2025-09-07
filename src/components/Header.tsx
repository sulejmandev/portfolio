'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { cn } from '@/utils/cn';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();

  const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="40">
      <path
        d="M50 20 H150 V70 H100 V100 H150 V180 H50 V130 H100 V100 H50 Z"
        fill="none"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );

  const handleRoute = () => {
    router.push('/', { scroll: false });
    setIsOpen(false);
  };

  return (
    <header className="w-full top-0 z-[100] bg-neutral-950 sticky ">
      <div
        className={cn(
          `flex w-full items-center justify-between px-6 py-4 relative z-[101] ${
            isOpen && 'border-b border-neutral-700'
          }`
        )}
      >
        <div
          className="flex items-center cursor-pointer"
          aria-label="logo"
          onClick={handleRoute}
        >
          <Logo />
          <span className="py-1 px-2 text-emerald-600 border border-neutral-200 ml-2">
            SULEJMAN
          </span>
        </div>
        <motion.button
          aria-label="Toggle menu"
          className="text-xl cursor-pointer"
          onClick={toggleMenu}
          animate={{
            scale: isOpen ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            times: [0, 0.5, 1],
          }}
        >
          {isOpen ? (
            <span className="hover:text-emerald-600">Close</span>
          ) : (
            <span className="hover:text-emerald-600">Menu</span>
          )}
        </motion.button>
      </div>

      {/* Navbar overlay */}
      <AnimatePresence>
        {isOpen && <Navbar toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
}
