
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Calendar, ListTodo, Target, Trophy, Clock, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function StudentDashboard() {
  const dailyTasks = [
    { task: "Complete Algebra Assignment", time: "2:00 PM", done: true },
    { task: "Revise Newton's Laws (Physics)", time: "4:30 PM", done: false },
    { task: "Watch Genkit Tutorial for Science Project", time: "6:00 PM", done: false },
    { task: "Daily Mock Test (NDA Pattern)", time: "8:00 PM", done: false },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-accent p-2 rounded-xl text-primary"><BrainCircuit className="h-6 w-6" /></div>
                <h1 className="text-3xl font-extrabold font-headline">Hi, Rohan! Ready for today?</h1>
              </div>
              <p className="text-white/60 text-lg">You've completed 75% of your weekly goals. Keep it up!</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md min-w-[300px]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Weekly Goal Progress</span>
                <span className="text-xs font-bold">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Daily Checklist */}
          <Card className="lg:col-span-2 border-none shadow-xl">
            <CardHeader className="border-b">
              <CardTitle className="font-headline flex items-center gap-2 text-primary uppercase tracking-tight">
                <ListTodo className="h-6 w-6 text-accent" /> Daily Study Planner
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {dailyTasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group p-4 hover:bg-muted/50 rounded-xl transition-all">
                    <div className="flex items-center gap-4">
                      <Checkbox checked={item.done} className="h-6 w-6" />
                      <div>
                        <p className={`font-bold ${item.done ? 'line-through text-muted-foreground' : 'text-primary'}`}>{item.task}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {item.time}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 py-6 font-headline bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10">
                + Add Custom Task
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions & Stats */}
          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-accent text-white overflow-hidden relative">
              <Trophy className="absolute -right-4 -bottom-4 h-32 w-32 opacity-10" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <h4 className="font-headline font-bold text-2xl">Target Exam: NDA 2027</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase"><span>Preparation Index</span><span>82%</span></div>
                  <Progress value={82} className="h-1.5 bg-white/20" />
                </div>
                <div className="pt-4 flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl flex-1 text-center">
                    <p className="text-[10px] uppercase font-bold text-white/60">Days Left</p>
                    <p className="text-xl font-bold font-headline">412</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl flex-1 text-center">
                    <p className="text-[10px] uppercase font-bold text-white/60">Practice Rank</p>
                    <p className="text-xl font-bold font-headline">#12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Button className="w-full justify-between h-auto py-5 bg-primary hover:bg-primary/90 text-white font-headline uppercase tracking-widest text-xs font-bold px-6">
                Start AI Mock Test <BrainCircuit className="h-5 w-5 text-accent" />
              </Button>
              <Button variant="outline" className="w-full justify-between h-auto py-5 border-primary text-primary font-headline uppercase tracking-widest text-xs font-bold px-6">
                Connect with Mentor <GraduationCap className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-auto py-5 text-muted-foreground font-headline uppercase tracking-widest text-xs font-bold px-6">
                View Past Results <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-sm font-headline flex items-center gap-2"><Target className="h-4 w-4 text-accent" /> Focus Needed</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs"><span>Fluid Mechanics</span><span className="text-red-500 font-bold">Weak</span></div>
                  <Progress value={30} className="h-1 bg-red-100" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs"><span>Inorganic Chemistry</span><span className="text-orange-500 font-bold">Moderate</span></div>
                  <Progress value={55} className="h-1 bg-orange-100" />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}
