
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { FirebaseClientProvider } from '@/firebase';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'Drona IQ | Best Tuition & Home Tuition in Dehradun | Student Success OS',
  description: 'Drona IQ is Dehradun’s #1 Smart Student Success Ecosystem. We provide premium offline coaching and verified home tuition for CBSE, ICSE, Class 5-12, and NDA Foundation. Combining military discipline with AI-driven academic tracking.',
  keywords: 'Best Tuition in Dehradun, Home Tuition in Dehradun, Tuition Center Sahastradhara Road, Home Tutor near me, NDA Foundation Coaching Dehradun, CBSE Tuition Dehradun, ICSE Tuition Dehradun, Maths Home Tutor Dehradun, Science Tuition Dehradun',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Drona IQ Academy",
              "url": "https://dronaiq.com",
              "logo": "https://dronaiq.com/logo.png",
              "description": "Dehradun's premier tuition and home tuition ecosystem specializing in CBSE, ICSE and NDA Foundation.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd Floor, Om Tower, Sahastradhara Road, Near IT Park",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "postalCode": "248001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7878553385",
                "contactType": "Admissions"
              },
              "sameAs": [
                "https://droneshwardefenceacademy.com"
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased relative selection:bg-accent selection:text-white">
        <FirebaseClientProvider>
          {children}
          
          {/* Global Floating CTAs - Masterpiece Trio */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[999]">
            <ScrollToTop />
            <Link 
              href="https://wa.me/917878553385" 
              target="_blank"
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce flex items-center justify-center w-14 h-14"
              title="WhatsApp for Quick Demo"
            >
              <MessageCircle className="h-7 w-7" />
            </Link>
            <Link 
              href="tel:+917878553385" 
              className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 border-2 border-accent/20"
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
