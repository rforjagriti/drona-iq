
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Rocket, 
  GraduationCap, 
  Calculator, 
  Landmark, 
  Globe, 
  Microscope, 
  Scale, 
  Atom,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ClassUniverseSection() {
  const classes = [
    { 
      id: 'c5-7', grade: "Classes 5 - 7", title: "The Curiosity Hub", 
      subjects: ["Mental Maths", "Vedic Logic", "Public Speaking", "EVS Mastery"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I: Developing logic and speech agility.",
      icon: Rocket, desc: "Building the core foundation before secondary schooling begins. We focus on cognitive agility and interest development via active recall.",
      points: ["Vedic Maths Integration", "Confidence Building Modules", "Weekly IQ Assessment"]
    },
    { 
      id: 'c8-9', grade: "Classes 8 - 9", title: "Pre-Secondary Power", 
      subjects: ["Advanced Geometry", "Bio-Chemistry", "Analytical Grammar", "Physics Foundation"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Excellence Stage: Securing top rank in school boards and NTSE prep.",
      icon: Target, desc: "Bridge program to prepare students for high-intensity board exams and competitive mindset with 1-on-1 tracking.",
      points: ["NTSE & Olympiad Path", "Conceptual Depth Mapping", "Zero-Rote Learning"]
    },
    { 
      id: 'c10', grade: "Class 10 Boards", title: "Board Command Center", 
      subjects: ["Full Syllabus Sync", "10 Year PYQ Drills", "Mock Simulation", "Speed Drills"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Goal: 95%+ in Board Exams with AI-driven gap detection.",
      icon: GraduationCap, desc: "Specialized board prep with focused attention on weak concepts. Our digital twin tracks every single mark lost in mocks.",
      points: ["CBSE/ICSE Pattern Mastery", "Timed Practice Sessions", "Parent Progress Sync"]
    },
    { 
      id: 'c11s', grade: "Class 11-12 Science", title: "JEE & NEET Core", 
      subjects: ["Analytical Physics", "Organic Chem", "Calculus", "Biology Depth"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "IIT/NEET Synchronized Foundation. School + Entrance mastery.",
      icon: Atom, desc: "Intensive science coaching covering state & central boards with high-level conceptual clarity and mock rank indices.",
      points: ["Entrance Focused Pedagogy", "Numerical Intensive Lab", "Formula Memory Hooks"]
    },
    { 
      id: 'c11c', grade: "Class 11-12 Commerce", title: "Economic Elite", 
      subjects: ["Accountancy", "Macro Economics", "Business Studies", "Applied Math"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Finance Path: CA/CS Foundation and CLAT Readiness.",
      icon: Calculator, desc: "Building corporate leaders of tomorrow. We teach economics via real-world case studies and logical accounting.",
      points: ["CA-Foundation Prep", "Case Study Analysis", "Mock Audit Tests"]
    },
    { 
      id: 'c11h', grade: "Class 11-12 Humanities", title: "Visionary Leaders", 
      subjects: ["Global History", "Political Science", "Psychology", "Geography"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "UPSC Gateway & Law Entrance Readiness. Critical thinking focus.",
      icon: Landmark, desc: "Deep dive into society, law, and history for elite civil services and humanities aspirants in Dehradun.",
      points: ["UPSC Foundation", "CLAT Mock Series", "Critical Thinking Labs"]
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white" id="class-universe">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Academic Pathways</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Grade-Wise <br/> <span className="text-accent italic">Excellence.</span></h2>
          <p className="text-xl text-muted-foreground font-light italic">"Every student is a unique project. Select your child's grade to see their personalized DIQ Success Roadmap."</p>
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
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Expert Focus</h4>
                       <div className="flex flex-wrap gap-2">
                          {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase border-primary/20">{s}</Badge>)}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Roadmap</h4>
                       <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4 italic">"{item.roadmap}"</p>
                    </div>
                 </div>

                 <div className="bg-muted/30 p-6 rounded-3xl space-y-4 border border-primary/5">
                    {item.points.map((p, k) => (
                      <div key={k} className="flex gap-3 items-center text-sm font-bold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-accent" /> {p}
                      </div>
                    ))}
                 </div>

                 <div className="flex gap-4 pt-8">
                    <Link href="/admissions" className="flex-1">
                       <Button className="w-full h-20 bg-primary text-white font-extrabold uppercase text-[12px] tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-all">
                          Apply for {item.grade} <ChevronRight className="ml-2 h-4 w-4 text-accent" />
                       </Button>
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

        {/* NDA Specialized Block - The Elite Frontier */}
        <div className="mt-48 bg-primary text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
           </div>
           <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-8">
                 <Badge className="bg-accent text-primary border-none uppercase font-black tracking-widest text-[10px]">Elite Defense Track</Badge>
                 <h3 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none">NDA Foundation <br/> <span className="text-accent italic">Success Hub.</span></h3>
                 <p className="text-xl text-white/60 font-light leading-relaxed">
                    Powered by Droneshwar Defence Academy. We prepare students for NDA while they complete Class 11-12 Boards.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <Zap className="h-8 w-8 text-accent mb-4" />
                       <p className="font-bold uppercase text-xs">Officer Faculty</p>
                       <p className="text-white/40 text-[10px] mt-1">Mentorship by ex-defense personnel.</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <Target className="h-8 w-8 text-accent mb-4" />
                       <p className="font-bold uppercase text-xs">GAT & SSB Prep</p>
                       <p className="text-white/40 text-[10px] mt-1">Holistic preparation for defense entries.</p>
                    </div>
                 </div>
              </div>
              <div className="space-y-6">
                 <Card className="bg-white/10 border-white/20 p-10 rounded-[3rem] backdrop-blur-xl">
                    <h4 className="text-2xl font-bold uppercase mb-6">Course Outcomes:</h4>
                    <ul className="space-y-4">
                       {["92% Selection in Mock GAT", "SSB Interview Conditioning", "Discipline & Time Mgmt", "Officer Like Qualities Tracking"].map((txt, i) => (
                         <li key={i} className="flex gap-4 items-center text-sm font-bold tracking-widest">
                            <CheckCircle2 className="h-5 w-5 text-accent" /> {txt}
                         </li>
                       ))}
                    </ul>
                    <Link href="/admissions" className="block mt-10">
                       <Button className="w-full h-16 bg-accent text-primary font-black uppercase text-[10px] rounded-xl hover:scale-105 transition-all">Join NDA Elite Batch</Button>
                    </Link>
                 </Card>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
