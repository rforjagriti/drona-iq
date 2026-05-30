
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ClassUniverseSection() {
  const classes = [
    { 
      id: 'c5', grade: "Class 5", title: "The Curiosity Hub", 
      subjects: ["English Literature", "Mental Maths", "Science"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I"
    },
    { 
      id: 'c8', grade: "Class 8", title: "The Board Readiness", 
      subjects: ["Geometry", "Bio-Chem", "Logical Reasoning"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Pre-Secondary Success"
    },
    { 
      id: 'c10', grade: "Class 10", title: "The Board Excellence", 
      subjects: ["Boards Full Sync", "PYQ Drills", "Mocks"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Excellence Stage"
    },
    { 
      id: 'c11s', grade: "Class 11 Science", title: "The Engineering Blueprint", 
      subjects: ["Physics", "Organic Chem", "JEE/NEET"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "Career Launchpad"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-32">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Academic Pathways</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter">Grade-Wise <br/> <span className="text-accent italic">Excellence.</span></h2>
        </div>

        <div className="space-y-48">
          {classes.map((item, i) => (
            <div key={item.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-12">
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <Badge className="bg-accent text-primary border-none uppercase text-[10px] font-bold px-4 py-1.5">{item.grade}</Badge>
                       <span className="text-primary/20 font-extrabold text-5xl">0{i+1}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">{item.title}</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Subjects</h4>
                       <div className="flex flex-wrap gap-2">
                          {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase">{s}</Badge>)}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Roadmap</h4>
                       <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4">{item.roadmap}</p>
                    </div>
                 </div>
                 <div className="flex gap-4 pt-8">
                    <Link href="/admissions" className="flex-1">
                       <Button className="w-full h-16 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl">Enroll Now</Button>
                    </Link>
                 </div>
              </div>
              <div className="flex-1 relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-muted">
                 <Image src={item.image} fill alt={item.grade} className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
