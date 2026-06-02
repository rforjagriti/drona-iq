"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Medal, Trophy, Gift, ArrowRight, Zap, Star, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function OlympiadSection() {
  const awards = [
    { icon: Award, title: "Certificate", desc: "Every participant receives a certificate.", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Medal, title: "Medal", desc: "Medal for every participating student.", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Trophy, title: "Society Topper", desc: "Mementos and recognition for toppers.", color: "text-accent", bg: "bg-accent/10" },
    { icon: Gift, title: "Grand Finale", desc: "Attractive prizes for final winners.", color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const journey = [
    { step: "01", title: "Society Exam", desc: "Initial round at your society" },
    { step: "02", title: "Society Toppers", desc: "Selection of best talent" },
    { step: "03", title: "Championship Round", desc: "City-wide competition" },
    { step: "04", title: "Grand Finale", desc: "National level stage" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 transform -rotate-12"><Trophy size={200} /></div>
        <div className="absolute bottom-10 right-10 transform rotate-12"><Medal size={200} /></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">National Level Collaboration</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-tight">
            Gurukul Olympiad <br/> <span className="text-accent italic">× DRONA IQ</span>
          </h2>
          <p className="text-2xl font-bold text-primary/80 uppercase tracking-widest">Dehradun Societies, Get Ready!</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Bring India's Leading Olympiad To Your Society. We are inviting Dehradun societies to participate in a National-Level Program where every student is honored for their effort.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {awards.map((item, i) => (
            <Card key={i} className="border-none shadow-xl rounded-[2.5rem] p-8 text-center group hover:-translate-y-2 transition-all duration-500 bg-white">
              <div className={`${item.bg} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-10 w-10 ${item.color}`} />
              </div>
              <h4 className="text-xl font-bold text-primary uppercase mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="bg-primary text-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Zap className="h-64 w-64" /></div>
          
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-extrabold font-headline uppercase tracking-tight">Competition Journey</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/10 z-0"></div>
            
            {journey.map((item, i) => (
              <div key={i} className="relative z-10 text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-accent text-primary flex items-center justify-center mx-auto text-2xl font-black border-8 border-primary shadow-xl">
                  {item.step}
                </div>
                <div>
                  <h5 className="font-bold uppercase text-lg text-accent">{item.title}</h5>
                  <p className="text-xs text-white/60 uppercase tracking-widest">{item.desc}</p>
                </div>
                {i < 3 && <div className="md:hidden flex justify-center py-2"><ArrowRight className="rotate-90 text-accent/40" /></div>}
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="h-16 px-12 bg-accent text-primary font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl shadow-xl hover:scale-105 transition-all">
                Book Olympiad For Your Society
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white/10 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl backdrop-blur-xl">
                Partner With DRONA IQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
