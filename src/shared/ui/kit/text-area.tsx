'use client';

import type { TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const textAreaVariants = cva(
  'text-base rounded-[4px] max-lg:w-full px-4 w-[590px] h-[120px] flex items-center justify-between py-1.5 font-normal text-white/20 border border-grey-12 bg-grey-12 transition-all duration-300 focus:outline-none',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  intent,
  required,
  value,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaVariants) => {
  return (
    <label className={cn(textAreaVariants({ intent }), className)}>
      <textarea
        className="h-full w-full resize-none bg-transparent outline-none"
        required={required}
        value={value}
        {...args}
      />
    </label>
  );
};
