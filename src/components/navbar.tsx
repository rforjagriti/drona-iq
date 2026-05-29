"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X, ChevronDown, BrainCircuit, Users, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/academic-health-check" className="text-xs font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">AI Health</Link>
          <Link href="/home-tuition" className="text-xs font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors">Home Tuition</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
              AI Tools <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-none shadow-2xl">
              <DropdownMenuLabel className="text-[10px] font-bold uppercase text-muted-foreground">Smart Assistants</DropdownMenuLabel>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/ai-study-planner" className="flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4 text-accent" /> AI Study Planner
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/assistant" className="flex items-center gap-3">
                  <BrainCircuit className="h-4 w-4 text-accent" /> Scholar Assistant
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/diagnostic" className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-accent" /> Diagnostic Pro
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-primary/70 hover:text-accent outline-none">
              Portals <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-none shadow-2xl">
              <DropdownMenuLabel className="text-[10px] font-bold uppercase text-muted-foreground">Management Hub</DropdownMenuLabel>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/parent-dashboard" className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-primary" /> Parent Portal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/student-dashboard" className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-primary" /> Student Portal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/tutor-portal" className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-accent" /> Tutor Portal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-3">
                <Link href="/admin/leads" className="flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4 text-primary" /> Admin CRM
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/admissions">
            <Button className="hidden sm:flex font-headline font-bold uppercase tracking-widest text-xs h-10 px-6 rounded-full" size="sm">
              Enroll Now
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="/academic-health-check" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>AI Health Check</Link>
          <Link href="/home-tuition" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>Home Tuition</Link>
          <div className="pt-2 border-t">
            <Link href="/ai-study-planner" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>AI Study Planner</Link>
            <Link href="/tutor-portal" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>Tutor Portal</Link>
            <Link href="/parent-dashboard" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>Parent Dashboard</Link>
            <Link href="/student-dashboard" className="block text-sm font-bold uppercase p-2" onClick={() => setIsOpen(false)}>Student Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
