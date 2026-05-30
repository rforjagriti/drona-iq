
"use client"

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Fingerprint, TrendingUp, ShieldAlert, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function TechSuiteSection() {
  const tech = [
    { 
      t: "Digital Academic Twin", 
      d: "We create a virtual model of your child's cognitive strengths to predict performance and prevent failures.", 
      i: Fingerprint,
      c: "blue"
    },
    { 
      t: "Success Probability Simulator", 
      d: "Advanced algorithm that shows how DIQ interventions shift success probability from 40% to 98%.", 
      i: TrendingUp,
      c: "accent"
    },
    { 
      t: "Academic Risk Detector", 
      d: "Real-time alerts to parents when conceptual gaps are detected, before they become board-exam failures.", 
      i: ShieldAlert,
      c: "red"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#05070a] text-white">
      <div className="container mx-auto px-4">
         <div className="text-center space-y-6 mb-24">
            <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Intelligence Hub</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter">Success <br/> <span className="text-accent italic">Engineered.</span></h2>
         </div>

         <div className="grid lg:grid-cols-3 gap-8">
            {tech.map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-12 rounded-[3rem] space-y-8 group hover:bg-white hover:text-primary transition-all duration-700">
                 <div className={`p-6 w-fit rounded-3xl bg-accent/10 group-hover:bg-accent`}>
                    <item.i className={`h-12 w-12 text-accent group-hover:text-white`} />
                 </div>
                 <h4 className="text-3xl font-extrabold uppercase tracking-tight">{item.t}</h4>
                 <p className="text-white/40 group-hover:text-muted-foreground font-light leading-relaxed">{item.d}</p>
                 <Link href="/academic-health-check" className="block pt-4">
                    <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-xs p-0 group-hover:text-primary">Preview Lab <ChevronRight className="ml-1 h-3 w-3" /></Button>
                 </Link>
              </Card>
            ))}
         </div>
      </div>
    </section>
  );
}
