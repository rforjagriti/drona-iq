
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Trophy, Target, Zap, Rocket, BrainCircuit, GraduationCap, Calculator, Landmark, Globe, Microscope, Scale, History, Mic2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ClassUniverseSection() {
  const classes = [
    { 
      id: 'c5-7', grade: "Class 5 - 7", title: "The Curiosity Hub", 
      subjects: ["Mental Maths", "Public Speaking", "EVS Mastery"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I: Developing logic and speech.",
      icon: Rocket, desc: "Building the core foundation before secondary schooling begins."
    },
    { 
      id: 'c8-9', grade: "Class 8 - 9", title: "Pre-Secondary Power", 
      subjects: ["Advanced Geometry", "Bio-Chemistry", "Analytical Grammar"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Excellence Stage: Securing top rank in school boards.",
      icon: Target, desc: "Bridge program to prepare students for high-intensity board exams."
    },
    { 
      id: 'c10', grade: "Class 10", title: "Board Command Center", 
      subjects: ["Full Syllabus Sync", "10 Year PYQ Drills", "Mock Simulation"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Goal: 95%+ in Board Exams with AI support.",
      icon: GraduationCap, desc: "Specialized board prep with focused attention on weak concepts."
    },
    { 
      id: 'c11s', grade: "Class 11 Science", title: "The Engineering/Medical Core", 
      subjects: ["Analytical Physics", "Organic Chem", "Calculus"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "JEE/NEET Synchronized Foundation.",
      icon: Microscope, desc: "Intensive science coaching covering state & central boards."
    },
    { 
      id: 'c11c', grade: "Class 11 Commerce", title: "The Economic Elite", 
      subjects: ["Accountancy", "Macro Economics", "Business Studies"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Finance Path: CA/CS/CLAT Foundation.",
      icon: Calculator, desc: "Building corporate leaders of tomorrow with conceptual clarity."
    },
    { 
      id: 'c11h', grade: "Class 11 Humanities", title: "Visionary Leaders", 
      subjects: ["Global History", "Political Science", "Psychology"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "UPSC & Law Entrance Readiness.",
      icon: Landmark, desc: "Deep dive into society and history for civil services aspirants."
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white" id="class-universe">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Academic Pathways</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Grade-Wise <br/> <span className="text-accent italic">Excellence.</span></h2>
          <p className="text-xl text-muted-foreground font-light">Every student is a unique project. Select your child's grade to see their personalized DIQ Success Roadmap.</p>
        </div>

        <div className="space-y-48">
          {classes.map((item, i) => (
            <div key={item.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="bg-primary p-3 rounded-2xl text-accent"><item.icon className="h-6 w-6" /></div>
                       <Badge className="bg-accent text-primary border-none uppercase text-[10px] font-bold px-4 py-1.5">{item.grade}</Badge>
                       <span className="text-primary/10 font-extrabold text-7xl">0{i+1}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">{item.title}</h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Subjects</h4>
                       <div className="flex flex-wrap gap-2">
                          {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase border-primary/20">{s}</Badge>)}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Roadmap</h4>
                       <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4 italic">"{item.roadmap}"</p>
                    </div>
                 </div>
                 <div className="flex gap-4 pt-8">
                    <Link href="/admissions" className="flex-1">
                       <Button className="w-full h-20 bg-primary text-white font-extrabold uppercase text-[12px] tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-all">Enroll in {item.grade}</Button>
                    </Link>
                 </div>
              </div>
              <Card className="flex-1 relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl group border-none">
                 <Image src={item.image} fill alt={item.grade} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all" />
              </Card>
            </div>
          ))}
        </div>

        {/* 12th Classes Master Blocks */}
        <div className="mt-48 space-y-12">
           <h3 className="text-4xl font-extrabold uppercase text-center text-primary">Class 12th <span className="text-accent">Ultimate Mastery</span></h3>
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { g: "Class 12 Science", t: "Board + JEE/NEET Elite", i: Microscope, c: "Science" },
                { g: "Class 12 Commerce", t: "Accounts Masterclass", i: Scale, c: "Commerce" },
                { g: "Class 12 Humanities", t: "UPSC Gateway Prep", i: Globe, c: "Arts" }
              ].map((box, i) => (
                <Card key={i} className="border-none shadow-2xl p-12 space-y-6 rounded-[3.5rem] text-center bg-muted/20 hover:bg-primary hover:text-white transition-all duration-500 group">
                  <div className="bg-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-accent shadow-xl group-hover:bg-accent group-hover:text-primary transition-colors"><box.i className="h-10 w-10" /></div>
                  <h4 className="text-3xl font-extrabold uppercase">{box.g}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">{box.t}</p>
                  <Link href="/admissions" className="block pt-4">
                    <Button className="w-full h-14 bg-accent text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl group-hover:bg-white group-hover:text-primary">Apply for {box.c} Stream</Button>
                  </Link>
                </Card>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
