'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';
import { DotStarIcon } from '@/shared/ui/icons/dot-star';

const textFieldVariants = cva(
  'text-base rounded-[4px] px-4 w-[287px] max-lg:w-full flex items-center justify-between py-1.5 font-normal text-white/20 border border-grey-12 bg-grey-12 transition-all duration-300 focus:outline-none',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'bg-error border-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  intent,
  required,
  value,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & TextFieldVariants) => {
  return (
    <label className={cn(textFieldVariants({ intent }), className)}>
      <input
        className="w-full bg-transparent outline-none"
        required={required}
        value={value}
        {...args}
      />
      {required && !value && <DotStarIcon />}
    </label>
  );
};
