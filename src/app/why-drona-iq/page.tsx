"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Shield, Award, Zap, Target, BrainCircuit, Users, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WhyDronaIQ() {
  const comparison = [
    { feature: "AI Learning Gap Analysis", drona: true, traditional: false, home: false },
    { feature: "Real-time Parent Monitoring", drona: true, traditional: false, home: "Manual" },
    { feature: "24/7 AI Tutor Support", drona: true, traditional: false, home: false },
    { feature: "Subject Matter Expert Matching", drona: true, traditional: "Group Only", home: "Varies" },
    { feature: "ISO Certified Methodologies", drona: true, traditional: false, home: false },
    { feature: "Dehradun Hub Support", drona: true, traditional: true, home: false },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <section className="bg-primary text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge className="bg-accent text-white border-none px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The DIQ Advantage</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight uppercase tracking-tighter">Beyond Conventional <br/> <span className="text-accent italic">Coaching</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">Most coaching centers in Dehradun rely on outdated 1990s models. Drona IQ is built for the 2026 academic landscape.</p>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-16 relative z-10 space-y-24">
        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BrainCircuit, title: "AI-Driven Precision", desc: "No more guessing. We map exactly where a student is struggling down to the sub-concept level." },
            { icon: Users, title: "Elite Mentorship", desc: "Our tutors are selected through a rigorous 4-stage screening process (Subject, Pedagogy, Tech, Background)." },
            { icon: TrendingUp, title: "Outcome Obsessed", desc: "We track metrics, not just attendance. If a student isn't growing, our system triggers an immediate strategy shift." },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-2xl p-10 text-center space-y-6 rounded-[2rem] bg-white">
              <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-accent">
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-primary uppercase">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* The Matrix */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-extrabold text-primary uppercase">The Comparison Matrix</h2>
            <p className="text-muted-foreground">See how we stack up against traditional options in the valley.</p>
          </div>
          
          <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem]">
            <Table>
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow className="border-none hover:bg-primary">
                  <TableHead className="w-[300px] text-white py-8 px-10 font-headline uppercase tracking-widest text-xs">Feature</TableHead>
                  <TableHead className="text-accent py-8 text-center font-headline font-extrabold text-xl uppercase">Drona IQ</TableHead>
                  <TableHead className="text-white/40 py-8 text-center font-headline uppercase text-xs">Traditional Coaching</TableHead>
                  <TableHead className="text-white/40 py-8 text-center font-headline uppercase text-xs">Individual Home Tutor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white">
                {comparison.map((item, i) => (
                  <TableRow key={i} className="hover:bg-muted/30 border-b last:border-0 transition-colors">
                    <TableCell className="py-6 px-10 font-bold text-primary">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center mx-auto"><Check className="h-5 w-5 text-green-600" /></div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground font-medium">
                      {item.traditional === false ? <X className="h-5 w-5 text-red-300 mx-auto" /> : item.traditional}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground font-medium">
                      {item.home === false ? <X className="h-5 w-5 text-red-300 mx-auto" /> : item.home}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Lead Section */}
        <section className="bg-accent text-white rounded-[3rem] p-16 text-center space-y-8 relative overflow-hidden">
          <Shield className="absolute -left-12 -top-12 h-64 w-64 opacity-10" />
          <Award className="absolute -right-12 -bottom-12 h-64 w-64 opacity-10" />
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold uppercase leading-tight">Trust the <br/> <span className="italic">Drona IQ</span> Process</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Join 500+ families in Dehradun who have chosen academic clarity over coaching chaos.</p>
          <div className="pt-6">
            <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-8 h-auto text-xl font-headline uppercase tracking-widest font-bold shadow-2xl rounded-full">Enroll Your Child Today</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
