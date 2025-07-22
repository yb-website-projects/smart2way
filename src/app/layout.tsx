import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from 'sonner';

import { cn } from '@/shared/lib/utils/styles';

import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-97NR4S7NVN" />
      </head>
      <body className={cn(satoshi.className, 'antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
