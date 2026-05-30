
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
  Upload,
  Plus,
  Calendar,
  ClipboardList,
  Sprout
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

      {/* 2. PARENT TRUST ZONE */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none uppercase font-bold tracking-[0.4em] text-[10px] px-6 py-2 rounded-full shadow-lg">The Trust Protocol</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Why 5000+ Dehradun <br/> <span className="text-accent italic">Families Trust Us</span></h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">We don't just provide tuition; we provide absolute academic security and transparent growth visibility.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { t: "Verified Tutors", d: "A rigorous 5-tier screening process for every educator including background checks.", i: UserCheck, c: "text-blue-500" },
              { t: "Live Dashboard", d: "Real-time tracking of attendance, homework, and test results via Parent OS.", i: LayoutDashboard, c: "text-accent" },
              { t: "Curriculum Synergy", d: "CBSE, ICSE, and Competitive patterns mapped perfectly with school progress.", i: Flag, c: "text-green-500" }
            ].map((feat, i) => (
              <div key={i} className="text-center space-y-10 group animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="bg-muted/50 p-12 w-fit rounded-[3rem] mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-4">
                  <feat.i className={`h-16 w-16 ${feat.c} group-hover:text-accent transition-colors`} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold uppercase text-primary tracking-tight">{feat.t}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light px-4">{feat.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDENT SUCCESS METRICS */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-24 text-center">
            {[
              { v: "92%", l: "Avg. Grade Growth", i: TrendingUp },
              { v: "24/7", l: "AI Support Hub", i: BrainCircuit },
              { v: "10k+", l: "Doubts Solved / Mo", i: MessageSquare },
              { v: "500+", l: "Elite Board Scores", i: Trophy }
            ].map((stat, i) => (
              <div key={i} className="space-y-6 group cursor-default">
                <div className="bg-white/5 p-6 w-fit rounded-[2rem] mx-auto mb-6 group-hover:bg-accent transition-all duration-500">
                  <stat.i className="h-10 w-10 text-accent group-hover:text-primary" />
                </div>
                <p className="text-6xl md:text-8xl font-extrabold font-headline text-white tracking-tighter leading-none">{stat.v}</p>
                <p className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-[0.4em] pt-2">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY DRONA IQ EXISTS */}
      <section className="py-24 md:py-48 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge className="bg-accent text-primary border-none uppercase font-extrabold tracking-[0.3em] text-[10px] px-6 py-2">The Mission</Badge>
                <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-[0.9] tracking-tighter">Why We <br/> <span className="text-accent italic">Started.</span></h2>
              </div>
              <div className="space-y-10 text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                <p className="border-l-4 border-accent pl-8 py-2 italic bg-white shadow-sm rounded-r-2xl">
                  "Most coaching centers are factories. They teach chapters, not children. They focus on averages, not potential."
                </p>
                <p>
                  Drona IQ was founded in Dehradun to solve one critical problem: The lack of **individual tracking** and **emotional mentorship** in school education.
                </p>
                <p>
                  Every child has a unique learning pace. By combining military-grade discipline from DrDA with modern AI diagnostics, we ensure no student is left behind.
                </p>
              </div>
              <div className="flex pt-6">
                <Link href="/about">
                  <Button className="h-20 px-12 bg-primary text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-all">Learn Our Full Story</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-[6rem] rotate-3 opacity-20 -z-10"></div>
              <Image 
                src="https://picsum.photos/seed/drona_found/1200/1200" 
                width={1200} 
                height={1200} 
                alt="Drona IQ Mission" 
                className="rounded-[5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] shadow-2xl max-w-xs border-white/20">
                <p className="text-4xl font-extrabold text-primary tracking-tighter mb-2">99.2%</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Parent Satisfaction Index</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LETTER TO PARENTS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
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
        </div>
      </section>

      {/* 6. PROGRAMMES BY CLASS */}
      <section className="py-24 md:py-48 bg-[#f8f9fa] overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Academic Universe</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Programmes <br/> <span className="text-accent italic">By Class</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">From foundation builders to career architects—tailored pathways for every grade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: 'c5', c: "Class 5–8", s: "Math, Sci, Eng, SST", goal: "Elite secondary foundation.", desc: "Focusing on conceptual clarity and developing a love for problem solving." },
              { id: 'c9', c: "Class 9", s: "Advanced Board Prep", goal: "95%+ Board Readiness.", desc: "Transitioning to the high-stakes board pattern with rigorous testing." },
              { id: 'c10', c: "Class 10", s: "Boards Intensive", goal: "School Topper Merit.", desc: "Maximum scoring strategy and psychological exam-readiness training." },
              { id: 'c11s', c: "Class 11 Science", s: "Phy, Chem, Math/Bio", goal: "Competitive Exam Baseline.", desc: "Bridging the massive gap between Class 10 and 11 Science depth." },
              { id: 'c11c', c: "Class 11 Commerce", s: "Accounts, Eco, BST", goal: "Professional Stream Mastery.", desc: "Analytical accounts mastery and business philosophy development." },
              { id: 'c12', c: "Class 12 Boards", s: "Full Career Prep", goal: "Apex University Entry.", desc: "The final push for absolute academic excellence and college admissions." }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-2xl rounded-[4rem] overflow-hidden group hover:-translate-y-4 transition-all duration-700 bg-white">
                <div className="relative h-80 bg-muted overflow-hidden">
                  <Image src={`https://picsum.photos/seed/prog_${item.id}/1200/800`} fill alt={item.c} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                  <div className="absolute bottom-10 left-10"><Badge className="bg-accent text-primary border-none text-[10px] font-bold uppercase tracking-widest px-4 py-2">{item.c}</Badge></div>
                </div>
                <CardContent className="p-12 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-extrabold text-primary uppercase tracking-tight">{item.c} Excellence</h4>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="space-y-4 border-t border-primary/5 pt-8">
                    <div className="flex items-center gap-4 text-sm font-bold text-primary uppercase tracking-wider">
                      <Zap className="h-5 w-5 text-accent" /> {item.s}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold text-primary uppercase tracking-wider">
                      <CheckCircle2 className="h-5 w-5 text-green-500" /> {item.goal}
                    </div>
                  </div>
                  <Link href="/admissions" className="block pt-4">
                    <Button className="w-full h-16 bg-primary text-white group-hover:bg-accent group-hover:text-primary transition-colors uppercase font-bold text-xs tracking-widest rounded-2xl shadow-xl">Explore Programme</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PARENTS COMMAND CENTER */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">OS PREVIEW</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Parents' <br/> <span className="text-accent italic">Command Center.</span></h2>
            <p className="text-xl text-muted-foreground font-light">Zero blind spots. Total visibility into your child's academic heartbeat.</p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-accent/10 rounded-[6rem] blur-[80px] opacity-40 -z-10 group-hover:opacity-60 transition-opacity"></div>
            <Card className="border-none shadow-2xl rounded-[5rem] overflow-hidden bg-white border border-primary/5">
              <div className="grid lg:grid-cols-3">
                <div className="lg:col-span-2 relative h-[500px] md:h-[700px] bg-muted/20">
                   <Image src="https://picsum.photos/seed/drona_dash_v2/1600/1200" fill alt="Dashboard UI" className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                </div>
                <div className="p-12 md:p-20 space-y-12 bg-[#fafafa]">
                   <div className="space-y-10">
                     {[
                       { t: "Attendance Logs", d: "Track daily presence with 100% accuracy.", i: Calendar },
                       { t: "Weekly Marks", d: "Visual charts for every subject quiz.", i: BarChart3 },
                       { t: "Teacher Remarks", d: "Direct qualitative feedback from mentors.", i: MessageSquare },
                       { t: "AI Goal Tracking", d: "Real-time updates on syllabus completion.", i: Target }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-8 items-start group/item">
                         <div className="bg-white p-5 rounded-2xl text-accent shadow-sm group-hover/item:bg-primary group-hover/item:text-accent transition-colors"><item.i className="h-6 w-6" /></div>
                         <div className="space-y-1">
                           <h4 className="text-xl font-extrabold text-primary uppercase tracking-tight">{item.t}</h4>
                           <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.d}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                   <Link href="/parent-dashboard">
                     <Button className="w-full h-16 bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded-2xl shadow-xl">Launch Live Dashboard</Button>
                   </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. BEYOND MARKS: BUILDING BETTER HUMAN BEINGS */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-24 md:mb-32">
            <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-[0.4em] text-[10px] px-6 py-2">The DIQ DNA</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Beyond Marks: <br/> <span className="text-accent italic">Building Humans.</span></h2>
            <p className="text-xl text-white/60 font-light">We focus on 10 critical life-pillars that determine long-term success beyond school exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <Card key={i} className="border-none shadow-2xl rounded-[3rem] p-10 space-y-8 bg-white/5 hover:bg-accent transition-all duration-700 group cursor-default text-white">
                <div className="bg-white/10 p-6 w-fit rounded-3xl group-hover:bg-white group-hover:text-primary transition-colors">
                  <card.i className="h-10 w-10 text-accent group-hover:text-primary" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-headline uppercase leading-tight">{card.t}</h4>
                  <p className="text-sm text-white/50 group-hover:text-primary/70 leading-relaxed">{card.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEARNING JOURNEY TIMELINE */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Blueprint</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Learning <br/> <span className="text-accent italic">Journey.</span></h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 hidden md:block"></div>
            <div className="space-y-32 relative">
              {[
                { s: "Foundation Stage", c: "Class 5–8", d: "Building core cognitive strength, reading habits, and basic mathematical logic.", i: Sprout, pos: "left" },
                { s: "Excellence Stage", c: "Class 9–10", d: "Board pattern orientation, rigorous concept testing, and secondary mastery.", i: Rocket, pos: "right" },
                { s: "Preparation Stage", c: "Class 11–12", d: "Career-specific depth, competitive exam tracking, and specialization.", i: Target, pos: "left" },
                { s: "Achievement Stage", c: "Competitive Exams", d: "Final push for NDA, JEE, NEET, CUET with rank-focused analytics.", i: Trophy, pos: "right" }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${step.pos === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <Badge variant="outline" className="text-accent border-accent/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">{step.s}</Badge>
                    <h4 className="text-4xl md:text-6xl font-extrabold text-primary uppercase tracking-tighter">{step.c}</h4>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-md mx-auto md:mx-0">{step.d}</p>
                  </div>
                  <div className="relative z-10">
                    <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center shadow-2xl border-4 border-white">
                      <step.i className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCAL SEO & FAQ */}
      <section className="py-24 md:py-48 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center max-w-4xl mx-auto space-y-6 mb-24 md:mb-32">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Knowledge Hub</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Everything You <br/> <span className="text-accent italic">Need to Know.</span></h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Admissions & Fees</p>
            {[
              { q: "How do I enroll my child in Drona IQ?", a: "Enrollment starts with a strategic counselor call followed by an AI Academic Health Check. Visit our Admissions page to begin." },
              { q: "What is the fee structure for Class 10 Boards?", a: "Fees are personalized based on the depth of support required. Contact our Rajpur Road hub for a detailed quote." },
              { q: "Do you offer scholarship tests?", a: "Yes, we conduct the Drona Merit Scholarship Test every Sunday. Top performers get up to 50% fee waivers." },
              { q: "Is there a trial period for new students?", a: "We offer one 100% free demo class with our verified subject specialists before any formal enrollment." },
              { q: "Can I pay fees in installments?", a: "Yes, we offer flexible monthly and quarterly payment cycles for parent convenience." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`ad-faq-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                <AccordionTrigger className="text-lg md:text-xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}

            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4 mt-12">Home Tuition & Safety</p>
            {[
              { q: "How are your home tutors verified?", a: "Every tutor undergoes a 5-tier screening: ID verification, academic testing, background check, psychometric analysis, and demo approval." },
              { q: "Are female tutors available for all areas in Dehradun?", a: "Yes, we have a large network of verified female subject specialists covering Sahastradhara Road, Jakhan, and beyond." },
              { q: "What if the tutor is not a good fit for my child?", a: "We offer a 'No-Questions-Asked' tutor replacement policy within 48 hours to ensure compatibility." },
              { q: "Does Drona IQ monitor home tuition sessions?", a: "Yes, our academic coordinators track progress via the Student OS and conduct regular parent-teacher reviews." },
              { q: "Which areas in Dehradun do you cover?", a: "We serve 98% of Dehradun including Rajpur Road, Ballupur, Prem Nagar, IT Park, and Clement Town." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`ht-faq-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                <AccordionTrigger className="text-lg md:text-xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11. FINAL ADMISSION CTA */}
      <section className="py-32 bg-white text-primary text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-[#f8f9fa] p-16 md:p-32 rounded-[5rem] shadow-2xl border border-primary/5 space-y-16">
              <div className="space-y-6">
                <Badge className="bg-primary text-white border-none uppercase font-bold tracking-[0.4em] text-[10px] px-6 py-2">Success Starts Here</Badge>
                <h2 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Ready To Transform <br/> <span className="text-accent italic">Your Results?</span></h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link href="/admissions">
                  <Button className="h-24 px-16 bg-primary text-white font-headline text-xl rounded-[2rem] shadow-2xl uppercase tracking-widest font-extrabold hover:scale-105 transition-all">Enroll Now <ArrowRight className="ml-3 h-6 w-6 text-accent" /></Button>
                </Link>
                <Link href="tel:+917878553385">
                  <Button variant="outline" className="h-24 px-16 border-primary/20 text-primary font-headline text-xl rounded-[2rem] shadow-xl uppercase tracking-widest font-extrabold hover:bg-muted/50 transition-all flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" /> Talk To Counselor
                  </Button>
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER (MEGA) */}
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
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer"><Youtube className="h-6 w-6" /></div>
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer"><MessageCircle className="h-6 w-6" /></div>
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer"><Target className="h-6 w-6" /></div>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Academic OS</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/student">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent Monitor</Link></li>
                   <li><Link href="/academic-health-check">AI Diagnostics</Link></li>
                   <li><Link href="/career-guidance">Dream Roadmap</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Local SEO</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/tuition-in/rajpur-road">Rajpur Road</Link></li>
                   <li><Link href="/tuition-in/jakhan">Jakhan Hub</Link></li>
                   <li><Link href="/tuition-in/ballupur">Ballupur Area</Link></li>
                   <li><Link href="/tuition-in/it-park">IT Park Hub</Link></li>
                 </ul>
              </div>
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Admissions</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/admissions">Apply Online</Link></li>
                   <li><Link href="/results">Success Wall</Link></li>
                   <li><Link href="/results">Results Log</Link></li>
                   <li><Link href="/contact">Contact Hub</Link></li>
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

