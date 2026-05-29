
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Trophy, Target, BookOpen, Star, Zap, Clock, ChevronRight, MessageCircleQuestion, ListChecks, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useMemo } from 'react';

export default function StudentPortal() {
  const { user } = useUser();
  const firestore = useFirestore();

  const studentRef = useMemo(() => {
    if (!firestore || !user?.uid) return null;
    return doc(firestore, 'students', user.uid);
  }, [firestore, user?.uid]);

  const { data: studentData, loading } = useDoc(studentRef);

  const stats = [
    { label: "Current XP", value: studentData?.xp || "0", icon: Zap, color: "text-yellow-500" },
    { label: "Level", value: studentData?.level || "1", icon: Trophy, color: "text-accent" },
    { label: "Rank", value: "Top 5%", icon: Target, color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      {/* Gamified Header */}
      <div className="navy-gradient py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Badge className="bg-accent text-white border-none uppercase text-[10px] font-bold px-3">Elite Tier</Badge>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Level {studentData?.level || 1} Scholar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Welcome back, {user?.displayName?.split(' ')[0] || 'Scholar'}!</h1>
              <p className="text-white/60 font-light italic">"Success is the sum of small efforts, repeated day in and day out."</p>
            </div>
            <div className="flex gap-4">
              <Link href="/revision-generator">
                <Button className="bg-white text-primary hover:bg-white/90 font-bold uppercase text-xs tracking-widest px-8 h-12 rounded-xl shadow-lg flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-accent" /> Revision Pack
                </Button>
              </Link>
              <Link href="/assistant">
                <Button className="bg-accent text-white hover:bg-accent/90 font-bold uppercase text-xs tracking-widest px-8 h-12 rounded-xl shadow-lg">Ask AI Tutor</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <Card key={i} className="border-none shadow-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-default">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                    <div className="bg-muted p-4 rounded-2xl"><stat.icon className={`h-8 w-8 ${stat.color}`} /></div>
                    <div>
                      <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <p className="text-2xl font-bold font-headline text-primary">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-2xl overflow-hidden bg-white">
              <CardHeader className="border-b bg-muted/30 py-6 px-8 flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-headline flex items-center gap-2 text-primary uppercase tracking-tight">
                    <Clock className="h-5 w-5 text-accent" /> Today's Learning Path
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">3 tasks remaining to reach daily XP goal.</p>
                </div>
                <Badge variant="outline" className="border-accent text-accent font-bold">120 XP Reward</Badge>
              </CardHeader>
              <CardContent className="p-0">
                {[
                  { time: "4:00 PM", task: "Live Session: Calculus Foundations", type: "Class", done: false, xp: 50 },
                  { time: "6:00 PM", task: "Self Study: Physics Chapter 4 Revision", type: "Target", done: true, xp: 30 },
                  { time: "8:00 PM", task: "AI Mock Test: NDA Pattern English", type: "Exam", done: false, xp: 40 },
                ].map((item, i) => (
                  <div key={i} className="group p-6 border-b last:border-0 hover:bg-muted/30 transition-colors flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <div className="text-xs font-bold text-muted-foreground w-16">{item.time}</div>
                      <div className="space-y-1">
                        <p className={`font-bold ${item.done ? 'line-through text-muted-foreground' : 'text-primary'}`}>{item.task}</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-[9px] uppercase font-bold">{item.type}</Badge>
                          <span className="text-[10px] text-accent font-bold">+{item.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${item.done ? 'bg-green-500 border-green-500 text-white' : 'border-muted-foreground opacity-30'}`}>
                      {item.done && <Zap className="h-3 w-3 fill-current" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <MessageCircleQuestion className="h-32 w-32" />
              </div>
              <CardContent className="p-10 space-y-4 relative z-10">
                <h3 className="text-2xl font-bold font-headline uppercase">Stuck on a concept?</h3>
                <p className="text-white/60 max-w-md">Our neural doubt-solver provides instant step-by-step solutions for CBSE, ICSE, and Competitive patterns.</p>
                <div className="flex pt-4">
                  <Link href="/assistant">
                    <Button className="bg-accent text-white hover:bg-accent/90 font-bold uppercase text-xs tracking-widest px-8">Launch AI Solver <ChevronRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-headline uppercase">Goal: {studentData?.targetExam || "NDA 2026"}</h3>
                  <Target className="h-8 w-8 opacity-40" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase opacity-80">
                    <span>Syllabus Covered</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-1.5 bg-white/20" />
                </div>
                <p className="text-xs text-white/70 italic">"You are 12% ahead of your peer group in Dehradun."</p>
                <Link href="/ai-study-planner">
                  <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10 font-bold uppercase text-[10px] h-12 mt-4 tracking-widest">Update Strategy</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase font-bold text-primary tracking-widest flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent fill-current" /> Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {[
                  { label: "Math Wizard", color: "bg-blue-50 text-blue-600" },
                  { label: "7 Day Streak", color: "bg-orange-50 text-orange-600" },
                  { label: "Night Owl", color: "bg-purple-50 text-purple-600" },
                  { label: "Doubt Solver", color: "bg-green-50 text-green-600" },
                ].map((b, i) => (
                  <Badge key={i} className={`py-2 px-4 rounded-full border-none font-bold text-[10px] uppercase ${b.color}`}>
                    {b.label}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Link href="/revision-generator" className="block">
                <Card className="border-none shadow-sm hover:bg-muted/50 transition-colors p-4 text-center cursor-pointer">
                  <ListChecks className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-[10px] font-bold uppercase">Revision</p>
                </Card>
              </Link>
              <Link href="/academic-health-check" className="block">
                <Card className="border-none shadow-sm hover:bg-muted/50 transition-colors p-4 text-center cursor-pointer">
                  <BrainCircuit className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-[10px] font-bold uppercase">Health Check</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
