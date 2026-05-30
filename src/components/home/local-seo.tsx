
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, ArrowRight, Target } from 'lucide-react';

export function LocalSeoMatrix() {
  const areas = [
    "Rajpur Road", "Sahastradhara Road", "Jakhan", "Canal Road", "Old Rajpur", "Dalanwala", 
    "Vasant Vihar", "Indira Nagar", "Balliwala", "Ballupur", "Prem Nagar", "Clement Town", 
    "Patel Nagar", "GMS Road", "Chakrata Road", "Kaulagarh", "Kishan Nagar", "Nehru Colony",
    "Race Course", "Vikas Nagar", "Selaqui", "Doon IT Park", "Aman Vihar", "Nanda Ki Chowki"
  ];

  return (
    <section className="py-24 md:py-48 bg-muted/20" id="local-seo">
      <div className="container mx-auto px-4 text-center space-y-20">
         <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Local Dominance</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Dehradun 360° <br/> <span className="text-accent italic">Authority.</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We own the valley. From elite home tutors to high-tech coaching hubs, Drona IQ is Dehradun’s most distributed student success network.
            </p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-left">
            {areas.map((area, i) => (
              <Link href={`/tuition-in/${area.toLowerCase().replace(/\s+/g, '-')}`} key={i}>
                 <div className="p-8 rounded-[2rem] bg-white border border-primary/5 hover:border-accent hover:shadow-2xl transition-all group relative overflow-hidden h-full">
                    <MapPin className="h-10 w-10 text-accent/10 absolute -right-2 -bottom-2 group-hover:scale-150 transition-transform" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/40 group-hover:text-accent">Tuition in</p>
                    <p className="text-sm font-extrabold uppercase mt-2 text-primary">{area}</p>
                    <div className="mt-4 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                 </div>
              </Link>
            ))}
         </div>

         <div className="bg-primary text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
               <h3 className="text-4xl font-extrabold font-headline uppercase leading-tight tracking-tighter">Your Locality <br/> Is Our Hub.</h3>
               <p className="text-white/60 font-light leading-relaxed">
                 Don't waste your child's peak focus hours in traffic. We bring the elite mentorship of Rajpur Road directly to your doorstep in Jakhan or Vikas Nagar.
               </p>
               <Link href="/home-tuition">
                 <Button className="h-14 bg-accent text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl px-10">Find a Tutor Near Me</Button>
               </Link>
            </div>
            <div className="hidden lg:block relative h-full min-h-[300px]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-20"></div>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { l: "Tutor Proximity", v: "15 Mins" },
                    { l: "Verified Profiles", v: "500+" },
                    { l: "Security Rating", v: "Elite" },
                    { l: "Success Rate", v: "92%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                      <p className="text-4xl font-extrabold text-accent">{stat.v}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.l}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
