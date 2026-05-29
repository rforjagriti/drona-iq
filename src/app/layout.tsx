import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'Drona IQ | Smarter Learning. Stronger Future.',
  description: 'Dehradun’s Smart Student Success Ecosystem. Combining offline coaching, home tuition, and AI-driven academic tracking.',
  keywords: 'Drona IQ, Best Tuition Dehradun, AI Study Planner, NDA Foundation Dehradun, Home Tuition Network Dehradun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative selection:bg-accent selection:text-white">
        <FirebaseClientProvider>
          {children}
          
          {/* Global CTAs */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            <Link 
              href="https://wa.me/917878553385" 
              target="_blank"
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
              title="WhatsApp for Quick Demo"
            >
              <MessageCircle className="h-7 w-7" />
            </Link>
            <Link 
              href="tel:+917878553385" 
              className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
              title="Call Academic Counselor"
            >
              <Phone className="h-7 w-7 text-accent" />
            </Link>
          </div>

          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
