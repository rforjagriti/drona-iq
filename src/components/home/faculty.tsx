
"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Star, GraduationCap, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function FacultySection() {
  const mentors = [
    {
      name: "Dr. Vikram Singh",
      role: "Chief Academic Architect",
      exp: "18+ Years",
      tags: ["IIT-K Alumnus", "OLQ Specialist"],
      img: getPlaceholderById('faculty-1'),
      desc: "Architect of the DIQ Neural Engine. Specializes in advanced cognitive mapping for board exams."
    },
    {
      name: "Maj. Gen. Aditya Rawat",
      role: "Defence Strategy Head",
      exp: "30+ Years Service",
      tags: ["NDA Veteran", "Leadership Mentor"],
      img: getPlaceholderById('faculty-2'),
      desc: "Oversees the military discipline and 15 OLQs tracking system for our elite NDA scholars."
    },
    {
      name: "Er. Amit Negi",
      role: "Senior Math Faculty",
      exp: "12+ Years",
      tags: ["Calculus Expert", "CBSE Board Specialist"],
      img: getPlaceholderById('faculty-3'),
      desc: "Has mentored 500+ students who scored 95%+ in Mathematics across Dehradun schools."
    },
    {
      name: "Mrs. Shalini Bisht",
      role: "Lead Physics Mentor",
      exp: "10+ Years",
      tags: ["Ex-Allen", "NEET Specialist"],
      img: getPlaceholderById('faculty-4'),
      desc: "Master of visual physics models. Ensures concept clarity through experimental learning."
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white border-b border-primary/5" id="faculty">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Architects</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Wall of <br/> <span className="text-accent italic">Intellect.</span></h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We don't hire 'teachers'. We hire subject-matter experts and military veterans to build leaders of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <Card key={i} className="border-none shadow-2xl rounded-[3rem] overflow-hidden group hover:-translate-y-4 transition-all duration-700 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={mentor.img} 
                  fill 
                  alt={mentor.name} 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint="professional teacher portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {mentor.tags.map((tag, j) => (
                      <Badge key={j} className="bg-accent text-white border-none text-[8px] uppercase font-black px-2 py-0.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h4 className="text-2xl font-extrabold uppercase text-primary group-hover:text-accent transition-colors">{mentor.name}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{mentor.role} • {mentor.exp}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">"{mentor.desc}"</p>
                <div className="flex gap-4 pt-2">
                  <Linkedin className="h-4 w-4 text-primary/30 hover:text-primary cursor-pointer transition-colors" />
                  <Youtube className="h-4 w-4 text-primary/30 hover:text-accent cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
