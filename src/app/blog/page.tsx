
'use client';

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, User, ArrowRight, BrainCircuit, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogHub() {
  const posts = [
    {
      title: "Understanding the Digital Academic Twin: How We Predict Student Success",
      desc: "An in-depth look into Drona IQ's proprietary neural engine that creates real-time cognitive clones to forecast exam results.",
      category: "Technology",
      date: "Oct 12, 2024",
      author: "Dr. Vikram Singh",
      icon: BrainCircuit,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "The Discipline Gap: Why Dehradun's Brightest Students Sometimes Fail",
      desc: "How military-grade discipline from Droneshwar Defence Academy is being used to bridge the consistency gap in school education.",
      category: "Pedagogy",
      date: "Oct 08, 2024",
      author: "Col. Aditya Sharma",
      icon: ShieldCheck,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Top 5 Learning Blind Spots in CBSE Class 10 Mathematics",
      desc: "Identifying the silent concepts that lead to major mark deductions in board exams and how to fix them early.",
      category: "Academic",
      date: "Oct 05, 2024",
      author: "Mentor Rahul Verma",
      icon: TrendingUp,
      color: "text-accent",
      bg: "bg-accent/10"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <section className="bg-primary text-white py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Research & Insights</Badge>
          <h1 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter">The Success <span className="text-accent italic">Journal</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Data-driven strategies, pedagogical research, and technology explainers for the modern scholar.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-20 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white flex flex-col group hover:-translate-y-2 transition-transform duration-500">
              <div className={`${post.bg} h-64 flex items-center justify-center relative overflow-hidden`}>
                <post.icon className={`h-24 w-24 ${post.color} opacity-20 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform`} />
                <post.icon className={`h-16 w-16 ${post.color}`} />
              </div>
              <CardContent className="p-10 flex-1 flex flex-col space-y-6">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <span className="text-accent">{post.category}</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold font-headline text-primary leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm line-clamp-3">
                  {post.desc}
                </p>
                <div className="pt-6 border-t mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-bold text-primary">{post.author}</span>
                  </div>
                  <Button variant="ghost" className="text-accent hover:text-accent font-bold uppercase text-[10px] tracking-widest p-0">
                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-32 bg-accent text-white rounded-[4rem] p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <BookOpen className="absolute -left-12 -top-12 h-64 w-64 opacity-10" />
          <h2 className="text-4xl font-headline font-extrabold uppercase leading-tight relative z-10">Subscribe to <br/> <span className="italic">Success Strategies</span></h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto font-light relative z-10">Get weekly AI-generated study tips and defense discipline protocols delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
            <input placeholder="Enter parent/student email" className="flex-1 bg-white/20 border border-white/30 rounded-2xl px-6 py-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
            <Button className="bg-primary text-white h-auto py-4 px-8 rounded-2xl font-bold uppercase text-xs tracking-widest">Join Hub</Button>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-primary text-white/40 text-center text-[10px] uppercase font-bold tracking-[0.3em]">
        Drona IQ Research Hub • Dehradun, Uttarakhand
      </footer>
    </div>
  );
}
