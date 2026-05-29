
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'Drona IQ | Unified Education Operating System Dehradun',
  description: 'The strongest student success ecosystem in North India. AI-powered diagnostics, elite home tuition, and integrated management for students, parents, and tutors.',
  keywords: 'Education Ecosystem Dehradun, Best Tuition Dehradun, AI Study Planner, NDA Foundation Dehradun, Home Tuition Network',
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
      <body className="font-body antialiased relative">
        <FirebaseClientProvider>
          {children}
          
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <Link 
              href="https://wa.me/919999900000" 
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
              title="WhatsApp Support"
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
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
