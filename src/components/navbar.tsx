
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  BrainCircuit, 
  Users, 
  ShieldCheck, 
  LayoutDashboard, 
  User, 
  Sparkles, 
  LogIn, 
  LogOut, 
  ListChecks, 
  Target, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { useState } from 'react';
import { useUser, useAuth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser();
  const auth = useAuth();

  const handleLogin = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  const handleLogout = () => {
    if (!auth) return;
    signOut(auth);
  };

  return (
    <header className="fixed top-0 z-[100] w-full flex flex-col">
      {/* Top Contact Strip */}
      <div className="bg-primary text-white py-2 px-4 border-b border-white/5 backdrop-blur-md relative z-[102]">
        <div className="container mx-auto flex justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-4 md:gap-8 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap"><MapPin className="h-3 w-3 text-accent shrink-0" /> Om Tower, Dehradun</span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap"><Clock className="h-3 w-3 text-accent shrink-0" /> Mon - Sat: 09:00 AM - 08:00 PM</span>
          </div>
          <div className="flex gap-6 shrink-0">
            <Link href="tel:+917878553385" className="hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="h-3 w-3 text-accent" /> +91 78785 53385
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass border-b border-white/10 shadow-xl relative z-[101] h-20 flex items-center">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="rounded-xl bg-primary p-2 shadow-lg group-hover:scale-110 transition-transform border border-white/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-extrabold tracking-tighter text-primary uppercase leading-none">DRONA IQ</span>
              <span className="text-[8px] font-bold text-accent uppercase tracking-widest mt-0.5">Scholar Success OS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/academic-health-check" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">AI Health</Link>
            <Link href="/home-tuition" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Home Tuition</Link>
            <Link href="/results" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Success Log</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
                Dashboards <ChevronDown className="h-3 w-3 text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 rounded-2xl border-none shadow-2xl bg-white">
                <DropdownMenuLabel className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest mb-2 px-2">Unified Portals</DropdownMenuLabel>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3 hover:bg-muted/50">
                  <Link href="/student" className="flex items-center gap-3">
                    <div className="bg-primary/5 p-2 rounded-lg"><User className="h-4 w-4 text-primary" /></div>
                    <div>
                      <p className="font-bold text-xs text-primary">Student Hub</p>
                      <p className="text-[9px] text-muted-foreground">Daily tasks & XP engine</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3 hover:bg-muted/50">
                  <Link href="/parent-dashboard" className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg"><Users className="h-4 w-4 text-accent" /></div>
                    <div>
                      <p className="font-bold text-xs text-primary">Parent Portal</p>
                      <p className="text-[9px] text-muted-foreground">Analytics & growth charts</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
                AI Intelligence <ChevronDown className="h-3 w-3 text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 rounded-2xl border-none shadow-2xl bg-white">
                <DropdownMenuLabel className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest mb-2 px-2">Reasoning Core</DropdownMenuLabel>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/revision-generator" className="flex items-center gap-3">
                    <ListChecks className="h-4 w-4 text-accent" /> <span className="font-bold text-xs">AI Revision Pack</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3">
                  <Link href="/career-guidance" className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-accent" /> <span className="font-bold text-xs">Career Predictor</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
            ) : !user ? (
              <Button onClick={handleLogin} className="font-headline font-extrabold uppercase tracking-widest text-[9px] h-11 px-8 rounded-full shadow-xl bg-primary text-white flex items-center gap-2 hover:scale-105 transition-all">
                <LogIn className="h-3.5 w-3.5 text-accent" /> Portal Login
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="flex items-center gap-3 pr-2 pl-2 py-1.5 rounded-full border bg-muted/30 hover:bg-muted/50 transition-colors shadow-sm">
                    <Avatar className="h-9 w-9 border-2 border-white shadow-md">
                      <AvatarImage src={user.photoURL || ''} />
                      <AvatarFallback className="bg-accent text-white uppercase text-[10px] font-extrabold">{user.displayName?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-3 rounded-2xl border-none shadow-2xl bg-white">
                  <DropdownMenuItem asChild className="cursor-pointer rounded-xl py-3 hover:bg-muted/50">
                    <Link href="/student" className="flex items-center gap-2 font-bold text-xs"><User className="h-4 w-4 text-accent" /> My Success Hub</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer rounded-xl py-3 flex items-center gap-2 font-bold text-xs hover:bg-red-50">
                    <LogOut className="h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden rounded-xl h-11 w-11" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 inset-x-0 h-screen bg-white z-[90] p-6 space-y-8 animate-in slide-in-from-top duration-300 overflow-y-auto pb-40">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/academic-health-check" className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-[2rem] text-center" onClick={() => setIsOpen(false)}>
                <BrainCircuit className="h-8 w-8 text-accent mb-2" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">AI Health</span>
              </Link>
              <Link href="/home-tuition" className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-[2rem] text-center" onClick={() => setIsOpen(false)}>
                <Users className="h-8 w-8 text-primary mb-2" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Home Tuition</span>
              </Link>
            </div>
            
            <div className="space-y-4">
              <Link href="/student" className="flex items-center gap-4 p-5 bg-primary/5 rounded-2xl font-bold text-sm" onClick={() => setIsOpen(false)}>
                <User className="h-5 w-5 text-primary" /> Scholar Hub
              </Link>
              <Link href="/results" className="flex items-center gap-4 p-5 bg-muted rounded-2xl font-bold text-sm" onClick={() => setIsOpen(false)}>
                <Target className="h-5 w-5 text-muted-foreground" /> Success Log
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
