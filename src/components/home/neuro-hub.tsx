
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Brain, 
  Activity, 
  Target, 
  Timer, 
  Zap, 
  ShieldCheck, 
  Microscope, 
  TrendingUp, 
  Clock,
  Dna,
  Binary,
  Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function NeuroHubSection() {
  const pillars = [
    { t: "Active Recall Hub", d: "Strengthening synaptic connections by testing the brain before the lecture begins.", i: Brain },
    { t: "Neural Gap Analysis", d: "AI-detection of precisely which concept fiber is missing in the student's logic.", i: Activity },
    { t: "Focus State Sync", d: "Optimizing the student's pre-frontal cortex through environment discipline.", i: Target },
    { t: "Spaced Retrieval", d: "Stopping the Forgetting Curve using calculated interval reviews for permanent memory.", i: Timer }
  ];

  return (
    <section className="py-24 md:py-48 bg-white text-primary overflow-hidden border-y border-primary/5">
      <div className="container mx-auto px-4">
         <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
            <Badge className="bg-primary text-accent border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Cognitive Engineering</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">"Most tuition centers in Dehradun rely on repetition. We rely on brain science. We don't just teach chapters; we optimize neural pathways."</p>
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

         {/* ROI & Travel Fatigue Section - The Math of Success */}
         <div className="bg-primary text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <Microscope className="absolute -right-20 -bottom-20 h-96 w-96 text-accent opacity-5" />
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
               <div className="space-y-8">
                  <Badge className="bg-accent text-primary border-none uppercase font-bold text-[10px]">Efficiency Analytics</Badge>
                  <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Zero-Commute <br/> <span className="text-accent italic">ROI Formula.</span></h3>
                  <p className="text-xl text-white/60 font-light italic">"A Dehradun student spends 600+ hours yearly in traffic on Sahastradhara Road or Rajpur Road. We convert that fatigue into peak performance hours."</p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-1 p-6 bg-white/5 rounded-3xl border border-white/10">
                        <p className="text-4xl font-black text-accent">600h</p>
                        <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Yearly Travel Waste</p>
                     </div>
                     <div className="space-y-1 p-6 bg-white/5 rounded-3xl border border-white/10">
                        <p className="text-4xl font-black text-green-400">92%</p>
                        <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Retention Rate</p>
                     </div>
                  </div>
               </div>
               <div className="grid gap-4">
                  {[
                    { l: "Travel Fatigue", v: "Eliminated", i: ShieldCheck, desc: "Peak mental energy preserved for study." },
                    { l: "Self-Study Time", v: "Doubled", i: Zap, desc: "More hours for practice & recall." },
                    { l: "Mastery Index", v: "98/100", i: TrendingUp, desc: "Consistent high-performance outcomes." }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-default">
                       <div className="flex items-center gap-4">
                          <p.i className="h-6 w-6 text-accent" />
                          <div>
                            <p className="text-sm font-bold uppercase tracking-widest">{p.l}</p>
                            <p className="text-[10px] text-white/40 mt-1">{p.desc}</p>
                          </div>
                       </div>
                       <p className="text-accent font-black text-xs uppercase bg-accent/10 px-3 py-1 rounded-lg">{p.v}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Memory Palace & Visual Hooks Block */}
         <div className="mt-32 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-extrabold uppercase text-primary tracking-tight">The "Memory Palace" <br/> <span className="text-accent italic">Architecture.</span></h3>
                  <p className="text-muted-foreground leading-relaxed">
                     We use 3D visualization techniques to hook complex subjects like Organic Chemistry and Calculus formulas into the brain's spatial memory.
                  </p>
               </div>
               <div className="space-y-6">
                  {[
                    { t: "Visual MNEMONICS", d: "Associating equations with real-world shapes.", i: Binary },
                    { t: "Locus Method", d: "Placing facts in a virtual digital classroom.", i: Microscope },
                    { t: "Flashcard Drills", d: "AI-timed reminders to trigger long-term storage.", i: Lightbulb }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                       <div className="bg-primary/5 p-4 rounded-2xl text-accent"><item.i className="h-6 w-6" /></div>
                       <div>
                          <p className="font-bold text-primary uppercase text-sm">{item.t}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <Card className="border-none shadow-2xl bg-muted/30 p-12 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10"></div>
               <div className="relative z-10 space-y-6">
                  <Dna className="h-16 w-16 text-primary mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold uppercase text-primary">Your Success OS is Active.</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Join the elite hub where science meets results. Every Drona IQ student goes through this 5-stage neural mapping protocol.
                  </p>
                  <Badge variant="outline" className="border-accent text-accent font-bold uppercase px-4 py-1">Neural Sync v7.4 Active</Badge>
                  <div className="pt-4">
                     <Link href="/academic-health-check">
                        <Button className="h-14 px-10 bg-primary text-white font-black uppercase text-[10px] rounded-xl shadow-xl hover:scale-105 transition-all">Start AI Diagnostic</Button>
                     </Link>
                  </div>
               </div>
            </Card>
         </div>
      </div>
    </section>
  );
}
