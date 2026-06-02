'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { ScrollToTop } from '@/components/scroll-to-top';

/**
 * Floating actions component handles client-side tracking and interactivity.
 */
export function FloatingActions() {
  const handleWaClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.gtag) {
      // @ts-ignore
      window.gtag('event', 'conversion', { send_to: 'WA_CLICK' });
    }
  };

  const handlePhoneClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.gtag) {
      // @ts-ignore
      window.gtag('event', 'conversion', { send_to: 'PHONE_CLICK' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[999]">
      <ScrollToTop />
      <Link
        href="https://wa.me/917878553385"
        target="_blank"
        onClick={handleWaClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce flex items-center justify-center w-14 h-14"
        title="WhatsApp for Quick Demo"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
      <Link
        href="tel:+917878553385"
        onClick={handlePhoneClick}
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 border-2 border-accent/20"
        title="Call Academic Counselor"
      >
        <Phone className="h-7 w-7 text-accent" />
      </Link>
    </div>
  );
}
