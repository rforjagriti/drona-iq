
"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Fingerprint, TrendingUp, ShieldAlert, ChevronRight, Zap, Target, Bell, Smartphone, Activity } from 'lucide-react';
import Link from 'next/link';

export function TechSuiteSection() {
  const tech = [
    { 
      t: "Digital Academic Twin", 
      d: "We create a virtual model of your child's cognitive strengths to predict performance and prevent failures.", 
      i: Fingerprint,
      feat: ["Neural Mapping", "Memory Retention Track"]
    },
    { 
      t: "Success Probability Simulator", 
      d: "Advanced algorithm that shows how DIQ interventions shift success probability from 40% to 98%.", 
      i: TrendingUp,
      feat: ["Predictive Analytics", "Grade Forecaster"]
    },
    { 
      t: "Academic Risk Detector", 
      d: "Real-time alerts to parents when conceptual gaps are detected, before they become board-exam failures.", 
      i: ShieldAlert,
      feat: ["Early Warning System", "Gap Diagnosis"]
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#05070a] text-white">
      <div className="container mx-auto px-4">
         <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto">
            <Badge className="bg-accent text-primary border-none uppercase font-extrabold tracking-widest text-[10px]">Intelligence Hub v7.4</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Success <br/> <span className="text-accent italic">Engineered.</span></h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">Most tuition centers use paper and pens. We use a proprietary tech stack to architect student outcomes.</p>
         </div>

         <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {tech.map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-12 rounded-[3rem] space-y-8 group hover:bg-white hover:text-primary transition-all duration-700">
                 <div className="p-6 w-fit rounded-3xl bg-accent/10 group-hover:bg-accent group-hover:text-white transition-colors">
                    <item.i className="h-12 w-12" />
                 </div>
                 <h4 className="text-3xl font-extrabold uppercase tracking-tight">{item.t}</h4>
                 <p className="text-white/40 group-hover:text-muted-foreground font-light leading-relaxed">{item.d}</p>
                 <div className="space-y-3">
                   {item.feat.map((f, j) => (
                     <div key={j} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                       <Zap className="h-3 w-3 text-accent" /> {f}
                     </div>
                   ))}
                 </div>
                 <Link href="/academic-health-check" className="block pt-4">
                    <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-xs p-0 group-hover:text-primary underline">Open Lab Simulator <ChevronRight className="ml-1 h-3 w-3" /></Button>
                 </Link>
              </Card>
            ))}
         </div>

         {/* Success Delta Section */}
         <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 p-12 rounded-[4rem] border border-white/10">
            <div className="space-y-8">
               <Badge className="bg-primary text-accent border-none uppercase font-bold text-[10px]">The Success Delta</Badge>
               <h3 className="text-4xl font-extrabold uppercase">Measuring the <span className="text-accent">Invisible Gap.</span></h3>
               <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-accent">
                    <p className="font-bold text-lg mb-2">Before Drona IQ: 42% Mastery</p>
                    <p className="text-sm text-white/40">Passive learning, high forgetting rate, travel fatigue.</p>
                  </div>
                  <div className="p-6 bg-accent text-primary rounded-2xl border-l-4 border-white shadow-2xl scale-105 transform">
                    <p className="font-bold text-lg mb-2 text-primary">After Drona IQ: 98% Mastery</p>
                    <p className="text-sm text-primary/70 font-bold">Active recall, AI tracking, ZERO travel waste.</p>
                  </div>
               </div>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-accent/20 to-transparent rounded-full flex items-center justify-center border border-white/5 p-12">
               <Activity className="h-full w-full text-accent opacity-20 absolute animate-pulse" />
               <div className="text-center space-y-4 relative z-10">
                  <p className="text-8xl font-black text-accent">+56%</p>
                  <p className="font-headline font-bold uppercase tracking-[0.3em] text-xs">Efficiency ROI</p>
               </div>
            </div>
         </div>

         {/* Transparency Protocol (Mobile Preview) */}
         <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="w-[300px] h-[600px] bg-primary border-[8px] border-white/10 rounded-[3rem] shadow-2xl mx-auto overflow-hidden relative">
                  <div className="bg-white/10 p-6 space-y-6">
                     <div className="flex justify-between items-center text-accent">
                        <Smartphone className="h-6 w-6" />
                        <span className="text-[10px] font-black uppercase">DIQ Parent App</span>
                     </div>
                     <div className="space-y-4">
                        {[
                           { t: "Physics Mastery", v: "88%", c: "bg-green-500" },
                           { t: "Homework Streak", v: "14 Days", c: "bg-accent" },
                           { t: "Next Test", v: "Sun, 4PM", c: "bg-blue-500" }
                        ].map((m, i) => (
                           <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                              <p className="text-[10px] uppercase font-bold opacity-40 mb-1">{m.t}</p>
                              <p className="text-xl font-black">{m.v}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="absolute bottom-10 inset-x-0 px-6">
                     <Button className="w-full bg-accent text-primary font-black uppercase text-[10px] rounded-xl h-12">View Detailed Analytics</Button>
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 bg-accent text-primary p-6 rounded-[2rem] shadow-2xl rotate-12 hidden lg:block">
                  <Bell className="h-8 w-8 mb-2" />
                  <p className="font-bold text-xs uppercase leading-tight">Instant <br/> Alerts</p>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <h3 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter">The Transparency <br/> <span className="text-accent italic">Protocol.</span></h3>
               <p className="text-xl text-white/40 font-light leading-relaxed">No more "How was class?" questions. See real-time data on your phone. Every topic, every score, every gap—visible instantly.</p>
               <ul className="space-y-4">
                  {["Daily Attendance Sync", "Concept Mastery Logs", "Tutor feedback loop", "Mock Rank Index"].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-widest">
                       <Target className="h-5 w-5 text-accent" /> {item}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
    </section>
  );
}
