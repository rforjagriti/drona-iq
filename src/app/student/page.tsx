
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Trophy, Target, BookOpen, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StudentPortal() {
  const stats = [
    { label: "Current XP", value: "4,250", icon: Zap, color: "text-yellow-500" },
    { label: "Level", value: "12", icon: Trophy, color: "text-accent" },
    { label: "Rank", value: "Top 5%", icon: Target, color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <div className="navy-gradient py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <Badge className="bg-accent text-white border-none uppercase text-[10px] font-bold px-3">Student Hub</Badge>
              <h1 className="text-4xl font-extrabold font-headline">Welcome back, Rohan!</h1>
              <p className="text-white/60 font-light">"Success is the sum of small efforts, repeated day in and day out."</p>
            </div>
            <div className="flex gap-4">
              <Link href="/ai-study-planner">
                <Button className="bg-white text-primary hover:bg-white/90 font-bold uppercase text-xs tracking-widest px-6 h-12 rounded-xl">Study Planner</Button>
              </Link>
              <Link href="/assistant">
                <Button className="bg-accent text-white hover:bg-accent/90 font-bold uppercase text-xs tracking-widest px-6 h-12 rounded-xl">Ask AI Tutor</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <Card key={i} className="border-none shadow-sm overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-muted p-3 rounded-xl"><stat.icon className={`h-6 w-6 ${stat.color}`} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">{stat.label}</p>
                      <p className="text-2xl font-bold font-headline text-primary">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-xl overflow-hidden bg-white">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="text-lg font-headline flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-accent" /> Academic Progress Graph
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12 text-center text-muted-foreground italic">
                [Growth Chart Loading - Based on Weekly Tests]
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-xl">
                <CardHeader><CardTitle className="text-sm uppercase font-bold text-primary">Daily Goals</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { t: "Complete Physics Homework", d: true },
                    { t: "Revise Trigonometry", d: false },
                    { t: "Solve 10 NDA Mock Questions", d: false },
                  ].map((goal, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded border flex items-center justify-center ${goal.d ? 'bg-green-500 border-green-500' : 'border-muted-foreground'}`}>
                        {goal.d && <Zap className="h-3 w-3 text-white fill-current" />}
                      </div>
                      <span className={`text-sm ${goal.d ? 'line-through text-muted-foreground' : 'text-primary font-medium'}`}>{goal.t}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardHeader><CardTitle className="text-sm uppercase font-bold text-primary">Badges Earned</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {["Math Wizard", "10 Day Streak", "Early Bird", "Problem Solver"].map((b, i) => (
                    <Badge key={i} variant="outline" className="py-2 px-4 rounded-full border-accent/20 text-accent font-bold text-[10px] uppercase">
                      <Star className="h-3 w-3 mr-1 fill-current" /> {b}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <BookOpen className="h-10 w-10 opacity-50" />
                <h3 className="text-2xl font-bold font-headline uppercase">NDA 2026 Goal</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase opacity-80"><span>Syllabus Covered</span><span>68%</span></div>
                  <Progress value={68} className="h-1.5 bg-white/20" />
                </div>
                <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10 font-bold uppercase text-[10px] h-12 mt-4">Update Strategy</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardHeader className="border-b"><CardTitle className="text-sm font-headline">Upcoming Schedule</CardTitle></CardHeader>
              <CardContent className="p-0">
                {[
                  { time: "04:30 PM", subject: "Maths - Calculus", type: "Home Session" },
                  { time: "06:00 PM", subject: "Physics Mock Test", type: "Online" },
                  { time: "08:00 PM", subject: "Counseling Meet", type: "Center" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <div>
                      <p className="font-bold text-primary text-sm">{item.subject}</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">{item.type}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-bold">{item.time}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
