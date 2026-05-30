
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
  Wind,
  PhoneCall,
  Upload
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

      {/* PARENT TRUST ZONE */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <Badge className="bg-primary text-white border-none uppercase font-bold tracking-widest text-[10px] px-4">The Trust Factor</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase">Why 5000+ Parents Trust Us</h2>
            <p className="text-xl text-muted-foreground font-light">We don't just provide tuition; we provide academic security and growth visibility.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Verified Tutors", d: "A rigorous 5-tier screening process for every educator.", i: UserCheck },
              { t: "Live Dashboard", d: "Real-time tracking of attendance, tasks, and test results.", i: LayoutDashboard },
              { t: "Curriculum Alignment", d: "CBSE, ICSE, and Competitive patterns mapped perfectly.", i: Flag }
            ].map((feat, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="bg-muted p-8 w-fit rounded-3xl mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                  <feat.i className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-primary">{feat.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT SUCCESS METRICS */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { v: "92%", l: "Average Mark Improvement", i: TrendingUp },
              { v: "24/7", l: "Academic AI Support", i: BrainCircuit },
              { v: "10k+", l: "Doubt Resolutions Monthly", i: MessageSquare },
              { v: "500+", l: "Top Board Percentiles", i: Trophy }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="bg-white/5 p-4 w-fit rounded-2xl mx-auto mb-4">
                  <stat.i className="h-8 w-8 text-accent" />
                </div>
                <p className="text-5xl font-extrabold font-headline text-white tracking-tighter">{stat.v}</p>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: FIND THE PERFECT TUTOR FOR YOUR CHILD */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Elite Matching Engine</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Find the <span className="text-accent italic">Perfect Tutor</span></h2>
            <p className="text-xl text-muted-foreground font-light">Tailored Home Mentorship for every grade and goal in Dehradun.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { c: "Class 1–5", s: "All Primary Subjects", e: "5+ Years", b: "Foundation Building", id: "t1" },
              { c: "Class 6–8", s: "Math, Sci, Eng, SST", e: "7+ Years", b: "Conceptual Clarity", id: "t2" },
              { c: "Class 9–10", s: "Boards Intensive", e: "10+ Years", b: "95%+ Score Target", id: "t3" },
              { c: "Class 11 Sci", s: "Phy, Chem, Math/Bio", e: "8+ Years", b: "JEE/NEET Prep", id: "t4" },
              { c: "Class 11 Com", s: "Accounts, Eco, BST", e: "6+ Years", b: "CA Foundation", id: "t5" },
              { c: "Class 12 Sci", s: "Competitive Edge", e: "12+ Years", b: "Rank Optimization", id: "t6" },
              { c: "Class 12 Com", s: "Advanced Fin & Eco", e: "10+ Years", b: "CUET Preparation", id: "t7" },
              { c: "NDA Foundation", s: "Math, GAT, SSB", e: "Ex-Defence", b: "Officer Mindset", id: "t8" },
              { c: "Olympiad", s: "Advanced Analytics", e: "Gold Medalists", b: "Global Rankings", id: "t9" },
              { c: "Competitive", s: "Logical & Verbal", e: "Aptitude Experts", b: "Speed & Accuracy", id: "t10" }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-white">
                <div className="relative h-48 bg-muted">
                  <Image src={`https://picsum.photos/seed/dronatutor_${item.id}/600/400`} fill alt={item.c} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4"><Badge className="bg-accent text-primary border-none text-[8px] font-bold uppercase">{item.c}</Badge></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-primary uppercase">{item.c} Tutor</h4>
                  <div className="space-y-2 text-xs font-bold text-muted-foreground uppercase tracking-tight">
                    <p className="flex items-center gap-2"><BookOpen className="h-3 w-3 text-accent" /> {item.s}</p>
                    <p className="flex items-center gap-2"><Clock className="h-3 w-3 text-accent" /> {item.e} Exp.</p>
                  </div>
                  <p className="text-[10px] bg-primary/5 p-2 rounded-lg text-primary font-bold italic">"{item.b}"</p>
                  <Link href="/admissions" className="block pt-2">
                    <Button className="w-full h-11 bg-primary text-white group-hover:bg-accent group-hover:text-primary transition-colors uppercase font-bold text-[10px] tracking-widest rounded-xl">Book Free Demo</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: AREAS WE SERVE IN DEHRADUN */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="space-y-6 max-w-2xl">
              <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Hyper-Local Network</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-none tracking-tighter">Verified Tutors <br/> in <span className="text-accent italic">Your Area</span></h2>
            </div>
            <p className="text-xl text-muted-foreground font-light max-w-md">Our network covers 98% of Dehradun, ensuring a verified mentor is never more than 15 minutes away.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Sahastradhara Road", "IT Park", "Rajpur Road", "Jakhan", "Ballupur",
              "Prem Nagar", "Patel Nagar", "Nehru Colony", "Clement Town", "Vasant Vihar",
              "Race Course", "Dalanwala", "GMS Road", "Subhash Nagar", "Graphic Era Area"
            ].map((loc, i) => (
              <Card key={i} className="border-none shadow-lg rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-500 group cursor-pointer border border-primary/5">
                <MapPin className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold font-headline uppercase leading-tight mb-2">{loc}</h4>
                <p className="text-[10px] uppercase font-bold text-muted-foreground group-hover:text-white/60 tracking-widest">24+ Local Tutors</p>
                <div className="mt-4 pt-4 border-t group-hover:border-white/10 flex items-center justify-between">
                  <span className="text-[8px] font-bold uppercase tracking-widest">Fast Matching</span>
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: HOW DRONA IQ HOME TUITION WORKS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none"><Milestone className="h-[400px] w-[400px]" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
             <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Protocol</Badge>
             <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Your Journey to <br/> <span className="text-accent italic">Excellence</span></h2>
          </div>

          <div className="grid md:grid-cols-6 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 hidden md:block -translate-y-1/2"></div>
            {[
              { s: "Step 1", t: "Submit Inquiry", d: "Enter child's details.", i: MessageSquare },
              { s: "Step 2", t: "Counsellor Call", d: "Strategic discussion.", i: PhoneCall },
              { s: "Step 3", t: "Assessment", d: "Identify gap areas.", i: BrainCircuit },
              { s: "Step 4", t: "Tutor Matching", d: "Pedagogy alignment.", i: ScanSearch },
              { s: "Step 5", t: "Free Demo", d: "Zero-risk session.", i: Play },
              { s: "Step 6", t: "Learning Starts", d: "OS based tracking.", i: Rocket }
            ].map((step, i) => (
              <div key={i} className="relative space-y-6 text-center group">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:text-primary transition-all shadow-2xl relative z-10">
                   <step.i className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <p className="text-accent font-bold uppercase tracking-widest text-[10px]">{step.s}</p>
                  <h4 className="text-lg font-extrabold font-headline uppercase leading-tight">{step.t}</h4>
                  <p className="text-xs text-white/40 font-light">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: MEET OUR EXPERT TUTORS */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Verified Faculty</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Dehradun's <span className="text-accent italic">Elite Educators</span></h2>
            <p className="text-xl text-muted-foreground font-light">Meet a few of our 500+ subject matter experts background-verified by DrDA Legacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
              <Card key={id} className="border-none shadow-2xl rounded-[3rem] overflow-hidden group bg-white">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <Image src={`https://picsum.photos/seed/dronafaculty_${id}/600/800`} fill alt="Tutor" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4"><Badge className="bg-green-500 text-white border-none px-3 py-1 flex items-center gap-1 shadow-xl"><ShieldCheck className="h-3 w-3" /> DIQ Verified</Badge></div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-1">
                    <h4 className="text-2xl font-bold text-primary uppercase">Expert Mentor #{id}</h4>
                    <p className="text-xs font-bold text-accent uppercase tracking-[0.2em]">M.Sc Physics • B.Ed</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Experience</p>
                      <p className="font-bold text-primary">8+ Years</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Classes</p>
                      <p className="font-bold text-primary">9th - 12th</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic">"Specialized in simplifying complex calculus concepts through visualization."</p>
                  <Button variant="outline" className="w-full border-primary/10 text-primary hover:bg-primary hover:text-white uppercase font-bold text-[10px] tracking-widest h-12 rounded-2xl">Book Demo Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 5: VERIFIED & SAFE TUTOR NETWORK */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-none shadow-[0_50px_100px_rgba(11,19,43,0.1)] rounded-[4rem] overflow-hidden bg-primary text-white">
              <div className="p-16 md:p-32 grid lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-12">
                   <div className="space-y-6">
                     <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Zero Risk Policy</Badge>
                     <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-[0.9] tracking-tighter">Verified & <br/> <span className="text-accent italic">100% Safe</span></h2>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { t: "Identity Verified", d: "Aadhaar & Police check.", i: Fingerprint },
                       { t: "Background Check", d: "DrDA legacy vetting.", i: ShieldCheck },
                       { t: "Subject Tested", d: "90%+ Score mandatory.", i: ListChecks },
                       { t: "Demo Approved", d: "By senior panel.", i: CheckCircle2 },
                       { t: "Parent Reviewed", d: "Verified feedback logs.", i: MessageSquare },
                       { t: "Live Monitoring", d: "Quality checks monthly.", i: Activity }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-4 items-start group">
                         <div className="bg-white/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-primary transition-all"><item.i className="h-5 w-5" /></div>
                         <div className="space-y-1">
                           <h4 className="font-bold uppercase text-sm tracking-tight">{item.t}</h4>
                           <p className="text-[10px] text-white/40 uppercase font-bold">{item.d}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div className="relative group">
                   <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
                   <Image src="https://picsum.photos/seed/dronasafety/1200/1200" width={1200} height={1200} alt="Safety First" className="rounded-[4rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" />
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: WHY PARENTS CHOOSE HOME TUITION */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Private Advantage</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Why Choose <br/> <span className="text-accent italic">1-on-1 Learning</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Personal Attention", d: "Zero distractions. The tutor focuses only on your child's learning pace.", i: User },
              { t: "Customized Learning", d: "Syllabus adapted to target exactly what's needed for the child's growth.", i: Settings },
              { t: "Flexible Timings", d: "Choose hours that fit your family schedule. No more commute stress.", i: Clock },
              { t: "Better Focus", d: "Home environment creates psychological safety for asking doubts freely.", i: Eye },
              { t: "Parent Involvement", d: "Easily track progress and interact with the tutor face-to-face.", i: Heart },
              { t: "Stronger Results", d: "92% of our home-tutored students show grade jumps within 60 days.", i: TrendingUp },
              { t: "Safe Environment", d: "Learn within the safety and comfort of your own home hub.", i: Shield },
              { t: "Confidence Building", d: "Personal mentorship builds the character and grit needed for exams.", i: Sunrise }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] p-10 space-y-6 bg-white hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="bg-primary/5 p-6 w-fit rounded-2xl group-hover:bg-white/10 transition-colors"><item.i className="h-10 w-10 text-primary group-hover:text-accent" /></div>
                <h4 className="text-2xl font-bold font-headline uppercase leading-tight tracking-tight">{item.t}</h4>
                <p className="text-muted-foreground group-hover:text-white/60 font-light leading-relaxed">{item.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 7: STUDENT SUCCESS STORIES */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
             <div className="space-y-6 max-w-3xl">
                <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Real Transformation</Badge>
                <h2 className="text-4xl md:text-[8rem] font-extrabold text-primary uppercase leading-none tracking-tighter">Wall of <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Excellence</span></h2>
             </div>
             <p className="text-2xl text-muted-foreground font-light italic max-w-md">"Data proves that personalized home mentorship is the fastest way to bridge learning gaps."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
              <Card key={id} className="border-none shadow-2xl rounded-[3rem] overflow-hidden group bg-white hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <Image src={`https://picsum.photos/seed/dronasuccess_${id}/600/800`} fill alt="Successful Scholar" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-2xl font-bold font-headline tracking-tighter">Ishita Negi</p>
                    <p className="text-[10px] font-bold uppercase text-accent tracking-widest">Class 10 (CBSE)</p>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-2xl">
                    <div>
                      <p className="text-[8px] font-extrabold uppercase text-muted-foreground tracking-widest">Before</p>
                      <p className="text-xl font-bold text-primary">74%</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-extrabold uppercase text-accent tracking-widest">After</p>
                      <p className="text-xl font-bold text-primary">98%</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-extrabold font-headline text-accent">+24%</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Improvement</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed italic">"My home tutor from Drona IQ helped me master trigonometry when I was about to give up."</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 8: PARENT TESTIMONIALS */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-[url('https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Verified Reviews</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Dehradun's <span className="text-accent italic">Happiest Parents</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id) => (
              <Card key={id} className="border-none shadow-2xl rounded-[3rem] p-10 space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white/80">
                  "Drona IQ is not just a tuition service. They are the academic backbone of my son's NDA dream. The level of tracking is unbelievable."
                </p>
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                   <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">{id}</div>
                   <div>
                      <p className="text-xl font-bold font-headline uppercase">Parent Profile #{id}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Sahastradhara Road • Class 11 Sci</p>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 9: SUBJECT-WISE HOME TUTORS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Specialized Hubs</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Expert Tutors <br/> <span className="text-accent italic">By Subject</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { t: "Maths Tutor", i: Calculator },
              { t: "Science Tutor", i: Microscope },
              { t: "Physics Tutor", i: Zap },
              { t: "Chemistry Tutor", i: FlaskConical },
              { t: "Biology Tutor", i: Stethoscope },
              { t: "English Tutor", i: Mic },
              { t: "Accounts Tutor", i: BarChart3 },
              { t: "Economics Tutor", i: Globe },
              { t: "Comp Sci Tutor", i: Code },
              { t: "Reasoning Tutor", i: Brain }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-xl rounded-2xl p-10 text-center space-y-4 bg-muted/20 hover:bg-primary hover:text-white transition-all duration-500 group border border-primary/5">
                <item.i className="h-10 w-10 text-accent mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold font-headline uppercase leading-tight">{item.t}</h4>
                <Link href="/admissions">
                  <Button variant="ghost" className="text-[9px] font-extrabold uppercase tracking-widest p-0 group-hover:text-accent">Hire Specialist <ChevronRight className="ml-1 h-3 w-3" /></Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-muted/20 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Knowledge Hub</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Everything You <span className="text-accent italic">Need to Know</span></h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
             {[
               { q: "What are home tuition fees in Dehradun?", a: "Drona IQ offers personalized fee structures based on the tutor's experience level, class, and subjects. On average, primary tuition starts from ₹3,000/month and board excellence tracks vary based on intensity. Visit our Om Tower Hub for a detailed quote." },
               { q: "Is a free demo class available?", a: "Yes. Every student is entitled to one 100% free demo class with a verified subject specialist. We match the tutor based on our initial academic assessment results." },
               { q: "Can I change the tutor if not satisfied?", a: "Absolutely. We offer a 'No-Questions-Asked' tutor replacement policy. If the demo or initial sessions don't align with your child's pace, our coordinator will provide a new expert within 48 hours." },
               { q: "Are female tutors available for home sessions?", a: "Yes, we have a large network of verified female subject specialists for all areas in Dehradun. You can specify your preference during the initial counselor call." },
               { q: "Do you provide board exam preparation?", a: "Our board excellence track is our specialty. We follow a 10,000+ question practice pattern, weekly mock tests, and AI-driven weakness detection to ensure 95%+ results." },
               { q: "Do you provide NDA foundation classes at home?", a: "Yes. We leverage the DrDA legacy to provide specialized home tutors for NDA aspirants in Class 9-12, covering GAT, Math, and officer mindset development." },
               { q: "Do you provide online + offline hybrid classes?", a: "Yes. Our Success OS supports hybrid learning where students can attend home sessions and access 24/7 AI-driven online doubt support through our dashboard." }
             ].map((faq, i) => (
               <AccordionItem key={i} value={`faq-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                 <AccordionTrigger className="text-xl md:text-2xl font-bold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                 <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
               </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>

      {/* NEW SECTION 11: BOOK A FREE DEMO CLASS TODAY */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-accent/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="max-w-5xl mx-auto space-y-16">
              <div className="space-y-10">
                <h2 className="text-6xl md:text-[11rem] font-extrabold font-headline uppercase tracking-tighter leading-[0.85]">Hire an <br/> <span className="text-accent italic">Elite Mentor.</span></h2>
                <p className="text-2xl md:text-4xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
                   Join 500+ Dehradun families who have optimized their child's academic future with verified home mentorship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link href="/admissions">
                    <Button size="lg" className="w-full sm:w-auto h-24 px-12 bg-accent text-primary font-headline font-extrabold uppercase text-xl md:text-2xl tracking-widest rounded-[2rem] shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-all hover:scale-110">Book Free Demo Now</Button>
                 </Link>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://wa.me/917878553385">
                       <Button size="lg" variant="outline" className="w-full sm:w-auto h-24 px-10 border-white/20 text-white hover:bg-white/10 font-headline font-extrabold uppercase text-sm tracking-widest rounded-[2rem] flex items-center gap-4"><MessageCircle className="h-6 w-6 text-green-500" /> WhatsApp Hub</Button>
                    </Link>
                    <Link href="tel:+917878553385">
                       <Button size="lg" variant="outline" className="w-full sm:w-auto h-24 px-10 border-white/20 text-white hover:bg-white/10 font-headline font-extrabold uppercase text-sm tracking-widest rounded-[2rem] flex items-center gap-4"><Phone className="h-6 w-6 text-accent" /> Call Center</Button>
                    </Link>
                 </div>
              </div>

              <div className="pt-24 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                 {[
                   { v: "2h", l: "Fast Matching" },
                   { v: "100%", l: "Verified Safety" },
                   { v: "500+", l: "Expert Tutors" },
                   { v: "Dehradun", l: "Elite Coverage" }
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

      {/* NEW SECTION 12: BECOME A DRONA IQ TUTOR */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-10 bg-primary/5 rounded-[6rem] -z-10 animate-pulse"></div>
               <Image src="https://picsum.photos/seed/dronajoin/1200/1400" width={1200} height={1400} alt="Join Network" className="rounded-[4rem] shadow-2xl object-cover h-[800px]" data-ai-hint="tutor teaching student" />
               <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] border shadow-2xl hidden xl:block">
                  <div className="flex items-center gap-6">
                     <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center text-accent font-bold text-xl">₹</div>
                     <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Premium Earnings</p>
                        <p className="text-lg font-bold text-primary uppercase">Top Tutor Payouts</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="space-y-12">
               <div className="space-y-6">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Educator Career Path</Badge>
                  <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-[0.85] tracking-tighter">Are You An <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Elite Tutor?</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                    Join Dehradun's most verified tutor network. We empower our educators with AI tools, premium study materials, and consistent student inquiries.
                  </p>
               </div>
               
               <div className="space-y-8">
                  {[
                    { t: "Verified Status", d: "Get the DIQ-Verified badge to build massive parent trust.", i: ShieldCheck },
                    { t: "AI Content Library", d: "Access premium mock tests and automated doubt solvers.", i: Sparkles },
                    { t: "Consistent Workflow", d: "Manage all your students through our dedicated educator app.", i: LayoutDashboard }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-8 items-start group">
                       <div className="bg-muted p-4 rounded-2xl group-hover:bg-accent transition-all group-hover:scale-110"><feat.i className="h-6 w-6 text-primary" /></div>
                       <div className="space-y-2">
                          <h4 className="text-2xl font-bold font-headline uppercase text-primary tracking-tight">{feat.t}</h4>
                          <p className="text-lg text-muted-foreground font-light leading-relaxed">{feat.d}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-8">
                  <Link href="/tutor-portal">
                     <Button size="lg" className="h-20 px-12 bg-primary text-white font-headline font-extrabold uppercase text-xs tracking-widest rounded-3xl shadow-2xl">Apply to Join Network <Upload className="ml-2 h-4 w-4 text-accent" /></Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 13: HOME TUITION GALLERY */}
      <section className="py-24 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Inside the Ecosystem</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Experience <br/> <span className="text-accent italic">Drona IQ Life</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Student Learning", d: "One-on-one focus.", id: "g1" },
              { t: "Tutor Guidance", d: "Expert mentorship.", id: "g2" },
              { t: "Parent Meetings", d: "Growth tracking.", id: "g3" },
              { t: "Homework Support", d: "OS based logs.", id: "g4" },
              { t: "Board Prep", d: "Strategic results.", id: "g5" },
              { t: "Success Moments", d: "Goal achievement.", id: "g6" },
              { t: "Study Environment", d: "Comfort & safety.", id: "g7" },
              { t: "Group Interventions", d: "Center support.", id: "g8" }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2rem] overflow-hidden relative group h-[400px]">
                <Image src={`https://picsum.photos/seed/dronagallery_${item.id}/600/800`} fill alt={item.t} className="object-cover group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-xl font-bold font-headline text-white uppercase tracking-tight">{item.t}</h4>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{item.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 14: OUR COMMITMENT TO PARENTS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
               <div className="space-y-6 text-left">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">A Note from the Founder</Badge>
                  <h2 className="text-4xl md:text-[9rem] font-extrabold text-primary uppercase leading-[0.85] tracking-tighter">Our <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Commitment</span></h2>
               </div>
               
               <div className="space-y-12 text-xl md:text-3xl text-muted-foreground font-light leading-relaxed italic">
                  <p>"We believe that every child in Dehradun deserves more than just a tuition teacher. They deserve a mentor, a guide, and a system that cares about their growth as much as their parents do."</p>
                  <p>"At Drona IQ, we are committed to not just building high marks, but building the character, confidence, and discipline that will last a lifetime."</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t">
                  <div className="flex gap-4 items-center">
                     <CheckCircle2 className="h-6 w-6 text-accent" />
                     <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Academic Excellence</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <CheckCircle2 className="h-6 w-6 text-accent" />
                     <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Character Development</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <CheckCircle2 className="h-6 w-6 text-accent" />
                     <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Military Discipline</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <CheckCircle2 className="h-6 w-6 text-accent" />
                     <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Future Readiness</span>
                  </div>
               </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-primary rounded-[6rem] rotate-6 group-hover:rotate-0 transition-transform duration-1000 -z-10"></div>
               <Card className="p-16 md:p-32 bg-white text-primary rounded-[6rem] shadow-2xl border-none space-y-12 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Quote className="h-64 w-64 text-primary" /></div>
                  <h3 className="text-4xl md:text-6xl font-extrabold font-headline uppercase leading-none relative z-10">Trust is <br/> <span className="text-accent italic">Architected</span></h3>
                  <div className="pt-12 border-t border-muted relative z-10">
                     <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground mb-8">Parent Satisfaction Index</p>
                     <div className="flex justify-between items-center mb-4">
                        <p className="text-4xl font-extrabold font-headline text-primary tracking-tighter">98.6%</p>
                        <Heart className="h-8 w-8 text-red-500 animate-pulse fill-current" />
                     </div>
                     <div className="h-2 w-full bg-muted rounded-full">
                        <div className="h-full bg-accent w-[98.6%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
                     </div>
                  </div>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

      {/* STICKY CONVERSION BUTTONS */}
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

function Settings(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function FlaskConical(props: any) {
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
      <path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  )
}
