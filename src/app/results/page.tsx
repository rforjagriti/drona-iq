
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, GraduationCap, Trophy, Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ResultsPage() {
  const testimonials = [
    { name: "Mrs. Meenakshi Bisht", role: "Parent", text: "My daughter's confidence in Math changed completely after Drona IQ's AI assessment identified her missing foundation from Class 8.", rating: 5 },
    { name: "Col. Aditya Sharma", role: "Parent", text: "The discipline and tracking here is military-grade. Best NDA foundation coaching in Dehradun.", rating: 5 },
    { name: "Rahul Verma", role: "Student (Class 12)", text: "From 72% in Class 11 to 94% in my pre-boards. The personalized mentorship is the real game-changer.", rating: 5 },
  ];

  const successStories = [
    { student: "Ishita Negi", improvement: "74% to 98%", exam: "CBSE Class 10", image: "/images/student-1.jpg" },
    { student: "Aryan Rawat", improvement: "AIR 412", exam: "NDA Foundation", image: "/images/student-2.jpg" },
    { student: "Sanya Gupta", improvement: "99.2 Percentile", exam: "JEE Mains (Physics)", image: "/images/student-3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-primary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/campus-main.jpg')] bg-cover"></div>
        <div className="container mx-auto px-4 relative z-10 space-y-6">
          <Badge className="bg-accent text-white border-none px-6 py-2 uppercase tracking-[0.3em] text-[10px] font-bold">Proven Outcomes</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight">Numbers That <br/> Speak for <span className="text-accent italic">Themselves</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">Transforming the academic landscape of Dehradun, one student at a time.</p>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Successful Admissions", value: "500+", icon: GraduationCap },
            { label: "Average Improvement", value: "24%", icon: Trophy },
            { label: "AI Checks Run", value: "2500+", icon: Star },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-2xl p-8 text-center space-y-2 group hover:bg-accent transition-colors hover:text-white">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
                <stat.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <p className="text-4xl font-extrabold font-headline">{stat.value}</p>
              <p className="text-sm uppercase font-bold tracking-widest opacity-60">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Success Stories Grid */}
        <section className="py-24 space-y-12">
          <h2 className="text-3xl font-headline font-extrabold text-primary uppercase tracking-tight text-center">Hall of Excellence</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {successStories.map((story, i) => (
              <Card key={i} className="border-none shadow-xl overflow-hidden group">
                <div className="relative h-64">
                  <Image src={story.image} alt={story.student} fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint="student photo" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <p className="text-2xl font-bold font-headline">{story.student}</p>
                    <p className="text-xs text-accent font-bold uppercase tracking-widest">{story.exam}</p>
                  </div>
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase">Achievement</p>
                    <p className="text-3xl font-extrabold font-headline text-primary">{story.improvement}</p>
                  </div>
                  <Link href="/admissions">
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white font-headline uppercase text-[10px] font-bold py-5">Read Full Story</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-primary text-white rounded-[3rem] px-12 overflow-hidden relative">
          <Quote className="absolute top-12 left-12 h-64 w-64 opacity-5" />
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-4xl font-headline font-extrabold text-center">What the Valley is Saying</h2>
            <div className="grid gap-12">
              {testimonials.map((t, i) => (
                <div key={i} className="space-y-6 relative z-10">
                  <div className="flex text-accent">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold">{t.name[0]}</div>
                    <div>
                      <p className="font-bold font-headline">{t.name}</p>
                      <p className="text-xs text-white/60 uppercase font-bold tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 text-center space-y-8">
          <h2 className="text-4xl font-headline font-extrabold text-primary">Your Success Story Starts Here</h2>
          <Link href="/academic-health-check">
            <Button className="px-12 py-8 h-auto text-xl font-headline bg-accent hover:bg-accent/90 text-white shadow-2xl rounded-full uppercase tracking-widest font-bold">Get Free AI Assessment <ArrowRight className="ml-2 h-6 w-6" /></Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
