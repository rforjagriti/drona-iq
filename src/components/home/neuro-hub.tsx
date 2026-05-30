
"use client"

import { Badge } from '@/components/ui/badge';
import { Brain, Activity, Target, Timer, Zap, BookOpen, Clock, TrendingUp, ShieldCheck, Microscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function NeuroHubSection() {
  const pillars = [
    { t: "Active Recall Hub", d: "Strengthening synaptic connections by testing the brain before the lecture begins.", i: Brain },
    { t: "Spaced Repetition", d: "Calculated review intervals that stop the natural forgetting curve permanently.", i: Timer },
    { t: "Focus State Sync", d: "Optimizing the student's pre-frontal cortex through environment discipline.", i: Target },
    { t: "Neural Gap Analysis", d: "AI-detection of precisely which concept fiber is missing in the student's logic.", i: Activity }
  ];

  return (
    <section className="py-24 md:py-48 bg-white text-primary overflow-hidden border-y border-primary/5">
      <div className="container mx-auto px-4">
         <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
            <Badge className="bg-primary text-accent border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Cognitive Engineering</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">Most tuition centers in Dehradun rely on repetition. We rely on brain science. We don't just teach chapters; we optimize neural pathways.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-32">
            {pillars.map((item, i) => (
              <div key={i} className="p-10 bg-muted/20 border border-primary/5 rounded-[3rem] space-y-6 hover:bg-primary hover:text-white transition-all duration-700 group">
                <div className="bg-primary/5 p-4 w-fit rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
                  <item.i className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold uppercase text-primary group-hover:text-accent transition-colors">{item.t}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-white/40 transition-colors font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>

         {/* ROI & Travel Fatigue Section */}
         <div className="bg-primary text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <Microscope className="absolute -right-20 -bottom-20 h-96 w-96 text-accent opacity-5" />
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
               <div className="space-y-8">
                  <Badge className="bg-accent text-primary border-none uppercase font-bold text-[10px]">Efficiency Analytics</Badge>
                  <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Zero-Commute <br/> <span className="text-accent">ROI Formula.</span></h3>
                  <p className="text-xl text-white/60 font-light italic">"A Dehradun student spends 600+ hours yearly in traffic on Sahastradhara Road or Rajpur Road. We convert that fatigue into peak performance."</p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-1">
                        <p className="text-3xl font-black text-accent">600h</p>
                        <p className="text-[10px] uppercase font-bold opacity-40">Yearly Travel Waste</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-3xl font-black text-green-400">92%</p>
                        <p className="text-[10px] uppercase font-bold opacity-40">Retention Increase</p>
                     </div>
                  </div>
               </div>
               <div className="grid gap-4">
                  {[
                    { l: "Travel Fatigue", v: "DESTROYED", i: ShieldCheck },
                    { l: "Self-Study Time", v: "DOUBLED", i: Zap },
                    { l: "Peak Focus Energy", v: "PRESERVED", i: Activity }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <div className="flex items-center gap-4">
                          <p.i className="h-6 w-6 text-accent" />
                          <p className="text-xs font-bold uppercase tracking-widest">{p.l}</p>
                       </div>
                       <p className="text-accent font-black text-xs uppercase">{p.v}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
