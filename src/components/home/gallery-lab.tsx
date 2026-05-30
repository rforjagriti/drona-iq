
"use client"

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function GalleryLabSection() {
  const images = [
    { id: "1", span: "lg:col-span-2 lg:row-span-2", hint: "high tech classroom" },
    { id: "2", span: "col-span-1", hint: "focused student portrait" },
    { id: "3", span: "col-span-1", hint: "teacher explaining physics" },
    { id: "4", span: "lg:col-span-1 lg:row-span-2", hint: "student in uniform" },
    { id: "5", span: "col-span-1", hint: "modern campus exterior" },
    { id: "6", span: "col-span-1", hint: "group study session" }
  ];

  return (
    <section className="py-24 md:py-48 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Lab</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Experience <br/> <span className="text-accent italic">The Hub.</span></h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Take a visual tour of Dehradun's most advanced learning environment at Om Tower. Built for focus, discipline, and high-performance outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative rounded-[3rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-700 bg-muted ${img.span}`}
            >
              <Image 
                src={`https://picsum.photos/seed/drona_gal_${i+10}/800/800`}
                fill
                alt={`Drona IQ Gallery ${i+1}`}
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                data-ai-hint={img.hint}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Badge className="bg-white text-primary border-none font-black uppercase text-[8px] tracking-[0.3em] px-4 py-1.5 shadow-2xl">Om Tower Hub</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
