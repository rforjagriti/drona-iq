"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  Users, 
  User, 
  Sparkles, 
  LogIn, 
  LogOut, 
  ListChecks, 
  Phone, 
  MapPin, 
  Clock,
  ShieldAlert,
  UserCheck,
  BookOpen,
  Wifi
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useUser, useAuth, useFirestore } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { Badge } from './ui/badge';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { user, loading } = useUser();
  const auth = useAuth();
  const db = useFirestore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async () => {
    if (!auth || !db) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Services are initializing. Please try again in a moment.",
      });
      return;
    }
    
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      const userRef = doc(db, 'users', loggedUser.uid);
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
      
      toast({
        title: "Success",
        description: `Welcome to Drona IQ, ${loggedUser.displayName}!`,
      });
    } catch (error: any) {
      console.error("Auth Error:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Could not authenticate your account. Please try again.",
      });
    }
  };

  const handleLogout = () => {
    if (!auth) return;
    signOut(auth).then(() => {
      toast({
        title: "Logged Out",
        description: "Securely signed out of the Success OS.",
      });
    });
  };

  return (
    <header className="fixed top-0 z-[100] w-full flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-primary text-white py-2 px-4 border-b border-white/5 backdrop-blur-md relative z-[102]">
        <div className="container mx-auto flex justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-4 md:gap-8 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap"><MapPin className="h-3 w-3 text-accent shrink-0" /> Sahastradhara Road, Dehradun</span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap"><Clock className="h-3 w-3 text-accent shrink-0" /> Mon - Sat: 09:00 - 20:00</span>
          </div>
          <div className="flex gap-6 shrink-0 items-center">
            {mounted && db && (
              <span className="hidden md:flex items-center gap-1.5 text-green-400 border border-green-400/20 px-2 py-0.5 rounded-full bg-green-400/5">
                <Wifi className="h-2.5 w-2.5" /> SECURE LINK ACTIVE
              </span>
            )}
            <Link href="tel:+917878553385" className="hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="h-3 w-3 text-accent" /> +91 78785 53385
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass border-b border-white/10 shadow-xl relative z-[101] h-20 flex items-center">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="rounded-xl bg-primary p-2 shadow-lg group-hover:scale-110 transition-transform border border-white/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-extrabold tracking-tighter text-primary uppercase leading-none">DRONA IQ</span>
              <span className="text-[8px] font-bold text-accent uppercase tracking-widest mt-0.5">Education OS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/why-drona-iq" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Why DIQ?</Link>
            <Link href="/academic-health-check" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Audit</Link>
            <Link href="/classes" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Batches</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
                Portals <ChevronDown className="h-3 w-3 text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-3 rounded-2xl border-none shadow-2xl bg-white">
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/student" className="flex items-center gap-3">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary"><User className="h-4 w-4" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs uppercase">Student Hub</span>
                      <span className="text-[8px] text-muted-foreground">Gamified XP & Mentorship</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/parent-dashboard" className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg text-accent"><Users className="h-4 w-4" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs uppercase">Parent Portal</span>
                      <span className="text-[8px] text-muted-foreground">Live Progress Monitor</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/tutor/dashboard" className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><UserCheck className="h-4 w-4" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs uppercase text-blue-700">Educator Portal</span>
                      <span className="text-[8px] text-muted-foreground">Manage Faculty Tasks</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3 bg-red-50/50">
                  <Link href="/admin" className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600"><ShieldAlert className="h-4 w-4" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs uppercase text-red-700">Admin Command</span>
                      <span className="text-[8px] text-muted-foreground">Lead CRM & Control</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
                AI Tools <ChevronDown className="h-3 w-3 text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 rounded-2xl border-none shadow-2xl bg-white">
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/revision-generator" className="flex items-center gap-3">
                    <ListChecks className="h-4 w-4 text-accent" /> <span className="font-bold text-xs uppercase">AI Revision Pack</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/career-guidance" className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-accent" /> <span className="font-bold text-xs uppercase">Success Predictor</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/blog" className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-accent" /> <span className="font-bold text-xs uppercase">Success Journal</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {!mounted ? (
              <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
            ) : (
              <>
                {loading ? (
                  <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                ) : !user ? (
                  <Button onClick={handleLogin} className="font-headline font-extrabold uppercase tracking-widest text-[9px] h-11 px-8 rounded-full shadow-xl bg-primary text-white flex items-center gap-2 hover:scale-105 transition-all">
                    <LogIn className="h-3.5 w-3.5 text-accent" /> Login
                  </Button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <Avatar className="h-9 w-9 border-2 border-white shadow-md">
                        <AvatarImage src={user.photoURL || ''} />
                        <AvatarFallback className="bg-accent text-white uppercase text-[10px] font-extrabold">{user.displayName?.[0] || 'U'}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-3 rounded-2xl border-none shadow-2xl bg-white">
                      <DropdownMenuItem asChild className="cursor-pointer rounded-xl py-3 hover:bg-muted/50">
                        <Link href="/student" className="flex items-center gap-2 font-bold text-xs"><User className="h-4 w-4 text-accent" /> My Success Hub</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer rounded-xl py-3 flex items-center gap-2 font-bold text-xs">
                        <LogOut className="h-4 w-4" /> Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-11 w-11" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 inset-x-0 h-screen bg-white z-[90] p-6 space-y-4 animate-in slide-in-from-top duration-300 overflow-y-auto pb-40">
             <Link href="/why-drona-iq" className="block p-4 bg-muted/50 rounded-2xl font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Why DIQ?</Link>
             <Link href="/academic-health-check" className="block p-4 bg-muted/50 rounded-2xl font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Audit</Link>
             <Link href="/student" className="block p-4 bg-primary/5 rounded-2xl font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Scholar Hub</Link>
             <Link href="/parent-dashboard" className="block p-4 bg-accent/5 rounded-2xl font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Parent Portal</Link>
             <Link href="/admin" className="block p-4 bg-red-50 rounded-2xl font-bold uppercase text-xs text-red-700" onClick={() => setIsOpen(false)}>Admin</Link>
          </div>
        )}
      </nav>
    </header>
  );
}