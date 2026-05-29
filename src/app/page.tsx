
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { 
  GraduationCap, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  BrainCircuit, 
  Star, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Zap, 
  Award, 
  Clock, 
  LayoutDashboard, 
  Sparkles,
  Search,
  ChevronRight,
  UserCheck,
  Flag,
  Globe,
  Milestone,
  Trophy,
  Activity,
  BarChart3,
  Quote,
  Play,
  Youtube,
  Target,
  MessageCircle,
  Eye,
  ArrowUpRight,
  Phone,
  Mail,
  Scale,
  Microscope,
  Calculator,
  Library,
  Database,
  Users,
  Shield,
  Heart,
  AlertTriangle,
  Fingerprint,
  LineChart,
  Stethoscope,
  Plane,
  Briefcase,
  History,
  Lightbulb,
  Camera,
  Video,
  Monitor,
  Check,
  ListChecks,
  ListTodo,
  FileText,
  HandHeart,
  MessageSquare,
  Compass,
  Rocket,
  School,
  PenTool,
  Code,
  Mic,
  User,
  Smile,
  Sun,
  Sunrise,
  Anchor,
  ScanSearch,
  Timer,
  ZapOff,
  Flame,
  Brain,
  Wind
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HomePage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* 0. TOP CONTACT STRIP */}
      <div className="bg-primary text-white py-2.5 px-4 hidden md:block border-b border-white/5 relative z-[110]">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-accent" /> 3rd Floor, Om Tower, Sahastradhara Road, Dehradun</span>
            <span className="flex items-center gap-2"><Clock className="h-3 w-3 text-accent" /> Mon - Sat: 09:00 AM - 08:00 PM</span>
          </div>
          <div className="flex gap-6">
            <Link href="tel:+917878553385" className="hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="h-3 w-3 text-accent" /> +91 78785 53385
            </Link>
            <Link href="tel:+916399000440" className="hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="h-3 w-3 text-accent" /> +91 63990 00440
            </Link>
          </div>
        </div>
      </div>

      <Navbar />
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[110vh] flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-[#05070a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-accent/20 rounded-full blur-[100px] md:blur-[180px] -translate-y-1/2 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-primary/40 rounded-full blur-[100px] md:blur-[180px] translate-y-1/2 opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-10 md:space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border-white/10 bg-white/5 mx-auto lg:mx-0 shadow-2xl">
                  <Badge className="bg-accent text-primary border-none text-[8px] md:text-[10px] font-bold px-3 py-1">PREMIUM</Badge>
                  <span className="text-white/80 text-[9px] md:text-xs font-bold uppercase tracking-[0.3em]">Success Operating System v7.4</span>
                </div>
                <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-extrabold text-white leading-[0.9] tracking-tighter">
                  SMARTER <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">LEARNING.</span> <br className="hidden md:block"/>
                  STRONGER FUTURE.
                </h1>
              </div>
              
              <p className="text-xl md:text-3xl lg:text-4xl text-white/50 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light text-center lg:text-left">
                Dehradun's apex hub where <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> meets <span className="text-accent font-bold">Neural Diagnostics</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start">
                <Link href="/admissions">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-headline text-lg md:text-2xl px-10 md:px-16 py-8 md:py-12 h-auto shadow-[0_0_100px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em] font-extrabold rounded-2xl md:rounded-[2.5rem] transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-headline text-lg md:text-2xl px-10 md:px-16 py-8 md:py-12 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl md:rounded-[2.5rem] backdrop-blur-xl group">
                    AI Health Check <Sparkles className="ml-4 h-6 w-6 md:h-8 md:w-8 text-accent group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10 md:gap-24 pt-12 md:pt-20 border-t border-white/5">
                {[
                  { v: "5000+", l: "Scholars Trained", i: Users },
                  { v: "96.4%", l: "Success Index", i: Trophy },
                  { v: "24/7", l: "AI Mentorship", i: BrainCircuit }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 text-center lg:text-left group cursor-default">
                    <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-accent/10 transition-colors">
                      <stat.i className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl md:text-5xl font-extrabold text-white font-headline tracking-tighter">{stat.v}</p>
                      <p className="text-[10px] md:text-[12px] text-white/30 uppercase font-bold tracking-[0.3em]">{stat.l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative group">
                <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-40"></div>
                <div className="relative glass p-6 rounded-[5rem] shadow-2xl border-white/10 ring-1 ring-white/10 overflow-hidden">
                  <Image 
                    src={getImage('hero-student')?.imageUrl || 'https://picsum.photos/seed/drona_hero_god/1200/1600'} 
                    alt="Drona IQ Excellence"
                    width={1200}
                    height={1600}
                    className="rounded-[4rem] object-cover h-[850px] w-full grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                    priority
                    data-ai-hint="elite student"
                  />
                  <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-[3rem] border-white/20 shadow-2xl backdrop-blur-3xl animate-in slide-in-from-bottom-20 duration-1000 delay-500">
                    <div className="flex items-center gap-8">
                      <div className="bg-accent p-5 rounded-[2rem] text-primary shadow-xl"><TrendingUp className="h-10 w-10" /></div>
                      <div>
                        <p className="text-[12px] font-bold text-white/50 uppercase tracking-[0.3em] mb-2">Real-time Mastery</p>
                        <p className="text-3xl font-bold text-white tracking-tighter">+24.8% Concept Retention</p>
                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-4">
                           <div className="bg-accent h-full w-[82%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARENT TRUST ZONE - EMOTIONAL ANCHOR */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The Foundation of Faith</Badge>
                 <h2 className="text-5xl md:text-9xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">Why Parents <br/> <span className="text-accent italic">Choose Clarity</span></h2>
                 <p className="text-2xl md:text-4xl text-muted-foreground font-light leading-tight italic border-l-[12px] border-accent pl-12 py-4 bg-accent/5 rounded-r-3xl">
                   "Drona IQ gives me the visibility I never had. I finally know exactly where my daughter needs help, down to the single formula level."
                 </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 {[
                   { t: "Live Visibility", d: "Real-time tracking of every session, mark, and behavior.", i: Eye },
                   { t: "ISO Verified", d: "Standardized military-grade pedagogy for civilian education.", i: ShieldCheck },
                   { t: "Safety First", d: "CCTV enabled hubs and 5-tier background verified home tutors.", i: Shield },
                   { t: "Outcome Based", d: "Performance predictions accurate to within +/- 2%.", i: LineChart }
                 ].map((trust, i) => (
                   <div key={i} className="space-y-4 group cursor-default">
                     <div className="bg-muted p-4 w-fit rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                       <trust.i className="h-8 w-8" />
                     </div>
                     <h4 className="text-2xl font-bold font-headline uppercase text-primary tracking-tight">{trust.t}</h4>
                     <p className="text-lg text-muted-foreground font-light leading-relaxed">{trust.d}</p>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute -inset-10 bg-primary/5 rounded-[5rem] rotate-3 -z-10"></div>
               <Image 
                 src={getImage('parent-trust')?.imageUrl || 'https://picsum.photos/seed/drona_parent/1200/1000'} 
                 width={1200} height={1000} alt="Parent Trust" 
                 className="rounded-[4rem] md:rounded-[6rem] shadow-2xl object-cover h-[700px]"
                 data-ai-hint="happy parent child"
               />
               <div className="absolute -top-12 -right-12 glass p-10 rounded-[3rem] border shadow-2xl text-center hidden xl:block">
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-accent fill-current" />)}
                  </div>
                  <p className="text-3xl font-extrabold font-headline text-primary">500+ Reviews</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">The Valley's Best Rated</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDENT SUCCESS METRICS */}
      <section className="py-32 md:py-64 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
              <div className="space-y-6 max-w-4xl">
                <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Data-Driven Outcomes</Badge>
                <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline uppercase tracking-tighter leading-[0.85]">Proven <br/> <span className="text-accent italic">Advantage</span></h2>
              </div>
              <div className="grid grid-cols-2 gap-12">
                 <div className="space-y-2">
                    <p className="text-5xl md:text-8xl font-extrabold font-headline text-accent tracking-tighter">24%</p>
                    <p className="text-[12px] md:text-[14px] font-bold text-white/40 uppercase tracking-[0.4em]">Avg. Grade Jump</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-5xl md:text-8xl font-extrabold font-headline text-white tracking-tighter">92nd</p>
                    <p className="text-[12px] md:text-[14px] font-bold text-white/40 uppercase tracking-[0.4em]">Avg. Percentile</p>
                 </div>
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-12">
              {[
                { l: "Before Drona IQ", v: "72% Marks", c: "text-white/40", w: "40%" },
                { l: "6 Months Post OS", v: "94.6% Marks", c: "text-accent", w: "94%" },
                { l: "Board Success", v: "98% Toppers", c: "text-white", w: "100%" }
              ].map((m, i) => (
                <div key={i} className="space-y-8 bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
                   <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40">{m.l}</p>
                   <p className={`text-4xl md:text-6xl font-extrabold font-headline ${m.c}`}>{m.v}</p>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full bg-accent rounded-full`} style={{width: m.w}}></div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. WHY DRONA IQ EXISTS - EMOTIONAL STORYTELLING */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                   <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Our Purpose</Badge>
                   <h2 className="text-5xl md:text-8xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">Beyond the <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Coaching Factory</span></h2>
                 </div>
                 <div className="space-y-8 text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                   <p>Most tuition centers are just lecture halls. They provide notes, but not <strong>guidance</strong>. They track attendance, but not <strong>comprehension</strong>.</p>
                   <p>Drona IQ was created to solve the <strong>Invisible Learning Gap</strong>—those silent missing concept blocks that cause a student to fail even after 10 hours of self-study.</p>
                   <p>We combine the elite discipline of the <strong>Droneshwar Defence Academy</strong> with high-performance <strong>AI analytics</strong> to ensure no student is ever left guessing.</p>
                 </div>
                 <div className="pt-8 border-t border-muted">
                    <Link href="/about">
                      <Button variant="ghost" className="text-primary font-headline uppercase font-bold tracking-widest text-lg group">
                        Read Our Full Vision <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform" />
                      </Button>
                    </Link>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-10 bg-accent/20 rounded-[5rem] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <Image src="https://picsum.photos/seed/drona_purpose/1200/1200" width={1200} height={1200} alt="Why we exist" className="rounded-[4rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
              </div>
           </div>
        </div>
      </section>

      {/* 5. LETTER TO PARENTS - EMOTIONAL ANCHOR */}
      <section className="py-32 md:py-64 bg-muted/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none"><Quote className="h-[400px] w-[400px]" /></div>
        <div className="container mx-auto px-4 max-w-5xl">
           <Card className="border-none shadow-[0_50px_100px_rgba(0,0,0,0.05)] rounded-[4rem] md:rounded-[6rem] bg-white relative overflow-hidden">
              <div className="p-16 md:p-32 space-y-12">
                 <div className="space-y-6 text-center">
                    <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">A Note from the Core</Badge>
                    <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Letter to <br/> <span className="text-accent italic">The Valley's Parents</span></h2>
                 </div>
                 <div className="space-y-10 text-xl md:text-3xl text-muted-foreground font-light leading-relaxed italic text-center md:text-left">
                    <p>"We know you worry. We see the anxiety of parents as boards approach or as competitive ranks are released."</p>
                    <p>"At Drona IQ, we don't just teach chapters. We teach <strong>ownership</strong>. We don't just prepare for exams; we prepare for <strong>life</strong>."</p>
                    <p>"Your child's success is not a gamble of luck here. It is a <strong>result of systematic discipline</strong> and data-driven mentorship."</p>
                    <p>"When you trust us, you aren't just buying tuition; you are investing in a <strong>blueprint for a successful career</strong>."</p>
                 </div>
                 <div className="pt-12 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="space-y-1 text-center md:text-left">
                       <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground">Sincerely,</p>
                       <p className="text-3xl font-extrabold font-headline uppercase text-primary">Team Drona IQ Core</p>
                       <p className="text-xs font-bold text-accent uppercase tracking-widest">Powered by Droneshwar Defence Academy</p>
                    </div>
                    <Link href="/admissions">
                       <Button className="h-16 px-12 bg-primary text-white font-headline font-extrabold uppercase text-xs tracking-widest rounded-2xl shadow-xl">Start Your Child's Journey</Button>
                    </Link>
                 </div>
              </div>
           </Card>
        </div>
      </section>

      {/* 6. HOW STUDENTS LOSE CONFIDENCE vs HOW WE SOLVE IT */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Challenge */}
              <div className="bg-red-50 p-16 md:p-32 rounded-[4rem] space-y-12 border border-red-100 flex flex-col justify-center">
                 <div className="bg-red-500/10 p-6 w-fit rounded-3xl"><ZapOff className="h-12 w-12 text-red-600" /></div>
                 <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-extrabold font-headline text-red-900 uppercase leading-none">The Downward <br/> <span className="italic">Spiral</span></h3>
                    <p className="text-xl text-red-800/60 font-light leading-relaxed">How even bright students fall behind in traditional tuition environments.</p>
                 </div>
                 <ul className="space-y-8">
                    {[
                      "Unidentified conceptual fear from previous grades.",
                      "Lack of consistent routine at home.",
                      "Fear of asking questions in large groups.",
                      "No data-driven identification of weak areas."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-6 items-start text-red-900 font-bold text-lg md:text-xl">
                        <span className="text-red-300 font-headline text-4xl">0{i+1}</span> {item}
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Solution */}
              <div className="bg-primary p-16 md:p-32 rounded-[4rem] space-y-12 text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform"><BrainCircuit className="h-64 w-64" /></div>
                 <div className="bg-accent p-6 w-fit rounded-3xl"><Flame className="h-12 w-12 text-primary" /></div>
                 <div className="space-y-6 relative z-10">
                    <h3 className="text-4xl md:text-6xl font-extrabold font-headline text-white uppercase leading-none">The Drona IQ <br/> <span className="text-accent italic">Advantage</span></h3>
                    <p className="text-xl text-white/50 font-light leading-relaxed">Our OS stops the spiral and starts the ascent immediately.</p>
                 </div>
                 <ul className="space-y-8 relative z-10">
                    {[
                      "AI-powered 'Digital Twin' detects concept risk early.",
                      "DrDA Discipline Framework builds deep routine.",
                      "Personalized learning path based on diagnostic scores.",
                      "Weekly parent oversight through the Intelligence Dashboard."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-6 items-start text-white font-bold text-lg md:text-xl">
                        <span className="text-accent font-headline text-4xl">0{i+1}</span> {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 7. PROGRAMMES BY CLASS UNIVERSE */}
      <section className="py-32 md:py-64 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-32 space-y-6">
              <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The Class Universe</Badge>
              <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Architecting <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Growth Stages</span></h2>
           </div>

           <div className="space-y-12">
              <Tabs defaultValue="foundation" className="space-y-24">
                <TabsList className="bg-white p-2 rounded-[3rem] shadow-xl w-full max-w-4xl mx-auto flex h-auto">
                   <TabsTrigger value="foundation" className="flex-1 rounded-[2.5rem] py-6 font-headline uppercase text-xs md:text-sm font-extrabold data-[state=active]:bg-primary data-[state=active]:text-white">Classes 5-8</TabsTrigger>
                   <TabsTrigger value="boards" className="flex-1 rounded-[2.5rem] py-6 font-headline uppercase text-xs md:text-sm font-extrabold data-[state=active]:bg-primary data-[state=active]:text-white">Classes 9-10</TabsTrigger>
                   <TabsTrigger value="career" className="flex-1 rounded-[2.5rem] py-6 font-headline uppercase text-xs md:text-sm font-extrabold data-[state=active]:bg-primary data-[state=active]:text-white">Classes 11-12</TabsTrigger>
                </TabsList>

                <TabsContent value="foundation" className="animate-in fade-in slide-in-from-bottom-20 duration-1000">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[5, 6, 7, 8].map((c) => (
                        <Card key={c} className="border-none shadow-2xl rounded-[3rem] p-10 space-y-8 bg-white group hover:bg-primary transition-all duration-700">
                           <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                              <Image src={`https://picsum.photos/seed/dronaclass_${c}/800/800`} fill alt={`Class ${c}`} className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="young student" />
                              <div className="absolute top-6 left-6"><Badge className="bg-accent text-primary border-none">Grade {c}</Badge></div>
                           </div>
                           <h3 className="text-3xl font-extrabold font-headline text-primary group-hover:text-white uppercase">Primary <br/> Foundation</h3>
                           <p className="text-muted-foreground group-hover:text-white/60 leading-relaxed font-light">Eliminating math-fear and building science-love through interactive AI mapping.</p>
                           <ul className="space-y-3 pt-6 border-t group-hover:border-white/10">
                              <li className="flex items-center gap-2 text-xs font-bold text-primary group-hover:text-accent uppercase tracking-widest"><CheckCircle2 className="h-4 w-4" /> Strong Basics</li>
                              <li className="flex items-center gap-2 text-xs font-bold text-primary group-hover:text-accent uppercase tracking-widest"><CheckCircle2 className="h-4 w-4" /> Olympiad Prep</li>
                           </ul>
                           <Link href="/admissions" className="block pt-4">
                              <Button className="w-full h-14 bg-muted text-primary group-hover:bg-accent group-hover:text-primary font-bold uppercase text-[10px] tracking-widest rounded-2xl">Enroll Now</Button>
                           </Link>
                        </Card>
                      ))}
                   </div>
                </TabsContent>

                <TabsContent value="boards" className="animate-in fade-in slide-in-from-bottom-20 duration-1000">
                   <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                      {[9, 10].map((c) => (
                        <Card key={c} className="border-none shadow-2xl rounded-[4rem] p-16 md:p-24 space-y-10 bg-white group hover:bg-primary transition-all duration-700 relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Trophy className="h-64 w-64 text-accent" /></div>
                           <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold text-[14px]">Class {c} Excellence</Badge>
                           <h3 className="text-4xl md:text-6xl font-extrabold font-headline text-primary group-hover:text-white uppercase leading-none">The Board <br/> <span className="text-accent italic">Elite Track</span></h3>
                           <p className="text-xl md:text-2xl text-muted-foreground group-hover:text-white/70 leading-relaxed font-light">Intensive concept mastery tracking for CBSE and ICSE toppers.</p>
                           <div className="grid md:grid-cols-2 gap-12 pt-12 border-t group-hover:border-white/10">
                              <div className="space-y-4">
                                 <h4 className="font-bold text-primary group-hover:text-accent uppercase tracking-widest">Academic Goals</h4>
                                 <ul className="space-y-3 text-sm text-muted-foreground group-hover:text-white/60">
                                    <li>• Target 98% in Boards</li>
                                    <li>• 10,000+ Question Practice</li>
                                    <li>• 24/7 AI Doubt Resolution</li>
                                 </ul>
                              </div>
                              <div className="space-y-4">
                                 <h4 className="font-bold text-primary group-hover:text-accent uppercase tracking-widest">OS Benefits</h4>
                                 <ul className="space-y-3 text-sm text-muted-foreground group-hover:text-white/60">
                                    <li>• Weekly Mock Analysis</li>
                                    <li>• Parent Monitoring App</li>
                                    <li>• Personalized Timetables</li>
                                 </ul>
                              </div>
                           </div>
                           <Link href="/admissions" className="block pt-12">
                              <Button size="lg" className="w-full h-20 bg-primary text-white group-hover:bg-accent group-hover:text-primary font-headline font-extrabold uppercase tracking-widest rounded-3xl text-lg">Enroll in Board Elite</Button>
                           </Link>
                        </Card>
                      ))}
                   </div>
                </TabsContent>

                <TabsContent value="career" className="animate-in fade-in slide-in-from-bottom-20 duration-1000">
                   <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { t: "Science Hub", s: "Physics, Chem, Math/Bio", e: "JEE/NEET Foundation", i: Microscope },
                        { t: "Commerce Hub", s: "Accounts, Eco, BST", e: "CUET & CA Foundation", i: Calculator },
                        { t: "Humanities Hub", s: "History, Pol Sci, Geo", e: "CLAT & Civil Services", i: Scale }
                      ].map((h, i) => (
                        <Card key={i} className="border-none shadow-2xl rounded-[3rem] p-12 space-y-8 bg-white group hover:bg-primary transition-all duration-700">
                           <div className="bg-primary/5 p-8 w-fit rounded-[2rem] group-hover:bg-white group-hover:scale-110 transition-all">
                              <h.i className="h-10 w-10 text-primary" />
                           </div>
                           <h3 className="text-4xl font-extrabold font-headline text-primary group-hover:text-white uppercase leading-none">{h.t}</h3>
                           <p className="font-bold text-accent uppercase tracking-widest text-xs">{h.e}</p>
                           <p className="text-muted-foreground group-hover:text-white/60 leading-relaxed font-light">Bridge the massive gap between school syllabus and competitive entrance patterns.</p>
                           <Link href="/admissions" className="block pt-8">
                              <Button className="w-full h-14 bg-muted text-primary group-hover:bg-accent group-hover:text-primary font-bold uppercase text-[10px] tracking-widest rounded-2xl">Explore Career Path</Button>
                           </Link>
                        </Card>
                      ))}
                   </div>
                </TabsContent>
              </Tabs>
           </div>
        </div>
      </section>

      {/* 8. HOME TUITION NETWORK PREVIEW */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-7 space-y-12">
                 <div className="space-y-6">
                   <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Elite Home Mentorship</Badge>
                   <h2 className="text-5xl md:text-8xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">The Valley's <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Apex Network</span></h2>
                   <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                     Dehradun's most verified subject experts, delivered to your doorstep. Powered by the same tracking OS used in our hubs.
                   </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-muted">
                    <div className="flex gap-6 items-start">
                       <div className="bg-primary p-4 rounded-2xl text-white shadow-xl"><ShieldCheck className="h-6 w-6" /></div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-bold font-headline uppercase text-primary">Tutor Verification</h4>
                          <p className="text-muted-foreground font-light text-sm">4-Tier screening: Subject Mastery, Pedagogy, Background & Child Safety.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="bg-accent p-4 rounded-2xl text-primary shadow-xl"><ScanSearch className="h-6 w-6" /></div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-bold font-headline uppercase text-primary">Matchmaking Engine</h4>
                          <p className="text-muted-foreground font-light text-sm">We match your child with a tutor whose teaching style aligns with their learning pace.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="bg-muted p-4 rounded-2xl text-primary shadow-xl"><Timer className="h-6 w-6" /></div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-bold font-headline uppercase text-primary">2-Hour Demo Response</h4>
                          <p className="text-muted-foreground font-light text-sm">Our coordinator matches you with the right educator within 120 minutes of enquiry.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="bg-green-50 p-4 rounded-2xl text-green-600 shadow-xl"><CheckCircle2 className="h-6 w-6" /></div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-bold font-headline uppercase text-primary">Area Coverage</h4>
                          <p className="text-muted-foreground font-light text-sm">Dedicated subject experts for Jakhan, Rajpur Road, Ballupur, and IT Park Hub.</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="pt-8">
                    <Link href="/home-tuition">
                       <Button size="lg" className="h-16 px-12 bg-primary text-white font-headline font-extrabold uppercase text-xs tracking-widest rounded-2xl shadow-2xl">Book Free Home Demo</Button>
                    </Link>
                 </div>
              </div>
              <div className="lg:col-span-5 relative">
                 <div className="absolute -inset-10 bg-primary/5 rounded-[6rem] -z-10 animate-pulse"></div>
                 <Image src="https://picsum.photos/seed/dronatutor/1200/1400" width={1200} height={1400} alt="Home Tuition" className="rounded-[4rem] shadow-2xl object-cover h-[800px]" data-ai-hint="tutor teaching student" />
                 <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] border shadow-2xl hidden xl:block">
                    <div className="flex items-center gap-6">
                       <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center text-accent font-bold text-xl">5%</div>
                       <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Selection Rate</p>
                          <p className="text-lg font-bold text-primary uppercase">Only Elite Tutors</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. PARENT DASHBOARD PREVIEW - INTELLIGENCE OVERVIEW */}
      <section className="py-32 md:py-64 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-[url('https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000')]"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-32 space-y-6">
              <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Intelligence Platform</Badge>
              <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline uppercase tracking-tighter leading-none">Parent <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">OS Monitoring</span></h2>
              <p className="text-xl md:text-3xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                 Total visibility into your child's academic heartbeat. No more guesswork. No more surprise result shocks.
              </p>
           </div>

           <div className="max-w-7xl mx-auto">
              <div className="relative group">
                 <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[200px] opacity-20"></div>
                 <Card className="relative bg-white text-primary rounded-[5rem] overflow-hidden shadow-2xl border-none ring-1 ring-white/10 p-4">
                    <div className="bg-muted/50 rounded-[4rem] p-12 md:p-24 space-y-16">
                       <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                          <div className="space-y-4 text-center md:text-left">
                             <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.4em]">Live Intelligence Feed</p>
                             <h3 className="text-4xl md:text-6xl font-extrabold font-headline uppercase tracking-tight">Parent Command Center</h3>
                          </div>
                          <div className="flex gap-6">
                             <div className="bg-white p-6 rounded-3xl shadow-xl text-center border">
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Attendance</p>
                                <p className="text-4xl font-extrabold font-headline text-primary">98.4%</p>
                             </div>
                             <div className="bg-primary p-6 rounded-3xl shadow-xl text-center">
                                <p className="text-xs font-bold text-white/40 uppercase mb-1">Goal Streak</p>
                                <p className="text-4xl font-extrabold font-headline text-accent">14 Days</p>
                             </div>
                          </div>
                       </div>
                       
                       <div className="grid md:grid-cols-3 gap-8">
                          <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-primary/5 space-y-6">
                             <div className="flex justify-between items-center">
                                <p className="font-bold text-primary uppercase text-sm">Learning Curve</p>
                                <TrendingUp className="h-5 w-5 text-accent" />
                             </div>
                             <div className="h-48 flex items-end gap-3 justify-between">
                                {[40, 55, 45, 70, 85, 92].map((h, i) => (
                                  <div key={i} className="flex-1 bg-muted rounded-t-xl group-hover:bg-accent transition-all duration-700" style={{height: `${h}%`}}></div>
                                ))}
                             </div>
                             <p className="text-xs text-muted-foreground font-medium text-center italic">"Upward trend in Analytical Physics mastery."</p>
                          </div>
                          
                          <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-primary/5 space-y-6">
                             <div className="flex justify-between items-center">
                                <p className="font-bold text-primary uppercase text-sm">Daily Tasks</p>
                                <ListChecks className="h-5 w-5 text-green-600" />
                             </div>
                             <div className="space-y-4">
                                {[
                                  { t: "Calculus Module 2", d: "Completed" },
                                  { t: "Organic Chem Test", d: "Completed" },
                                  { t: "NDA Mock Test #4", d: "Pending" }
                                ].map((task, i) => (
                                  <div key={i} className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl">
                                     <p className="text-xs font-bold">{task.t}</p>
                                     <Badge className={task.d === 'Completed' ? 'bg-green-100 text-green-700 border-none' : 'bg-orange-100 text-orange-700 border-none'}>{task.d}</Badge>
                                  </div>
                                ))}
                             </div>
                          </div>

                          <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-primary/5 space-y-6">
                             <div className="flex justify-between items-center">
                                <p className="font-bold text-primary uppercase text-sm">Teacher Remarks</p>
                                <MessageSquare className="h-5 w-5 text-blue-600" />
                             </div>
                             <div className="space-y-6">
                                <div className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl italic text-sm text-blue-900 leading-relaxed">
                                   "Exceptional improvement in speed this week. Focus on organic nomenclature remains."
                                </div>
                                <Button variant="outline" className="w-full border-primary/10 text-primary font-bold uppercase text-[10px] h-11 tracking-widest rounded-xl">View Full History</Button>
                             </div>
                          </div>
                       </div>
                    </div>
                 </Card>
                 <div className="text-center pt-20">
                    <Link href="/parent-dashboard">
                       <Button size="lg" className="h-20 px-12 bg-accent text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-3xl shadow-2xl">Explore Parent Dashboard</Button>
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 10. ACADEMIC HEALTH CHECK - AI PREVIEW */}
      <section className="py-32 md:py-64 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative group order-2 lg:order-1">
                 <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[150px] opacity-40"></div>
                 <div className="relative glass p-10 rounded-[4rem] shadow-2xl border border-primary/5 overflow-hidden">
                    <div className="space-y-12">
                       <div className="flex justify-between items-start">
                          <div className="space-y-2">
                             <h4 className="text-2xl font-bold font-headline uppercase text-primary">Diagnostic Report</h4>
                             <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Neural Analysis v4.2</p>
                          </div>
                          <Badge className="bg-red-100 text-red-700 border-none px-4 py-1 uppercase font-bold text-[10px]">High Risk Detected</Badge>
                       </div>
                       
                       <div className="space-y-10">
                          <div className="space-y-4">
                             <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest">
                                <span>Calculus Fundamentals</span>
                                <span className="text-red-600">32% Mastery</span>
                             </div>
                             <div className="h-2 w-full bg-muted rounded-full">
                                <div className="h-full bg-red-500 w-[32%] rounded-full"></div>
                             </div>
                             <p className="text-xs text-muted-foreground italic">"Missing link from Grade 9 trigonometry detected. Student struggling with chain-rule application."</p>
                          </div>
                          
                          <div className="space-y-4">
                             <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest">
                                <span>Organic Chem Basics</span>
                                <span className="text-green-600">88% Mastery</span>
                             </div>
                             <div className="h-2 w-full bg-muted rounded-full">
                                <div className="h-full bg-green-500 w-[88%] rounded-full"></div>
                             </div>
                          </div>

                          <div className="bg-primary p-8 rounded-3xl text-white space-y-4 shadow-xl">
                             <p className="text-accent font-bold uppercase tracking-widest text-[10px]">AI Strategic Recommendation</p>
                             <p className="text-lg font-bold font-headline uppercase leading-tight italic">"Immediate focus shift to Trig-Functions for 7 days to bridge the Calculus gap."</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="space-y-12 order-1 lg:order-2">
                 <div className="space-y-6">
                    <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Neural Diagnostics</Badge>
                    <h2 className="text-5xl md:text-8xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">The AI <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Health Check</span></h2>
                    <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                       Our engine maps missing concepts from previous grades with 99.4% precision. Stop treating symptoms. Solve the root cause.
                    </p>
                 </div>
                 
                 <div className="space-y-8">
                    {[
                      { t: "Weakness Detection", d: "Maps the exact sub-concepts causing marks deduction." },
                      { t: "Success Prediction", d: "Forecasts future exam scores based on current consistency." },
                      { t: "Bridging Plan", d: "Automated study routine to fill learning gaps in 21 days." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-8 items-start group">
                         <div className="bg-muted p-4 rounded-2xl group-hover:bg-accent transition-colors"><Brain className="h-6 w-6 text-primary" /></div>
                         <div className="space-y-2">
                            <h4 className="text-2xl font-bold font-headline uppercase text-primary tracking-tight">{feat.t}</h4>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-8">
                    <Link href="/academic-health-check">
                       <Button size="lg" className="h-20 px-12 bg-primary text-white font-headline font-extrabold uppercase text-xs tracking-widest rounded-2xl shadow-2xl">Get Free AI Assessment</Button>
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 11. CAREER ROADMAP GALLERY */}
      <section className="py-32 md:py-64 bg-muted/10">
        <div className="container mx-auto px-4">
           <div className="text-center mb-32 space-y-6">
              <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Future Visions</Badge>
              <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Career <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Roadmap Gallery</span></h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                 We don't just clear exams. We architect futures. Explore the pathways our top scholars are pursuing.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "The Officer", d: "NDA Foundation & SSB Coaching", i: Shield, img: "career_off" },
                { t: "The Surgeon", d: "NEET Elite Track & Biology Mastery", i: Stethoscope, img: "career_doc" },
                { t: "The Architect", d: "JEE Mains & Advance Strategy", i: Calculator, img: "career_eng" },
                { t: "The Analyst", d: "CA Foundation & Business OS", i: BarChart3, img: "career_ca" },
                { t: "The Visionary", d: "Entrepreneurship & Startup Hub", i: Rocket, img: "career_ceo" }
              ].map((c, i) => (
                <Card key={i} className="border-none shadow-xl rounded-[3rem] overflow-hidden group relative h-[500px] cursor-pointer">
                   <Image src={`https://picsum.photos/seed/dronacareer_${i}/600/800`} fill alt={c.t} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" data-ai-hint="professional career" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:from-primary transition-all duration-700"></div>
                   <div className="absolute bottom-10 left-10 right-10 space-y-4">
                      <div className="bg-accent/20 p-4 w-fit rounded-2xl border border-accent/20 text-accent"><c.i className="h-6 w-6" /></div>
                      <h4 className="text-3xl font-extrabold font-headline text-white uppercase leading-none">{c.t}</h4>
                      <p className="text-xs font-bold text-white/50 uppercase tracking-widest leading-relaxed group-hover:text-white transition-colors">{c.d}</p>
                   </div>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* 12. DEFENCE FOUNDATION - THE DRDA LEGACY */}
      <section className="py-32 md:py-64 bg-[#05070a] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000')]"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The Legacy of Service</Badge>
                    <h2 className="text-5xl md:text-9xl font-extrabold font-headline text-white uppercase tracking-tighter leading-[0.85]">Officer <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Mindset</span></h2>
                    <p className="text-xl md:text-4xl text-white/40 font-light leading-relaxed">
                       Powered by <span className="text-white font-bold">Droneshwar Defence Academy (DrDA)</span>. We don't just build students; we build leaders for the nation.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-white/10">
                    {[
                      { t: "NDA Foundation", d: "Early exposure to GAT, Math, and SSB psych patterns from Class 9." },
                      { t: "Leadership Dev", d: "Workshops on quick-situational decision making." },
                      { t: "Communication", d: "English proficiency and group discussion mastery." },
                      { t: "Character Lab", d: "Instilling integrity and responsibility as a core academic metric." }
                    ].map((def, i) => (
                      <div key={i} className="space-y-4 group">
                         <div className="bg-white/5 p-4 rounded-2xl w-fit group-hover:bg-accent transition-all group-hover:scale-110"><ShieldCheck className="h-6 w-6 text-accent group-hover:text-primary" /></div>
                         <h4 className="text-2xl font-bold font-headline uppercase text-white tracking-tight">{def.t}</h4>
                         <p className="text-sm text-white/40 leading-relaxed font-light">{def.d}</p>
                      </div>
                    ))}
                 </div>
                 
                 <div className="pt-12 flex gap-8">
                    <Link href="https://droneshwardefenceacademy.com" target="_blank">
                       <Button size="lg" variant="outline" className="h-20 px-12 border-accent text-accent hover:bg-accent hover:text-primary font-headline font-extrabold uppercase text-xs tracking-widest rounded-3xl">Visit DrDA Hub</Button>
                    </Link>
                    <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-8">
                       <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Established 2018</p>
                       <div>
                          <p className="text-2xl font-bold text-white font-headline">LEGACY CORE</p>
                          <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Defence Excellence</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-20 bg-accent/10 rounded-full blur-[200px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
                 <div className="relative glass p-6 rounded-[6rem] shadow-2xl border-white/10 ring-1 ring-white/10">
                    <Image src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/dronanda/1200/1600'} width={1200} height={1600} alt="Defence Advantage" className="rounded-[4rem] h-[800px] object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0" data-ai-hint="military cadet" />
                    <div className="absolute -bottom-10 -right-10 bg-accent text-primary p-12 rounded-[3rem] shadow-2xl border-none hidden xl:block">
                       <p className="text-5xl font-extrabold font-headline tracking-tighter">OFFICER</p>
                       <p className="text-xs font-bold uppercase tracking-widest mt-2">Training Framework</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 13. PARENT PSYCHOLOGY - THE PEACE OF MIND INDEX */}
      <section className="py-32 md:py-64 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The Emotional OS</Badge>
                    <h2 className="text-5xl md:text-9xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">Parental <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Peace of Mind</span></h2>
                 </div>
                 
                 <div className="space-y-12">
                    <div className="space-y-8">
                       <h4 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tight flex items-center gap-4">
                          <ZapOff className="h-8 w-8 text-red-500" /> What Parents Fear
                       </h4>
                       <div className="grid gap-4">
                          {["Wasted time in generic tuition.", "Unchecked screen-time and digital distraction.", "Sudden result-shocks on report card day.", "Lack of personality development."].map((f, i) => (
                            <div key={i} className="flex gap-4 items-center text-red-800/60 font-medium">
                               <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div> {f}
                            </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="space-y-8">
                       <h4 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tight flex items-center gap-4">
                          <CheckCircle2 className="h-8 w-8 text-green-500" /> Our Solving OS
                       </h4>
                       <div className="grid gap-6">
                          {[
                            { t: "The 100% Tracking Policy", d: "Every minute of study is logged and mapped to concept growth." },
                            { t: "The Discipline Protocol", d: "Military-derived schedules that eliminate digital inertia." },
                            { t: "Predictive Analytics", d: "We warn you of risks 3 months BEFORE the board exams." }
                          ].map((s, i) => (
                            <div key={i} className="p-8 bg-muted/30 rounded-3xl border border-primary/5 space-y-2">
                               <h5 className="font-bold text-primary text-xl">{s.t}</h5>
                               <p className="text-sm text-muted-foreground font-light">{s.d}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-primary rounded-[6rem] rotate-6 group-hover:rotate-0 transition-transform duration-1000 -z-10"></div>
                 <Card className="p-16 md:p-24 bg-white text-primary rounded-[6rem] shadow-2xl border-none space-y-12 text-center">
                    <Heart className="h-20 w-20 text-red-500 mx-auto animate-bounce" />
                    <h3 className="text-4xl md:text-6xl font-extrabold font-headline uppercase leading-none">Trust Is <br/> <span className="text-accent italic">Architected</span></h3>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed italic">
                       "We aren't just teaching a child; we are supporting a family's dream. That is why visibility is our highest priority."
                    </p>
                    <div className="pt-12 border-t border-muted">
                       <div className="flex justify-between items-center mb-8">
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Parent Peace Index™</p>
                          <p className="text-2xl font-extrabold font-headline text-accent">98.6%</p>
                       </div>
                       <div className="h-3 w-full bg-muted rounded-full">
                          <div className="h-full bg-accent w-[98.6%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
                       </div>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 14. STUDENT PSYCHOLOGY - MOTIVATION UNIVERSE */}
      <section className="py-32 md:py-64 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-5xl mx-auto text-center space-y-16">
              <div className="space-y-6">
                <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Scholar Motivation</Badge>
                <h2 className="text-5xl md:text-[9rem] font-extrabold font-headline text-white uppercase tracking-tighter leading-none">Every Topper <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Was a Beginner</span></h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { t: "Success Is Daily", d: "You don't win on exam day. You win every morning when you follow the routine.", i: Sunrise },
                   { t: "Future Vision", d: "Stop studying for marks. Start studying for the person you want to become in 2030.", i: Eye },
                   { t: "Small Gains", d: "A 1% improvement in consistency daily creates a 37x better version of you annually.", i: TrendingUp }
                 ].map((mot, i) => (
                   <div key={i} className="space-y-8 p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group">
                      <div className="bg-accent/10 p-6 rounded-3xl w-fit mx-auto group-hover:scale-110 transition-transform"><mot.i className="h-10 w-10 text-accent" /></div>
                      <h4 className="text-3xl font-extrabold font-headline text-white uppercase leading-tight">{mot.t}</h4>
                      <p className="text-lg text-white/50 font-light leading-relaxed">{mot.d}</p>
                   </div>
                 ))}
              </div>

              <div className="pt-16">
                 <Link href="/assistant">
                    <Button size="lg" className="h-20 px-12 bg-accent text-primary font-headline font-extrabold uppercase text-xs tracking-widest rounded-3xl shadow-2xl">Launch Student OS</Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 15. GOD-LEVEL UNIQUE SECTIONS: GROWTH SIMULATOR & DIGITAL TWIN */}
      <section className="py-32 md:py-64 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The God Level Tech</Badge>
                    <h2 className="text-5xl md:text-9xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">The Digital <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Academic Twin</span></h2>
                 </div>
                 
                 <div className="space-y-12">
                    <p className="text-xl md:text-4xl text-muted-foreground font-light leading-relaxed">
                       We create a cognitive clone of your child's learning patterns. This <strong>Digital Twin</strong> runs 10,000 simulations to detect academic risks before they manifest as bad grades.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                       {[
                         { t: "Growth Simulator", d: "Forecasts marks for Boards based on current homework streaks.", i: Activity },
                         { t: "Risk Detector", d: "Triggers red-alerts when a student avoids a particular subject sub-concept.", i: AlertTriangle },
                         { t: "Success OS", d: "A unified command center for student, parent, and mentor.", i: Database },
                         { t: "Neural Tracking", d: "Maps cognitive speed and logical accuracy across subjects.", i: Brain }
                       ].map((tech, i) => (
                         <div key={i} className="p-8 bg-muted/30 rounded-3xl border border-primary/5 group hover:bg-primary transition-all duration-500">
                            <tech.i className="h-8 w-8 text-accent mb-4 group-hover:text-white transition-colors" />
                            <h5 className="font-bold text-primary group-hover:text-white transition-colors uppercase text-xl">{tech.t}</h5>
                            <p className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors font-light mt-2">{tech.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-primary/5 rounded-[6rem] -z-10 animate-pulse"></div>
                 <Card className="relative bg-primary text-white p-16 md:p-32 rounded-[6rem] shadow-2xl border-none overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform"><Globe className="h-[400px] w-[400px]" /></div>
                    <div className="space-y-12 relative z-10">
                       <ScanSearch className="h-24 w-24 text-accent animate-pulse" />
                       <div className="space-y-6">
                          <h3 className="text-4xl md:text-7xl font-extrabold font-headline uppercase leading-none">Command <br/> <span className="text-accent italic">Center</span></h3>
                          <p className="text-xl text-white/50 font-light leading-relaxed">
                             Live oversight of the entire Drona IQ Scholar Base. Real-time intervention tracking.
                          </p>
                       </div>
                       <div className="pt-12 border-t border-white/10 flex items-center justify-between">
                          <div>
                             <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-2">Live Scholars</p>
                             <p className="text-5xl font-extrabold font-headline text-accent">5000+</p>
                          </div>
                          <Link href="/blog">
                             <Button variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-2xl uppercase font-bold text-xs">Learn More</Button>
                          </Link>
                       </div>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 16. LOCAL SEO - THE DEHRADUN ECOSYSTEM MAP */}
      <section className="py-32 md:py-64 bg-muted/10">
        <div className="container mx-auto px-4">
           <div className="text-center mb-32 space-y-6">
              <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[12px]">The Valley Hubs</Badge>
              <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Dehradun <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Local OS</span></h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                 Elite education mapped specifically for your neighborhood. Local subject experts for the Valley's top schools.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { n: "Sahastradhara Road", d: "Om Tower Hub. Base for IT Park & Mussoorie Road scholars.", i: MapPin },
                { n: "Rajpur Road", d: "Elite Hub for St. Joseph's, Welham, and Brightlands students.", i: MapPin },
                { n: "Ballupur Circle", d: "Convenient home tuition network for Kanwali & Vasant Vihar.", i: MapPin },
                { n: "Prem Nagar", d: "Defence focused coaching for Cantt & IMA surroundings.", i: MapPin },
                { n: "IT Park Hub", d: "Technological center for modern board preparation tracks.", i: MapPin },
                { n: "Jakhan Circle", d: "Premium home tuition for the elite residential sector.", i: MapPin },
                { n: "Dehradun Cantt", d: "Legacy hub for DrDA & NDA Foundation students.", i: MapPin },
                { n: "Dalanwala", d: "Specialized boarding school support tracks.", i: MapPin }
              ].map((loc, i) => (
                <Link key={i} href={`/tuition-in/${loc.n.toLowerCase().replace(' ', '-')}`}>
                  <Card className="border-none shadow-xl rounded-3xl p-10 space-y-6 bg-white hover:bg-primary group transition-all duration-500 cursor-pointer">
                    <loc.i className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    <h4 className="text-2xl font-bold font-headline uppercase text-primary group-hover:text-white transition-colors">{loc.n}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors font-light leading-relaxed">{loc.d}</p>
                  </Card>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 17. FAQ FORTRESS - 140+ ENTRIES HUB */}
      <section className="py-32 md:py-64 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-32 space-y-6">
              <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[12px]">Intelligence Fortress</Badge>
              <h2 className="text-5xl md:text-[8rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Knowledge <br/> <span className="text-accent italic">Hub</span></h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Deep-dive insights into the valley's most powerful student growth system.</p>
           </div>
           
           <Tabs defaultValue="parents" className="space-y-12">
              <TabsList className="bg-muted p-2 rounded-full shadow-inner w-full flex h-auto overflow-x-auto no-scrollbar scroll-smooth">
                 <TabsTrigger value="parents" className="flex-1 rounded-full py-5 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">For Parents (50)</TabsTrigger>
                 <TabsTrigger value="students" className="flex-1 rounded-full py-5 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">For Students (50)</TabsTrigger>
                 <TabsTrigger value="home-tuition" className="flex-1 rounded-full py-5 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">Home Tuition (20)</TabsTrigger>
                 <TabsTrigger value="ai-health" className="flex-1 rounded-full py-5 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">AI Health (20)</TabsTrigger>
              </TabsList>

              <TabsContent value="parents" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How is Drona IQ different from local coaching in Dehradun?", a: "Traditional coaching follows a 'one-size-fits-all' model. Drona IQ uses an AI-driven 'Student Success OS' that tracks individual sub-concept mastery, attendance, and behavioral patterns. We predict exam results 3 months in advance and provide personalized intervention roadmaps." },
                      { q: "Can I monitor my child's performance in real-time?", a: "Absolutely. Our Parent Intelligence Dashboard provides live visibility into class attendance, homework submission status, weekly test percentiles, and a 'Confidence Index' that shows how prepared your child actually is for their target exams." },
                      { q: "What is the fee structure for Class 10 Boards?", a: "Fees at Drona IQ are personalized based on the diagnostic report results and the intensity of the track chosen (Online, Hybrid, or Offline Hub). We recommend visiting our Om Tower Hub for a free counseling session and customized fee plan." },
                      { q: "Are your teachers subject matter experts?", a: "Yes. Every educator at Drona IQ undergoes a rigorous 5-tier screening process: Subject Proficiency Test, Pedagogical Interview, Technology Readiness, Background Check, and Child Safety psychometric evaluation. Only the top 5% are hired." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`p-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-3xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-12">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed pb-16">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="students" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How do I earn XP and level up?", a: "Completing daily study tasks, submitting assignments before deadlines, and showing improvement in weekly tests earns you XP. High XP levels unlock 'Elite Scholar' status, giving you access to exclusive DrDA leadership workshops and senior faculty mentorship." },
                      { q: "Can the AI Assistant solve my school homework?", a: "The AI Scholar Assistant is designed to provide step-by-step logical explanations, not just answers. It helps you understand the 'Why' behind a concept so you can solve similar school homework problems independently." },
                      { q: "Is the study planner flexible if I have school exams?", a: "Yes. The Drona IQ OS is dynamic. When you have school unit tests, you can switch your 'Focus Mode' in the app, and the system will automatically re-allocate your study hours to prioritize school syllabus while maintaining board-prep continuity." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`s-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-3xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-12">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed pb-16">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="home-tuition" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How do you verify home tutors in Dehradun?", a: "Every home tutor is Aadhaar-verified and undergoes a strict background check by ex-defence personnel from DrDA. We also evaluate their subject proficiency and teaching methodology through a mandatory demo session observed by our senior panel." },
                      { q: "Is home tuition available for NDA preparation?", a: "Yes. We have a specialized group of mentors who provide home-based foundation coaching for NDA aspirants in Class 9-12, focusing on Math, GAT, and basic officer mindset development." },
                      { q: "What if my child doesn't like the assigned tutor?", a: "We offer a 'No-Questions-Asked' tutor replacement policy. If the demo or the first week of sessions doesn't align with your child's pace, our coordinator will provide a new subject expert within 48 hours." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`ht-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-3xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-12">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed pb-16">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="ai-health" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How accurate is the AI Diagnostic score?", a: "Our Neural Diagnostic Engine has been calibrated using 10,000+ past student data points and current board patterns. It identifies learning gaps with 99.4% precision, often detecting issues a student didn't even know they had." },
                      { q: "Do I have to pay for the AI Health Check?", a: "We offer one comprehensive AI Health Check for free to every new student in Dehradun. This helps parents understand their child's baseline before they commit to any academic program." },
                      { q: "How long does it take to get the full report?", a: "The executive summary is generated instantly. A deep-dive 12-page improvement roadmap PDF is delivered to your dashboard within 15 minutes of completing the assessment." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`ai-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-3xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-12">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed pb-16">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>
           </Tabs>
        </div>
      </section>

      {/* FINAL ADMISSION CTA - CONVERSION ENGINE */}
      <section className="py-32 md:py-64 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="max-w-[1400px] mx-auto space-y-20">
              <div className="space-y-10">
                <h2 className="text-6xl md:text-[11rem] font-extrabold font-headline uppercase tracking-tighter leading-[0.85]">Join the <br/> <span className="text-accent italic">Cadre.</span></h2>
                <p className="text-2xl md:text-5xl text-white/50 font-light leading-relaxed max-w-5xl mx-auto">
                   Limited seats available for Session 2026-27. Enroll your child in Dehradun's apex Student Success Hub today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <Link href="/admissions">
                    <Button size="lg" className="w-full sm:w-auto h-24 px-16 bg-accent text-primary font-headline font-extrabold uppercase text-lg md:text-xl tracking-widest rounded-[2rem] shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-all hover:scale-110">Book Free Demo Class</Button>
                 </Link>
                 <Link href="tel:+917878553385">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-24 px-16 border-white/20 text-white hover:bg-white/10 font-headline font-extrabold uppercase text-lg md:text-xl tracking-widest rounded-[2rem]">Call Center: 7878553385</Button>
                 </Link>
              </div>

              <div className="pt-24 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                 {[
                   { v: "24h", l: "Onboarding" },
                   { v: "100%", l: "Verified Tutors" },
                   { v: "Om Tower", l: "Main Campus" },
                   { v: "ISO 9001", l: "Certified Pedagogy" }
                 ].map((bad, i) => (
                   <div key={i} className="space-y-2">
                      <p className="text-4xl font-extrabold font-headline text-accent tracking-tight">{bad.v}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">{bad.l}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* MEGA FOOTER - THE INFORMATION HUB */}
      <footer className="py-32 md:py-64 bg-[#05070a] border-t border-white/5 text-white/40 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24">
            <div className="lg:col-span-1 space-y-16 text-left">
               <Link href="/" className="flex items-center space-x-4 group">
                <div className="rounded-[2rem] bg-primary p-6 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-12 w-12 text-accent" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-headline text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                  <span className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mt-3">Success Operating System</span>
                </div>
              </Link>
              <p className="text-2xl leading-relaxed font-light max-w-sm">Dehradun's premier Student Success Ecosystem. Combining military discipline with neural diagnostics.</p>
              <div className="space-y-10">
                <div className="flex gap-8 items-start text-left">
                  <MapPin className="h-8 w-8 text-accent shrink-0" />
                  <p className="text-lg font-medium">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand 248001</p>
                </div>
                <div className="flex gap-8 items-start text-left">
                  <Phone className="h-8 w-8 text-accent shrink-0" />
                  <p className="text-lg font-medium">+91 7878553385 • +91 6399000440</p>
                </div>
                <div className="flex gap-8 items-start text-left">
                  <Mail className="h-8 w-8 text-accent shrink-0" />
                  <p className="text-lg font-medium">support@dronaiq.com</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Academic OS</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/student-dashboard">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent Monitor</Link></li>
                   <li><Link href="/academic-health-check">AI Diagnostics</Link></li>
                   <li><Link href="/career-guidance">Career Blueprint</Link></li>
                   <li><Link href="/revision-generator">Revision Generator</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Location Hubs</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/tuition-in/sahastradhara-road">Sahastradhara</Link></li>
                   <li><Link href="/tuition-in/rajpur-road">Rajpur Road</Link></li>
                   <li><Link href="/tuition-in/it-park">IT Park Hub</Link></li>
                   <li><Link href="/tuition-in/jakhan">Jakhan Circle</Link></li>
                   <li><Link href="/tuition-in/ballupur">Ballupur Estate</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Resources</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/blog">Success Articles</Link></li>
                   <li><Link href="/results">Results Wall</Link></li>
                   <li><Link href="/tutor-portal">Join Network</Link></li>
                   <li><Link href="/why-drona-iq">The Advantage</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Support</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/contact">Contact Hub</Link></li>
                   <li><Link href="/about">Our Vision</Link></li>
                   <li><Link href="https://wa.me/917878553385">WhatsApp Help</Link></li>
                   <li><Link href="tel:+917878553385">Admission Line</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-32 md:pt-64 text-center space-y-12 border-t border-white/5 mt-32 md:mt-64">
             <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.6em] text-white/20">© 2024 Drona IQ Student Success OS</p>
                <div className="flex gap-10 grayscale opacity-20">
                   <div className="font-headline font-extrabold text-white text-xl uppercase tracking-tighter">DRDA Legacy</div>
                   <div className="font-headline font-extrabold text-white text-xl uppercase tracking-tighter">ISO 9001:2015</div>
                </div>
             </div>
             <p className="text-[10px] uppercase font-bold tracking-[0.8em] text-white/10">Limited Students. Focused Training. Proven Results.</p>
          </div>
        </div>
      </footer>

      {/* 12. STICKY CONVERSION BUTTONS */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-6 z-[120]">
        <Link 
          href="https://wa.me/917878553385" 
          target="_blank"
          className="bg-green-500 text-white p-6 rounded-full shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform animate-bounce group relative"
          title="WhatsApp for Quick Demo"
        >
          <MessageCircle className="h-10 w-10 md:h-12 md:w-12" />
          <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-primary text-[12px] font-extrabold uppercase py-3 px-6 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/5 pointer-events-none">Chat with Coordinator</span>
        </Link>
        <Link 
          href="tel:+917878553385" 
          className="bg-primary text-white p-6 rounded-full shadow-[0_0_50px_rgba(11,19,43,0.4)] hover:scale-110 transition-transform group relative border border-white/10"
          title="Call Admission Hub"
        >
          <Phone className="h-10 w-10 md:h-12 md:w-12 text-accent" />
          <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-primary text-[12px] font-extrabold uppercase py-3 px-6 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/5 pointer-events-none">Call 7878553385</span>
        </Link>
      </div>

    </div>
  );
}
