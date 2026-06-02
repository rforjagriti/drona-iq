
"use client"

import { use } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, GraduationCap, Star, MapPin, CheckCircle2, Phone, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function LocalityLandingPage({ params }: { params: Promise<{ locality: string }> }) {
  const { locality } = use(params);
  const formattedLocality = locality.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // LOCAL SEO BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dronaiq.com" },
      { "@type": "ListItem", "position": 2, "name": `Tuition in ${formattedLocality}`, "item": `https://dronaiq.com/tuition-in/${locality}` }
    ]
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      {/* SCHEMA SCRIPT FOR BREADCRUMBS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dynamic Hero */}
      <section className="navy-gradient py-24 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 space-y-6">
          <Badge className="bg-accent text-white border-none px-6 py-2 uppercase tracking-[0.2em] text-[10px] font-bold">Local Hub: {formattedLocality}</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight uppercase tracking-tighter">
            Best Tuition Classes <br/> in <span className="text-accent italic">{formattedLocality}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Looking for expert coaching near {formattedLocality}? Drona IQ offers premium home tuition and elite coaching for CBSE, ICSE, and NDA Prep specifically for students in this area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/academic-health-check">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-lg px-10 h-16 rounded-full uppercase tracking-widest font-bold shadow-2xl">Free AI Assessment</Button>
            </Link>
            <Link href="/admissions">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-headline text-lg px-10 h-16 rounded-full uppercase tracking-widest font-bold">Book Visit</Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Why this locality? */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold font-headline text-primary uppercase">Elite Education <br/> in {formattedLocality}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Students in {formattedLocality} now have access to Dehradun's most advanced learning system. We bring subject matter experts who understand the local school requirements (like Brightlands, SJA, etc.) right to your doorstep or our nearby hub.
            </p>
            <ul className="space-y-4">
              {[
                `Top-rated Home Tutors in ${formattedLocality}`,
                "Curriculum mapping for local Dehradun schools",
                "Regular center-visits for doubt clearing at Sahastradhara Road",
                "AI-monitored growth tracking for parents"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center font-bold text-primary">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2.5rem]">
            <CardContent className="p-12 text-center space-y-6">
              <MapPin className="h-16 w-16 text-accent mx-auto" />
              <h3 className="text-2xl font-bold font-headline text-primary uppercase">Need a Tutor in {formattedLocality}?</h3>
              <p className="text-muted-foreground">Get a customized study plan and a verified tutor recommendation within 2 hours.</p>
              <Link href="tel:+917878553385" className="block">
                <Button className="w-full h-16 bg-primary text-white font-headline uppercase tracking-widest text-lg font-bold rounded-xl shadow-xl hover:scale-105 transition-all">
                  <Phone className="mr-2 h-5 w-5" /> Call Local Counselor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Localized Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: GraduationCap, title: `CBSE/ICSE in ${formattedLocality}`, desc: "Expert foundation building for Class 5-10 and intensive coaching for Class 11-12 Boards with local school sync." },
            { icon: BrainCircuit, title: "NDA/JEE Prep Hub", desc: "Specialized competitive exam tracking for students in the Dehradun defense hub area." },
            { icon: Star, title: "1-on-1 Local Support", desc: `Personalized sessions in ${formattedLocality} tailored to your child's specific learning gaps.` }
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg p-10 text-center space-y-4 rounded-3xl bg-white hover:-translate-y-2 transition-transform">
              <div className="bg-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary"><item.icon className="h-8 w-8" /></div>
              <h4 className="text-xl font-bold font-headline text-primary uppercase tracking-tight">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-12 bg-primary text-white/40 text-center text-[10px] uppercase font-bold tracking-[0.3em]">
        Drona IQ Academy • {formattedLocality} Hub • Dehradun, Uttarakhand
      </footer>
    </div>
  );
}
