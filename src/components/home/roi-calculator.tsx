
"use client"

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, Zap, ShieldCheck, Microscope } from 'lucide-react';

export function ROICalculator() {
  return (
    <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge className="bg-accent text-primary border-none px-4 py-1 uppercase font-bold tracking-widest text-[10px]">Zero-Commute ROI</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-tight tracking-tighter">The Math of <br/> <span className="text-accent italic">Peak Performance.</span></h2>
              <p className="text-xl text-white/40 font-light leading-relaxed">
                A Dehradun student spends **600+ hours yearly** in traffic on Rajpur Road. We convert that fatigue into academic power through verified home-hub mentorship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <p className="text-5xl font-black text-accent">600h</p>
                <p className="text-[10px] uppercase font-bold text-white/40 mt-2 tracking-widest">Yearly Travel Waste Saved</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <p className="text-5xl font-black text-green-400">92%</p>
                <p className="text-[10px] uppercase font-bold text-white/40 mt-2 tracking-widest">Cognitive Retention Delta</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4">
              {[
                { l: "Travel Fatigue", v: "Eliminated", i: ShieldCheck, desc: "Peak mental energy preserved for core subjects." },
                { l: "Self-Study Time", v: "Doubled", i: Zap, desc: "More hours for Active Recall & retrieval practice." },
                { l: "Success Probability", v: "+54% Shift", i: TrendingUp, desc: "Mathematical result after Drona IQ intervention." }
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors group cursor-default">
                  <div className="flex items-center gap-6">
                    <p.i className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg uppercase tracking-widest">{p.l}</p>
                      <p className="text-xs text-white/40 font-light italic mt-1">{p.desc}</p>
                    </div>
                  </div>
                  <Badge className="bg-accent text-primary font-black uppercase text-[10px] h-8 px-4 rounded-xl">{p.v}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
