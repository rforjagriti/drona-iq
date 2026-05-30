
"use client"

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ArrowRight, Sparkles, Target, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function AdmissionReadiness() {
  const [step, setStep] = useState(1);

  const steps = [
    { q: "What is your child's current grade?", options: ["Class 5-8", "Class 9-10", "Class 11-12"] },
    { q: "What is the primary academic goal?", options: ["95%+ in Boards", "NDA/Defense Career", "JEE/NEET Foundation"] },
    { q: "Most critical area of concern?", options: ["Maths/Science Logic", "Lack of Discipline", "Exam Stress/Anxiety"] }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-accent text-primary border-none px-4 py-1 uppercase font-bold tracking-widest text-[10px]">Lead Discovery v2.0</Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter">AI Admission <br/> <span className="text-accent italic">Readiness Quiz.</span></h2>
          <p className="text-white/50 text-xl font-light">Find out if your child is ready for the Drona IQ Elite Track in 30 seconds.</p>
        </div>

        <Card className="border-none shadow-2xl bg-white rounded-[3rem] overflow-hidden">
          <div className="bg-accent text-primary p-4 flex justify-between items-center px-10">
            <span className="text-[10px] font-black uppercase tracking-widest">Question {step} of 3</span>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1 w-8 rounded-full ${i <= step ? 'bg-primary' : 'bg-primary/20'}`}></div>
              ))}
            </div>
          </div>
          <CardContent className="p-12 space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center leading-tight">
              {steps[step - 1].q}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {steps[step - 1].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => step < 3 ? setStep(step + 1) : null}
                  className="p-6 border-2 border-muted rounded-2xl text-sm font-bold text-primary hover:border-accent hover:bg-accent/5 transition-all text-center"
                >
                  {opt}
                </button>
              ))}
            </div>

            {step === 3 && (
              <div className="pt-6 animate-in fade-in slide-in-from-bottom-4">
                <Link href="/admissions">
                  <Button className="w-full h-16 bg-primary text-white text-lg uppercase font-black tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
                    Generate Analysis Report <ArrowRight className="ml-2 h-5 w-5 text-accent" />
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
