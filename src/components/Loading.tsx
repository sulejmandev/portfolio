'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function IntroLoading() {
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 flex flex-col items-center justify-center z-500">
        {/* LOGO */}

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-52 h-52 mb-4"
        >
          {/* Mask للتعبئة */}
          <defs>
            <mask id="fillMask">
              <rect x="0" y="200" width="200" height="200" fill="white">
                <animate
                  attributeName="y"
                  from="200"
                  to="0"
                  dur="1.5s"
                  begin="1s"
                  fill="freeze"
                />
              </rect>
            </mask>
          </defs>
          {/* القطعة العليا */}
          <motion.path
            d="M50 20 H150 V70 H100 V100 H50 Z"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ y: -300, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              delay: 0,
              type: 'spring',
              stiffness: 500,
              damping: 25,
            }}
          />
          {/* القطعة السفلى */}
          <motion.path
            d="M150 180 H50 V130 H100 V100 H150 Z"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ y: -300, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: 'spring',
              stiffness: 500,
              damping: 25,
            }}
          />
          {/* التعبئة البيضاء */}
          <path
            d="M50 20 H150 V70 H100 V100 H50 Z"
            fill="white"
            mask="url(#fillMask)"
          />
          <path
            d="M150 180 H50 V130 H100 V100 H150 Z"
            fill="white"
            mask="url(#fillMask)"
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
}
