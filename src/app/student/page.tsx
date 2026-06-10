"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Trophy, Target, BookOpen, Star, Zap, Clock, ChevronRight, MessageCircleQuestion, ListChecks, ArrowRight, User as UserIcon, LogIn, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser, useFirestore, useDoc, useAuth } from '@/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useMemo } from 'react';

export default function StudentPortal() {
  const { user, loading: authLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();

  const userProfileRef = useMemo(() => (firestore && user) ? doc(firestore, 'users', user.uid) : null, [firestore, user]);
  const { data: profile, loading: profileLoading } = useDoc(userProfileRef);

  const studentRef = useMemo(() => {
    if (!firestore || !user?.uid) return null;
    return doc(firestore, 'students', user.uid);
  }, [firestore, user?.uid]);

  const { data: studentData, loading: docLoading } = useDoc(studentRef);

  const handleLogin = async () => {
    if (!auth || !firestore) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      const userRef = doc(firestore, 'users', loggedUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: loggedUser.uid,
          email: loggedUser.email,
          displayName: loggedUser.displayName,
          photoURL: loggedUser.photoURL,
          role: 'student',
          createdAt: new Date().toISOString(),
          timestamp: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  const stats = [
    { label: "Current XP", value: studentData?.xp || "0", icon: Zap, color: "text-yellow-500" },
    { label: "Level", value: studentData?.level || "1", icon: Trophy, color: "text-accent" },
    { label: "Rank", value: "Top 5%", icon: Target, color: "text-blue-500" },
  ];

  if (authLoading || profileLoading || docLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <div className="flex flex-col items-center gap-4">
          <BrainCircuit className="h-12 w-12 text-primary animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Initializing Learning Hub...</p>
        </div>
      </div>
    );
  }

  if (!user || (profile && profile.role !== 'student' && profile.role !== 'admin')) {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4 pt-32">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12 rounded-[2.5rem] bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5"><BrainCircuit className="h-32 w-32" /></div>
            <CardContent className="space-y-8 relative z-10">
              <div className="bg-primary/5 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
                <UserIcon className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tight">Portal Restricted</h2>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-primary font-bold text-sm leading-relaxed">
                    Please contact Droneshwar Defence Academy at <span className="text-accent underline">6399000437</span>.
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest">They will provide you login ID and password.</p>
                </div>
              </div>
              <Button onClick={handleLogin} className="w-full font-headline bg-accent text-white hover:bg-accent/90 py-7 h-auto rounded-2xl text-lg uppercase tracking-widest font-black shadow-xl">
                <LogIn className="mr-2 h-5 w-5" /> Scholar Login
              </Button>
              {user && (
                <Link href="/" className="block mt-4">
                  <p className="text-xs text-muted-foreground hover:underline">Return to Home Page</p>
                </Link>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <div className="navy-gradient py-12 pt-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <BrainCircuit className="h-96 w-96 -mr-20 -mt-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Badge className="bg-accent text-white border-none uppercase text-[10px] font-bold px-3 py-1">Elite Tier</Badge>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Level {studentData?.level || 1} Scholar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline uppercase tracking-tighter">Welcome, {user?.displayName?.split(' ')[0] || 'Scholar'}!</h1>
              <p className="text-white/60 font-light italic">"Precision in practice leads to excellence in performance."</p>
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
                <Card key={i} className="border-none shadow-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-default bg-white rounded-[2rem]">
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

            <Card className="border-none shadow-2xl overflow-hidden bg-white rounded-[2.5rem]">
              <CardHeader className="border-b bg-muted/30 py-6 px-8 flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-headline flex items-center gap-2 text-primary uppercase tracking-tight">
                    <Clock className="h-5 w-5 text-accent" /> Daily Learning Path
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">Complete tasks to unlock strategy milestones.</p>
                </div>
                <Badge variant="outline" className="border-accent text-accent font-bold">120 XP Reward</Badge>
              </CardHeader>
              <CardContent className="p-0">
                {[
                  { time: "04:00 PM", task: "Live Session: Analytical Physics", type: "Class", done: false, xp: 50 },
                  { time: "06:30 PM", task: "Self Study: Calculus Module 2", type: "Target", done: true, xp: 30 },
                  { time: "08:00 PM", task: "AI Diagnostic: Weekly Mock Test", type: "Exam", done: false, xp: 40 },
                ].map((item, i) => (
                  <div key={i} className="group p-6 border-b last:border-0 hover:bg-muted/30 transition-colors flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <div className="text-xs font-bold text-muted-foreground w-20">{item.time}</div>
                      <div className="space-y-1">
                        <p className={`font-bold ${item.done ? 'line-through text-muted-foreground' : 'text-primary'}`}>{item.task}</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-[9px] uppercase font-bold">{item.type}</Badge>
                          <span className="text-[10px] text-accent font-bold">+{item.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all ${item.done ? 'bg-green-500 border-green-500 text-white' : 'border-muted-foreground opacity-30 group-hover:opacity-100'}`}>
                      {item.done ? <Zap className="h-4 w-4 fill-current" /> : <div className="h-1 w-1 bg-muted-foreground rounded-full" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden relative group rounded-[2.5rem]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <MessageCircleQuestion className="h-32 w-32" />
              </div>
              <CardContent className="p-10 space-y-4 relative z-10">
                <h3 className="text-2xl font-bold font-headline uppercase">Stuck on a concept?</h3>
                <p className="text-white/60 max-w-md">Our neural doubt-solver provides instant solutions for CBSE, ICSE, and NDA patterns.</p>
                <div className="flex pt-4">
                  <Link href="/assistant">
                    <Button className="bg-accent text-white hover:bg-accent/90 font-bold uppercase text-xs tracking-widest px-10 h-12 shadow-xl">Launch AI Solver <ChevronRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-accent text-white overflow-hidden rounded-[2rem]">
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-headline uppercase">{studentData?.targetExam || "NDA 2026"} Target</h3>
                  <Target className="h-8 w-8 opacity-40" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase opacity-80">
                    <span>Syllabus Covered</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-1.5 bg-white/20" />
                </div>
                <p className="text-xs text-white/70 italic leading-relaxed">"Your consistency index is 12% higher than average."</p>
                <Link href="/ai-study-planner">
                  <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10 font-bold uppercase text-[10px] h-12 mt-4 tracking-widest">Refine Strategy</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white rounded-[2rem]">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] uppercase font-bold text-primary tracking-widest flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent fill-current" /> Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {["Math Wizard", "7 Day Streak", "Night Owl", "Doubt Solver"].map((label, i) => (
                  <Badge key={i} className="py-2 px-4 rounded-full border-none font-bold text-[9px] uppercase shadow-sm bg-muted text-primary">
                    {label}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm p-6 text-center space-y-2 bg-primary/5 rounded-2xl">
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Support Hotline</p>
              <p className="text-sm font-bold text-primary">+91 78785 53385</p>
              <p className="text-[10px] text-muted-foreground">Direct access to Sahastradhara Hub.</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
