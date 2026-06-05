
"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  ShieldCheck, 
  UserCheck, 
  Award, 
  Zap, 
  Trophy, 
  Medal, 
  Lock, 
  Dna, 
  Coins, 
  BrainCircuit,
  Heart,
  Quote,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function SocialProofSection() {
  const tutors = [
    { name: "Dr. Rahul Pratap Singh", exp: "18y Exp", sub: "Physics Veteran", img: getPlaceholderById('faculty-2') },
    { name: "Er. Lokesh Garg", exp: "17y Exp", sub: "Mathematics Wizard", img: getPlaceholderById('faculty-3') },
    { name: "Mrs. Suruchi Tiwari", exp: "8y Exp", sub: "Chemistry Expert", img: getPlaceholderById('faculty-4') }
  ];

  return (
    <section className="py-24 md:py-48 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
         {/* Verified Tutor Grid */}
         <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto">
            <Badge className="bg-primary text-accent border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Quality Assurance</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Dehradun's Elite <br/> <span className="text-accent italic">Mentor Pool.</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic">"Only 5% of applicants pass our 4-stage screening process (Subject, Pedagogy, Tech, Background). We hire academics, we build mentors."</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mb-48">
            {tutors.map((t, i) => (
              <Card key={i} className="border-none shadow-2xl rounded-[3rem] p-10 bg-white group hover:bg-primary hover:scale-105 transition-all duration-700">
                 <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="rounded-full w-full h-full overflow-hidden relative">
                      <Image src={t.img} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" alt={t.name} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-lg border-4 border-white z-10"><ShieldCheck className="h-4 w-4" /></div>
                 </div>
                 <div className="text-center space-y-2">
                    <h4 className="text-xl font-extrabold uppercase text-primary group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">{t.sub}</p>
                    <div className="flex items-center justify-center gap-1 text-yellow-500 py-2">
                        <Star className="fill-current h-3 w-3" />
                        <Star className="fill-current h-3 w-3" />
                        <Star className="fill-current h-3 w-3" />
                        <Star className="fill-current h-3 w-3" />
                        <Star className="fill-current h-3 w-3" />
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase group-hover:text-white/40">{t.exp} • 1000+ Hours Taught</p>
                 </div>
              </Card>
            ))}
         </div>

         {/* 10-Point Safety Protocol */}
         <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
            <div className="space-y-12">
               <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">The Safety <br/> <span className="text-accent italic">Fortress.</span></h3>
               <div className="grid gap-6">
                  {[
                    { t: "Police Verification", d: "Mandatory Aadhaar-Police background link for every home tutor.", i: Lock },
                    { t: "Psychometric Testing", d: "Evaluating temperament and teaching ethics before hiring.", i: BrainCircuit },
                    { t: "Safe-Home Loop", d: "Instant parent feedback system after every session via Success OS.", i: UserCheck }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                       <div className="bg-primary/5 p-4 rounded-2xl text-primary"><p.i className="h-6 w-6" /></div>
                       <div>
                          <p className="font-bold text-primary uppercase text-sm">{p.t}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl space-y-8 relative overflow-hidden">
               <ShieldCheck className="h-64 w-64 text-white/5 absolute -right-10 -bottom-10" />
               <Badge className="bg-accent text-primary border-none font-black uppercase text-[10px]">Priority Security</Badge>
               <h4 className="text-3xl font-extrabold uppercase">100% Peace of Mind for Parents.</h4>
               <p className="text-white/60 font-light italic leading-relaxed">"We understand your fear about safety in home tuition. That's why we don't just verify documents, we verify character. Every session is logged, every tutor is monitored."</p>
               <Button className="bg-accent text-primary font-black uppercase text-[10px] h-14 px-8 rounded-xl shadow-xl hover:scale-105 transition-all">Read Security Whitepaper</Button>
            </div>
         </div>

         {/* XP Leaderboard (Gamification Preview) */}
         <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-primary/5">
            <div className="text-center space-y-6 mb-16">
               <Badge className="bg-muted text-primary border-none uppercase font-bold text-[10px]">Scholar Leaderboard</Badge>
               <h3 className="text-4xl font-extrabold uppercase text-primary tracking-tighter leading-none">Gamified <br/> <span className="text-accent italic">Success.</span></h3>
               <p className="text-muted-foreground italic">"Students earn XP for homework submission, test scores, and disciplinary consistency. Rewarding the grind."</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
               {[
                 { name: "Scholar #2091", lv: "Lvl 42 Elite", xp: "12,400 XP", c: "text-accent" },
                 { name: "Scholar #4822", lv: "Lvl 38 Pro", xp: "9,800 XP", c: "text-primary" },
                 { name: "Scholar #1104", lv: "Lvl 35 Pro", xp: "8,200 XP", c: "text-primary" }
               ].map((s, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-muted/30 rounded-3xl group hover:bg-primary hover:text-white transition-all cursor-default">
                    <div className="flex items-center gap-6">
                       <span className={`text-2xl font-black ${s.c} group-hover:text-accent`}>0{i+1}</span>
                       <div>
                          <p className="font-black text-lg">{s.name}</p>
                          <p className="text-[10px] font-bold uppercase opacity-40">{s.lv}</p>
                       </div>
                    </div>
                    <Badge className="bg-primary/5 text-primary border border-primary/10 group-hover:bg-accent group-hover:text-primary font-black">{s.xp}</Badge>
                 </div>
               ))}
            </div>
            <div className="mt-12 text-center">
                <Link href="/student">
                    <Button variant="link" className="text-primary font-bold uppercase tracking-widest text-xs">View Full Leaderboard <Zap className="h-4 w-4 ml-2 text-accent" /></Button>
                </Link>
            </div>
         </div>
      </div>
    </section>
  );
}
