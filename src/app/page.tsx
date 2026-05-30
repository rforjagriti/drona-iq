
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
  LightbulbIcon,
  X,
  PieChart,
  Smartphone
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HomePage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const classes = [
    { 
      id: 'c5', 
      grade: "Class 5", 
      title: "The Curiosity Hub", 
      desc: "Building the cognitive baseline for young minds in Dehradun. We transform rote learning into logic-first thinking, preparing students for elite schools through intensive observation and mental stimulation.",
      subjects: ["English Literature", "Mental Mathematics", "General Science", "Logic & IQ"],
      outcomes: ["Critical Thinking", "Expression", "Numerical Speed"],
      image: "https://picsum.photos/seed/drona_c5/800/1000",
      roadmap: "Foundation Stage I",
      longDesc: "At Grade 5, the Drona IQ ecosystem focuses on the transition from 'memorizing' to 'observing.' We understand that the first step to academic excellence is curiosity. Our mentors in Dehradun use interactive smart-class tech to show students the 'Why' behind every math formula and scientific fact. We build a competitive baseline early, so the child feels ahead of the curve."
    },
    { 
      id: 'c6', 
      grade: "Class 6", 
      title: "The Logic Foundation", 
      desc: "Transitioning to complex problem solving with the best tuition methodology. We introduce structured learning for core subjects, focusing on methodical approaches to multi-step logic.",
      subjects: ["Advanced Grammar", "Concept Maths", "Physics/Chem Basics", "Logical Reasoning"],
      outcomes: ["Methodical Learning", "Analytical Skills", "Scientific Temper"],
      image: "https://picsum.photos/seed/drona_c6/800/1000",
      roadmap: "Foundation Stage II",
      longDesc: "Class 6 is the entry into secondary level thinking. Drona IQ provides the best home tuition experience by assigning mentors who specialize in child psychology. We focus on the 'Logic Loop'—identifying a problem, dissecting its parts, and synthesizing a solution. This stage is critical for removing 'Math Phobia' and building a love for Physics."
    },
    { 
      id: 'c7', 
      grade: "Class 7", 
      title: "The Analytical Core", 
      desc: "Deepening subject conceptualization. Preparing for high-school level rigor with Dehradun's most intensive tracking system for middle school scholars.",
      subjects: ["Verbal Reasoning", "Algebra Mastery", "Experimental Science", "Social Logic"],
      outcomes: ["Conceptual Clarity", "Research Aptitude", "Confidence"],
      image: "https://picsum.photos/seed/drona_c7/800/1000",
      roadmap: "Foundation Stage III",
      longDesc: "In Grade 7, we push students toward independent research. Using our digital resource hub, students learn to find answers beyond textbooks. Our Dehradun-based tutors focus on Algebra and Experimental Science, ensuring that every 'Middle School' concept is mapped to 'High School' requirements. This prevents future learning gaps."
    },
    { 
      id: 'c8', 
      grade: "Class 8", 
      title: "The Board Readiness Stage", 
      desc: "The most critical foundation year for CBSE/ICSE students. Mapping Class 8 concepts directly to 10th and 12th competitive needs with surgical precision.",
      subjects: ["Geometry Mastery", "Bio-Chemistry Core", "English Proficiency", "Mental Aptitude"],
      outcomes: ["Secondary Readiness", "Concept Syncing", "Result Orientation"],
      image: "https://picsum.photos/seed/drona_c8/800/1000",
      roadmap: "Pre-Secondary Success",
      longDesc: "Class 8 is often called the 'Gateway to Boards.' Drona IQ treats this year with extreme importance. We introduce Board-pattern mock tests and AI-driven performance tracking. For students in Dehradun, we provide specific kits that align their school curriculum with the national standards required for top-tier competitive exams."
    },
    { 
      id: 'c9', 
      grade: "Class 9", 
      title: "The Competitive Gateway", 
      desc: "Introducing JEE, NEET, and NDA foundations. Preparing for the transition to Board excellence with the top home tuition network in Uttarakhand.",
      subjects: ["Numerical Physics", "Mathematical Logic", "Competitive IQ", "English Communications"],
      outcomes: ["Exam Temperament", "Time Management", "Depth Analysis"],
      image: "https://picsum.photos/seed/drona_c9/800/1000",
      roadmap: "Gateway Stage",
      longDesc: "Class 9 is where the competition truly begins. Our 'Gateway' programme introduces advanced numerical physics and competitive reasoning. We start the 2-year Board roadmap here, ensuring that 10th Grade is a breeze. Every student gets a dedicated career counselor session to help them choose their future stream (Science, Commerce, or Humanities)."
    },
    { 
      id: 'c10', 
      grade: "Class 10", 
      title: "The Board Excellence Protocol", 
      desc: "Maximum focus on 95%+ Board results and competitive baseline building for Dehradun's toppers in CBSE and ICSE patterns.",
      subjects: ["10th Boards Full Sync", "PYQ Analysis", "Sample Paper Drills", "Stress Management"],
      outcomes: ["Board Merit", "Target Clarity", "Discipline"],
      image: "https://picsum.photos/seed/drona_c10/800/1000",
      roadmap: "Excellence Stage",
      longDesc: "This is the Year of Performance. Our Class 10 programme is the most intensive in Dehradun. It includes 'Error Analysis' sessions where AI detects exactly which concept a student is failing in during mock tests. We provide 24/7 doubt support to ensure that no question goes unanswered before the Board exams."
    },
    { 
      id: 'c11s', 
      grade: "Class 11 Science", 
      title: "The Engineering & Medical Blueprint", 
      desc: "Rigorous preparation for JEE/NEET/NDA while mastering the 11th Science curriculum with expert home tutors and daily tracking.",
      subjects: ["Advanced Physics", "Organic Chemistry", "Calculus/Bio", "Entrance Mock Tests"],
      outcomes: ["Competitive Rank", "Concept Mastery", "Pressure Handling"],
      image: "https://picsum.photos/seed/drona_c11s/800/1000",
      roadmap: "Career Launchpad I",
      longDesc: "Class 11 Science is the biggest jump in academic difficulty. Most students lose confidence here. Drona IQ provides a soft-landing with structured modules that bridge the gap from 10th Grade. We offer Dehradun's highest-rated Science faculty for home tuition, focusing on 'Concept first, problem second.'"
    },
    { 
      id: 'c11c', 
      grade: "Class 11 Commerce", 
      title: "The Financial Architect Program", 
      desc: "Building foundations for CA, CS, and top global business schools for students across Dehradun with industry-expert mentorship.",
      subjects: ["Accountancy Logic", "Economics Depth", "Business Strategy", "Maths/Stats"],
      outcomes: ["Professional Clarity", "Economic Insight", "Strategic Thinking"],
      image: "https://picsum.photos/seed/drona_c11c/800/1000",
      roadmap: "Professional Path I",
      longDesc: "Our Commerce track isn't just about bookkeeping; it's about business intelligence. We teach Accountancy through real-world case studies. Students are prepared for CA Foundation and CUET from Day 1. Our commerce home tutors in Dehradun are verified professionals with years of academic excellence."
    },
    { 
      id: 'c11h', 
      grade: "Class 11 Humanities", 
      title: "The Civil Service Foundation", 
      desc: "Preparing for CUET and UPSC basics with a deep focus on social sciences, critical reasoning, and global political dynamics.",
      subjects: ["History Analysis", "Political Dynamics", "Psychology Basics", "English Honors"],
      outcomes: ["Critical Reasoning", "Social Insight", "Communication"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "Leadership Path I",
      longDesc: "For the future leaders of Dehradun, our Humanities programme offers deep dives into Political Science and Sociology. We focus on writing skills and critical analysis, essential for UPSC and Law entrances (CLAT). We treat Humanities with the same rigor as Science, ensuring state-merit results."
    },
    { 
      id: 'c12s', 
      grade: "Class 12 Science", 
      title: "The Apex Career Launchpad", 
      desc: "Final push for Board merit and National Level entrance exams with Dehradun's highest-rated science faculty and AI mock simulators.",
      subjects: ["12th Science Board Sync", "JEE/NEET Crash Course", "NDA Final Drill", "Mocks"],
      outcomes: ["Career Entry", "Board Topper Status", "Peak Performance"],
      image: "https://picsum.photos/seed/drona_c12s/800/1000",
      roadmap: "Apex Launchpad",
      longDesc: "The final year of school. Our focus is 100% on the Board-Competition synergy. We ensure that school syllabus and competitive prep never clash. Using our AI success predictor, we give students a realistic AIR (All India Rank) prediction every month, helping them stay grounded and motivated."
    },
    { 
      id: 'c12c', 
      grade: "Class 12 Commerce", 
      title: "The Professional Mastery Program", 
      desc: "Final Board preparation and entrance training for professional degrees with verified expert accounts and economics tutors.",
      subjects: ["12th Commerce Board Sync", "CUET Prep", "CA Foundation Drills", "Applied Eco"],
      outcomes: ["University Merit", "Professional Base", "Industry Logic"],
      image: "https://picsum.photos/seed/drona_c12c/800/1000",
      roadmap: "Career Mastery",
      longDesc: "Targeting 98%+ in Boards and top university admissions via CUET. Our commerce specialists in Dehradun provide personalized attention to Accountancy and Economics, ensuring that the student is ready for the professional world while dominating the board exam pattern."
    },
    { 
      id: 'c12h', 
      grade: "Class 12 Humanities", 
      title: "The Global Leadership Track", 
      desc: "Top university admissions and civil services orientation for future leaders, focusing on elite communication and analytical depth.",
      subjects: ["12th Humanities Board Sync", "UPSC Baseline", "CUET Intensive", "Liberal Arts"],
      outcomes: ["Merit Admissions", "Leadership Prep", "Global Perspective"],
      image: "https://picsum.photos/seed/drona_c12h/800/1000",
      roadmap: "Global Future",
      longDesc: "Finishing the school journey with a clear path toward the Civil Services or Top International Universities. We focus on portfolio building and elite level entrance preparation, ensuring our scholars from Dehradun are recognized at the national level."
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

      {/* 2. LETTER TO PARENTS & STUDENTS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl space-y-32">
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
                <p>We know your struggle. You want the **best tuition in Dehradun** for your child, but the current education system feels like a maze. You worry about their **concentration**, their **discipline**, and their **future** in a competitive world.</p>
                <p>At Drona IQ, we don't just see a student ID; we see a legacy. We are not just a tuition center. We are an **Ecosystem of Success**. We provide the mentorship your child needs to build not just great marks, but a great character.</p>
                <p>Trust us to be the bridge between their potential and their career.</p>
                <div className="pt-10 flex flex-col gap-2">
                  <p className="font-bold text-primary text-2xl uppercase">Drona IQ Core Team</p>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">Architecting Futures in Dehradun</p>
                </div>
              </div>
            </CardContent>
          </Card>

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
            <div className="space-y-8 bg-red-50/30 p-12 rounded-[3rem] border border-red-100">
               <h3 className="text-3xl font-extrabold text-red-900 uppercase flex items-center gap-3"><AlertTriangle className="h-8 w-8" /> What Parents Fear</h3>
               <div className="space-y-6">
                 {[
                   "Children losing focus in massive coaching 'factories' in Dehradun.",
                   "Missing fundamental concepts that impact CBSE/ICSE board exams.",
                   "Digital distractions wasting precious study hours at home.",
                   "Lack of discipline and character development in local tuitions.",
                   "No visibility into daily progress and improvement metrics."
                 ].map((fear, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                     <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1"><ZapOff className="h-3 w-3 text-red-600" /></div>
                     <p className="text-lg text-red-800/80 font-light">{fear}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="space-y-8 bg-green-50/30 p-12 rounded-[3rem] border border-green-100">
               <h3 className="text-3xl font-extrabold text-green-900 uppercase flex items-center gap-3"><Heart className="h-8 w-8" /> What Every Parent Wants</h3>
               <div className="space-y-6">
                 {[
                   "Personalized mentorship focused on their child's unique speed.",
                   "Real-time diagnostic reports with 99.4% precision.",
                   "Military-grade discipline and time management habits.",
                   "Confidence that leads to state-level board scores in Uttarakhand.",
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

      {/* GOD-LEVEL SECTION: THE COMPETITIVE MATRIX (SEO & TRUST) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-6xl">
          <div className="text-center space-y-6 mb-20">
             <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Comparison Lab</Badge>
             <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Drona IQ vs. <br/> <span className="text-accent italic">Conventional Coaching</span></h2>
             <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Why we are Dehradun's highest-rated success ecosystem.</p>
          </div>

          <Card className="border-4 border-primary rounded-[3rem] overflow-hidden shadow-2xl">
            <Table>
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow className="border-none hover:bg-primary">
                  <TableHead className="w-[300px] text-white py-10 px-12 font-headline uppercase tracking-widest text-xs">Academic Protocol</TableHead>
                  <TableHead className="text-accent py-10 text-center font-headline font-extrabold text-2xl uppercase">Drona IQ Hub</TableHead>
                  <TableHead className="text-white/40 py-10 text-center font-headline uppercase text-[10px]">Local Centers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white">
                {[
                  { f: "Personalized Study Roadmap", d: true, t: "Generic Batch Schedule" },
                  { f: "Real-time Concept Tracking", d: true, t: "No tracking" },
                  { f: "Military Grade Discipline", d: true, t: "Non-existent" },
                  { f: "AI Risk Detection (Mastery)", d: true, t: "Monthly manual tests" },
                  { f: "Parent Live Dashboard", d: true, t: "End of month PTM" },
                  { f: "24/7 Digital Mentor Support", d: true, t: "Class hours only" }
                ].map((item, i) => (
                  <TableRow key={i} className="hover:bg-muted/30 border-b last:border-0 transition-colors">
                    <TableCell className="py-8 px-12 font-bold text-primary uppercase text-xs">{item.f}</TableCell>
                    <TableCell className="text-center">
                      <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground font-medium text-xs">
                       {item.t}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* GOD-LEVEL SECTION: THE TOP 1% VERIFIED TUTORS (HOME TUITION) */}
      <section className="py-24 md:py-48 bg-[#fafafa] overflow-hidden relative border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
             <div className="space-y-4">
               <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">Expert Network</Badge>
               <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Dehradun's Top 1% <br/> <span className="text-accent">Verified Tutors.</span></h2>
             </div>
             <Link href="/home-tuition">
                <Button variant="outline" className="border-primary text-primary font-bold uppercase tracking-widest text-[10px] h-14 px-8 rounded-xl group">View All Specialists <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button>
             </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "Dr. Sandeep Negi", s: "Physics Expert (NDA/JEE)", e: "12+ Yrs", i: "https://picsum.photos/seed/drona_t1/400/400" },
              { n: "Mrs. Pooja Bisht", s: "Biology Specialist (NEET)", e: "8+ Yrs", i: "https://picsum.photos/seed/drona_t2/400/400" },
              { n: "Mr. Rahul Verma", s: "Mathematics (Board Topper)", e: "10+ Yrs", i: "https://picsum.photos/seed/drona_t3/400/400" },
              { n: "Col. S.P. Rawat", s: "SSB & Character Prep", e: "25+ Yrs", i: "https://picsum.photos/seed/drona_t4/400/400" }
            ].map((tutor, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white group hover:-translate-y-2 transition-transform duration-500">
                <div className="relative aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <Image src={tutor.i} fill alt={tutor.n} className="object-cover" />
                   <div className="absolute top-6 right-6">
                      <div className="bg-accent text-primary p-2 rounded-xl shadow-xl"><ShieldCheck className="h-6 w-6" /></div>
                   </div>
                </div>
                <CardContent className="p-8 space-y-2">
                   <p className="text-[10px] font-extrabold text-accent uppercase tracking-widest">{tutor.s}</p>
                   <h4 className="text-xl font-bold text-primary font-headline uppercase">{tutor.n}</h4>
                   <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground pt-2">
                      <Clock className="h-4 w-4 text-primary" /> {tutor.e} Experience
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GOD-LEVEL SECTION: INTERACTIVE ACADEMIC DIAGNOSTIC HUB (LEAD MAGNET) */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')]"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center space-y-16">
           <div className="space-y-6">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Proprietary AI</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Academic Health <br/> <span className="text-accent italic">Check-up Hub.</span></h2>
              <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto">Identify exactly where your child is losing marks. Our 99.4% precise AI diagnostic is now open for Dehradun students.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { l: "Subject Mastery Quiz", d: "Test conceptual clarity across 500+ CBSE/ICSE topics.", i: Microscope },
                { l: "Board Risk Detector", d: "Predict potential board exam scores based on speed & accuracy.", i: AlertCircle },
                { l: "Career Alignment Test", d: "Map cognitive strengths to high-growth career paths.", i: Compass }
              ].map((test, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-10 rounded-[3rem] space-y-6 group hover:bg-accent transition-all duration-700 text-left">
                   <div className="bg-accent/20 p-6 w-fit rounded-3xl group-hover:bg-primary transition-colors">
                     <test.i className="h-10 w-10 text-accent" />
                   </div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-primary">{test.l}</h4>
                   <p className="text-sm text-white/40 group-hover:text-primary/70 font-light leading-relaxed">{test.d}</p>
                   <Link href="/academic-health-check" className="block pt-4">
                      <Button className="w-full bg-white text-primary font-bold uppercase text-[10px] tracking-widest h-12 rounded-xl group-hover:bg-primary group-hover:text-white">Run Assessment</Button>
                   </Link>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* 4. GOD-LEVEL TECHNOLOGY SUITE */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative border-t border-white/5">
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
              { t: "Peace of Mind Index™", d: "A transparency score for parents in Dehradun to measure their visibility into child growth.", i: Heart }
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

      {/* 5. PROGRAMMES BY CLASS (THE CLASS UNIVERSE) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Class Universe</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Academic Pathways <br/> <span className="text-accent italic">By Grade</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Providing the **best home tuition in Dehradun** for every grade. Our pathways are engineered to match grade-level rigor and future aspirations.</p>
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
                      <div className="space-y-6">
                         <div className="space-y-4">
                            <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Subjects Covered</h4>
                            <div className="flex flex-wrap gap-2">
                               {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase">{s}</Badge>)}
                            </div>
                         </div>
                         <div className="space-y-4">
                            <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Learning Outcomes</h4>
                            <ul className="space-y-2">
                               {item.outcomes.map((o, j) => <li key={j} className="text-muted-foreground text-sm font-medium border-l-2 border-primary/10 pl-4">{o}</li>)}
                            </ul>
                         </div>
                      </div>
                      <div className="bg-primary text-white p-8 rounded-[2rem] space-y-4 relative overflow-hidden flex flex-col justify-center">
                         <Trophy className="absolute right-[-20px] bottom-[-20px] h-24 w-24 opacity-10" />
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Strategic Roadmap</p>
                         <p className="text-xl font-bold font-headline leading-tight">{item.roadmap}</p>
                         <div className="pt-4 space-y-3">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/60"><Zap className="h-3 w-3 text-accent" /> AI Tracking Enabled</div>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/60"><FileText className="h-3 w-3 text-accent" /> Weekly Parent Reports</div>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/60"><Target className="h-3 w-3 text-accent" /> Custom Study Material</div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/admissions" className="flex-1">
                         <Button className="w-full h-16 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Enroll in {item.grade}</Button>
                      </Link>
                      <Link href="/academic-health-check" className="flex-1">
                         <Button variant="outline" className="w-full h-16 border-primary text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/5 transition-all">Download Syllabus</Button>
                      </Link>
                   </div>
                </div>
                <div className="flex-1 relative group w-full">
                   <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] group-hover:bg-accent/10 transition-colors duration-1000"></div>
                   <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl z-10">
                      <Image src={item.image} fill alt={`${item.grade} tuition in Dehradun`} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                         <p className="text-white text-sm italic font-light">"Preparing for the future challenges of {item.grade} with Dehradun's highest-rated science faculty."</p>
                      </div>
                   </div>
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

      {/* LOCAL LEARNING HUBS SEO SECTION */}
      <section className="py-24 md:py-48 bg-muted/10 overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Local Authority</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Dehradun's Apex <br/> <span className="text-accent italic">Learning Hubs</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">We serve 98% of the valley with premium coaching and verified home tutors near you.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { area: "Sahastradhara Road", desc: "Premium tuition hub near Om Tower and IT Park area." },
              { area: "Rajpur Road", desc: "Elite home tutors for Jakhan, Canal Road, and Old Rajpur." },
              { area: "Vasant Vihar", desc: "Highly-rated science and maths tutors for students of local schools." },
              { area: "Dalanwala", desc: "Expert foundation coaching for Welham and St. Joseph's students." },
              { area: "Prem Nagar", desc: "Strategic learning support for defense personnel children near Cantt." },
              { area: "Ballupur", desc: "Fast-track board preparation kits for 10th and 12th students." },
              { area: "Patel Nagar", desc: "Comprehensive home tuition services for commerce and science." },
              { area: "GMS Road", desc: "Evening mentorship hubs and 24/7 AI diagnostic support." },
              { area: "Nehru Colony", desc: "Specialized CBSE/ICSE board preparation for local residential students." },
              { area: "Clement Town", desc: "Dedicated NDA foundation coaching for army and civilian children." },
              { area: "Race Course", desc: "Home tutors for premium schools like St. Joseph's and Brightlands." },
              { area: "Graphic Era Area", desc: "Foundation support for engineering and commerce university preparation." }
            ].map((loc, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2rem] p-8 bg-white hover:bg-primary transition-all duration-500 group cursor-default">
                <div className="bg-primary/5 p-4 w-fit rounded-2xl group-hover:bg-accent transition-colors mb-4"><MapPin className="h-6 w-6 text-accent group-hover:text-primary" /></div>
                <h4 className="font-bold text-primary uppercase text-sm group-hover:text-white transition-colors">{loc.area}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-white/40 leading-relaxed mt-2">{loc.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. D.R.O.N.A™ METHOD & ECOSYSTEM MAP */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative border-t border-white/5">
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
                     { t: "08:00 AM", task: "Mainstream Schooling", d: "Drona IQ synergy with school curriculum in Dehradun.", i: School },
                     { t: "04:00 PM", task: "Mentorship Hub", d: "One-on-one conceptual deep dives with subject experts.", i: Users },
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

      {/* BEYOND MARKS: BUILDING BETTER HUMAN BEINGS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Character Core</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Beyond Marks: <br/> <span className="text-accent italic">Better Humans.</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">We don't just prepare children for exams; we architect their character for life's challenges.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { t: "Character Building", i: Shield, d: "Instilling core integrity and ethical decision making." },
              { t: "Discipline & Responsibility", i: Clock, d: "Building the habit of extreme ownership." },
              { t: "Leadership Development", i: Target, d: "Training to lead from the front in any situation." },
              { t: "Confidence Building", i: Zap, d: "Eliminating stage fear and public speaking anxiety." },
              { t: "Communication Skills", i: MessageSquare, d: "Articulating thoughts with precision and empathy." },
              { t: "Digital Discipline", i: Laptop, d: "Healthy relationship with technology and focus." },
              { t: "Respect For Elders", i: HandHeart, d: "Grounding success in traditional family values." },
              { t: "Time Management", i: Timer, d: "Optimizing the 24-hour cycle for peak performance." },
              { t: "Goal Setting", i: Milestone, d: "Strategic planning for short and long-term targets." },
              { t: "Positive Mindset", i: Smile, d: "Developing resilience against academic stress." }
            ].map((card, i) => (
              <Card key={i} className="border-none premium-shadow p-8 rounded-[2rem] bg-[#fafafa] group hover:bg-primary transition-all duration-500">
                <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:bg-accent transition-colors">
                  <card.i className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-primary group-hover:text-white mb-2">{card.t}</h4>
                <p className="text-[10px] text-muted-foreground group-hover:text-white/40 leading-relaxed">{card.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE SKILLS PROGRAMME */}
      <section className="py-24 md:py-48 bg-muted/20 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Future Readiness</Badge>
                 <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Life Skills <br/> <span className="text-accent italic">Programme.</span></h2>
               </div>
               <p className="text-xl text-muted-foreground font-light leading-relaxed">The skills that schools don't teach, but the world demands. Integrated into every Drona IQ scholar's journey.</p>
               <div className="grid grid-cols-2 gap-6">
                 {[
                   { t: "Public Speaking", i: Mic },
                   { t: "Critical Thinking", i: Brain },
                   { t: "Financial Awareness", i: Calculator },
                   { t: "Emotional Intelligence", i: Heart },
                   { t: "Decision Making", i: Scale },
                   { t: "Digital Awareness", i: Globe }
                 ].map((skill, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary/5 shadow-sm">
                     <div className="bg-primary/5 p-3 rounded-xl"><skill.i className="h-5 w-5 text-primary" /></div>
                     <span className="font-bold text-xs uppercase tracking-tight text-primary/80">{skill.t}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-30"></div>
               <Image src="https://picsum.photos/seed/drona_lifeskills/1200/1000" width={1200} height={1000} alt="Life Skills Training Dehradun" className="rounded-[4rem] shadow-2xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STUDENT VALUES (VALUE WALL) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">The Core <span className="text-accent">Values Wall.</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Integrity", "Honesty", "Respect", "Discipline", "Patriotism", 
              "Leadership", "Kindness", "Responsibility", "Hard Work", "Self Belief"
            ].map((value, i) => (
              <div key={i} className="px-12 py-8 rounded-[3rem] border-2 border-primary/5 text-2xl md:text-4xl font-extrabold uppercase text-primary/10 hover:text-accent hover:border-accent hover:scale-105 transition-all cursor-default">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL RESPONSIBILITY & HUMANITY */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <Image src="https://picsum.photos/seed/drona_humanity/1200/1000" width={1200} height={1000} alt="Social Responsibility Drona IQ" className="rounded-[4rem] border border-white/10" />
            </div>
            <div className="order-1 lg:order-2 space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Humanity First</Badge>
                 <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Social <br/> <span className="text-accent italic">Responsibility.</span></h2>
               </div>
               <p className="text-xl text-white/60 font-light leading-relaxed">Great success is meaningless without a great heart. We encourage our scholars to be active contributors to society.</p>
               <ul className="space-y-6">
                  {[
                    { t: "Helping Others", d: "Regular peer-mentorship protocols inside the hub." },
                    { t: "Community Service", d: "Local volunteer initiatives in Dehradun colonies." },
                    { t: "Environmental Awareness", d: "Green protocols and carbon-footprint discipline." },
                    { t: "National Pride", d: "Honoring our defense legacy and patriotic duty." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                       <div className="bg-white/10 p-4 rounded-2xl text-accent"><Heart className="h-6 w-6" /></div>
                       <div>
                          <h4 className="font-bold uppercase text-sm tracking-widest">{item.t}</h4>
                          <p className="text-white/40 text-xs mt-1">{item.d}</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A MESSAGE TO PARENTS (EMOTIONAL CLOSING) */}
      <section className="py-24 md:py-48 bg-[#fafafa] overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
           <div className="space-y-4">
              <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">From the Heart</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">We Are Preparing Them <br/> <span className="text-accent italic">For Life.</span></h2>
           </div>
           <p className="text-2xl md:text-3xl text-primary/80 font-light leading-relaxed">
             Tuition and marks are just a part of the journey. Our commitment is to hand over a child to you who is confident, disciplined, and capable of leading their own future. At Drona IQ, your child is not a student ID—they are our mission.
           </p>
           <div className="pt-10 flex flex-col items-center gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary/40">Guaranteed by</p>
              <h3 className="text-4xl font-headline font-extrabold text-primary uppercase">Drona IQ Core Academy</h3>
              <div className="flex text-accent h-6 w-6 gap-1">
                 {[...Array(5)].map((_, i) => <Star key={i} className="fill-current" />)}
              </div>
           </div>
        </div>
      </section>

      {/* 9. POWERED BY DRONESHWAR DEFENCE ACADEMY */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 bg-accent opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-40"></div>
              <Image 
                src="https://picsum.photos/seed/drona_def_premium/1200/1600" 
                width={1200} 
                height={1600} 
                alt="Droneshwar Defence Academy Dehradun" 
                className="rounded-[4rem] shadow-2xl border border-white/10" 
              />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Strategic Partner</Badge>
                 <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Powered By <br/> <span className="text-accent italic">DrDA Legacy.</span></h2>
               </div>
               <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">Built on the core values of **Droneshwar Defence Academy**, we bring military-grade character building to mainstream school education in Dehradun.</p>
               <div className="grid gap-6">
                 {[
                   { t: "Officer Mindset (OLQs)", d: "Instilling the 15 'Officer Like Qualities' in every student.", i: Shield },
                   { t: "Discipline Protocol", d: "A strict 24-hour cycle optimization model for consistent growth.", i: Clock },
                   { t: "Leadership Labs", d: "Public speaking workshops for peak confidence in Uttarakhand.", i: Mic },
                   { t: "National Pride", d: "Character development centered on responsible citizenship.", i: Flag }
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
                 <Button className="h-20 px-12 bg-accent text-primary font-bold uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-all">Visit Official DrDA Site</Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STUDENT DREAM WALL (CAREER VISUALIZER) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Future Mapping</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">The Student <br/> <span className="text-accent italic">Dream Wall.</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Visualizing the path from Drona IQ scholar to global leader.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { t: "NDA Officer", i: Shield, c: "Defence Excellence" },
              { t: "Surgeon", i: Stethoscope, c: "Medical Core" },
              { t: "Software Engineer", i: Laptop, c: "Tech Architecture" },
              { t: "Chartered Accountant", i: Calculator, c: "Financial Master" },
              { t: "Civil Servant (IAS)", i: Flag, c: "Public Leadership" },
              { t: "Space Scientist", i: Orbit, c: "Research Domain" },
              { t: "Commercial Pilot", i: Plane, c: "Aviation Track" },
              { t: "Entrepreneur", i: Rocket, c: "Innovation Hub" }
            ].map((dream, i) => (
              <Card key={i} className="border-none premium-shadow p-8 rounded-[3rem] bg-[#fafafa] group hover:bg-primary transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><dream.i className="h-24 w-24" /></div>
                <div className="relative z-10 space-y-4">
                  <Badge variant="outline" className="text-[8px] font-bold uppercase text-accent border-accent/20">{dream.c}</Badge>
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-primary group-hover:text-white">{dream.t}</h4>
                  <button className="text-[10px] font-bold uppercase text-accent group-hover:translate-x-2 transition-transform flex items-center gap-2">Explore Roadmap <ArrowRight className="h-3 w-3" /></button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FUTURE VISION 2030 ROADMAP */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-32">
             <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Strategic Vision</Badge>
             <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Vision <span className="text-accent">2030.</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { y: "2025", t: "AI Integration", d: "Full deployment of Neural Diagnostic Engine across Dehradun.", i: BrainCircuit },
              { y: "2026", t: "Student App v2", d: "Gamified learning mobile ecosystem with real-time XP syncing.", i: Smartphone },
              { y: "2028", t: "National Hubs", d: "Expanding the Drona IQ discipline model to 5 new states.", i: Globe },
              { y: "2030", t: "Metaverse Lab", d: "Immersive 3D conceptual classrooms for advanced physics/bio.", i: Orbit }
            ].map((vision, i) => (
              <div key={i} className="space-y-6 group">
                <p className="text-6xl font-extrabold text-white/10 group-hover:text-accent transition-colors">{vision.y}</p>
                <div className="space-y-2 border-l-2 border-white/10 pl-6 group-hover:border-accent transition-colors">
                  <h4 className="text-xl font-bold uppercase tracking-tight">{vision.t}</h4>
                  <p className="text-sm text-white/40 font-light leading-relaxed">{vision.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASSIVE FAQ FORTRESS FOR SEO */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Knowledge Base</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-none tracking-tighter">Everything You Need To Know <br/> <span className="text-accent italic">About Tuition in Dehradun</span></h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Which is the best tuition in Dehradun for CBSE class 10?", a: "Drona IQ is widely considered the best choice due to our 99.4% accurate AI diagnostics and military-grade discipline from DrDA. We focus on conceptual mastery rather than rote learning." },
              { q: "How much does home tuition cost in Dehradun?", a: "Home tuition fees in Dehradun vary by grade and subject. At Drona IQ, we provide premium, verified tutors with competitive pricing and a full digital tracking dashboard for parents." },
              { q: "Do you provide home tutors for Jakhan and Rajpur Road?", a: "Yes, we have a massive network of verified subject experts across Sahastradhara Road, Rajpur Road, Jakhan, Vasant Vihar, and all major localities in Dehradun." },
              { q: "What are the benefits of home tuition over coaching centers?", a: "Home tuition provides 1-on-1 personalized attention, flexible timing, and a comfortable learning environment. Combined with Drona IQ's AI tracking, it becomes the most powerful learning model." },
              { q: "How do I book a free demo class for my child?", a: "You can book a free demo by clicking the 'Book Free Demo' button on our homepage or by calling our counselor hub at +91 78785 53385." },
              { q: "Are female home tutors available for school students?", a: "Yes, Drona IQ has a large pool of verified and highly qualified female educators available for home tuition across all grades." },
              { q: "How does Drona IQ track student performance?", a: "We use our proprietary 'Success Operating System' that logs daily tasks, weekly tests, and identifies learning risks using neural analytics." },
              { q: "Can I get tuition for NDA foundation and Class 10 boards together?", a: "Absolutely. Our 'Gateway' program for Class 9 and 10 specifically integrates NDA/JEE/NEET foundation with CBSE/ICSE board preparation." },
              { q: "Is Drona IQ affiliated with Droneshwar Defence Academy?", a: "Yes, Drona IQ is the academic sibling of Droneshwar Defence Academy (DrDA), the top defense academy in North India, ensuring a high-discipline environment." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#fafafa] border rounded-2xl px-8 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* EXPLORE ALL PROGRAMMES (MEGA NAVIGATION HUB) */}
      <section className="py-24 md:py-48 bg-muted/10 overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-4 gap-16">
              <div className="space-y-8">
                 <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary border-b border-accent/20 pb-4 w-fit">Primary Hubs</h4>
                 <ul className="space-y-4 text-lg font-bold uppercase tracking-tighter text-primary/60 hover:[&_li]:text-accent transition-colors">
                    <li><Link href="/academic-health-check">AI Diagnostic</Link></li>
                    <li><Link href="/home-tuition">Home Tuition</Link></li>
                    <li><Link href="/student">Student Hub</Link></li>
                    <li><Link href="/parent-dashboard">Parent OS</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary border-b border-accent/20 pb-4 w-fit">Class Directory</h4>
                 <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-primary/40">
                    <li><Link href="/admissions">Class 5</Link></li>
                    <li><Link href="/admissions">Class 6</Link></li>
                    <li><Link href="/admissions">Class 7</Link></li>
                    <li><Link href="/admissions">Class 8</Link></li>
                    <li><Link href="/admissions">Class 9</Link></li>
                    <li><Link href="/admissions">Class 10</Link></li>
                    <li><Link href="/admissions">Class 11 Sci</Link></li>
                    <li><Link href="/admissions">Class 12 Sci</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary border-b border-accent/20 pb-4 w-fit">Tech Suite</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-primary/40">
                    <li>Success Simulator</li>
                    <li>Risk Detector™</li>
                    <li>Growth Predictor</li>
                    <li>Digital Twin Sync</li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary border-b border-accent/20 pb-4 w-fit">Global Access</h4>
                 <div className="space-y-6">
                    <p className="text-sm font-bold text-primary">Head Hub Om Tower, Dehradun</p>
                    <Link href="tel:+917878553385"><Button className="w-full h-14 bg-accent text-white font-bold uppercase tracking-widest rounded-xl">Talk to Counselor</Button></Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL EMOTIONAL MESSAGE & FOOTER */}
      <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
           <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
           <div className="space-y-10">
             <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">We don't just teach chapters; we architect careers. Trust the Drona IQ process to transform potential into performance for your child in Dehradun.</p>
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
