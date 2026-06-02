
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Youtube, Play, Zap, BrainCircuit, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function VideoHubSection() {
  const videos = [
    { id: "1", title: "Why Physics is Hard?", views: "12K", type: "Masterclass" },
    { id: "2", title: "NDA Foundation Protocol", views: "8.5K", type: "Discipline" },
    { id: "3", title: "AI Learning Demo", views: "15K", type: "Technology" }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Drona Cinematic Hub</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Elite <br/> <span className="text-accent italic">Broadcast.</span></h2>
              <p className="text-xl text-white/40 font-light leading-relaxed">
                Access premium academic content and parent guidance sessions via our official YouTube channel. Over 100,000+ views from the Dehradun community.
              </p>
            </div>
            <div className="grid gap-6">
              {videos.map((vid, i) => (
                <div key={i} className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-lg uppercase tracking-tight">{vid.title}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{vid.type} • {vid.views} Views</p>
                    </div>
                  </div>
                  <Youtube className="h-5 w-5 text-white/20 group-hover:text-red-500 transition-colors" />
                </div>
              ))}
            </div>
            <Link href="https://youtube.com" target="_blank">
              <Button className="h-16 px-12 bg-white text-primary font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-105 transition-all">
                Subscribe to Channel <Youtube className="ml-2 h-4 w-4 text-red-600" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
            <div className="relative aspect-video rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center z-10 group cursor-pointer">
                <div className="h-24 w-24 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-125 transition-all shadow-2xl">
                  <Play className="h-10 w-10 fill-current ml-1" />
                </div>
              </div>
              <img 
                src="/images/video-thumb.jpg" 
                className="w-full h-full object-cover grayscale opacity-60"
                alt="Main Video"
              />
              <div className="absolute bottom-10 left-10 z-20 space-y-2">
                <Badge className="bg-accent text-primary font-black text-[8px] uppercase px-3 py-1">Featured Premiere</Badge>
                <h4 className="text-3xl font-black uppercase">Success OS v7.4 Explainer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
