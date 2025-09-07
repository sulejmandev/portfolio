'use client';

import { menuItems } from '@/data/menu';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import Borders from './ui/Borders';

interface Menu {
  toggleMenu: () => void;
}

export default function Navbar({ toggleMenu }: Menu) {
  const pathName = usePathname();

  return (
    <motion.nav
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center fixed top-6 left-0 w-full h-screen overflow-hidden bg-neutral-950 "
    >
      <ul className="flex w-full text-4xl justify-around  h-1/2">
        {menuItems.map((link, i) => {
          const isActive = pathName === link.href;
          return (
            <Borders
              key={i}
              isBorder={isActive && true}
              className={`${isActive && 'text-emerald-600'}`}
            >
              <li
                className={cn(
                  ` transition-colors duration-200 cursor-pointer py-2`
                )}
                onClick={toggleMenu}
              >
                <Link href={link.href} className="flex flex-col gap-2">
                  <span className="text-sm font-mono">
                    {isActive ? 'res ' : 'req '}
                  </span>
                  {link.title}
                </Link>
              </li>
            </Borders>
          );
        })}
      </ul>

      <div className="w-full">test</div>
    </motion.nav>
  );
}
