
"use client"

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Crosshair, Users, Brain, Heart, Zap } from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { subject: 'Leadership', A: 90, fullMark: 100 },
  { subject: 'Logic', A: 85, fullMark: 100 },
  { subject: 'Grit', A: 95, fullMark: 100 },
  { subject: 'Integrity', A: 88, fullMark: 100 },
  { subject: 'Social', A: 70, fullMark: 100 },
  { subject: 'Decision', A: 80, fullMark: 100 },
];

export function OLQRadarSection() {
  return (
    <section className="py-24 md:py-48 bg-white border-y border-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge className="bg-primary text-accent border-none px-4 py-1 uppercase font-bold tracking-widest text-[10px]">The Officer Edge</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-tight tracking-tighter">Beyond Marks: <br/> <span className="text-accent italic">15 OLQs Radar.</span></h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Marks are just one part of the story. Powered by Droneshwar Defence Academy, we track the **15 Officer-Like Qualities** needed for a successful global career.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { t: "Leadership", d: "Initiative & social influence.", i: ShieldCheck },
                { t: "Logic", d: "Mental agility & reasoning.", i: Brain },
                { t: "Grit", d: "Stamina & stress endurance.", i: Zap },
                { t: "Integrity", d: "Ethics & reliability.", i: Heart }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-primary/5 p-3 rounded-xl text-accent"><item.i className="h-5 w-5" /></div>
                  <div>
                    <p className="font-bold text-primary uppercase text-xs">{item.t}</p>
                    <p className="text-muted-foreground text-[10px] leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px] opacity-30"></div>
            <Card className="border-none shadow-2xl bg-white rounded-[4rem] p-12 relative z-10">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#0B132B', fontSize: 10, fontWeight: 700 }} />
                    <Radar
                      name="Drona IQ Standard"
                      dataKey="A"
                      stroke="#C5A021"
                      fill="#C5A021"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center space-y-4">
                <Badge variant="outline" className="text-[10px] font-black uppercase border-accent text-accent">Real-time Performance Radar</Badge>
                <p className="text-xs text-muted-foreground font-medium italic">"Parents receive monthly radar updates alongside academic reports."</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
