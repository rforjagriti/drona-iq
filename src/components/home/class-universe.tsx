
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Trophy, Target, Zap, Rocket, BrainCircuit, GraduationCap, ChevronRight, Scale, Calculator, Landmark, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ClassUniverseSection() {
  const classes = [
    { 
      id: 'c5', grade: "Class 5", title: "The Curiosity Hub", 
      subjects: ["English Literature", "Mental Maths", "Environmental Science"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I: Developing logic and speech.",
      icon: Rocket
    },
    { 
      id: 'c8', grade: "Class 8", title: "Pre-Secondary Success", 
      subjects: ["Advanced Geometry", "Bio-Chemistry", "Logical Reasoning"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Pre-Boards Readiness: Identifying career alignment.",
      icon: Target
    },
    { 
      id: 'c10', grade: "Class 10", title: "The Board Excellence", 
      subjects: ["CBSE/ICSE Full Sync", "10 Year PYQ Drills", "Mock Simulation"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Excellence Stage: Securing 95%+ in Board Exams.",
      icon: GraduationCap
    },
    { 
      id: 'c11s', grade: "Class 11 Science", title: "The Engineering Blueprint", 
      subjects: ["Analytical Physics", "Organic Chemistry", "Higher Calculus"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "Career Launchpad: Synchronized JEE/NEET Foundation.",
      icon: BrainCircuit
    },
    { 
      id: 'c11c', grade: "Class 11 Commerce", title: "The Economic Elite", 
      subjects: ["Accountancy", "Business Analytics", "Micro-Economics"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Finance Roadmap: CA/CS/Management Foundation.",
      icon: Calculator
    },
    { 
      id: 'c11h', grade: "Class 11 Humanities", title: "Civil Services Foundation", 
      subjects: ["Global History", "Political Science", "Advanced Psychology"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "Visionary Path: UPSC and Public Policy Readiness.",
      icon: Landmark
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
              <div className="flex-1 space-y-12">
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="bg-primary p-3 rounded-2xl text-accent"><item.icon className="h-6 w-6" /></div>
                       <Badge className="bg-accent text-primary border-none uppercase text-[10px] font-bold px-4 py-1.5">{item.grade}</Badge>
                       <span className="text-primary/10 font-extrabold text-7xl">0{i+1}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">{item.title}</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Subjects Covered</h4>
                       <div className="flex flex-wrap gap-2">
                          {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase border-primary/20">{s}</Badge>)}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Outcome Roadmap</h4>
                       <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4">{item.roadmap}</p>
                    </div>
                 </div>
                 <div className="flex gap-4 pt-8">
                    <Link href="/admissions" className="flex-1">
                       <Button className="w-full h-20 bg-primary text-white font-extrabold uppercase text-[12px] tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-all">Enroll in {item.grade}</Button>
                    </Link>
                 </div>
              </div>
              <div className="flex-1 relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl group">
                 <Image src={item.image} fill alt={item.grade} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* 12th Classes (Visual Grid) */}
        <div className="mt-48 grid lg:grid-cols-3 gap-8">
            {[
              { g: "Class 12 Science", t: "Board + JEE/NEET Elite", i: Zap },
              { g: "Class 12 Commerce", t: "Accounts & Business Masterclass", i: Scale },
              { g: "Class 12 Humanities", t: "Civil Services Advanced", i: Globe }
            ].map((box, i) => (
              <Card key={i} className="border-none premium-shadow p-12 space-y-6 rounded-[3rem] text-center bg-muted/20">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto text-accent shadow-xl"><box.i className="h-10 w-10" /></div>
                <h4 className="text-3xl font-extrabold uppercase text-primary">{box.g}</h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{box.t}</p>
                <Link href="/admissions" className="block pt-4">
                  <Button className="w-full h-14 bg-accent text-white font-bold uppercase text-[10px] tracking-widest rounded-xl">Secure My 12th Result</Button>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
