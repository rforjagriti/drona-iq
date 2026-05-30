
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
  Flame,
  Phone,
  Calculator,
  Globe,
  Heart,
  AlertTriangle,
  CircleAlert,
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
  Home,
  Target,
  Radar,
  Network
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
      title: "The Engineering Blueprint", 
      desc: "Rigorous preparation for JEE/NEET/NDA while mastering the 11th Science curriculum.",
      subjects: ["Advanced Physics", "Organic Chemistry", "Calculus/Bio", "Entrance Mock Tests"],
      outcomes: ["Competitive Rank", "Concept Mastery", "Pressure Handling"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "Career Launchpad I"
    },
    { 
      id: 'c11c', 
      grade: "Class 11 Commerce", 
      title: "The Financial Architect", 
      desc: "Building foundations for CA, CS, and top global business schools with industry-expert mentorship.",
      subjects: ["Accountancy Logic", "Economics Depth", "Business Strategy", "Maths/Stats"],
      outcomes: ["Professional Clarity", "Economic Insight", "Strategic Thinking"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Professional Path I"
    },
    { 
      id: 'c12s', 
      grade: "Class 12 Science", 
      title: "The Apex Career Launch", 
      desc: "Final push for Board merit and National Level entrance exams with AI mock simulators.",
      subjects: ["12th Science Board Sync", "JEE/NEET Crash Course", "NDA Final Drill", "Mocks"],
      outcomes: ["Career Entry", "Board Topper Status", "Peak Performance"],
      image: "https://picsum.photos/seed/drona_c12s/800/1000",
      roadmap: "Apex Launchpad"
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
                    src="https://picsum.photos/seed/drona_hero_god/1200/1600"
                    alt="Drona IQ Excellence"
                    width={1200}
                    height={1600}
                    className="rounded-[4rem] object-cover h-[750px] w-full grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                    priority
                  />
                  <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-[3rem] border-white/20 shadow-2xl backdrop-blur-3xl">
                    <div className="flex items-center gap-6">
                      <div className="bg-accent p-4 rounded-[1.5rem] text-primary shadow-xl"><TrendingUp className="h-8 w-8" /></div>
                      <div>
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] mb-1">Real-time Mastery</p>
                        <p className="text-2xl font-bold text-white tracking-tighter">+24.8% Concept Retention</p>
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
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">Don't guess your child's future. See their personalized learning roadmap in 30 seconds.</p>
                 </div>
                 <div className="space-y-8">
                    <div className="p-8 rounded-[2rem] bg-muted/30 border border-primary/5 space-y-6">
                       <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Step 1: Select Grade</p>
                       <div className="flex flex-wrap gap-3">
                          {["Class 5-8", "Class 9-10", "Class 11-12", "Competitive"].map((g, i) => (
                             <button key={i} className="px-6 py-3 rounded-full border border-primary/10 font-bold text-xs uppercase hover:bg-primary hover:text-white transition-all">{g}</button>
                          ))}
                       </div>
                    </div>
                    <Link href="/academic-health-check">
                      <Button className="w-full h-16 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl">Generate Roadmap <Sparkles className="ml-2 h-4 w-4 text-accent" /></Button>
                    </Link>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[50px] opacity-30"></div>
                 <Card className="border-none shadow-2xl p-10 rounded-[3rem] bg-white relative z-10 space-y-8 overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="h-48 w-48" /></div>
                    <h4 className="text-2xl font-bold uppercase text-primary border-b pb-6">Sample Pathway</h4>
                    <div className="space-y-6">
                       {[
                         { l: "Year 1", t: "Foundation Mastery", d: "Closing 100% of past learning gaps." },
                         { l: "Year 2", t: "Competitive Baseline", d: "Introduction to national level testing." },
                         { l: "Year 3", t: "Apex Performance", d: "Targeting state-level board merit." }
                       ].map((step, i) => (
                         <div key={i} className="flex gap-6">
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

      {/* 3. POWERED BY DRDA (DEFENCE AUTHORITY) */}
      <section className="py-24 bg-primary text-white overflow-hidden border-y-4 border-accent">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-6 text-center md:text-left">
                 <div className="inline-block bg-accent text-primary px-4 py-1 rounded font-bold text-xs uppercase tracking-widest">Defence Pedigree</div>
                 <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Powered By <br/> <span className="text-accent italic">Droneshwar Defence Academy</span></h2>
                 <p className="text-xl text-white/60 max-w-2xl font-light">Bringing military-grade discipline and officer-like qualities to civilian school education.</p>
                 <Link href="https://droneshwardefenceacademy.com" target="_blank">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary font-bold uppercase tracking-widest h-14 px-8 mt-4 rounded-xl">Visit DrDA Global <Globe className="ml-2 h-4 w-4" /></Button>
                 </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <ShieldCheck className="h-10 w-10 text-accent mx-auto mb-3" />
                    <p className="font-bold text-sm uppercase">15 OLQs System</p>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <Flag className="h-10 w-10 text-accent mx-auto mb-3" />
                    <p className="font-bold text-sm uppercase">Elite Discipline</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SUCCESS PROBABILITY SIMULATOR */}
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
                      { t: "Standard Schooling", v: "42%", d: "Standard learning without tracking hits a cognitive ceiling.", c: "bg-red-500" },
                      { t: "Coaching Factories", v: "68%", d: "Generic group teaching with limited personal focus.", c: "bg-orange-500" },
                      { t: "Drona IQ Scholar", v: "98%", d: "Full Success OS integration and 24/7 AI diagnostic.", c: "bg-accent" }
                    ].map((phase, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-center text-xs font-bold uppercase text-primary">
                            <span>{phase.t}</span>
                            <span>{phase.v} Probability</span>
                         </div>
                         <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                            <div className={`${phase.c} h-full transition-all duration-1000`} style={{ width: phase.v }}></div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <Card className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden space-y-12">
                    <Cpu className="absolute top-0 right-0 p-8 h-48 w-48 opacity-5" />
                    <h4 className="text-3xl font-extrabold uppercase leading-tight text-accent">The Physics of <br/> High Performance.</h4>
                    <div className="space-y-8">
                       <div className="flex gap-6 items-center">
                          <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><Layers className="h-8 w-8 text-accent" /></div>
                          <div>
                             <p className="font-bold text-xs uppercase tracking-widest">Cognitive Load Balancer</p>
                             <p className="text-[10px] text-white/40 uppercase">Preventing burnout while maximizing retention.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-center">
                          <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><History className="h-8 w-8 text-accent" /></div>
                          <div>
                             <p className="font-bold text-xs uppercase tracking-widest">Spaced Repetition Kernel</p>
                             <p className="text-[10px] text-white/40 uppercase">Ensuring long-term memory for exam day.</p>
                          </div>
                       </div>
                    </div>
                    <Link href="/academic-health-check">
                      <Button className="w-full h-16 bg-accent text-primary font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all">Calculate My Success Rate</Button>
                    </Link>
                 </Card>
              </div>
           </div>
        </div>
      </section>

      {/* 5. NEUROSCIENCE OF MASTERY */}
      <section className="py-24 md:py-48 bg-[#05070a] text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center space-y-6 mb-32">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Cognitive Engineering</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
              <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">We engineer neural pathways using evidence-based cognitive science protocols.</p>
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
        </div>
      </section>

      {/* 6. THE CLASS UNIVERSE (INDIVIDUAL LANDING BLOCKS) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Class Universe</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Grade-Wise <br/> <span className="text-accent italic">Pathways</span></h2>
            <p className="text-xl text-muted-foreground font-light">Every class is a mission-specific module designed for peak performance.</p>
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
                         <Button variant="outline" className="w-full h-16 border-primary text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/5 transition-all">View Detailed Plan</Button>
                      </Link>
                   </div>
                </div>
                <div className="flex-1 relative group w-full">
                   <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] transition-colors duration-1000"></div>
                   <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl z-10 border-4 border-muted">
                      <Image src={item.image} fill alt={`${item.grade} tuition in Dehradun`} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ZERO-COMMUTE ROI CALCULATOR */}
      <section className="py-24 md:py-48 bg-[#fafafa] overflow-hidden">
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
                 <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Hours lost in Dehradun traffic annually.</p>
              </Card>
              <Card className="border-none shadow-xl p-12 rounded-[3rem] bg-primary text-white space-y-6 scale-110 relative z-10">
                 <p className="text-xs font-bold uppercase text-accent">Drona IQ Gain</p>
                 <p className="text-6xl font-extrabold text-accent">+600h</p>
                 <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Extra high-focus time recovered for scholars.</p>
              </Card>
              <Card className="border-none shadow-xl p-12 rounded-[3rem] bg-white space-y-6">
                 <p className="text-xs font-bold uppercase text-primary/40">Score Delta</p>
                 <p className="text-6xl font-extrabold text-green-500">24%</p>
                 <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Avg performance increase due to zero fatigue.</p>
              </Card>
           </div>
        </div>
      </section>

      {/* 8. DEHRADUN 360 LOCALITY GRID (LOCAL SEO DOMINANCE) */}
      <section className="py-24 md:py-48 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4 max-7xl text-center space-y-16">
           <div className="space-y-6">
              <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">Local Authority</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Dehradun 360° <br/> <span className="text-accent italic">Coverage.</span></h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Providing premium home tuition and coaching in every lane of the valley.</p>
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

      {/* 9. FAQ FORTRESS (SEO & TRUST) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Knowledge Fortress</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Strategic <br/> <span className="text-accent italic">FAQ Base.</span></h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Which is the best tuition in Dehradun for CBSE board topper goals?", a: "Drona IQ is Dehradun's #1 result-oriented hub. We combine military discipline with AI-driven concept tracking, ensuring 99.4% precise gap analysis for board students." },
              { q: "How does Drona IQ ensure the safety of home tutors in Dehradun?", a: "We have a strict 10-Point Safety Protocol including mandatory police verification, identity vetting, and periodic parent-coordinated safety audits." },
              { q: "Can we get NDA foundation coaching along with regular school tuition?", a: "Absolutely. Our 'Gateway' program integrates board preparation with NDA foundation, powered by the Droneshwar Defence Academy curriculum." },
              { q: "What makes Drona IQ different from local coaching factories?", a: "Unlike factories, we provide 1-on-1 personalized attention, a digital academic twin for tracking, and a defense-legacy inspired discipline protocol." },
              { q: "Do you offer demo classes for home tuition in Sahastradhara Road?", a: "Yes, we offer a free AI Assessment and a 1-hour demo session to match the right student with the right subject mentor." }
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
      <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden border-t-8 border-accent">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
           <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
           <div className="space-y-10">
             <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Don't settle for average tuition. Invest in a Success Ecosystem. Join the Drona IQ mission today.</p>
           </div>
           <Link href="/admissions">
              <Button className="h-24 px-16 bg-accent text-primary font-headline text-xl rounded-[2.5rem] shadow-2xl uppercase tracking-widest font-extrabold hover:scale-105 transition-all">Enroll Your Child Now</Button>
           </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-[#05070a] text-white/40 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="space-y-6">
                 <div className="flex items-center space-x-2">
                    <div className="rounded-xl bg-primary p-2 border border-white/10">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-headline text-2xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                 </div>
                 <p className="text-sm leading-relaxed">Dehradun's apex Student Success Ecosystem. Powered by DrDA legacy.</p>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Quick Links</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent">
                    <li><Link href="/academic-health-check">AI Health Check</Link></li>
                    <li><Link href="/home-tuition">Home Tuition</Link></li>
                    <li><Link href="/student">Student Hub</Link></li>
                    <li><Link href="/results">Success Log</Link></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Local Areas</h4>
                 <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                    <li>Rajpur Road Hub</li>
                    <li>Sahastradhara Road Hub</li>
                    <li>Jakhan / Canal Road</li>
                    <li>Vasant Vihar / Ballupur</li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Contact</h4>
                 <div className="space-y-4 text-xs font-bold uppercase">
                    <p>+91 78785 53385</p>
                    <p>Om Tower, Sahastradhara Road</p>
                    <p>Dehradun, Uttarakhand</p>
                 </div>
              </div>
           </div>
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2026 Drona IQ Academy. All Rights Reserved.</p>
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
