
"use client"

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function LocalSeoMatrix() {
  const areas = [
    "Rajpur Road", "Sahastradhara Road", "Jakhan", "Canal Road", "Old Rajpur", "Dalanwala", 
    "Vasant Vihar", "Indira Nagar", "Balliwala", "Ballupur", "Prem Nagar", "Clement Town", 
    "Patel Nagar", "GMS Road", "Chakrata Road", "Kaulagarh", "Kishan Nagar", "Nehru Colony"
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 text-center space-y-16">
         <div className="space-y-6">
            <Badge className="bg-primary text-white border-none px-6 py-1 uppercase font-bold tracking-widest text-[10px]">Local Authority</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter">Dehradun 360° <br/> <span className="text-accent italic">Coverage.</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Premium home tuition and coaching in every lane of the valley.</p>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {areas.map((area, i) => (
              <Link href={`/tuition-in/${area.toLowerCase().replace(' ', '-')}`} key={i}>
                 <div className="p-4 rounded-xl bg-white border border-primary/5 hover:border-accent hover:text-accent transition-all text-center group">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-accent">Tuition in</p>
                    <p className="text-xs font-extrabold uppercase mt-1">{area}</p>
                 </div>
              </Link>
            ))}
         </div>
      </div>
    </section>
  );
}
