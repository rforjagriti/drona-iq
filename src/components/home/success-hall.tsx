
"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { getPlaceholderById, getHintById } from '@/lib/placeholder-images';

export function SuccessHallSection() {
  const stories = [
    {
      student: "Ishita Negi",
      score: "98.2%",
      jump: "from 74%",
      exam: "CBSE Class 10",
      id: "student-1"
    },
    {
      student: "Aryan Rawat",
      score: "AIR 412",
      jump: "NDA Qualifier",
      exam: "NDA Foundation",
      id: "student-2"
    },
    {
      student: "Sanya Gupta",
      score: "99.4 Percentile",
      jump: "Physics Topper",
      exam: "JEE Mains Core",
      id: "student-3"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-muted/20 overflow-hidden" id="results">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 max-w-7xl mx-auto">
          <div className="space-y-6 text-left max-w-2xl">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Hall of Excellence</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter leading-none">Proven <br/> <span className="text-accent italic">Outcomes.</span></h2>
          </div>
          <p className="text-lg text-muted-foreground font-light max-sm italic">
            "Results are not accidents. They are the calculated output of the Drona IQ Success OS."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {stories.map((story, i) => (
            <Card key={i} className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-white group hover:scale-[1.02] transition-all duration-700">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={getPlaceholderById(story.id)} 
                  fill 
                  alt={story.student} 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint={getHintById(story.id)}
                  unoptimized
                />
                <div className="absolute top-8 right-8 bg-accent text-white h-16 w-16 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="text-[10px] font-black leading-none uppercase">Score</span>
                  <span className="text-xs font-black">{story.score}</span>
                </div>
              </div>
              <CardContent className="p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-3xl font-extrabold text-primary">{story.student}</h4>
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary font-bold uppercase text-[9px] px-3">{story.exam}</Badge>
                </div>
                <div className="bg-primary/5 p-6 rounded-3xl border border-primary/5 flex items-center justify-between group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase opacity-60">Achievement Delta</p>
                    <p className="text-lg font-black">{story.jump}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
