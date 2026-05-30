
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
    <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4">
         <div className="text-center space-y-6 mb-32 max-w-4xl mx-auto">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Cognitive Engineering</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
            <p className="text-xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">Most tuition centers in Dehradun rely on repetition. We rely on brain science. We don't just teach chapters; we optimize neural pathways.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-32">
            {pillars.map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 hover:bg-white hover:text-primary transition-all duration-700 group">
                <div className="bg-accent/20 p-4 w-fit rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
                  <item.i className="h-8 w-8 text-accent group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold uppercase text-accent group-hover:text-primary transition-colors">{item.t}</h4>
                <p className="text-sm text-white/40 group-hover:text-muted-foreground transition-colors font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
