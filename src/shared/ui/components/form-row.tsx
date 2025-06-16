'use client';

import type { ReactNode } from 'react';

export const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex items-center gap-4 max-md:flex-col">
    {children}
  </section>
);
