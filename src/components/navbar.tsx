import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary p-1.5">
            <GraduationCap className="h-6 w-6 text-accent" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight text-primary">DRONA IQ</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/diagnostic" className="text-sm font-medium hover:text-accent transition-colors">AI Diagnostic</Link>
          <Link href="/assistant" className="text-sm font-medium hover:text-accent transition-colors">Study Assistant</Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">Parent Portal</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/admissions">
            <Button className="hidden sm:flex font-headline font-semibold" variant="default">
              Start Assessment
            </Button>
          </Link>
          <Button size="icon" variant="ghost" className="md:hidden">
            <ShieldCheck className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}