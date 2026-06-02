import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { FloatingActions } from '@/components/floating-actions';

// ENTERPRISE SEO CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL('https://dronaiq.com'),
  title: {
    default: 'Drona IQ | Dehradun’s #1 Tuition & Home Tuition Hub',
    template: '%s | Drona IQ Dehradun'
  },
  description: 'Drona IQ is Dehradun’s premier Student Success Ecosystem. Expert offline coaching & verified home tuition for CBSE, ICSE, and NDA Foundation. Military discipline meets AI analytics.',
  keywords: ['Best Tuition in Dehradun', 'Home Tuition in Dehradun', 'Tuition Center Sahastradhara Road', 'NDA Foundation Coaching Dehradun', 'CBSE Tuition Dehradun', 'Maths Home Tutor Dehradun', 'Droneshwar Defence Academy'],
  authors: [{ name: 'Drona IQ Team' }],
  creator: 'Drona IQ Academy',
  publisher: 'Drona IQ Academy',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-placeholder',
    yandex: 'yandex-verification-placeholder',
    me: 'me-verification-placeholder',
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dronaiq.com',
    siteName: 'Drona IQ Academy',
    title: 'Drona IQ | Student Success OS Dehradun',
    description: 'Transforming potential into performance with Dehradun’s most advanced tuition network.',
    images: [
      {
        url: '/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Drona IQ Excellence',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drona IQ | Smarter Learning Dehradun',
    description: 'Verified Home Tutors & Elite Coaching Hub in Dehradun.',
    images: ['/images/og-main.jpg'],
    creator: '@dronaiq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA MARKUP DATA
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Drona IQ Academy",
    "url": "https://dronaiq.com",
    "logo": "https://dronaiq.com/logo.png",
    "sameAs": [
      "https://droneshwardefenceacademy.com",
      "https://facebook.com/dronaiq",
      "https://instagram.com/dronaiq",
      "https://linkedin.com/company/dronaiq"
    ],
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
      "contactType": "Admissions",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Drona IQ Dehradun Hub",
    "image": "https://dronaiq.com/images/campus-main.jpg",
    "telePhone": "+917878553385",
    "priceRange": "$$",
    "address": organizationSchema.address,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3444",
      "longitude": "78.0772"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        
        {/* GLOBAL SCHEMA SCRIPTS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* GOOGLE ANALYTICS (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GA_MEASUREMENT_ID_PLACEHOLDER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GA_MEASUREMENT_ID_PLACEHOLDER', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* MICROSOFT CLARITY (HEATMAPS) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_ID_PLACEHOLDER");
            `,
          }}
        />
      </head>
      <body className="font-body antialiased relative selection:bg-accent selection:text-white">
        <FirebaseClientProvider>
          {children}
          <FloatingActions />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
