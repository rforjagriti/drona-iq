
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
      id: 'c11h', 
      grade: "Class 11 Humanities", 
      title: "The Global Strategist", 
      desc: "Elite preparation for UPSC Foundation, Law Entrance (CLAT), and International Relations.",
      subjects: ["Advanced History", "Political Science", "Geography Logic", "Communication Skills"],
      outcomes: ["Bureaucratic Mindset", "Critical Analysis", "Global Awareness"],
      image: "https://picsum.photos/seed/drona_c11h/800/1000",
      roadmap: "Administrative Path I"
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
      <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-[#05070a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[180px] -translate-y-1/2 opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border-white/10 bg-white/5 shadow-2xl">
                  <Badge className="bg-accent text-primary border-none text-[10px] font-bold px-3 py-1">PREMIUM</Badge>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-[0.3em]">Success Operating System v7.4</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-extrabold text-white leading-[0.9] tracking-tighter">
                  SMARTER <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">LEARNING.</span> <br/>
                  STRONGER FUTURE.
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-light">
                Dehradun's apex hub where <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> meets <span className="text-accent font-bold">Neural Diagnostics</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link href="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-8 py-7 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl backdrop-blur-xl group">
                    AI Health Check <Sparkles className="ml-3 h-5 w-5 text-accent group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative glass p-6 rounded-[5rem] shadow-2xl border-white/10 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/drona_hero_god/1200/1600"
                  alt="Drona IQ Excellence"
                  width={1200}
                  height={1600}
                  className="rounded-[4rem] object-cover h-[700px] w-full grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GENESIS: LETTER FROM THE FOUNDER */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px] opacity-30"></div>
                 <Image src="https://picsum.photos/seed/drona_founder/800/1000" width={800} height={1000} alt="Founder Drona IQ" className="rounded-[4rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="space-y-12">
                 <div className="space-y-6">
                    <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px]">The Genesis</Badge>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">A Mission <br/> <span className="text-accent italic">For Every Child.</span></h2>
                 </div>
                 <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
                    <p>"Drona IQ wasn't built to be another tuition center. It was built out of a realization that students in Dehradun are trapped in a system of average expectations."</p>
                    <p>"We saw parents spending lakhs on coaching 'factories' where their child was just a roll number. We saw students losing their confidence because no one identified their specific learning gaps."</p>
                    <p className="font-bold text-primary">"At Drona IQ, we promise one thing: We will treat your child's success as our only milestone."</p>
                 </div>
                 <div className="pt-6">
                    <p className="font-headline font-extrabold text-primary uppercase tracking-widest text-xl">Dr. Vikram Singh</p>
                    <p className="text-accent font-bold text-xs uppercase tracking-widest">Founder & Chief Academic Architect</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. THE GOD-LEVEL TECHNOLOGY SUITE */}
      <section className="py-24 md:py-48 bg-[#05070a] text-white">
        <div className="container mx-auto px-4">
           <div className="text-center space-y-6 mb-24">
              <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">Intelligence Hub</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter">Success <br/> <span className="text-accent italic">Engineered.</span></h2>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  t: "Digital Academic Twin", 
                  d: "We create a virtual model of your child's cognitive strengths to predict performance and prevent failures.", 
                  i: Fingerprint,
                  c: "bg-blue-500"
                },
                { 
                  t: "Success Probability Simulator", 
                  d: "Advanced algorithm that shows how DIQ interventions shift success probability from 40% to 98%.", 
                  i: TrendingUp,
                  c: "bg-accent"
                },
                { 
                  t: "Academic Risk Detector", 
                  d: "Real-time alerts to parents when conceptual gaps are detected, before they become board-exam failures.", 
                  i: ShieldAlert,
                  c: "bg-red-500"
                }
              ].map((tech, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-12 rounded-[3rem] space-y-8 group hover:bg-white hover:text-primary transition-all duration-700">
                   <div className={`p-6 w-fit rounded-3xl ${tech.c}/10 group-hover:${tech.c}`}>
                      <tech.i className={`h-12 w-12 text-accent`} />
                   </div>
                   <h4 className="text-3xl font-extrabold uppercase tracking-tight">{tech.t}</h4>
                   <p className="text-white/40 group-hover:text-muted-foreground font-light leading-relaxed">{tech.d}</p>
                   <Link href="/academic-health-check" className="block pt-4">
                      <Button variant="link" className="text-accent font-bold uppercase tracking-widest text-xs p-0 group-hover:text-primary">Preview Lab <ChevronRight className="ml-1 h-3 w-3" /></Button>
                   </Link>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* 4. THE CLASS UNIVERSE (INDIVIDUAL DETAILED BLOCKS) */}
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Academic Pathways</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter">Grade-Wise <br/> <span className="text-accent italic">Excellence.</span></h2>
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
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-6">
                      <div className="space-y-4">
                         <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Focus Subjects</h4>
                         <div className="flex flex-wrap gap-2">
                            {item.subjects.map((s, j) => <Badge key={j} variant="outline" className="text-[10px] font-bold uppercase">{s}</Badge>)}
                         </div>
                      </div>
                      <div className="space-y-4">
                         <h4 className="font-bold text-primary uppercase text-xs tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Strategic Goal</h4>
                         <p className="text-sm font-bold text-primary border-l-4 border-accent pl-4">{item.roadmap}</p>
                      </div>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4 pt-8">
                      <Link href="/admissions" className="flex-1">
                         <Button className="w-full h-16 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Enroll in {item.grade}</Button>
                      </Link>
                      <Link href="/academic-health-check" className="flex-1">
                         <Button variant="outline" className="w-full h-16 border-primary text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/5 transition-all">View Full Syllabus</Button>
                      </Link>
                   </div>
                </div>
                <div className="flex-1 relative group w-full">
                   <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl z-10 border-4 border-muted">
                      <Image src={item.image} fill alt={`${item.grade} tuition in Dehradun`} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POWERED BY DRDA & DEFENCE LEGACY */}
      <section className="py-24 bg-primary text-white border-y-8 border-accent">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">The Legacy Hub</Badge>
                 <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter">Powered By <br/> <span className="text-accent italic">Droneshwar Defence Academy.</span></h2>
                 <p className="text-xl text-white/60 font-light">We don't just teach marks; we build officers. Our curriculum is infused with the military discipline of North India's apex defense institution.</p>
                 <Link href="https://droneshwardefenceacademy.com" target="_blank">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary h-16 px-10 font-bold uppercase tracking-widest rounded-xl">Visit DrDA Global <Globe className="ml-2 h-4 w-4" /></Button>
                 </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { l: "15 OLQs System", i: Target },
                   { l: "Officer Mentors", i: Users },
                   { l: "Elite Discipline", i: ShieldCheck },
                   { l: "Courage Core", i: Heart }
                 ].map((box, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center space-y-4">
                       <box.i className="h-12 w-12 text-accent mx-auto" />
                       <p className="font-bold text-sm uppercase tracking-widest">{box.l}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. NEUROSCIENCE HUB */}
      <section className="py-24 md:py-48 bg-[#05070a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center space-y-6 mb-24">
              <Badge className="bg-accent text-primary border-none px-4 py-1 uppercase font-bold tracking-widest text-[10px]">Cognitive Science</Badge>
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Active Recall", d: "Cognitive testing that strengthens synaptic connections.", i: Brain },
                { t: "Gap Analysis", d: "AI detection of conceptual voids in long-term memory.", i: ScanSearch },
                { t: "Focus States", d: "Optimizing the pre-frontal cortex for deep concentration.", i: Zap },
                { t: "Retrieval Drills", d: "Automated review cycles that stop the 'Forgetting Curve'.", i: History }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                   <item.i className="h-10 w-10 text-accent" />
                   <h4 className="text-xl font-bold uppercase">{item.t}</h4>
                   <p className="text-sm text-white/40 font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. DEHRADUN 360 LOCALITY GRID (SEO) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 text-center space-y-16">
           <div className="space-y-6">
              <Badge className="bg-primary text-white border-none px-6 py-1 uppercase font-bold tracking-widest text-[10px]">Local Authority</Badge>
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter">Dehradun 360° <br/> <span className="text-accent italic">Coverage.</span></h2>
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

      {/* 8. THE 140-QUESTION FAQ FORTRESS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Strategic Database</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">FAQ <br/> <span className="text-accent italic">Fortress.</span></h2>
            <p className="text-muted-foreground">Addressing the 140 most critical questions asked by Dehradun parents.</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Which is the best tuition in Dehradun for CBSE board topper goals?", a: "Drona IQ is Dehradun's #1 result-oriented hub. We combine military discipline with AI-driven concept tracking, ensuring 99.4% precise gap analysis for board students." },
              { q: "How does Drona IQ ensure the safety of home tutors in Dehradun?", a: "We have a strict 10-Point Safety Protocol including mandatory police verification, identity vetting, and periodic parent-coordinated safety audits." },
              { q: "Can we get NDA foundation coaching along with regular school tuition?", a: "Absolutely. Our 'Gateway' program integrates board preparation with NDA foundation, powered by the Droneshwar Defence Academy curriculum." },
              { q: "What makes Drona IQ different from local coaching factories?", a: "Unlike factories, we provide 1-on-1 personalized attention, a digital academic twin for tracking, and a defense-legacy inspired discipline protocol." },
              { q: "Do you offer demo classes for home tuition in Sahastradhara Road?", a: "Yes, we offer a free AI Assessment and a 1-hour demo session to match the right student with the right subject mentor." },
              { q: "What are the fees for Class 10 tuition in Drona IQ?", a: "Fees are customized based on the learning mode (Home vs. Center) and subject requirements. We recommend an Academic Health Check for an exact quote." },
              { q: "Is individual home tuition better than center-based coaching?", a: "It depends on the student's learning style. Home tuition offers zero commute and 1-on-1 focus, while our Rajpur Road hub offers a high-discipline peer environment." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#fafafa] border rounded-2xl px-8 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
             <Button variant="ghost" className="text-accent font-bold uppercase tracking-widest text-[10px]">Load All 140 Questions <ChevronRight className="ml-1 h-3 w-3" /></Button>
          </div>
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

      {/* MEGA FOOTER */}
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
