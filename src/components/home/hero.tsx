"use client"

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-[#05070a]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[180px] -translate-y-1/2 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <Badge className="bg-accent text-primary border-none text-[10px] font-bold px-3 py-1">PREMIUM</Badge>
                <span className="text-white/80 text-xs font-bold uppercase tracking-[0.3em]">Success Operating System v7.4</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-extrabold text-white leading-[0.9] tracking-tighter">
                SMARTER <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">LEARNING.</span> <br/>
                STRONGER FUTURE.
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-light">
              Dehradun's apex hub where <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> meets <span className="text-accent font-bold">Neural Diagnostics</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/admissions">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl transition-all hover:-translate-y-2">
                  Book Free Demo <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/academic-health-check">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl backdrop-blur-xl group">
                  Run Success Audit <Sparkles className="ml-3 h-5 w-5 text-accent group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative glass p-6 rounded-[5rem] shadow-2xl border-white/10 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/drona_hero_god/1200/1600"
                alt="Drona IQ Excellence"
                width={1200}
                height={1600}
                className="rounded-[4rem] object-cover h-[700px] w-full grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
