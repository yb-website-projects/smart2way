import type { Metadata } from 'next';

import {
  Benefits,
  ContactUs,
  Deliver,
  Hero,
  Solutions,
  WeComitted,
  WeSupport,
} from './components';

export const metadata: Metadata = {
  title: 'Smart2Way | Find the Right Broker for Your Trading Strategy',
  description:
    'Smart2Way helps traders discover the most suitable brokers worldwide. Save time, reduce costs, and access expert guidance to optimize your trading journey with our broker search solutions.',
  openGraph: {
    title: 'Smart2Way | Find the Right Broker for Your Trading Strategy',
    description:
      'Smart2Way helps traders discover the most suitable brokers worldwide. Save time, reduce costs, and access expert guidance to optimize your trading journey with our broker search solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart2Way | Find the Right Broker for Your Trading Strategy',
    description:
      'Smart2Way helps traders discover the most suitable brokers worldwide. Save time, reduce costs, and access expert guidance to optimize your trading journey with our broker search solutions.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WeComitted />
      <Solutions />
      <Benefits />
      <Deliver />
      <WeSupport />
      <ContactUs />
    </main>
  );
}
