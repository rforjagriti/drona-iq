
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary p-1.5">
            <GraduationCap className="h-6 w-6 text-accent" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight text-primary">DRONA IQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/academic-health-check" className="text-sm font-semibold hover:text-accent transition-colors">AI Health Check</Link>
          <Link href="/home-tuition" className="text-sm font-semibold hover:text-accent transition-colors">Home Tuition</Link>
          <Link href="/results" className="text-sm font-semibold hover:text-accent transition-colors">Results</Link>
          <Link href="/why-drona-iq" className="text-sm font-semibold hover:text-accent transition-colors">Why Drona IQ</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold hover:text-accent outline-none">
              Dashboards <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/parent-dashboard">Parent Portal</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/student-dashboard">Student Portal</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/admissions">
            <Button className="hidden sm:flex font-headline font-bold uppercase tracking-tighter" size="sm">
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
          <Link href="/academic-health-check" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>AI Health Check</Link>
          <Link href="/home-tuition" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>Home Tuition</Link>
          <Link href="/results" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>Results</Link>
          <Link href="/why-drona-iq" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>Why Drona IQ</Link>
          <div className="pt-2 border-t">
            <Link href="/parent-dashboard" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>Parent Dashboard</Link>
            <Link href="/student-dashboard" className="block text-lg font-medium p-2" onClick={() => setIsOpen(false)}>Student Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
