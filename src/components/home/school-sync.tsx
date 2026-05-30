
"use client"

import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Landmark, ShieldCheck, Zap } from 'lucide-react';

export function SchoolSyncMatrix() {
  const schools = [
    "Brightlands School", "St. Joseph's Academy", "Welham Boys/Girls", "The Doon School",
    "Convent of Jesus & Mary", "Ann Mary School", "Army Public School", "SJA Dehradun"
  ];

  return (
    <section className="py-24 md:py-48 bg-white border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge className="bg-primary text-accent border-none px-4 py-1 uppercase font-bold tracking-widest text-[10px]">Local Authority</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-tight tracking-tighter">100% Dehradun <br/> <span className="text-accent italic">School-Sync.</span></h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We don't just teach general topics. Our curriculum is custom-mapped to the internal exam patterns and marking schemes of Dehradun's elite schools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {schools.map((school, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-primary/5">
                  <Landmark className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-tight text-primary">{school}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {[
              { t: "Internal Exam Mastery", d: "Chapter-wise mock tests mirroring your school's difficulty level.", i: Zap },
              { t: "Marking Scheme Analysis", d: "We teach exactly how school teachers award marks for steps.", i: ShieldCheck },
              { t: "Class Specific Focus", d: "Custom batches for students from the same school for peer growth.", i: CheckCircle2 }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <p.i className="h-24 w-24" />
                </div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tighter">{p.t}</h4>
                  <p className="text-white/60 font-light italic leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
