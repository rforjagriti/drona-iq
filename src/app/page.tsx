import { Navbar } from '@/components/navbar';
import { CompetitiveMatrix } from '@/components/competitive-matrix';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ShieldCheck, TrendingUp, Users, ArrowRight, BrainCircuit, Globe, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-student');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold bg-accent text-white uppercase tracking-widest border-none">
                Admission 2026-27 Open
              </Badge>
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Engineering <span className="text-accent italic">Exceptional</span> Futures in Dehradun
              </h1>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed font-light">
                Why guess your child's potential? Drona IQ combines elite human mentorship with AI-driven diagnostics to pinpoint and solve learning gaps instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/diagnostic">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-lg px-8 py-7 h-auto">
                    Take AI Academic Checkup <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-8 py-7 h-auto">
                    Speak to a Counselor
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-white/60 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-sm">98% Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:block hidden animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                {heroImage && (
                  <Image 
                    src={heroImage.imageUrl} 
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-2 rounded-lg">
                      <BrainCircuit className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Real-time Insight</p>
                      <p className="text-primary font-bold">AI accurately identified Math gaps in 30 seconds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Local Specificity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline mb-4">A Legacy of Excellence in the Valley</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by over 500+ Dehradun families for NDA, JEE, and Board Foundation coaching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all group">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Personalized Mentorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every student is matched with a dedicated mentor who tracks progress beyond just classroom hours.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all group">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">National Curriculum +</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alignment with CBSE/ICSE plus specific defense foundation modules unique to the Dehradun region.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all group">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Proven Result Hub</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategically located in Rajpur Road, serving the heart of student excellence in the hills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features Highlight */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-8 text-primary leading-tight">
                24/7 Academic Support, <br/>
                Powered by <span className="text-accent italic">GenAI</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary rounded-xl p-3 shrink-0 h-fit">
                    <BrainCircuit className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-headline">AI Diagnostic Engine</h4>
                    <p className="text-muted-foreground">Upload any assessment result and our AI generates a custom learning path within seconds, saving weeks of trial and error.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary rounded-xl p-3 shrink-0 h-fit">
                    <MessageSquareQuote className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-headline">24/7 Scholar Assistant</h4>
                    <p className="text-muted-foreground">Students can ask academic questions anytime. Our assistant provides curriculum-specific guidance tailored to the Dehradun ecosystem.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/assistant">
                  <Button size="lg" className="font-headline">Experience AI Assistant</Button>
                </Link>
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10 space-y-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-accent font-bold text-xs uppercase mb-2">Diagnostic Active</p>
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-white font-headline font-bold">Mathematics Gap Analysis</h5>
                    <span className="text-white/60 text-xs">Processing...</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-3/4 animate-pulse"></div>
                    </div>
                    <p className="text-white/70 text-sm italic">"Identified weakness in Quadratic Equations. Recommending Chapter 4 focus path..."</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-white/50 text-xs uppercase">Accuracy</p>
                    <p className="text-white text-xl font-bold font-headline">99.4%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-white/50 text-xs uppercase">Processing Time</p>
                    <p className="text-white text-xl font-bold font-headline">2.4s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompetitiveMatrix />

      {/* Final CTA / Lead Magnet */}
      <section id="admissions" className="py-24 navy-gradient text-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
              Ready to See the <span className="text-accent italic">Drona IQ</span> Difference?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Start with a free Academic Health Checkup. Get a personalized report of your child's strengths and weaknesses delivered to your inbox today.
            </p>
            <div className="pt-8">
              <Link href="/diagnostic">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-xl px-12 py-8 h-auto rounded-full shadow-2xl hover:scale-105 transition-transform">
                  Get Free Diagnostic Report Now
                </Button>
              </Link>
            </div>
            <p className="text-white/40 text-sm">
              No credit card required. Trusted by schools across Dehradun.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary border-t border-white/5 text-white/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="rounded-lg bg-accent p-1.5">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="font-headline text-2xl font-bold tracking-tight text-white">DRONA IQ</span>
              </Link>
              <p className="max-w-md leading-relaxed">
                Dehradun's premier academic center merging elite military-inspired discipline with world-class AI diagnostic technology. Shaping the leaders of tomorrow, today.
              </p>
            </div>
            <div>
              <h5 className="text-white font-headline font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-sm">
                <li><Link href="/diagnostic" className="hover:text-accent transition-colors">AI Diagnostic Tool</Link></li>
                <li><Link href="/assistant" className="hover:text-accent transition-colors">Study Assistant</Link></li>
                <li><Link href="/dashboard" className="hover:text-accent transition-colors">Parent Portal</Link></li>
                <li><Link href="/admissions" className="hover:text-accent transition-colors">Admissions 2026</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-headline font-bold mb-6">Contact Us</h5>
              <ul className="space-y-4 text-sm">
                <li>Rajpur Road, Near Jakhan,</li>
                <li>Dehradun, Uttarakhand 248001</li>
                <li>+91 99999 00000</li>
                <li>admissions@dronaiq.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs gap-4">
            <p>© 2026 Drona IQ Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Admissions FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
