"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X, ChevronDown, BrainCircuit, Users, ShieldCheck, LayoutDashboard, User, Sparkles, LogIn, LogOut, BookOpen, Target, Star } from 'lucide-react';
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary p-1.5 shadow-sm">
            <GraduationCap className="h-6 w-6 text-accent" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tighter text-primary">DRONA IQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/academic-health-check" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">AI Health</Link>
          <Link href="/home-tuition" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Home Tuition Network</Link>
          <Link href="/why-drona-iq" className="text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Why DIQ?</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
              Portals <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2 rounded-xl border-none shadow-2xl">
              <DropdownMenuLabel className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest p-2">Portals & Hubs</DropdownMenuLabel>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/student" className="flex items-center gap-3">
                  <div className="bg-primary/5 p-2 rounded-lg"><User className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-bold text-xs">Student Hub</p>
                    <p className="text-[9px] text-muted-foreground">Daily targets & XP tracking</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/parent-dashboard" className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg"><Users className="h-4 w-4 text-accent" /></div>
                  <div>
                    <p className="font-bold text-xs">Parent Portal</p>
                    <p className="text-[9px] text-muted-foreground">Performance & tests tracking</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/tutor-portal" className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg"><ShieldCheck className="h-4 w-4 text-green-600" /></div>
                  <div>
                    <p className="font-bold text-xs">Tutor Network</p>
                    <p className="text-[9px] text-muted-foreground">Manage classes & expertise</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/admin/leads" className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg"><LayoutDashboard className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="font-bold text-xs">Admin CRM</p>
                    <p className="text-[9px] text-muted-foreground">Unified Lead Management</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
              AI Hub <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-none shadow-2xl">
              <DropdownMenuLabel className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest p-2">Neural Engine</DropdownMenuLabel>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/ai-study-planner" className="flex items-center gap-3">
                  <Target className="h-4 w-4 text-accent" /> Study Planner
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/assistant" className="flex items-center gap-3">
                  <BrainCircuit className="h-4 w-4 text-accent" /> Academic Mentor
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/career-guidance" className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-accent" /> Career Guidance
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          {loading ? (
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
          ) : !user ? (
            <Button onClick={handleLogin} className="font-headline font-bold uppercase tracking-widest text-[9px] h-9 px-6 rounded-full shadow-lg bg-primary text-white flex items-center gap-2">
              <LogIn className="h-3 w-3" /> Secure Login
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-3 pr-2 pl-2 py-1 rounded-full border bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] font-bold text-primary leading-none uppercase">{user.displayName?.split(' ')[0]}</p>
                    <p className="text-[8px] text-muted-foreground font-bold tracking-tighter">Verified User</p>
                  </div>
                  <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                    <AvatarImage src={user.photoURL || ''} />
                    <AvatarFallback className="bg-accent text-white uppercase text-[10px]">{user.displayName?.[0] || 'U'}</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-none shadow-2xl">
                <DropdownMenuLabel className="text-[10px] font-bold text-muted-foreground uppercase">{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg py-3">
                  <Link href="/student" className="flex items-center gap-2"><User className="h-4 w-4" /> My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg py-3">
                  <Link href="/dashboard" className="flex items-center gap-2"><LayoutDashboard className="h-4 w-4" /> Reports</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer rounded-lg py-3 flex items-center gap-2">
                  <LogOut className="h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background p-6 space-y-6 animate-in slide-in-from-top duration-300 shadow-xl overflow-y-auto max-h-[80vh]">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/academic-health-check" className="block text-[10px] font-bold uppercase bg-muted/50 p-4 rounded-xl text-center" onClick={() => setIsOpen(false)}>AI Health</Link>
            <Link href="/home-tuition" className="block text-[10px] font-bold uppercase bg-muted/50 p-4 rounded-xl text-center" onClick={() => setIsOpen(false)}>Home Tuition</Link>
          </div>
          <div className="pt-4 border-t space-y-4">
            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Dedicated Portals</p>
            <Link href="/student" className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl font-bold text-xs" onClick={() => setIsOpen(false)}><User className="h-4 w-4 text-primary" /> Student Hub</Link>
            <Link href="/parent-dashboard" className="flex items-center gap-3 p-3 bg-accent/10 rounded-xl font-bold text-xs" onClick={() => setIsOpen(false)}><Users className="h-4 w-4 text-accent" /> Parent Portal</Link>
            <Link href="/tutor-portal" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl font-bold text-xs" onClick={() => setIsOpen(false)}><ShieldCheck className="h-4 w-4 text-green-600" /> Tutor Network</Link>
            <Link href="/admin/leads" className="flex items-center gap-3 p-3 bg-muted rounded-xl font-bold text-xs" onClick={() => setIsOpen(false)}><LayoutDashboard className="h-4 w-4 text-muted-foreground" /> Admin CRM</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
