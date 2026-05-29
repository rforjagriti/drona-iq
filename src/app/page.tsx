import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ShieldCheck, TrendingUp, Users, ArrowRight, BrainCircuit, Home, Target, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-student');

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Navbar />
      
      {/* SaaS Style Hero */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] animate-pulse"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <Badge variant="secondary" className="px-6 py-2 text-[10px] font-bold bg-accent text-white uppercase tracking-[0.3em] border-none rounded-full">
                Admission 2026-27 Open
              </Badge>
              <h1 className="font-headline text-5xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
                Dehradun’s Smart <br/> <span className="text-accent italic">Success</span> <br/> Ecosystem
              </h1>
              <p className="text-xl text-white/70 max-w-lg leading-relaxed font-light">
                Elite offline coaching combined with AI-driven home tuition and parent monitoring. "Yahan Sapne Nahi, Officers Tayaar Hote Hain."
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="/academic-health-check">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-lg px-10 py-8 h-auto shadow-2xl uppercase tracking-widest font-extrabold rounded-full transition-all hover:-translate-y-1">
                    Free AI Checkup <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-10 py-8 h-auto uppercase tracking-widest font-extrabold rounded-full">
                    Book Trial Class
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative lg:block hidden animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[120px]"></div>
              <div className="relative glass p-4 rounded-[3rem]">
                {heroImage && (
                  <Image 
                    src={heroImage.imageUrl} 
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="rounded-[2.5rem] object-cover h-[500px]"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] flex items-center gap-6 max-w-sm premium-shadow">
                  <div className="bg-primary p-4 rounded-2xl text-accent shadow-lg">
                    <BrainCircuit className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Live Engine</p>
                    <p className="text-primary font-bold text-sm">99.4% AI Precision in mapping learning gaps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">Beyond Conventional Coaching</h2>
          <p className="text-muted-foreground text-xl font-light">The strongest student success pillars in North India.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Home, title: "Elite Home Tuition", desc: "Verified subject experts delivered to your doorstep. Local Dehradun network.", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: BrainCircuit, title: "AI Diagnostic", desc: "Map exactly where a student is struggling down to the sub-concept level.", color: "text-accent", bg: "bg-accent/10" },
            { icon: Users, title: "Parent Tracking", desc: "Weekly reports, attendance, and monthly performance charts via app.", color: "text-green-500", bg: "bg-green-50" },
            { icon: Target, title: "NDA Foundation", desc: "Specialized defense training at Sahastradhara Road Hub.", color: "text-red-500", bg: "bg-red-50" },
            { icon: Star, title: "Verified Tutors", desc: "Only top 5% tutors pass our subject and psychometric screening.", color: "text-yellow-500", bg: "bg-yellow-50" },
            { icon: TrendingUp, title: "XP Gamification", desc: "Daily tasks and leaderboards to keep students motivated.", color: "text-purple-500", bg: "bg-purple-50" },
          ].map((feature, i) => (
            <Card key={i} className="border-none premium-shadow hover:translate-y-[-10px] transition-all duration-300 rounded-[2.5rem] group overflow-hidden">
              <CardContent className="p-12 space-y-6">
                <div className={`${feature.bg} p-5 w-fit rounded-2xl ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary uppercase tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-[0.9]">The Student <br/> <span className="text-accent italic text-7xl">Journey</span></h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "AI Assessment", desc: "Identify foundational learning gaps with our proprietary diagnostic." },
                  { step: "02", title: "Custom Study Plan", desc: "Get a hyper-personalized routine optimized for board or NDA goals." },
                  { step: "03", title: "Elite Mentorship", desc: "Learn from top faculty at our Sahastradhara Road hub or at home." },
                  { step: "04", title: "Growth Tracking", desc: "Weekly mock tests and parent progress updates via the OS." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-4xl font-extrabold text-accent/20 group-hover:text-accent transition-colors font-headline">{item.step}</span>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold font-headline uppercase">{item.title}</h4>
                      <p className="text-white/60 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-12 rounded-[3rem] text-center space-y-8">
              <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-3xl font-bold font-headline uppercase">Enrollment Open</h3>
              <p className="text-white/70 text-lg font-light">Limited seats per batch to ensure focused attention. "Yahan Sapne Nahi, Officers Tayaar Hote Hain."</p>
              <div className="grid gap-4">
                <Link href="/admissions">
                  <Button className="w-full h-16 bg-accent hover:bg-accent/90 text-white font-headline uppercase tracking-widest font-extrabold rounded-2xl">Apply for Admission</Button>
                </Link>
                <div className="flex items-center justify-center gap-6 pt-4 text-xs font-bold uppercase tracking-widest text-white/50">
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dehradun Hub</span>
                  <span className="flex items-center gap-2 text-accent"><Star className="h-4 w-4 fill-current" /> ISO Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="bg-white pt-24 pb-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center space-x-2">
                <div className="rounded-xl bg-primary p-2">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <span className="font-headline text-4xl font-extrabold tracking-tighter text-primary uppercase">DRONA IQ</span>
              </div>
              <p className="max-w-md text-muted-foreground text-lg leading-relaxed font-light">
                Droneshwar Defence Academy's digital OS. Transforming the academic landscape of Dehradun through technology-empowered education.
              </p>
              <div className="space-y-4">
                <p className="font-bold text-primary uppercase text-xs tracking-widest">Headquarters</p>
                <p className="text-muted-foreground text-sm flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-8">Ecosystem</h4>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/academic-health-check" className="hover:text-accent transition-colors">AI Health Check</Link></li>
                <li><Link href="/career-guidance" className="hover:text-accent transition-colors">Career Guidance</Link></li>
                <li><Link href="/home-tuition" className="hover:text-accent transition-colors">Home Tuition</Link></li>
                <li><Link href="/results" className="hover:text-accent transition-colors">Success Stories</Link></li>
                <li><Link href="/why-drona-iq" className="hover:text-accent transition-colors">Why DIQ?</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-8">Direct Connect</h4>
              <ul className="space-y-6">
                <li className="space-y-1">
                  <p className="text-[10px] font-bold text-accent uppercase">Admissions</p>
                  <p className="text-primary font-bold">+91 7878553385</p>
                </li>
                <li className="space-y-1">
                  <p className="text-[10px] font-bold text-accent uppercase">Support</p>
                  <p className="text-primary font-bold">+91 6399000440</p>
                </li>
                <li className="space-y-1">
                  <p className="text-[10px] font-bold text-accent uppercase">Community</p>
                  <Link href="https://t.me/droneshwardefenceacademy" className="text-primary font-bold hover:underline">@droneshwardefenceacademy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t text-center space-y-4">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
              © 2024 Drona IQ Success Ecosystem. All Rights Reserved. 
            </p>
            <p className="text-[10px] text-muted-foreground/50 max-w-2xl mx-auto">
              Drona IQ is a property of Droneshwar Defence Academy (DrDA). ISO 9001:2015 Certified Institution for Academic Excellence in Defense and Foundation Training.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
