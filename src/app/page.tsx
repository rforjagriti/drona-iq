
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
  AlertCircle,
  Bell,
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
  Wind,
  PhoneCall,
  Upload,
  Plus,
  Calendar,
  ClipboardList,
  Sprout,
  Orbit,
  ArrowDown,
  Home,
  Laptop,
  CheckCircle,
  Headphones,
  BookMarked,
  LightbulbIcon
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
import { Progress } from '@/components/ui/progress';

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
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[8.5rem] font-extrabold text-white leading-[0.9] tracking-tighter">
                  SMARTER <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">LEARNING.</span> <br className="hidden md:block"/>
                  STRONGER FUTURE.
                </h1>
              </div>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-white/50 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light text-center lg:text-left">
                Dehradun's apex hub where <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> meets <span className="text-accent font-bold">Neural Diagnostics</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
                <Link href="/admissions">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl backdrop-blur-xl group">
                    AI Health Check <Sparkles className="ml-3 h-5 w-5 text-accent group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-16 pt-12 border-t border-white/5">
                {[
                  { v: "5000+", l: "Scholars Trained", i: Users },
                  { v: "96.4%", l: "Success Index", i: Trophy },
                  { v: "24/7", l: "AI Mentorship", i: BrainCircuit }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-center lg:text-left group cursor-default">
                    <div className="bg-white/5 p-3 rounded-xl group-hover:bg-accent/10 transition-colors">
                      <stat.i className="h-5 w-5 md:h-7 md:w-7 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl md:text-4xl font-extrabold text-white font-headline tracking-tighter">{stat.v}</p>
                      <p className="text-[9px] md:text-[11px] text-white/30 uppercase font-bold tracking-[0.3em]">{stat.l}</p>
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
                    className="rounded-[4rem] object-cover h-[750px] w-full grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                    priority
                  />
                  <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-[3rem] border-white/20 shadow-2xl backdrop-blur-3xl animate-in slide-in-from-bottom-20 duration-1000 delay-500">
                    <div className="flex items-center gap-6">
                      <div className="bg-accent p-4 rounded-[1.5rem] text-primary shadow-xl"><TrendingUp className="h-8 w-8" /></div>
                      <div>
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] mb-1">Real-time Mastery</p>
                        <p className="text-2xl font-bold text-white tracking-tighter">+24.8% Concept Retention</p>
                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-3">
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

      {/* 2. LETTER TO PARENTS & STUDENTS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl space-y-32">
          {/* Letter to Parents */}
          <Card className="border-none shadow-[0_50px_100px_rgba(11,19,43,0.1)] rounded-[4rem] overflow-hidden bg-[#fafafa]">
            <CardContent className="p-16 md:p-32 space-y-16">
              <div className="flex justify-between items-center border-b pb-12 border-primary/5">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase text-accent tracking-[0.4em]">Official Statement</p>
                  <h3 className="text-3xl font-extrabold font-headline uppercase text-primary tracking-tight">A Letter to Parents</h3>
                </div>
                <Quote className="h-12 w-12 text-primary opacity-20" />
              </div>
              <div className="space-y-10 text-xl md:text-2xl text-primary/80 font-light leading-relaxed">
                <p>Dear Parent,</p>
                <p>We know your struggle. You want the best for your child, but the current education system feels like a maze. You worry about their **concentration**, their **discipline**, and their **future** in a competitive world.</p>
                <p>At Drona IQ, we don't just see a student ID; we see a legacy. We are not a tuition center. We are an **Ecosystem of Success**. We provide the mentorship your child needs to build not just great marks, but a great character.</p>
                <p>Trust us to be the bridge between their potential and their career.</p>
                <div className="pt-10 flex flex-col gap-2">
                  <p className="font-bold text-primary text-2xl uppercase">Drona IQ Core Team</p>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">Architecting Futures in Dehradun</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Letter to Students */}
          <Card className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-primary text-white">
            <CardContent className="p-16 md:p-32 space-y-16">
              <div className="flex justify-between items-center border-b pb-12 border-white/5">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase text-accent tracking-[0.4em]">A Call to Action</p>
                  <h3 className="text-3xl font-extrabold font-headline uppercase text-white tracking-tight">To Every Student Who Dreams Big</h3>
                </div>
                <Rocket className="h-12 w-12 text-accent opacity-20" />
              </div>
              <div className="space-y-10 text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                <p>Hey Champion,</p>
                <p>Do you ever feel like you're studying for hours but still not getting the results you want? Do you feel overwhelmed by the board exams or competitive pressures? **It's not your fault.**</p>
                <p>You don't need a better teacher; you need a better **system**. You need to know exactly where you are losing marks and how to fix it without burning out. Every topper was once a beginner. The difference is they had a roadmap.</p>
                <p>Let's build your success, step by step, daily. Your future starts today.</p>
                <div className="pt-10 flex flex-col gap-2">
                  <p className="font-bold text-white text-2xl uppercase">Your Mentors at Drona IQ</p>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">24/7 Digital Hub Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. PARENT PSYCHOLOGY: WANTS VS FEARS */}
      <section className="py-24 md:py-48 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none uppercase font-bold tracking-[0.4em] text-[10px] px-6 py-2 rounded-full shadow-lg">The Trust Protocol</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Why 5000+ Dehradun <br/> <span className="text-accent italic">Families Trust Us</span></h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">We solve the silent problems that keep parents awake at night.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            {/* What Parents Fear */}
            <div className="space-y-8 bg-red-50/30 p-12 rounded-[3rem] border border-red-100">
               <h3 className="text-3xl font-extrabold text-red-900 uppercase flex items-center gap-3"><AlertTriangle className="h-8 w-8" /> What Parents Fear</h3>
               <div className="space-y-6">
                 {[
                   "Children losing focus in massive coaching 'factories'.",
                   "Missing fundamental concepts that impact board exams.",
                   "Digital distractions wasting precious study hours.",
                   "Lack of discipline and character development.",
                   "No visibility into daily progress and improvement."
                 ].map((fear, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                     <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1"><ZapOff className="h-3 w-3 text-red-600" /></div>
                     <p className="text-lg text-red-800/80 font-light">{fear}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* What Drona IQ Delivers */}
            <div className="space-y-8 bg-green-50/30 p-12 rounded-[3rem] border border-green-100">
               <h3 className="text-3xl font-extrabold text-green-900 uppercase flex items-center gap-3"><Heart className="h-8 w-8" /> What Every Parent Wants</h3>
               <div className="space-y-6">
                 {[
                   "Personalized mentorship focused on their child's unique speed.",
                   "Real-time diagnostic reports with 99.4% precision.",
                   "Military-grade discipline and time management habits.",
                   "Confidence that leads to state-level board scores.",
                   "Character building that creates responsible citizens."
                 ].map((want, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                     <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 className="h-3 w-3 text-green-600" /></div>
                     <p className="text-lg text-green-800/80 font-light">{want}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOD-LEVEL TECHNOLOGY SUITE */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center space-y-12 mb-32">
            <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Intelligence Hub</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">The God-Level <span className="text-accent">Technology Suite</span></h2>
            <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">Proprietary AI engines that forecast success and eliminate failure.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
            <div className="space-y-12">
               <div className="space-y-6">
                 <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter">Academic Risk <br/> <span className="text-accent italic">Detector™</span></h2>
               </div>
               <p className="text-xl text-white/60 font-light leading-relaxed">Our neural engine monitors 500+ data points daily to identify when a student is likely to hit a performance plateau **before it happens.**</p>
               <div className="grid grid-cols-2 gap-8">
                 {[
                   { l: "Risk Heatmaps", i: Flame },
                   { l: "Failure Prediction", i: AlertCircle },
                   { l: "Corrective Drills", i: Zap },
                   { l: "Live Alerts", i: Bell }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                     <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-accent transition-all duration-500"><stat.i className="h-6 w-6 text-accent group-hover:text-primary" /></div>
                     <span className="font-bold uppercase text-xs tracking-widest">{stat.l}</span>
                   </div>
                 ))}
               </div>
            </div>
            <Card className="border-none shadow-2xl bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] border-white/10">
               <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-6">
                    <p className="font-bold uppercase text-accent text-sm tracking-widest">Digital Twin Status</p>
                    <Badge className="bg-green-500 text-white border-none animate-pulse">Syncing v3.4</Badge>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-2xl">88</div>
                     <div>
                       <p className="text-lg font-bold">Concept Mastery Index</p>
                       <p className="text-white/40 text-xs uppercase font-bold tracking-widest">Aarav S. | Class 10th</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase opacity-40"><span>Physics</span><span>92%</span></div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full"><div className="bg-accent h-full w-[92%] rounded-full"></div></div>
                    <div className="flex justify-between text-xs font-bold uppercase opacity-40"><span>Calculus</span><span>64%</span></div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full"><div className="bg-red-500 h-full w-[64%] rounded-full"></div></div>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-red-400 text-xs italic font-medium flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" /> RISK DETECTED: Mastery dropped 12% in 48h.
                    </p>
                  </div>
               </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Success Simulator", d: "Simulate board exam outcomes based on current daily routines and speed.", i: Activity },
              { t: "Success Predictor", d: "AI-driven rank prediction for NDA, JEE, and NEET based on competitive baseline.", i: Trophy },
              { t: "Peace of Mind Index™", d: "A transparency score for parents to measure their visibility into child growth.", i: Heart }
            ].map((tech, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-10 rounded-[2.5rem] space-y-6 group hover:bg-white hover:text-primary transition-all duration-700">
                <div className="bg-accent/10 p-6 w-fit rounded-3xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <tech.i className="h-10 w-10 text-accent group-hover:text-accent" />
                </div>
                <h4 className="text-2xl font-bold uppercase tracking-tight">{tech.t}</h4>
                <p className="text-sm opacity-60 group-hover:opacity-100 font-light leading-relaxed">{tech.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAMMES BY CLASS (MASSIVE CLASS UNIVERSE) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Class Universe</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Academic Pathways <br/> <span className="text-accent italic">By Grade</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">From foundation builders to career architects—tailored pathways for every grade level.</p>
          </div>

          <div className="space-y-48">
            {[
              { id: 'c58', c: "Class 5 - 8", stage: "Foundation Stage", desc: "Building the cognitive baseline. At this stage, we focus on developing a logic-first mindset and elimination of rote learning habits.", goals: ["Logical Reasoning", "Language Mastery", "Scientific Curiosity"], outcome: "Bridge to Secondary Success" },
              { id: 'c910', c: "Class 9 - 10", stage: "Board Excellence", desc: "The transition to competitive excellence. We prepare students for state-level board scores while introducing JEE/NEET/NDA baseline concepts.", goals: ["95%+ Board Strategy", "Foundation for NDA/JEE", "Intensive Testing"], outcome: "State Topper Merit" },
              { id: 'c1112s', c: "Class 11 - 12 Science", stage: "Career Preparation", desc: "For the future doctors, engineers, and defense officers. A rigorous curriculum mapped with competitive exam patterns.", goals: ["Physics/Chem/Math Deep Dive", "Mock Exam Mastery", "Time Optimization"], outcome: "Apex Competitive Rank" },
              { id: 'c1112c', c: "Class 11 - 12 Commerce", stage: "Professional Preparation", desc: "Mastering the world of finance and professional logic. Preparing for top universities and professional courses.", goals: ["Accountancy Logic", "Business Strategic Thinking", "Economics Depth"], outcome: "Top University Entry" }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-12">
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <Badge className="bg-accent text-primary border-none uppercase text-[10px] font-bold px-4 py-1.5">{item.stage}</Badge>
                         <span className="text-primary/20 font-extrabold text-5xl">0{i+1}</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">{item.c} Journey</h3>
                   </div>
                   <p className="text-2xl text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                      <div className="space-y-4">
                         <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Learning Goals</h4>
                         <ul className="space-y-3">
                            {item.goals.map((g, j) => <li key={j} className="text-muted-foreground text-sm font-medium border-l-2 border-primary/10 pl-4">{g}</li>)}
                         </ul>
                      </div>
                      <div className="bg-primary text-white p-8 rounded-[2rem] space-y-4 relative overflow-hidden">
                         <Trophy className="absolute right-[-20px] bottom-[-20px] h-24 w-24 opacity-10" />
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Expected Outcome</p>
                         <p className="text-xl font-bold font-headline leading-tight">{item.outcome}</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <Link href="/admissions">
                         <Button className="h-16 px-10 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Enroll Programme</Button>
                      </Link>
                      <Link href="/academic-health-check">
                         <Button variant="outline" className="h-16 px-10 border-primary text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/5 transition-all">View Full Syllabus</Button>
                      </Link>
                   </div>
                </div>
                <div className="flex-1 relative group">
                   <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] group-hover:bg-accent/10 transition-colors duration-1000"></div>
                   <Image src={`https://picsum.photos/seed/prog_${item.id}/800/1000`} width={800} height={1000} alt={item.c} className="rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-[2000ms] relative z-10" />
                   <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl z-20 shadow-2xl border-white/20 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex items-center gap-6">
                         <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold">92%</div>
                         <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary/50">Avg. Mastery Improvement</p>
                            <p className="text-lg font-bold text-primary">State Merit Certified</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. D.R.O.N.A™ METHOD & ECOSYSTEM MAP */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center space-y-12 mb-32">
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">The <span className="text-accent">D.R.O.N.A™</span> Method</h2>
            <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">Our proprietary 5-tier architecture for absolute student evolution.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 mb-48">
            {[
              { char: "D", title: "Diagnose", d: "AI-driven assessment to find every hidden learning gap.", i: ScanSearch },
              { char: "R", title: "Roadmap", d: "Personalized strategy based on goals and speed.", i: MapPin },
              { char: "O", title: "Optimize", d: "Daily tracking and curriculum synergy for efficiency.", i: Zap },
              { char: "N", title: "Nurture", d: "Mentorship and character building for consistency.", i: Heart },
              { char: "A", title: "Achieve", d: "Target exam success and career readiness.", i: Trophy }
            ].map((step, i) => (
              <div key={i} className="space-y-8 group">
                <div className="relative mx-auto w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/10 flex items-center justify-center text-5xl md:text-8xl font-extrabold text-white/5 transition-all group-hover:border-accent group-hover:text-accent">
                   {step.char}
                   <div className="absolute inset-0 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                     <step.i className="h-12 w-12 text-accent" />
                   </div>
                </div>
                <div className="space-y-2 text-center">
                   <h4 className="text-2xl font-bold uppercase tracking-tight text-accent">{step.title}</h4>
                   <p className="text-xs text-white/40 font-light leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
             <div className="text-center space-y-6">
                <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Life OS</Badge>
                <h3 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter">A Day in the Life <br/> <span className="text-accent italic">Of a Scholar</span></h3>
             </div>
             <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 hidden md:block"></div>
                <div className="space-y-32">
                   {[
                     { t: "06:00 AM", task: "Mindfulness & Physical Drill", d: "Military-grade start for peak cognitive focus.", i: Sunrise },
                     { t: "08:00 AM", task: "Mainstream Schooling", d: "Drona IQ synergy with school curriculum.", i: School },
                     { t: "04:00 PM", task: "Mentorship Hub", d: "One-on-one conceptual deep dives.", i: Users },
                     { t: "07:30 PM", task: "AI Diagnostic Review", d: "Automated analysis of the day's tasks.", i: BrainCircuit },
                     { t: "09:30 PM", task: "Parent Sync & Sleep", d: "Final goal tracking and rest for recovery.", i: MoonIcon }
                   ].map((item, i) => (
                     <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-1 text-center md:text-left space-y-4 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                           <p className="text-3xl font-extrabold text-accent font-headline">{item.t}</p>
                           <h4 className="text-2xl font-bold uppercase text-white tracking-tight">{item.task}</h4>
                           <p className="text-lg text-white/40 font-light">{item.d}</p>
                        </div>
                        <div className="relative z-10 h-24 w-24 rounded-full bg-primary flex items-center justify-center shadow-2xl border-4 border-white/10 group hover:border-accent transition-colors">
                           <item.i className="h-10 w-10 text-accent" />
                        </div>
                        <div className="flex-1 hidden md:block"></div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. PARENTS' COMMAND CENTER (OS PREVIEW) */}
      <section className="py-24 md:py-48 bg-[#fafafa] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Operating System</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Unified <br/> <span className="text-accent italic">Success OS</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">The digital interface of your academic growth journey.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Parent Dashboard Preview */}
            <Card className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-white">
              <div className="bg-primary p-12 text-white flex justify-between items-center">
                 <div className="space-y-2">
                   <h4 className="text-2xl font-bold uppercase tracking-tight">Parent OS v2.0</h4>
                   <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Full Transparency</p>
                 </div>
                 <LayoutDashboard className="h-10 w-10 text-accent opacity-50" />
              </div>
              <CardContent className="p-12 space-y-8">
                 <p className="text-lg text-muted-foreground font-light">Monitor attendance, marks, and mentor feedback in real-time. No more guesswork at parent-teacher meetings.</p>
                 <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4 text-primary font-bold uppercase text-xs tracking-widest"><CheckCircle2 className="h-4 w-4 text-green-500" /> Attendance Heartbeat</div>
                    <div className="flex items-center gap-4 text-primary font-bold uppercase text-xs tracking-widest"><CheckCircle2 className="h-4 w-4 text-green-500" /> Concept Mastery Charts</div>
                    <div className="flex items-center gap-4 text-primary font-bold uppercase text-xs tracking-widest"><CheckCircle2 className="h-4 w-4 text-green-500" /> Direct Mentor Messenger</div>
                 </div>
                 <Link href="/parent-dashboard" className="block pt-6">
                    <Button variant="outline" className="w-full h-14 border-primary text-primary font-bold uppercase text-[10px] tracking-widest">Launch Parent Hub</Button>
                 </Link>
              </CardContent>
            </Card>

            {/* AI Health Check Preview */}
            <Card className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-white border-t-4 border-accent">
              <div className="navy-gradient p-12 text-white flex justify-between items-center">
                 <div className="space-y-2">
                   <h4 className="text-2xl font-bold uppercase tracking-tight">AI Health Check</h4>
                   <p className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Diagnostic Neural Engine</p>
                 </div>
                 <BrainCircuit className="h-10 w-10 text-accent" />
              </div>
              <CardContent className="p-12 space-y-8">
                 <p className="text-lg text-muted-foreground font-light">Get a surgical report on your learning gaps in 60 seconds. Our AI maps every missing concept from Class 5 onwards.</p>
                 <div className="p-6 bg-accent/5 rounded-3xl border border-accent/20">
                    <p className="text-xs font-bold uppercase text-accent mb-2">Sample Output:</p>
                    <p className="text-primary text-sm font-medium leading-relaxed italic">"Risk detected in 'Trigonometry v1.0'. Foundation missing from Grade 8 Chapter 4."</p>
                 </div>
                 <Link href="/academic-health-check" className="block pt-6">
                    <Button className="w-full h-14 bg-accent text-white hover:bg-accent/90 font-bold uppercase text-[10px] tracking-widest shadow-xl">Run Diagnostic Free</Button>
                 </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. BEYOND MARKS: HUMANITY & LIFE SKILLS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none uppercase font-bold tracking-[0.4em] text-[10px] px-6 py-2 rounded-full">The DIQ DNA</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Beyond Marks: <br/> <span className="text-accent italic">Building Humans.</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">We focus on the 10 critical life-pillars that determine long-term success beyond school exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-48">
            {[
              { t: "Character Building", i: Shield, d: "Ethics and integrity at the core of learning." },
              { t: "Discipline", i: ListChecks, d: "Military-grade academic scheduling." },
              { t: "Leadership", i: Trophy, d: "Developing officer-like decision making." },
              { t: "Confidence", i: Sunrise, d: "Building self-belief through mastery." },
              { t: "Communication", i: MessageSquare, d: "Articulating complex thoughts clearly." },
              { t: "Digital Discipline", i: Monitor, d: "Responsible and focused screen usage." },
              { t: "Respect", i: Heart, d: "Valuing teachers, parents, and society." },
              { t: "Time Management", i: Clock, d: "Mastering the 24-hour cycle efficiently." },
              { t: "Goal Setting", i: Target, d: "Visioning the 5-year future roadmap." },
              { t: "Positive Mindset", i: Smile, d: "Resilience in the face of challenges." }
            ].map((card, i) => (
              <Card key={i} className="border-none shadow-2xl rounded-[3rem] p-10 space-y-8 bg-muted/20 hover:bg-primary transition-all duration-700 group cursor-default">
                <div className="bg-white p-6 w-fit rounded-3xl group-hover:bg-accent group-hover:text-primary transition-colors shadow-sm">
                  <card.i className="h-10 w-10 text-accent group-hover:text-primary" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-headline uppercase leading-tight text-primary group-hover:text-white transition-colors">{card.t}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-white/60 leading-relaxed font-light">{card.d}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border-none bg-accent text-white rounded-[4rem] p-16 md:p-32 overflow-hidden relative">
             <HandHeart className="absolute -right-20 -bottom-20 h-96 w-96 opacity-10" />
             <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-12">
                   <div className="space-y-6">
                      <h3 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tighter">Humanity & <br/> <span className="italic">Responsibility</span></h3>
                      <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">We teach students that success is empty without service. Drona IQ scholars are trained to lead with kindness and a "National Pride First" mindset.</p>
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                      {[
                        "Environmental Care",
                        "Community Service",
                        "Helping Peer Growth",
                        "Supporting Parents",
                        "Responsible Citizenship",
                        "National Pride"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center text-sm font-bold uppercase tracking-widest"><Check className="h-4 w-4" /> {item}</div>
                      ))}
                   </div>
                </div>
                <div className="relative h-[500px] hidden lg:block">
                   <Image src="https://picsum.photos/seed/drona_humanity/800/1000" fill alt="Humanity" className="rounded-[3rem] object-cover shadow-2xl" />
                </div>
             </div>
          </Card>
        </div>
      </section>

      {/* 9. DEFENCE ADVANTAGE (DrDA LEGACY) */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-accent opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-40"></div>
              <Image 
                src="https://picsum.photos/seed/drona_def_premium/1200/1600" 
                width={1200} 
                height={1600} 
                alt="Defence Advantage" 
                className="rounded-[4rem] shadow-2xl border border-white/10" 
              />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Powered by DrDA</Badge>
                 <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">The Defence <br/> <span className="text-accent italic">Advantage.</span></h2>
               </div>
               <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">Built on the legacy of **Droneshwar Defence Academy**, we bring military-grade character building to school education.</p>
               <div className="grid gap-6">
                 {[
                   { t: "Officer Like Qualities (OLQs)", d: "Instilling 15 core leadership traits in every student.", i: Shield },
                   { t: "Mental Resilience", d: "Pressure management techniques from elite military training.", i: Brain },
                   { t: "Communication Mastery", d: "Public speaking and group discussion training for SSB & Interviews.", i: Mic },
                   { t: "Discipline Framework", d: "A strict 24-hour cycle optimization model.", i: Clock }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                     <div className="bg-accent/20 p-4 rounded-2xl"><stat.i className="h-6 w-6 text-accent" /></div>
                     <div>
                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">{stat.t}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{stat.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
               <Link href="https://droneshwardefenceacademy.com" target="_blank" className="block pt-6">
                 <Button className="h-20 px-12 bg-accent text-primary font-bold uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-all">Explore DrDA Legacy</Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCAL SEO & FAQ FORTRESS */}
      <section className="py-24 md:py-48 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Local Authority</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Dehradun's Apex <br/> <span className="text-accent italic">Learning Hubs</span></h2>
            <p className="text-xl text-muted-foreground font-light">Serving 98% of the valley with premium coaching and verified home tutors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-48">
            {[
              "Sahastradhara Road", "IT Park Hub", "Rajpur Road", "Jakhan Area",
              "Ballupur Circle", "Prem Nagar", "Clement Town", "Dehradun Cantt",
              "Patel Nagar", "Nehru Colony", "Vasant Vihar", "Race Course"
            ].map((area, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2rem] p-10 bg-white text-center space-y-4 group hover:bg-primary transition-all duration-500">
                <div className="bg-primary/5 p-4 w-fit mx-auto rounded-2xl group-hover:bg-accent transition-colors"><MapPin className="h-6 w-6 text-accent group-hover:text-primary" /></div>
                <h4 className="font-bold text-primary uppercase text-sm tracking-tight group-hover:text-white transition-colors">{area}</h4>
                <p className="text-[10px] text-muted-foreground group-hover:text-white/40 uppercase font-bold tracking-widest">Local Experts Available</p>
                <Link href={`/tuition-in/${area.toLowerCase().replace(' ', '-')}`} className="block pt-2">
                   <Button variant="ghost" className="text-accent font-bold uppercase text-[9px] group-hover:text-white group-hover:bg-white/10">Explore Area</Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
             <div className="text-center space-y-6 mb-16">
                <h3 className="text-3xl font-extrabold uppercase text-primary tracking-tight">Frequently Asked Questions</h3>
             </div>
             <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "How can I monitor my child's daily progress?", a: "You will have full access to the Drona IQ Parent OS Dashboard. Every session, homework submission, and test score is logged in real-time." },
                  { q: "What makes Drona IQ different from local Dehradun coaching centers?", a: "We combine military-grade discipline from DrDA with proprietary AI diagnostic tools. We track individual mastery, not just group attendance." },
                  { q: "Is the AI assessment really 99.4% accurate?", a: "Yes, it's based on millions of data points across CBSE and ICSE patterns, ensuring precise gap detection." },
                  { q: "Can I take both online and offline support?", a: "Our hybrid model is the most popular, combining the discipline of physical mentorship with the 24/7 support of our digital hub." },
                  { q: "How do you handle character building?", a: "We integrate 15 'Officer Like Qualities' (OLQs) into our mentorship. Students learn discipline, national pride, and responsibility alongside academics." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white border rounded-2xl px-8 shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-8">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
             </Accordion>
          </div>
        </div>
      </section>

      {/* 11. FINAL EMOTIONAL MESSAGE & FOOTER */}
      <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
           <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
           <div className="space-y-10">
             <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">We don't just teach chapters; we architect careers. We don't just track marks; we build character. Trust the Drona IQ process to transform potential into performance.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/admissions">
                <Button className="h-24 px-16 bg-accent text-primary font-headline text-xl rounded-[2.5rem] shadow-2xl uppercase tracking-widest font-extrabold hover:scale-105 transition-all">Start The Journey</Button>
              </Link>
              <Link href="tel:+917878553385">
                <Button variant="outline" className="h-24 px-16 border-white/20 text-white font-headline text-xl rounded-[2.5rem] shadow-xl uppercase tracking-widest font-extrabold hover:bg-white/10 transition-all">Talk to Counselor</Button>
              </Link>
           </div>
        </div>
      </section>

      {/* FOOTER (MEGA) */}
      <footer className="py-32 md:py-64 bg-[#05070a] text-white/40 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24">
            <div className="lg:col-span-1 space-y-12 text-left">
               <Link href="/" className="flex items-center space-x-4 group">
                <div className="rounded-[2rem] bg-primary p-6 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-12 w-12 text-accent" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-headline text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                  <span className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mt-3">Success Operating System</span>
                </div>
              </Link>
              <p className="text-2xl leading-relaxed font-light">Dehradun's premier Student Success Ecosystem. Built on discipline, tracking, and results.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Ecosystem</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                   <li><Link href="/student">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent OS</Link></li>
                   <li><Link href="/academic-health-check">AI Health</Link></li>
                   <li><Link href="/career-guidance">Career Lab</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Local SEO</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                   <li><Link href="/tuition-in/rajpur-road">Rajpur Road</Link></li>
                   <li><Link href="/tuition-in/jakhan">Jakhan Area</Link></li>
                   <li><Link href="/tuition-in/it-park">IT Park</Link></li>
                   <li><Link href="/tuition-in/ballupur">Ballupur</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Resources</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                   <li><Link href="/blog">Success Hub</Link></li>
                   <li><Link href="/results">Wall of Fame</Link></li>
                   <li><Link href="/why-drona-iq">DIQ Protocol</Link></li>
                   <li><Link href="/contact">Support Center</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Contact</h4>
                 <div className="space-y-8">
                    <p className="text-sm md:text-lg font-bold uppercase leading-relaxed">+91 78785 53385<br/>+91 63990 00440</p>
                    <p className="text-xs md:text-sm font-bold uppercase leading-relaxed text-white/30 tracking-widest">3rd Floor, Om Tower, Sahastradhara Road, Dehradun</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="pt-32 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em]">
             <p>© 2026 Drona IQ Academy. All Rights Reserved.</p>
             <div className="flex gap-12">
                <span>Privacy Protocol</span>
                <span>Terms of Service</span>
                <Link href="https://t.me/droneshwardefenceacademy" className="text-accent">@dronaiq_official</Link>
             </div>
          </div>
        </div>
      </footer>

      {/* STICKY CONVERSION BUTTONS */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-6 z-[120]">
        <Link 
          href="https://wa.me/917878553385" 
          target="_blank"
          className="bg-green-500 text-white p-6 rounded-full shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform animate-bounce group relative"
          title="WhatsApp for Quick Demo"
        >
          <MessageCircle className="h-10 w-10 md:h-12 md:w-12" />
        </Link>
        <Link 
          href="tel:+917878553385" 
          className="bg-primary text-white p-6 rounded-full shadow-[0_0_50px_rgba(11,19,43,0.4)] hover:scale-110 transition-transform group relative border border-white/10"
          title="Call Admission Hub"
        >
          <Phone className="h-10 w-10 md:h-12 md:w-12 text-accent" />
        </Link>
      </div>

    </div>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
