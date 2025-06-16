'use client';

import type { ReactNode } from 'react';
import { easeOut, motion, type Variants } from 'framer-motion';

const variants: Record<string, Variants> = {
  top: {
    hidden: { opacity: 0, y: -50 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: customDelay },
    }),
  },
  bottom: {
    hidden: { opacity: 0, y: 12 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: customDelay },
    }),
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        delay: 0.3,
      },
    },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        delay: 0.3,
      },
    },
  },
};

export const FadeIn = ({
  children,
  className,
  variant = 'top',
}: {
  children: ReactNode;
  variant?: 'top' | 'left' | 'right' | 'bottom';
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={variants[variant]}
    className={className}
  >
    {children}
  </motion.div>
);
