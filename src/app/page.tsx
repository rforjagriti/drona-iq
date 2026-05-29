
import { Navbar } from '@/components/navbar';
import { CompetitiveMatrix } from '@/components/competitive-matrix';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ShieldCheck, TrendingUp, Users, ArrowRight, BrainCircuit, Globe, MessageSquareQuote, Home, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-student');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-6 py-2 text-xs font-bold bg-accent text-white uppercase tracking-[0.3em] border-none rounded-full">
                  Admission 2026-27 Open
                </Badge>
                <h1 className="font-headline text-5xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
                  Engineering <br/> <span className="text-accent italic">Success</span> <br/> in Dehradun
                </h1>
              </div>
              <p className="text-2xl text-white/70 max-w-lg leading-relaxed font-light">
                Elite human mentorship meets world-class AI diagnostic technology. For Classes 5-12, NDA, and JEE.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="/academic-health-check">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-lg px-10 py-8 h-auto shadow-2xl uppercase tracking-widest font-extrabold rounded-full">
                    Free AI Checkup <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/home-tuition">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-10 py-8 h-auto uppercase tracking-widest font-extrabold rounded-full">
                    Find Home Tutor
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-white/50 pt-8 border-t border-white/10 max-w-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">98% Progress rate</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:block hidden animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[120px]"></div>
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                {heroImage && (
                  <Image 
                    src={heroImage.imageUrl} 
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="object-cover h-[600px]"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl flex items-center gap-6">
                  <div className="bg-primary p-4 rounded-2xl text-accent">
                    <BrainCircuit className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Live Diagnosis</p>
                    <p className="text-primary font-bold text-lg font-headline">AI successfully mapped 14 learning gaps for Rohan (Class 10).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Home Tuition", link: "/home-tuition", desc: "Verified subject experts delivered to your doorstep." },
              { icon: BrainCircuit, title: "AI Diagnostic", link: "/academic-health-check", desc: "Pinpoint learning gaps with precision analysis." },
              { icon: Users, title: "Parent Tracking", link: "/parent-dashboard", desc: "Real-time updates on child's performance & tests." },
              { icon: GraduationCap, title: "Classroom Hub", link: "/admissions", desc: "Elite coaching center at Rajpur Road, Dehradun." },
            ].map((s, i) => (
              <Link href={s.link} key={i}>
                <Card className="h-full border-none shadow-xl hover:translate-y-[-10px] transition-all duration-300 rounded-[2rem] group">
                  <CardContent className="p-10 space-y-6">
                    <div className="bg-primary/5 p-4 w-16 h-16 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline text-primary">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CompetitiveMatrix />

      {/* Trust & Local Focus */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold font-headline leading-tight">The Valley's First <br/> <span className="text-accent italic">Data-Driven</span> <br/> Learning Hub</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/20 p-2 rounded-lg"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                  <p className="text-xl text-white/80 font-light italic">"We don't just teach. We diagnose, plan, and execute for results."</p>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/20 p-2 rounded-lg"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
                  <p className="text-xl text-white/80 font-light italic">"Dehradun's only coaching center with an ISO-certified AI diagnostic core."</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center space-y-2">
                <p className="text-5xl font-extrabold text-accent font-headline">500+</p>
                <p className="text-xs uppercase font-bold tracking-widest text-white/50">Students Enrolled</p>
              </div>
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center space-y-2">
                <p className="text-5xl font-extrabold text-accent font-headline">24%</p>
                <p className="text-xs uppercase font-bold tracking-widest text-white/50">Avg. Score Improvement</p>
              </div>
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center space-y-2 col-span-2">
                <p className="text-5xl font-extrabold text-accent font-headline">99.4%</p>
                <p className="text-xs uppercase font-bold tracking-widest text-white/50">AI Diagnostic Precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 bg-muted/20 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary p-1.5">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <span className="font-headline text-3xl font-bold tracking-tight text-primary">DRONA IQ</span>
              </div>
              <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
                Transforming the academic standard of Dehradun through technology-empowered education. Elite home tuition and classroom coaching for the modern student.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-8">Success Ecosystem</h4>
              <ul className="space-y-4">
                <li><Link href="/academic-health-check" className="hover:text-accent transition-colors">AI Health Check</Link></li>
                <li><Link href="/home-tuition" className="hover:text-accent transition-colors">Home Tuition</Link></li>
                <li><Link href="/parent-dashboard" className="hover:text-accent transition-colors">Parent Portal</Link></li>
                <li><Link href="/results" className="hover:text-accent transition-colors">Results & Ranks</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-8">Connect</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>Rajpur Road, Jakhan, Dehradun</li>
                <li>+91 99999 00000</li>
                <li>admissions@dronaiq.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
