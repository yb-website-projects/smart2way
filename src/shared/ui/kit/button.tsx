'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const Button = ({
  className,
  uppercase = false,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  uppercase?: boolean;
}) => (
  <button
    className={cn(
      'w-max cursor-pointer rounded-full bg-white px-10 py-4 text-black transition duration-300 ease-in-out outline-none hover:bg-white/70',
      uppercase ? 'uppercase' : 'capitalize',
      className,
    )}
    {...args}
  />
);
