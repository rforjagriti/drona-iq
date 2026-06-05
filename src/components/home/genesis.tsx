
"use client"

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function GenesisSection() {
  return (
    <section className="py-24 md:py-48 bg-white overflow-hidden border-b border-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px] opacity-30"></div>
               <Image 
                 src={getPlaceholderById('founder-photo')} 
                 width={800} 
                 height={1000} 
                 alt="Founder Drona IQ" 
                 className="rounded-[4rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" 
                 data-ai-hint="founder portrait"
               />
            </div>
            <div className="space-y-12">
               <div className="space-y-6">
                  <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">The Genesis</Badge>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">A Mission <br/> <span className="text-accent italic">For Every Child.</span></h2>
               </div>
               <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>"Drona IQ wasn't built to be another tuition center. It was built out of a realization that students in Dehradun are trapped in a system of average expectations."</p>
                  <p>"We saw parents spending lakhs on coaching 'factories' where their child was just a roll number. We saw students losing their confidence because no one identified their specific learning gaps."</p>
                  <p className="font-bold text-primary">"At Drona IQ, we promise one thing: We will treat your child's success as our only milestone. Our IR-driven logical framework ensures no concept is left behind."</p>
               </div>
               <div className="pt-6">
                  <p className="font-headline font-extrabold text-primary uppercase tracking-widest text-xl">Dr. Amit Negi</p>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest">Founder & Chief Academic Architect</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
