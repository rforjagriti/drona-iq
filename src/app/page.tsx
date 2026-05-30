
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Sparkles,
  ChevronRight,
  Trophy,
  Activity,
  Quote,
  Rocket,
  School,
  User,
  History,
  Brain,
  Timer,
  ZapOff,
  Flame,
  Phone,
  Calculator,
  Globe,
  Heart,
  AlertTriangle,
  AlertCircle,
  Bell,
  Fingerprint,
  Stethoscope,
  Plane,
  Smartphone,
  Coins,
  Medal,
  Cpu,
  Layers,
  Component,
  Atom,
  ScanSearch,
  Sunrise,
  ShieldAlert,
  Mic,
  Flag,
  Orbit,
  Dna,
  Lock,
  Scale,
  Microscope,
  MessageSquare,
  Users,
  Shield,
  Briefcase,
  Laptop,
  Check,
  FileText,
  ListChecks,
  HandHeart,
  BookMarked,
  Home
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

  const classes = [
    { 
      id: 'c5', 
      grade: "Class 5", 
      title: "The Curiosity Hub", 
      desc: "Building the cognitive baseline for young minds in Dehradun. We transform rote learning into logic-first thinking.",
      subjects: ["English Literature", "Mental Mathematics", "General Science", "Logic & IQ"],
      outcomes: ["Critical Thinking", "Expression", "Numerical Speed"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I"
    },
    { 
      id: 'c6', 
      grade: "Class 6", 
      title: "The Logic Foundation", 
      desc: "Transitioning to complex problem solving with the best tuition methodology. We focus on structured logic.",
      subjects: ["Advanced Grammar", "Concept Maths", "Physics/Chem Basics", "Logical Reasoning"],
      outcomes: ["Methodical Learning", "Analytical Skills", "Scientific Temper"],
      image: "https://picsum.photos/seed/drona_c6/800/1000",
      roadmap: "Foundation Stage II"
    },
    { 
      id: 'c7', 
      grade: "Class 7", 
      title: "The Analytical Core", 
      desc: "Deepening subject conceptualization. Preparing for high-school level rigor with Dehradun's most intensive tracking.",
      subjects: ["Verbal Reasoning", "Algebra Mastery", "Experimental Science", "Social Logic"],
      outcomes: ["Conceptual Clarity", "Research Aptitude", "Confidence"],
      image: "https://picsum.photos/seed/drona_c7/800/1000",
      roadmap: "Foundation Stage III"
    },
    { 
      id: 'c8', 
      grade: "Class 8", 
      title: "The Board Readiness Stage", 
      desc: "The most critical foundation year for CBSE/ICSE students. Mapping concepts to 10th and 12th needs.",
      subjects: ["Geometry Mastery", "Bio-Chemistry Core", "English Proficiency", "Mental Aptitude"],
      outcomes: ["Secondary Readiness", "Concept Syncing", "Result Orientation"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Pre-Secondary Success"
    },
    { 
      id: 'c9', 
      grade: "Class 9", 
      title: "The Competitive Gateway", 
      desc: "Introducing JEE, NEET, and NDA foundations. Preparing for the transition to Board excellence.",
      subjects: ["Numerical Physics", "Mathematical Logic", "Competitive IQ", "English Communications"],
      outcomes: ["Exam Temperament", "Time Management", "Depth Analysis"],
      image: "https://picsum.photos/seed/drona_c9/800/1000",
      roadmap: "Gateway Stage"
    },
    { 
      id: 'c10', 
      grade: "Class 10", 
      title: "The Board Excellence Protocol", 
      desc: "Maximum focus on 95%+ Board results and competitive baseline building for toppers.",
      subjects: ["10th Boards Full Sync", "PYQ Analysis", "Sample Paper Drills", "Stress Management"],
      outcomes: ["Board Merit", "Target Clarity", "Discipline"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Excellence Stage"
    },
    { 
      id: 'c11s', 
      grade: "Class 11 Science", 
      title: "The Engineering & Medical Blueprint", 
      desc: "Rigorous preparation for JEE/NEET/NDA while mastering the 11th Science curriculum.",
      subjects: ["Advanced Physics", "Organic Chemistry", "Calculus/Bio", "Entrance Mock Tests"],
      outcomes: ["Competitive Rank", "Concept Mastery", "Pressure Handling"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "Career Launchpad I"
    },
    { 
      id: 'c11c', 
      grade: "Class 11 Commerce", 
      title: "The Financial Architect Program", 
      desc: "Building foundations for CA, CS, and top global business schools with industry-expert mentorship.",
      subjects: ["Accountancy Logic", "Economics Depth", "Business Strategy", "Maths/Stats"],
      outcomes: ["Professional Clarity", "Economic Insight", "Strategic Thinking"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Professional Path I"
    },
    { 
      id: 'c11h', 
      grade: "Class 11 Humanities", 
      title: "The Civil Service Foundation", 
      desc: "Preparing for CUET and UPSC basics with a deep focus on social sciences and critical reasoning.",
      subjects: ["History Analysis", "Political Dynamics", "Psychology Basics", "English Honors"],
      outcomes: ["Critical Reasoning", "Social Insight", "Communication"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "Leadership Path I"
    },
    { 
      id: 'c12s', 
      grade: "Class 12 Science", 
      title: "The Apex Career Launchpad", 
      desc: "Final push for Board merit and National Level entrance exams with AI mock simulators.",
      subjects: ["12th Science Board Sync", "JEE/NEET Crash Course", "NDA Final Drill", "Mocks"],
      outcomes: ["Career Entry", "Board Topper Status", "Peak Performance"],
      image: "https://picsum.photos/seed/drona_c12s/800/1000",
      roadmap: "Apex Launchpad"
    },
    { 
      id: 'c12c', 
      grade: "Class 12 Commerce", 
      title: "The Professional Mastery Program", 
      desc: "Final Board preparation and entrance training for professional degrees with verified experts.",
      subjects: ["12th Commerce Board Sync", "CUET Prep", "CA Foundation Drills", "Applied Eco"],
      outcomes: ["University Merit", "Professional Base", "Industry Logic"],
      image: "https://picsum.photos/seed/drona_c12c/800/1000",
      roadmap: "Career Mastery"
    },
    { 
      id: 'c12h', 
      grade: "Class 12 Humanities", 
      title: "The Global Leadership Track", 
      desc: "Top university admissions and civil services orientation for future leaders.",
      subjects: ["12th Humanities Board Sync", "UPSC Baseline", "CUET Intensive", "Liberal Arts"],
      outcomes: ["Merit Admissions", "Leadership Prep", "Global Perspective"],
      image: "https://picsum.photos/seed/drona_c12h/800/1000",
      roadmap: "Global Future"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-accent selection:text-white overflow-x-hidden">
      
      <Navbar />
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[110vh] flex items-center pt-32 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-[#05070a]">
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

      {/* 2. THE SUCCESS PATHFINDER (INTERACTIVE WIZARD) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Wizard v1.0</Badge>
                    <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Success <br/> <span className="text-accent italic">Pathfinder.</span></h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">Don't guess your child's future. Use our AI-driven wizard to see their personalized learning roadmap in 30 seconds.</p>
                 </div>
                 <div className="space-y-8">
                    <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 space-y-6">
                       <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Step 1: Select Grade</p>
                       <div className="flex flex-wrap gap-3">
                          {["Class 5-8", "Class 9-10", "Class 11-12", "Competitive"].map((g, i) => (
                             <button key={i} className="px-6 py-3 rounded-full border border-primary/10 font-bold text-xs uppercase hover:bg-primary hover:text-white transition-all">{g}</button>
                          ))}
                       </div>
                       <p className="text-xs font-bold uppercase tracking-widest text-primary/40 pt-4">Step 2: Select Goal</p>
                       <div className="flex flex-wrap gap-3">
                          {["Board Topper", "NDA / Defence", "JEE / NEET", "Personality Dev"].map((g, i) => (
                             <button key={i} className="px-6 py-3 rounded-full border border-primary/10 font-bold text-xs uppercase hover:bg-accent hover:text-white transition-all">{g}</button>
                          ))}
                       </div>
                    </div>
                    <Link href="/academic-health-check">
                      <Button className="w-full h-16 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl">Generate My Custom Roadmap <Sparkles className="ml-2 h-4 w-4 text-accent" /></Button>
                    </Link>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[50px] opacity-30"></div>
                 <Card className="border-none shadow-2xl p-10 rounded-[3rem] bg-white relative z-10 space-y-8 overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="h-48 w-48" /></div>
                    <h4 className="text-2xl font-bold uppercase text-primary border-b pb-6">Personalized Sample</h4>
                    <div className="space-y-6">
                       {[
                         { l: "Year 1", t: "Foundation Mastery", d: "Closing 100% of past learning gaps." },
                         { l: "Year 2", t: "Competitive Baseline", d: "Introduction to national level testing." },
                         { l: "Year 3", t: "Apex Performance", d: "Targeting state-level board merit." }
                       ].map((step, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="h-10 w-10 rounded-xl bg-accent text-primary flex items-center justify-center font-bold text-xs shrink-0">{i+1}</div>
                            <div className="space-y-1">
                               <p className="font-bold text-primary uppercase text-sm">{step.t}</p>
                               <p className="text-xs text-muted-foreground font-light">{step.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 3. SCHOLAR XP LEADERBOARD (GAMIFICATION PREVIEW) */}
      <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center space-y-6 mb-24">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Scholar Matrix</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Live Scholar <br/> <span className="text-accent italic">Leaderboard.</span></h2>
              <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">See how our scholars are leveling up in real-time across Dehradun. Every task completed adds XP.</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-12">
              <Card className="bg-white/5 border-white/10 p-10 rounded-[3rem] space-y-8">
                 <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold uppercase text-accent">Top Elite</h4>
                    <Trophy className="h-6 w-6 text-accent" />
                 </div>
                 <div className="space-y-6">
                    {[
                      { n: "A.S.", l: "Lvl 42", xp: "12,400", g: "Class 10" },
                      { n: "R.V.", l: "Lvl 38", xp: "11,200", g: "Class 12" },
                      { n: "M.N.", l: "Lvl 35", xp: "10,800", g: "Class 8" }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent">{i+1}</div>
                            <div>
                               <p className="font-bold">{s.n}</p>
                               <p className="text-[10px] text-white/30 uppercase font-bold">{s.g}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-sm font-bold text-accent">{s.l}</p>
                            <p className="text-[10px] text-white/30 uppercase font-bold">{s.xp} XP</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </Card>

              <div className="lg:col-span-2 space-y-12">
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { l: "Global XP Logged", v: "1.2M+", i: Zap },
                      { l: "Levels Unlocked", v: "4,500", i: Medal },
                      { l: "Avg. Streak", v: "14 Days", i: Flame },
                      { l: "Active Mentors", v: "500+", i: Users }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2 border-l-2 border-white/10 pl-6 hover:border-accent transition-colors">
                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2">
                           <stat.i className="h-3 w-3 text-accent" /> {stat.l}
                         </p>
                         <p className="text-4xl font-extrabold font-headline">{stat.v}</p>
                      </div>
                    ))}
                 </div>
                 <Card className="bg-accent text-primary p-10 rounded-[3rem] relative overflow-hidden group">
                    <BrainCircuit className="absolute right-[-20px] bottom-[-20px] h-48 w-48 opacity-10 group-hover:rotate-12 transition-transform duration-[2000ms]" />
                    <div className="space-y-6 relative z-10">
                       <h4 className="text-3xl font-extrabold uppercase leading-none tracking-tight">Gamified <br/> Learning OS.</h4>
                       <p className="text-lg font-light leading-relaxed">Our platform transforms study hours into an RPG-style growth journey. Students don't 'study'—they 'quest' for knowledge.</p>
                       <Link href="/student" className="block pt-4">
                          <Button className="bg-primary text-white font-bold uppercase text-[10px] tracking-widest px-8 h-12 rounded-xl">Join The Hub</Button>
                       </Link>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE SUCCESS PROBABILITY SIMULATOR (GOD IDEA) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">DIQ Algorithm</Badge>
                    <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Success <br/> <span className="text-accent italic">Simulator.</span></h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">Most students study without knowing their real-world success probability. We show you the math of achievement.</p>
                 </div>
                 <div className="grid gap-6">
                    {[
                      { t: "The Plateau Phase", v: "42%", d: "Standard learning without tracking hits a cognitive ceiling.", c: "bg-red-500" },
                      { t: "The Optimization Phase", v: "78%", d: "Initial tracking and routine correction.", c: "bg-orange-500" },
                      { t: "The Apex Phase", v: "98%", d: "Full Success OS integration and 24/7 AI diagnostic.", c: "bg-accent" }
                    ].map((phase, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-center text-xs font-bold uppercase text-primary">
                            <span>{phase.t}</span>
                            <span>{phase.v} Probability</span>
                         </div>
                         <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                            <div className={`${phase.c} h-full transition-all duration-1000`} style={{ width: phase.v }}></div>
                         </div>
                         <p className="text-[10px] text-muted-foreground font-bold">{phase.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-30"></div>
                 <Card className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden space-y-12">
                    <Cpu className="absolute top-0 right-0 p-8 h-48 w-48 opacity-5" />
                    <h4 className="text-3xl font-extrabold uppercase leading-tight text-accent">The Physics of <br/> High Performance.</h4>
                    <div className="space-y-8">
                       <div className="flex gap-6 items-center">
                          <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><Layers className="h-8 w-8 text-accent" /></div>
                          <div className="space-y-1">
                             <p className="font-bold text-xs uppercase tracking-widest">Cognitive Load Balancer</p>
                             <p className="text-[10px] text-white/40 leading-relaxed uppercase">Preventing burnout while maximizing concept retention rate.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-center">
                          <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><History className="h-8 w-8 text-accent" /></div>
                          <div className="space-y-1">
                             <p className="font-bold text-xs uppercase tracking-widest">Spaced Repetition Kernel</p>
                             <p className="text-[10px] text-white/40 leading-relaxed uppercase">Ensuring concepts stay in long-term memory for exam day.</p>
                          </div>
                       </div>
                    </div>
                    <Link href="/academic-health-check">
                      <Button className="w-full h-16 bg-accent text-primary font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all">Run My Success Simulation</Button>
                    </Link>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 5. THE NEUROSCIENCE OF MASTERY (AUTHORITY SECTION) */}
      <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center space-y-6 mb-32">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Cognitive Engineering</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
              <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">We don't just 'teach'. We engineer neural pathways using evidence-based cognitive science protocols.</p>
           </div>

           <div className="grid md:grid-cols-4 gap-8">
              {[
                { t: "Active Recall", d: "Cognitive testing that strengthens synaptic connections.", i: Brain },
                { t: "Gap Analysis", d: "AI detection of conceptual voids in long-term memory.", i: ScanSearch },
                { t: "Focus States", d: "Optimizing the pre-frontal cortex for deep concentration.", i: Zap },
                { t: "Retrieval Drills", d: "Automated review cycles that stop the 'Forgetting Curve'.", i: History }
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-10 rounded-[2.5rem] space-y-6 group hover:bg-white hover:text-primary transition-all duration-700">
                   <div className="bg-accent/10 p-6 w-fit rounded-3xl group-hover:bg-primary transition-colors">
                      <item.i className="h-10 w-10 text-accent group-hover:text-accent" />
                   </div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight">{item.t}</h4>
                   <p className="text-sm opacity-40 group-hover:opacity-100 font-light leading-relaxed">{item.d}</p>
                </Card>
              ))}
           </div>
           <div className="text-center pt-24">
             <Link href="/admissions">
              <Button size="lg" className="bg-accent text-primary font-bold uppercase text-xs tracking-widest h-16 px-12 rounded-xl">Join the Laboratory of Learning</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* 6. OFFICER-LIKE QUALITIES (OLQ) TRACKER (DEFENCE LEGACY) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-30"></div>
                 <Image src="https://picsum.photos/seed/drona_olq/1200/1600" width={1200} height={1600} alt="Student Discipline OLQ Drona IQ" className="rounded-[4rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="space-y-12 order-1 lg:order-2">
                 <div className="space-y-6">
                    <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">Officer Mindset</Badge>
                    <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">The OLQ <br/> <span className="text-accent italic">Radar.</span></h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">Built on the 15 'Officer-Like Qualities' of the Indian Armed Forces. We track these leadership traits daily alongside marks.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { l: "Effective Intelligence", i: Brain },
                      { l: "Decision Making", i: Scale },
                      { l: "Social Adaptability", i: Users },
                      { l: "Sense of Responsibility", i: ShieldCheck },
                      { l: "Initiative & Courage", i: Flame },
                      { l: "Mental Stamina", i: Zap }
                    ].map((olq, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-primary/5">
                         <div className="bg-white p-3 rounded-xl shadow-sm"><olq.i className="h-5 w-5 text-primary" /></div>
                         <span className="font-bold text-[10px] uppercase tracking-tight text-primary/80">{olq.l}</span>
                      </div>
                    ))}
                 </div>
                 <Link href="/admissions">
                  <Button className="h-16 px-12 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl">See The Full OLQ Roadmap</Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 7. THE ZERO-COMMUTE ROI CALCULATOR (VALUE IDEA) */}
      <section className="py-24 md:py-48 bg-[#fafafa] overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-16">
           <div className="space-y-6">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Value Engineering</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Gain 600 Hours <br/> <span className="text-accent italic">Every Year.</span></h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Traditional coaching 'factories' waste 2 hours daily in travel fatigue. We convert that into peak study hours.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
              <Card className="border-none shadow-xl p-12 rounded-[3rem] bg-white space-y-6">
                 <p className="text-xs font-bold uppercase text-primary/40">Travel Waste</p>
                 <p className="text-6xl font-extrabold text-red-500">730h</p>
                 <p className="text-[10px] text-muted-foreground font-bold uppercase">Hours lost in Dehradun traffic annually by coaching students.</p>
              </Card>
              <Card className="border-none shadow-xl p-12 rounded-[3rem] bg-primary text-white space-y-6">
                 <p className="text-xs font-bold uppercase text-accent">Drona IQ Gain</p>
                 <p className="text-6xl font-extrabold text-accent">+600h</p>
                 <p className="text-[10px] text-white/40 font-bold uppercase">Extra sleep & high-focus study time recovered for scholars.</p>
              </Card>
              <Card className="border-none shadow-xl p-12 rounded-[3rem] bg-white space-y-6">
                 <p className="text-xs font-bold uppercase text-primary/40">Score Delta</p>
                 <p className="text-6xl font-extrabold text-green-500">24%</p>
                 <p className="text-[10px] text-muted-foreground font-bold uppercase">Average performance increase due to zero travel fatigue.</p>
              </Card>
           </div>
           <div className="pt-12">
             <Link href="/home-tuition">
              <Button className="h-16 px-16 bg-primary text-white font-bold uppercase text-xs tracking-widest rounded-xl">Reclaim Your Child's Time</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* 8. THE CLASS UNIVERSE (REBUILT FOR 100% COMPLIANCE) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Class Universe</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Academic Pathways <br/> <span className="text-accent italic">By Grade</span></h2>
            <p className="text-xl text-muted-foreground font-light">Providing the **best home tuition in Dehradun** for every grade. Each program is a mission-specific module.</p>
          </div>

          <div className="space-y-48">
            {classes.map((item, i) => (
              <div key={item.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-12">
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <Badge className="bg-accent text-primary border-none uppercase text-[10px] font-bold px-4 py-1.5">{item.grade}</Badge>
                         <span className="text-primary/20 font-extrabold text-5xl">0{i+1}</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">{item.title}</h3>
                   </div>
                   <p className="text-2xl text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                      <div className="space-y-4">
                         <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Subjects</h4>
                         <div className="flex flex-wrap gap-2">
                            {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase">{s}</Badge>)}
                         </div>
                      </div>
                      <div className="space-y-4">
                         <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Roadmap</h4>
                         <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4">{item.roadmap}</p>
                      </div>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4 pt-8">
                      <Link href="/admissions" className="flex-1">
                         <Button className="w-full h-16 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Enroll in {item.grade}</Button>
                      </Link>
                      <Link href="/academic-health-check" className="flex-1">
                         <Button variant="outline" className="w-full h-16 border-primary text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/5 transition-all">Download Plan</Button>
                      </Link>
                   </div>
                </div>
                <div className="flex-1 relative group w-full">
                   <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] group-hover:bg-accent/10 transition-colors duration-1000"></div>
                   <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl z-10">
                      <Image src={item.image} fill alt={`${item.grade} tuition in Dehradun`} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEHRADUN 360 LOCALITY GRID (MASSive SEO Power) */}
      <section className="py-24 md:py-48 bg-muted/20 overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-7xl text-center space-y-16">
           <div className="space-y-6">
              <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">Local Authority</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Dehradun 360° <br/> <span className="text-accent italic">Dominance.</span></h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Providing premium coaching and verified home tutors in every lane of the valley.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                "Rajpur Road", "Sahastradhara Road", "Jakhan", "Canal Road", "Old Rajpur", "Dalanwala", 
                "Vasant Vihar", "Indira Nagar", "Balliwala", "Ballupur", "Prem Nagar", "Clement Town", 
                "Patel Nagar", "GMS Road", "Chakrata Road", "Kaulagarh", "Kishan Nagar", "Nehru Colony", 
                "Dharampur", "Ajabpur", "Mothorowala", "Race Course", "Clock Tower Area", "Doon IT Park",
                "Subhash Nagar", "ISBT Area", "Shimla Bypass", "Turner Road", "Selaqui", "Vikas Nagar"
              ].map((area, i) => (
                <Link href={`/tuition-in/${area.toLowerCase().replace(' ', '-')}`} key={i}>
                   <div className="p-4 rounded-xl bg-white border border-primary/5 hover:border-accent hover:text-accent transition-all text-center group">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-accent">Tuition in</p>
                      <p className="text-xs font-extrabold uppercase mt-1">{area}</p>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 10. THE "FAQ FORTRESS" (MASSive Authority) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Knowledge Fortress</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">The Master <br/> <span className="text-accent italic">FAQ Base.</span></h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Which is the best tuition in Dehradun for CBSE board topper goals?", a: "Drona IQ is Dehradun's #1 result-oriented hub. We combine military discipline with AI-driven concept tracking, ensuring 99.4% precise gap analysis for board students." },
              { q: "How does Drona IQ ensure the safety of home tutors in Dehradun?", a: "We have a strict 10-Point Safety Protocol including mandatory police verification, identity vetting, and periodic parent-coordinated safety audits." },
              { q: "What is the fee structure for premium home tuition in Rajpur Road or Jakhan?", a: "Fees are calculated based on the mentor's expertise tier and grade level. We offer the highest ROI by saving travel time and converting travel fatigue into study hours." },
              { q: "Do you provide female home tutors for girl students in Dehradun?", a: "Yes, we have a massive network of verified female subject specialists for girls across all grades, specializing in Science, Maths, and Humanities." },
              { q: "What makes Drona IQ different from local coaching factories in Dehradun?", a: "Unlike factories, we provide 1-on-1 personalized attention, a digital academic twin for tracking, and a defense-legacy inspired discipline protocol." },
              { q: "Can we get NDA foundation coaching along with regular school tuition?", a: "Absolutely. Our 'Gateway' program integrates board preparation with NDA/JEE/NEET foundation, powered by the Droneshwar Defence Academy curriculum." },
              { q: "How do parents track their child's daily master progress?", a: "Parents get a dedicated Success OS dashboard with real-time logs of concept mastery, attendance, and weekly diagnostic reports." },
              { q: "Is Drona IQ affiliated with Droneshwar Defence Academy?", a: "Drona IQ is the academic sibling institution of DrDA. We bring the discipline of the defense sector to civilian school education." },
              { q: "Do you offer demo classes for home tuition in Sahastradhara Road or IT Park?", a: "Yes, we offer a free AI Assessment and a 1-hour demo session to match the right student with the right subject mentor." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#fafafa] border rounded-2xl px-8 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL EMOTIONAL CTA */}
      <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
           <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
           <div className="space-y-10">
             <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Don't settle for average tuition. Invest in a Success Ecosystem. Join the Drona IQ mission in Dehradun today.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/admissions">
                <Button className="h-24 px-16 bg-accent text-primary font-headline text-xl rounded-[2.5rem] shadow-2xl uppercase tracking-widest font-extrabold hover:scale-105 transition-all">Start The Journey</Button>
              </Link>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-[#05070a] text-white/40 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="space-y-6">
                 <Link href="/" className="flex items-center space-x-2">
                    <div className="rounded-xl bg-primary p-2 border border-white/10">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-headline text-2xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                 </Link>
                 <p className="text-sm leading-relaxed">Dehradun's apex Student Success Ecosystem. Built on discipline, tracking, and results.</p>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Quick Links</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                    <li><Link href="/academic-health-check">AI Health Check</Link></li>
                    <li><Link href="/home-tuition">Home Tuition</Link></li>
                    <li><Link href="/student">Student Hub</Link></li>
                    <li><Link href="/results">Success Log</Link></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Local Areas</h4>
                 <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                    <li>Rajpur Road</li>
                    <li>Sahastradhara Road</li>
                    <li>Jakhan / Old Rajpur</li>
                    <li>Dalanwala / Vasant Vihar</li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Contact</h4>
                 <div className="space-y-4 text-xs font-bold uppercase">
                    <p>+91 78785 53385</p>
                    <p>Om Tower, Dehradun</p>
                 </div>
              </div>
           </div>
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2026 Drona IQ Academy. Powered by DrDA Legacy.</p>
              <div className="flex gap-12">
                 <span>Privacy Protocol</span>
                 <span>Terms of Service</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
