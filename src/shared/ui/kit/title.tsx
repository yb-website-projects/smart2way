'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const titleVariants = cva('transition duration-300 ease-in-out text-white', {
  variants: {
    size: {
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl max-md:text-[24px]',
      '5xl': 'text-5xl',
      '6xl': 'text-[60px] max-md:text-[32px]',
      '7xl': 'text-[80px] max-md:text-[40px]',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '7xl',
    weight: 700,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  weight,
  size,
  uppercase = false,
  as = 'h1',
}: {
  children: ReactNode;
  className?: string;
  uppercase?: boolean;
  as?: ElementType;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ weight, size }),
        uppercase && 'uppercase',
        'leading-[80px] max-md:leading-[40px]',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
