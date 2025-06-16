'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const Button = ({
  className,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'w-max cursor-pointer rounded-full bg-white px-10 py-4 text-black uppercase transition duration-300 ease-in-out hover:bg-white/70',
      className,
    )}
    {...args}
  />
);
