
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drona IQ | Best Tuition Classes & Home Tutors in Dehradun',
  description: 'Elite academic ecosystem for Classes 5-12 (CBSE, ICSE). AI-powered diagnostics, expert home tuition, and real-time parent tracking in Dehradun.',
  keywords: 'Best Tuition Classes in Dehradun, Home Tuition in Dehradun, CBSE Tuition Dehradun, Class 10 Tuition Dehradun, Class 12 Tuition Dehradun, Best Home Tutor Dehradun, Personal Tuition in Dehradun',
  openGraph: {
    title: 'Drona IQ Student Success Ecosystem',
    description: 'Transforming potential into performance with Dehradun\'s smartest study hub.',
    type: 'website',
  }
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
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rajpur Road",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "postalCode": "248001",
                "addressCountry": "IN"
              },
              "telephone": "+91 99999 00000",
              "url": "https://dronaiq.com"
            })
          }}
        />
      </head>
      <body className="font-body antialiased relative">
        {children}
        
        {/* Sticky Lead Generation Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <Link 
            href="https://wa.me/919999900000" 
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Link>
          <Link 
            href="tel:+919999900000" 
            className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            title="Call Counselor"
          >
            <Phone className="h-6 w-6" />
          </Link>
        </div>

        <Toaster />
      </body>
    </html>
  );
}
