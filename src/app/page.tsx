
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
  Stethoscope,
  HardHat,
  Briefcase,
  Plane,
  Rocket,
  Fingerprint,
  LineChart,
  Database,
  Users,
  Shield,
  Heart,
  AlertTriangle,
  Phone,
  Mail,
  Scale,
  Microscope,
  Calculator,
  Lightbulb,
  Gamepad2,
  History,
  Globe2,
  Library,
  Dna,
  ListChecks,
  ListTodo,
  FileText
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
      <Navbar />
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-[#05070a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-accent/20 rounded-full blur-[100px] md:blur-[180px] -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-primary/40 rounded-full blur-[100px] md:blur-[180px] translate-y-1/2 opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/5 bg-white/5 mx-auto lg:mx-0">
                  <Badge className="bg-accent text-primary border-none text-[8px] md:text-[10px] font-bold">PREMIUM</Badge>
                  <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase tracking-widest">Drona IQ Success OS v5.0 is Live</span>
                </div>
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-[1] md:leading-[0.85] tracking-tighter">
                  DEHRADUN'S <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">SMART HUB</span> <br className="hidden md:block"/>
                  FOR SUCCESS.
                </h1>
              </div>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-white/50 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light text-center lg:text-left">
                Beyond tuition. A unified Student Success Ecosystem merging <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> with <span className="text-accent font-bold">AI Reason</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 justify-center lg:justify-start">
                <Link href="/admissions" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-headline text-lg md:text-xl px-8 md:px-12 py-6 md:py-10 h-auto shadow-[0_0_80px_rgba(212,175,55,0.3)] uppercase tracking-widest font-extrabold rounded-xl md:rounded-2xl transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </Link>
                <Link href="/academic-health-check" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 font-headline text-lg md:text-xl px-8 md:px-12 py-6 md:py-10 h-auto uppercase tracking-widest font-extrabold rounded-xl md:rounded-2xl backdrop-blur-xl group">
                    AI Health Check <Sparkles className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 text-accent group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-16 pt-8 md:pt-12 border-t border-white/5">
                {[
                  { v: "5000+", l: "Scholars Trained" },
                  { v: "96.4%", l: "Success Index" },
                  { v: "24/7", l: "AI Mentorship" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1 text-center lg:text-left">
                    <p className="text-2xl md:text-4xl font-extrabold text-white font-headline tracking-tighter">{stat.v}</p>
                    <p className="text-[8px] md:text-[10px] text-white/30 uppercase font-bold tracking-[0.3em]">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative group">
                <div className="absolute -inset-20 bg-accent/10 rounded-full blur-[150px] opacity-40"></div>
                <div className="relative glass p-4 rounded-[4rem] shadow-2xl border-white/5 ring-1 ring-white/10">
                  <Image 
                    src={getImage('hero-student')?.imageUrl || 'https://picsum.photos/seed/drona_hero_god/1000/1200'} 
                    alt="Success"
                    width={1000}
                    height={1200}
                    className="rounded-[3.5rem] object-cover h-[750px] w-full"
                    priority
                  />
                  {/* Floating Analytics */}
                  <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] border-white/10 shadow-2xl hidden xl:block">
                    <div className="flex items-center gap-6">
                      <div className="bg-accent p-4 rounded-2xl text-primary"><TrendingUp className="h-8 w-8" /></div>
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Growth Forecast</p>
                        <p className="text-2xl font-bold text-white tracking-tighter">+24.8% Improvement</p>
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
      <section className="py-20 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 space-y-6">
            <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Foundation of Faith</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Why Parents <span className="text-accent italic">Trust Us</span></h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed italic">"Drona IQ gives me the visibility I never had with local tuition centers. I finally know exactly where my daughter needs help."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { t: "Weekly Progress Reports", d: "Detailed data-driven PDFs sent every Sunday covering XP, marks, and behavior.", i: BarChart3, c: "text-blue-500", b: "bg-blue-50" },
              { t: "Verified Tutors", d: "Only top 5% subject experts pass our 4-tier pedagogical and background screening.", i: ShieldCheck, c: "text-green-500", b: "bg-green-50" },
              { t: "AI Academic Analysis", d: "Neural diagnostics map missing concept blocks from previous grades with 99.4% precision.", i: BrainCircuit, c: "text-accent", b: "bg-accent/10" },
              { t: "Parent Dashboard", d: "Real-time visibility into attendance, homework streaks, and test percentiles.", i: LayoutDashboard, c: "text-purple-500", b: "bg-purple-50" },
              { t: "Homework Tracking", d: "Daily submission monitoring with immediate parent alerts for missed assignments.", i: ListChecks, c: "text-orange-500", b: "bg-orange-50" },
              { t: "Performance Monitoring", d: "Predictive analytics forecasting board exam results +/- 2% accuracy.", i: LineChart, c: "text-red-500", b: "bg-red-50" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl md:rounded-[4rem] p-8 md:p-12 bg-muted/10 group">
                <div className={`${item.b} ${item.c} p-6 md:p-8 w-fit rounded-2xl md:rounded-[2.5rem] mb-8 md:mb-12 group-hover:rotate-12 transition-transform`}>
                  <item.i className="h-8 w-8 md:h-12 md:w-12" />
                </div>
                <h4 className="text-xl md:text-3xl font-extrabold font-headline uppercase text-primary leading-tight mb-4 md:mb-6">{item.t}</h4>
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">{item.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDENT SUCCESS METRICS */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
          <Database className="h-[800px] w-[800px] -ml-40 -mt-40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Real-Time Stats</Badge>
                 <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-none">The Science of <br/> <span className="text-accent italic">Success</span></h2>
                 <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">We turn qualitative effort into quantitative metrics. No more guessing why marks are low.</p>
               </div>
               <div className="grid grid-cols-2 gap-8 md:gap-12">
                 {[
                   { v: "24%", l: "Avg. 90-Day Improvement", i: TrendingUp },
                   { v: "100%", l: "Syllabus Visibility", i: Eye },
                   { v: "500+", l: "Expert Mentors", i: Users },
                   { v: "Elite", l: "Scholar Status", i: Trophy }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-4">
                     <div className="bg-white/10 p-4 rounded-xl w-fit text-accent"><stat.i className="h-6 w-6 md:h-8 md:w-8" /></div>
                     <p className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter">{stat.v}</p>
                     <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/30">{stat.l}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <Card className="border-white/5 bg-white/5 backdrop-blur-3xl rounded-3xl md:rounded-[5rem] overflow-hidden p-8 md:p-16 space-y-12">
                  <div className="flex justify-between items-center border-b border-white/10 pb-8">
                     <div>
                       <p className="text-[10px] font-bold uppercase text-accent tracking-widest">Global Comparison</p>
                       <h3 className="text-2xl font-bold font-headline">Drona IQ Benchmark</h3>
                     </div>
                     <Activity className="h-10 w-10 text-green-400 animate-pulse" />
                  </div>
                  <div className="space-y-8">
                    {[
                      { l: "DIQ Accuracy", v: 99.4, c: "bg-accent" },
                      { l: "Student Consistency", v: 88, c: "bg-blue-400" },
                      { l: "Parent Satisfaction", v: 96.8, c: "bg-green-400" },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between text-xs font-bold uppercase text-white/40">
                            <span>{bar.l}</span>
                            <span>{bar.v}%</span>
                         </div>
                         <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${bar.c} rounded-full transition-all duration-1000`} style={{width: `${bar.v}%`}}></div>
                         </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full py-8 md:py-10 bg-white text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl md:rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all">View All Success Logs</Button>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY DRONA IQ EXISTS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative hidden lg:block">
               <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
               <Image 
                 src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/drona_nda_premium/1200/900'} 
                 width={1200} height={1000} alt="Legacy" 
                 className="relative rounded-3xl md:rounded-[6rem] shadow-2xl border-[12px] border-white ring-1 ring-muted" 
                 data-ai-hint="military cadet"
               />
            </div>
            <div className="space-y-12 text-center lg:text-left">
               <div className="space-y-6">
                 <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Mission Statement</Badge>
                 <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">The End of <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Mediocre Tuition</span></h2>
                 <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Traditional tuition centers in Dehradun rely on outdated models. Drona IQ was built to provide the <span className="text-primary font-bold">visibility, tracking, and mental discipline</span> needed to excel in 2026.</p>
               </div>
               <div className="grid gap-6 md:gap-8">
                 {[
                   { t: "Stop Blind Studying", d: "Most students study what they know, avoiding what they don't. We fix this.", i: Target },
                   { t: "Bridge The Gap", d: "We identify Class 8 missing foundation blocks that cause Class 10 failures.", i: Milestone },
                   { t: "Military Discipline", d: "Inspired by Droneshwar Defence Academy's elite training protocols.", i: Shield },
                 ].map((point, i) => (
                   <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-10 rounded-3xl md:rounded-[4rem] border border-muted hover:border-accent/20 transition-all bg-muted/5 group">
                      <div className="bg-white p-5 rounded-2xl text-accent shadow-xl w-fit mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                        <point.i className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-xl md:text-2xl text-primary uppercase tracking-tight">{point.t}</h4>
                        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">{point.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. LETTERS TO PARENTS AND STUDENTS */}
      <section className="py-24 md:py-48 bg-muted/20">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              {/* Parent Letter */}
              <Card className="border-none shadow-2xl rounded-3xl md:rounded-[5rem] overflow-hidden bg-white p-12 md:p-20 space-y-12">
                 <div className="bg-primary/5 p-6 rounded-2xl w-fit text-primary mb-8">
                    <Heart className="h-10 w-10 fill-current" />
                 </div>
                 <h3 className="text-3xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Dear <br/> <span className="text-accent italic">Parent,</span></h3>
                 <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                   <p>Your child's potential is a project, not a batch. Every minute of their academic journey deserves visibility.</p>
                   <p>Local coaching centers often treat students like numbers in a classroom. We treat them as unique data points on a success graph.</p>
                   <p>Join us to build a transparent, disciplined, and AI-optimized future for your child.</p>
                 </div>
                 <div className="pt-8 md:pt-12 border-t border-muted">
                   <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Sincerely,</p>
                   <p className="text-xl font-extrabold font-headline uppercase text-primary mt-2">Team Drona IQ Hub</p>
                 </div>
              </Card>

              {/* Student Letter */}
              <Card className="border-none shadow-2xl rounded-3xl md:rounded-[5rem] overflow-hidden bg-primary text-white p-12 md:p-20 space-y-12">
                 <div className="bg-white/10 p-6 rounded-2xl w-fit text-accent mb-8">
                    <Zap className="h-10 w-10 fill-current" />
                 </div>
                 <h3 className="text-3xl md:text-5xl font-extrabold font-headline uppercase tracking-tighter leading-none text-white">Hey <br/> <span className="text-accent italic">Scholar,</span></h3>
                 <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-white/60 font-light leading-relaxed">
                   <p>Every topper in Dehradun was once where you are now. Confused, tired, and doubting themselves.</p>
                   <p>Success isn't magic; it's a routine. We provide the tools, the XP points, and the AI mentorship to make your daily study feel like a winning quest.</p>
                   <p>Level up your game. Unlock your true rank.</p>
                 </div>
                 <div className="pt-8 md:pt-12 border-t border-white/10">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Mentor,</p>
                   <p className="text-xl font-extrabold font-headline uppercase text-accent mt-2">Drona IQ Assistant</p>
                 </div>
              </Card>
           </div>
        </div>
      </section>

      {/* 7 & 8. CONFIDENCE LOSS & SOLUTION */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32 space-y-6">
              <Badge className="bg-red-50 text-red-600 border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Crisis & The Cure</Badge>
              <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Confidence is <br/> <span className="text-red-500 italic underline decoration-red-100 underline-offset-8">Fragile</span></h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Students lose confidence when they face "Blind Spots"—concepts they think they know but fail in tests.</p>
                 </div>
                 <div className="grid gap-6">
                    {[
                      { t: "The Knowledge Illusion", d: "Watching videos isn't learning. Without solved practice, knowledge is just an illusion.", i: Eye },
                      { t: "The Comparison Trap", d: "Being ranked against thousands without personalized feedback leads to burnout.", i: AlertTriangle },
                    ].map((err, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl bg-red-50 border border-red-100">
                        <err.i className="h-8 w-8 text-red-500 shrink-0" />
                        <div>
                          <h4 className="font-bold text-primary text-xl uppercase tracking-tight mb-1">{err.t}</h4>
                          <p className="text-sm text-red-800 font-light">{err.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="space-y-6">
                    <p className="text-xl md:text-3xl text-primary font-bold leading-relaxed">Drona IQ builds Unshakeable Confidence via <span className="text-accent italic">Neural Recovery</span>.</p>
                 </div>
                 <div className="grid gap-6">
                    {[
                      { t: "Micro-Goal Consistency", d: "Winning small daily tasks earns XP and builds academic muscle memory.", i: CheckCircle2 },
                      { t: "Sub-Concept Mastery", d: "We don't just teach 'Math'; we solve exactly why 'Trigonometry' is difficult.", i: BrainCircuit },
                    ].map((sol, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl bg-green-50 border border-green-100">
                        <sol.i className="h-8 w-8 text-green-500 shrink-0" />
                        <div>
                          <h4 className="font-bold text-primary text-xl uppercase tracking-tight mb-1">{sol.t}</h4>
                          <p className="text-sm text-green-800 font-light">{sol.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9-12. PRIMARY SCHOOL FOUNDATION (5-8) */}
      <section className="py-24 md:py-48 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Grade 5 to 8</Badge>
             <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Primary <span className="text-accent italic">Foundation</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">The Cognitive Core. We build the mental architecture for Olympiads, NTSE, and high-level logic before students hit Class 9.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
             {[
               { g: "Grade 5", t: "Numerical Logic", s: "Basic Math, Mental Ability, English Grammar", i: Calculator, id: "class-5-8" },
               { g: "Grade 6", t: "Scientific Reason", s: "Physics Basics, Biology Roots, History Storytelling", i: Microscope, id: "class-5-8" },
               { g: "Grade 7", t: "Analytical Mind", s: "Algebra Intro, Chemical Bonds, Geography Patterns", i: BrainCircuit, id: "class-5-8" },
               { g: "Grade 8", t: "Pre-Board Pivot", s: "UPSC GAT Foundation, Advanced Science, Literature", i: Library, id: "class-5-8" },
             ].map((grade, i) => (
               <Card key={i} className="border-none shadow-2xl rounded-3xl md:rounded-[4rem] overflow-hidden bg-white group hover:-translate-y-4 transition-all duration-700">
                  <div className="relative h-64 md:h-80">
                     <Image src={getImage(grade.id)?.imageUrl || 'https://picsum.photos/seed/drona_kids_premium/1000/800'} fill alt={grade.g} className="object-cover group-hover:scale-110 transition-transform duration-1000" data-ai-hint="children learning" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-[10px] font-bold uppercase text-accent tracking-widest mb-1">{grade.g}</p>
                        <h4 className="text-2xl font-bold font-headline uppercase leading-none">{grade.t}</h4>
                     </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                     <div className="flex gap-4 items-center">
                        <div className="bg-primary/5 p-3 rounded-xl text-primary"><grade.i className="h-6 w-6" /></div>
                        <p className="text-sm font-bold uppercase tracking-tight text-primary/60">{grade.s}</p>
                     </div>
                     <p className="text-sm text-muted-foreground font-light leading-relaxed">Developing core cognitive functions through gamified learning and weekly diagnostics.</p>
                     <Button variant="outline" className="w-full rounded-xl border-primary/20 text-primary font-bold uppercase text-[10px] h-12">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* 13-14. BOARD EXCELLENCE (9-10) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Grade 9 & 10</Badge>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Board Exam <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Mastery Matrix</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Optimizing for CBSE/ICSE Board Excellence with <span className="text-primary font-bold">Success OS v5.0</span>. We turn the stress of pre-boards into a predictable science.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                   {[
                     { t: "Predictive Mock Tests", d: "Weekly tests following exact CBSE/ICSE patterns with AI-predicted final scores.", i: FileText },
                     { t: "Concept Recovery", d: "Identifying missing sub-topics from previous grades that cause marks loss now.", i: BrainCircuit },
                     { t: "XP Reward Streaks", d: "Gamified syllabus completion to ensure students never miss a revision cycle.", i: Zap },
                     { t: "Parent Oversight", d: "Live visibility into homework submission and test percentiles on the app.", i: Eye },
                   ].map((feat, i) => (
                     <div key={i} className="space-y-4">
                        <div className="bg-primary p-4 rounded-xl w-fit text-accent shadow-xl mx-auto lg:mx-0"><feat.i className="h-6 w-6" /></div>
                        <h4 className="text-xl font-bold font-headline uppercase text-primary">{feat.t}</h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{feat.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative">
                <Card className="border-none shadow-2xl rounded-3xl md:rounded-[6rem] overflow-hidden bg-white p-8 md:p-16 space-y-10">
                   <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden mb-12">
                      <Image src={getImage('class-9-10')?.imageUrl || 'https://picsum.photos/seed/drona_boards_premium/1000/800'} fill alt="Board Prep" className="object-cover" data-ai-hint="student studying" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                      <div className="absolute bottom-8 left-8">
                         <Badge className="bg-accent text-primary uppercase font-bold text-[10px] mb-2">Success Blueprint</Badge>
                         <h4 className="text-3xl font-extrabold font-headline text-white uppercase">Target 98.4% Index</h4>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <p className="text-xl font-bold text-primary uppercase border-l-4 border-accent pl-6">Batch 2026-27 Highlights</p>
                      <ul className="grid grid-cols-2 gap-6">
                        {["CBSE Intensive", "ICSE Specialist", "NTSE Track", "Foundation UPSC"].map((s, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs font-bold text-primary uppercase"><CheckCircle2 className="h-4 w-4 text-accent" /> {s}</li>
                        ))}
                      </ul>
                   </div>
                   <Button className="w-full h-16 md:h-20 bg-primary text-white font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl md:rounded-[3rem] shadow-2xl">Enroll in Board Program</Button>
                </Card>
             </div>
           </div>
        </div>
      </section>

      {/* 15-20. CAREER STREAMS (11-12) */}
      <section className="py-24 md:py-48 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Grade 11 & 12</Badge>
             <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Career <span className="text-accent italic">Launchpad</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Transitioning from students to professionals. Our elite streams combine intensive coaching with global entrance preparation.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
             {[
               { s: "Science (PCM/PCB)", t: "The Tech & Medical Core", d: "Doctors, Engineers, Space Scientists, Researchers.", i: Microscope, id: "doctor-visual", b: "bg-blue-600" },
               { s: "Commerce", t: "The Finance Hub", d: "CAs, Entrepreneurs, Stock Analysts, CEOs.", i: Calculator, id: "engineer-visual", b: "bg-green-600" },
               { s: "Humanities", t: "The Leadership Hub", d: "Officers, Lawyers, Diplomats, Media Leaders.", i: Scale, id: "officer-visual", b: "bg-accent" },
             ].map((stream, i) => (
               <Card key={i} className="border-none shadow-2xl rounded-3xl md:rounded-[5rem] overflow-hidden bg-white group hover:scale-[1.03] transition-all duration-1000 h-full">
                  <div className="relative h-[400px] md:h-[600px]">
                     <Image src={getImage(stream.id)?.imageUrl || 'https://picsum.photos/seed/career/800/1000'} fill alt={stream.s} className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 right-10">
                        <div className={`${stream.b} p-4 rounded-xl w-fit text-white mb-6 shadow-2xl`}><stream.i className="h-8 w-8" /></div>
                        <h4 className="text-3xl md:text-5xl font-extrabold font-headline text-white uppercase tracking-tighter leading-none mb-4">{stream.s}</h4>
                        <p className="text-lg md:text-xl text-white/60 font-light italic mb-8">{stream.t}</p>
                        <div className="h-[2px] w-12 bg-accent"></div>
                     </div>
                  </div>
                  <CardContent className="p-12 space-y-8">
                     <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">Integrated entrance preparation for JEE, NEET, CUET, NDA, and CLAT alongside Board excellence.</p>
                     <ul className="space-y-4">
                        {stream.d.split(',').map((career, j) => (
                          <li key={j} className="flex items-center gap-3 text-xs font-bold text-primary uppercase"><ChevronRight className="h-4 w-4 text-accent" /> {career}</li>
                        ))}
                     </ul>
                     <Button className="w-full h-14 md:h-16 bg-muted hover:bg-primary hover:text-white text-primary font-bold uppercase text-[10px] tracking-widest rounded-xl transition-all">Explore Career Roadmap</Button>
                  </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* HOME TUITION SECTION (ON HOMEPAGE) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px]"></div>
                <div className="relative rounded-3xl md:rounded-[6rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[500px] md:h-[900px]">
                   <Image src={getImage('home-tutor-session')?.imageUrl || 'https://picsum.photos/seed/drona_home_premium/1000/800'} fill alt="Home Tuition" className="object-cover" data-ai-hint="private tutor" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-2xl md:rounded-[4rem] border-white/20 text-center">
                      <div className="flex text-accent gap-2 justify-center mb-6">
                        {[1,2,3,4,5].map(s => <Star key={s} className="h-6 w-6 fill-current" />)}
                      </div>
                      <p className="text-white text-xl md:text-3xl font-light italic leading-relaxed">"The home tuition network in Dehradun is huge, but Drona IQ's verification makes all the difference."</p>
                   </div>
                </div>
             </div>
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Personalized Hub</Badge>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Elite <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Home Tutors</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Dehradun's most rigorous verification engine for home educators. We don't just send a teacher; we send a <span className="text-primary font-bold">vetted subject expert</span> matching your child's personality.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {[
                     { t: "5-Step Verification", d: "Background, ID, Pedagogy, Tech, and Background checks.", i: ShieldCheck },
                     { t: "Area Matching", d: "Local experts in Sahastradhara, Rajpur, and Jakhan.", i: MapPin },
                     { t: "Demo First", d: "Free trial session to ensure perfect student-teacher fit.", i: Play },
                     { t: "Safety Protocol", d: "Strict child-safety monitoring and reporting.", i: Shield },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-start text-left">
                        <div className="bg-primary/5 p-3 rounded-xl text-primary shrink-0"><item.i className="h-6 w-6" /></div>
                        <div>
                          <h4 className="font-bold text-primary text-lg uppercase tracking-tight">{item.t}</h4>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <Link href="/home-tuition" className="block">
                  <Button className="w-full h-16 md:h-20 bg-primary text-white font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl shadow-2xl">Find A Local Tutor <ArrowRight className="ml-2 h-5 w-5 text-accent" /></Button>
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* PARENT DASHBOARD PREVIEW */}
      <section className="py-24 md:py-48 bg-[#0a0d14] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Parent Monitor App</Badge>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-none">Total <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Academic Visibility</span></h2>
                  <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">No more waiting for parent-teacher meetings. Track every metric of your child's success from your phone, 24/7.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                   {[
                     { t: "Live Attendance", d: "Instant alerts for entry & exit.", i: UserCheck },
                     { t: "Homework Streak", d: "Daily submission tracking logs.", i: Activity },
                     { t: "AI Report Cards", d: "Sunday night success summaries.", i: BarChart3 },
                     { t: "Mentor Chat", d: "Direct line to your hub counselor.", i: MessageCircle },
                   ].map((feat, i) => (
                     <div key={i} className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-xl w-fit text-accent shadow-xl mx-auto lg:mx-0"><feat.i className="h-6 w-6" /></div>
                        <h4 className="text-xl font-bold font-headline uppercase text-white">{feat.t}</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-light">{feat.d}</p>
                     </div>
                   ))}
                </div>
                <Link href="/parent-dashboard" className="block">
                  <Button variant="outline" className="w-full h-16 md:h-20 border-white/20 text-white hover:bg-white/10 font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl md:rounded-[3rem]">View Parent Portal Demo</Button>
                </Link>
             </div>
             <div className="relative group">
                <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-30"></div>
                <div className="relative rounded-3xl md:rounded-[6rem] overflow-hidden border-[8px] md:border-[16px] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-[#05070a] p-8 md:p-12">
                   <Image src={getImage('parent-app-mockup')?.imageUrl || 'https://picsum.photos/seed/drona_parent_ui/1000/1200'} width={1000} height={1200} alt="Parent App" className="rounded-3xl shadow-2xl" data-ai-hint="mobile app interface" />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* STUDENT DASHBOARD PREVIEW */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative order-last lg:order-first">
                <Card className="border-none shadow-2xl rounded-3xl md:rounded-[6rem] overflow-hidden bg-muted/10 p-8 md:p-16">
                   <Image src={getImage('student-app-mockup')?.imageUrl || 'https://picsum.photos/seed/drona_student_ui/1000/1200'} width={1000} height={1200} alt="Student App" className="rounded-3xl shadow-2xl" data-ai-hint="tablet app interface" />
                </Card>
             </div>
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Student Hub App</Badge>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Your <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Academic Command</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Turn your daily study into a winning mission. Earn XP, track milestones, and conquer your target exams with our precision planner.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                   {[
                     { t: "Daily Quest Planner", d: "Tasks tailored to your pace.", i: ListTodo },
                     { t: "Level Up System", d: "Earn badges for consistency.", i: Trophy },
                     { t: "AI Mock Tests", d: "Personalized pattern detection.", i: BrainCircuit },
                     { t: "Digital Twin", d: "Your academic growth meta-data.", i: Fingerprint },
                   ].map((feat, i) => (
                     <div key={i} className="space-y-4">
                        <div className="bg-primary/5 p-4 rounded-xl w-fit text-primary shadow-xl mx-auto lg:mx-0"><feat.i className="h-6 w-6" /></div>
                        <h4 className="text-xl font-bold font-headline uppercase text-primary">{feat.t}</h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{feat.d}</p>
                     </div>
                   ))}
                </div>
                <Link href="/student-dashboard" className="block">
                  <Button className="w-full h-16 md:h-20 bg-primary text-white font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl md:rounded-[3rem] shadow-2xl">Launch Scholar Hub</Button>
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* ACADEMIC HEALTH CHECK (PREVIEW) */}
      <section className="py-24 md:py-48 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32 space-y-6">
             <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">AI Neural Diagnostics</Badge>
             <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Academic <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Risk Detector</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Most students repeat Class 8 mistakes in Class 10. Our AI detects these "Risk Zones" before they become failures.</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
              <div className="space-y-12">
                 <div className="bg-white p-12 rounded-[4rem] shadow-2xl space-y-8 border border-muted ring-1 ring-muted">
                    <div className="flex justify-between items-center border-b pb-6">
                       <p className="font-bold text-primary uppercase tracking-widest text-xs">Diagnostic Report Sample</p>
                       <Badge className="bg-red-500 text-white uppercase text-[8px]">High Risk Detected</Badge>
                    </div>
                    <div className="space-y-6">
                       {[
                         { s: "Quadratic Equations", v: "Class 8 Foundation Weak", c: "text-red-600" },
                         { s: "English Articulation", v: "Communication Skills: Moderate", c: "text-orange-500" },
                         { s: "Physics Numerical", v: "Speed Index: Needs Attention", c: "text-red-600" },
                       ].map((item, i) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl">
                            <span className="font-bold text-primary text-sm uppercase">{item.s}</span>
                            <span className={`text-[10px] font-extrabold uppercase ${item.c}`}>{item.v}</span>
                         </div>
                       ))}
                    </div>
                    <Button className="w-full bg-accent text-white font-headline font-extrabold h-14 rounded-2xl">Fix These Gaps Now</Button>
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="space-y-8 text-center lg:text-left">
                    <h3 className="text-3xl md:text-5xl font-extrabold font-headline text-primary uppercase leading-tight">Neural Analysis <br/> <span className="text-accent italic">How It Works</span></h3>
                    <div className="grid gap-6">
                       {[
                         { s: "Assessment", d: "Diagnostic test covering current and previous grade core concepts." },
                         { s: "Pattern Mapping", d: "AI tracks response time and accuracy to map mental fatigue and logic gaps." },
                         { s: "Recovery Plan", d: "Hyper-personalized 30-day study roadmap to fix detected risks." },
                       ].map((step, i) => (
                         <div key={i} className="flex gap-6 items-start text-left group">
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-accent flex items-center justify-center font-bold text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">{i+1}</div>
                            <div>
                               <h4 className="font-bold text-primary text-xl uppercase tracking-tight mb-1">{step.s}</h4>
                               <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed">{step.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <Link href="/academic-health-check" className="block">
                    <Button size="lg" className="w-full h-16 md:h-20 bg-primary text-white font-headline text-lg md:text-xl px-12 uppercase tracking-widest font-extrabold rounded-2xl md:rounded-[3rem] shadow-2xl">Get Free AI Assessment</Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* CAREER ROADMAP GALLERY */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Future Vision</Badge>
             <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">The Career <span className="text-accent italic">Gallery</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">We map student cognitive strengths to world-class career trajectories. Every card is a possible future.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
             {[
               { id: "doctor-visual", t: "Medical", d: "AI-Med, Surgeon, Research", i: Stethoscope },
               { id: "engineer-visual", t: "Engineering", d: "Robotics, Software, Aero", i: HardHat },
               { id: "officer-visual", t: "Defence", d: "Officer, Pilot, Strategist", i: Flag },
               { id: "pilot-visual", t: "Aviation", d: "Commercial, Cargo, Ops", i: Plane },
               { id: "doctor-visual", t: "Law & Policy", d: "Diplomat, Judge, Media", i: Scale },
             ].map((career, i) => (
               <Card key={i} className="border-none shadow-xl rounded-3xl md:rounded-[4rem] overflow-hidden bg-white group cursor-pointer hover:-translate-y-4 transition-all duration-1000">
                  <div className="relative h-80 md:h-[450px]">
                     <Image src={getImage(career.id)?.imageUrl || 'https://picsum.photos/seed/career/800/1000'} fill alt={career.t} className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-accent/20 backdrop-blur-md p-3 rounded-xl w-fit text-accent mb-4"><career.i className="h-5 w-5 md:h-8 md:w-8" /></div>
                        <h4 className="text-xl md:text-2xl font-extrabold font-headline text-white uppercase mb-1">{career.t}</h4>
                        <p className="text-[9px] md:text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">{career.d}</p>
                     </div>
                  </div>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* DEFENCE FOUNDATION (DrDA) */}
      <section className="py-24 md:py-48 bg-[#0a0d14] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-white/10 w-fit mx-auto lg:mx-0">
                     <Badge className="bg-accent text-primary border-none text-[8px] md:text-[10px]">DrDA PARTNERSHIP</Badge>
                     <span className="text-[8px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">Legacy Of Officers</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-[1] md:leading-[0.8]">Defence <br className="hidden md:block"/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Advantage</span></h2>
                  <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Powered by <span className="text-white font-bold italic">Droneshwar Defence Academy</span>. We don't just teach chapters; we architect officers for the Indian Armed Forces.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                   {[
                     { t: "OLQ Protocols", d: "Instilling Officer Like Qualities from Grade 8.", i: Shield },
                     { t: "NDA Foundation", d: "Early exposure to UPSC GAT & SSB patterns.", i: Target },
                     { t: "Leadership Dev", d: "Command presence and public speaking training.", i: Users },
                     { t: "Physical Readiness", d: "Discipline-first routine and military protocols.", i: Clock },
                   ].map((item, i) => (
                     <div key={i} className="group space-y-4 text-center lg:text-left">
                        <div className="bg-white/10 text-accent p-4 md:p-6 rounded-2xl w-fit group-hover:bg-accent group-hover:text-primary transition-all shadow-2xl mx-auto lg:mx-0"><item.i className="h-6 w-6 md:h-10 md:w-10" /></div>
                        <h4 className="text-xl md:text-2xl font-extrabold font-headline uppercase leading-tight">{item.t}</h4>
                        <p className="text-sm md:text-lg text-white/40 leading-relaxed font-light">{item.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative group">
                <div className="absolute -inset-20 bg-accent/10 rounded-full blur-[150px] opacity-20"></div>
                <div className="relative rounded-3xl md:rounded-[6rem] overflow-hidden border-[16px] border-white/5 shadow-2xl">
                   <Image src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/drona_nda_premium/1200/900'} width={1200} height={1000} alt="Defence Academy" className="h-[500px] md:h-[900px] object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint="cadet in uniform" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12 text-center lg:text-left space-y-6">
                      <p className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-8xl uppercase leading-[0.9] tracking-tighter">YAHAN SAPNE NAHI, <br/> <span className="text-accent italic">OFFICERS</span> <br/> TAYAAR HOTE HAIN.</p>
                      <div className="h-[2px] w-24 bg-accent mx-auto lg:mx-0"></div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* GOD LEVEL SECTIONS */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Proprietary OS Components</Badge>
             <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-none text-white">The Hub <span className="text-accent italic">Command Center</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Unique high-end modules that turn academic growth into a predictable science.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              {[
                { t: "Student Growth Simulator", d: "Inputs: Marks, Study Hours, Weakness. Output: Predicted rank roadmap.", i: Activity },
                { t: "Peace Of Mind Index™", d: "A metadata representation of child safety, monitoring, and progression.", i: ShieldCheck },
                { t: "Digital Academic Twin", d: "A real-time academic clone predicting exam scores with +/- 2% accuracy.", i: Fingerprint },
                { t: "Academic Risk Detector", d: "Alerts parents if foundation gaps are detected before a major board exam.", i: AlertTriangle },
                { t: "Success Prediction Engine", d: "Neural reasoning engine analyzing patterns in 500+ past successful scholars.", i: BrainCircuit },
                { t: "Drona IQ Command Hub", d: "Central control for admin to manage 1000+ leads with military precision.", i: Database },
              ].map((mod, i) => (
                <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] group hover:bg-white/10 transition-all duration-700 h-full">
                   <div className="bg-accent/10 p-6 rounded-2xl w-fit text-accent mb-10 group-hover:scale-110 transition-transform"><mod.i className="h-10 w-10" /></div>
                   <h4 className="text-2xl md:text-4xl font-extrabold font-headline uppercase leading-none tracking-tight mb-6">{mod.t}</h4>
                   <p className="text-base md:text-xl text-white/40 leading-relaxed font-light">{mod.d}</p>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* LOCAL SEO DOMINATION */}
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Uttarakhand's Academic Hub</Badge>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Local <span className="text-accent italic">Domination</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Headquartered in Om Tower, Sahastradhara Road, we are the digital backbone for students across Dehradun's elite hubs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  {[
                    "Sahastradhara Road Hub", "IT Park Hub", "Rajpur Road Circle", "Ballupur Estate", "Prem Nagar Hub", "Clement Town", "Dehradun Cantt"
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-muted/30 rounded-2xl border border-muted/50 hover:border-accent transition-all cursor-pointer">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-bold text-primary text-sm uppercase tracking-tight">{loc}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative">
                <div className="h-[400px] md:h-[700px] rounded-3xl md:rounded-[6rem] overflow-hidden border-[16px] border-white shadow-2xl relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.435732104068!2d78.0772225!3d30.3475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzUxLjAiTiA3OMKwMDQnMzguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="grayscale"
                  ></iframe>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ EXPANSION VAULT */}
      <section className="py-24 md:py-48 bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16 md:mb-32 space-y-6">
              <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Support Vault</Badge>
              <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold font-headline text-primary uppercase tracking-tighter text-center leading-none">Common <span className="text-accent italic">Questions</span></h2>
           </div>
           
           <Tabs defaultValue="parents" className="space-y-12">
              <TabsList className="bg-white p-2 rounded-full border shadow-xl w-full max-w-3xl mx-auto flex h-auto overflow-x-auto no-scrollbar">
                 <TabsTrigger value="parents" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[140px]">Parents</TabsTrigger>
                 <TabsTrigger value="students" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[140px]">Students</TabsTrigger>
                 <TabsTrigger value="home-tuition" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[140px]">Home Tuition</TabsTrigger>
                 <TabsTrigger value="health-check" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] md:text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[140px]">AI Health</TabsTrigger>
              </TabsList>

              <TabsContent value="parents" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How is Drona IQ different from local coaching in Dehradun?", a: "Most centers only focus on syllabus completion. Drona IQ uses an AI-driven 'Student Success OS' that tracks every sub-concept performance, attendance, and behavioral patterns to predict results and identify learning risks 3 months before exams." },
                      { q: "Can I monitor my child's performance from my office?", a: "Yes. Our Parent Monitoring App provides live visibility into attendance, homework submission status, weekly test marks, and a 'Confidence Index' that shows how prepared your child actually is." },
                      { q: "What is the fee structure for NDA Foundation?", a: "Fees depend on the tier of coaching (Online/Hybrid/Offline). Please visit our Om Tower hub for a personalized quote." },
                      { q: "Do you provide weekly progress reports?", a: "Yes, every Sunday evening, a detailed PDF and app-notification are sent to parents summarizing the student's XP gain, test percentiles, and upcoming revision goals." },
                      { q: "Are the tutors at Sahastradhara hub verified?", a: "Absolutely. Every educator undergoes a 5-step screening process including background checks, domain mastery tests, and pedagogy trials." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`p-${i}`} className="bg-white border shadow-sm rounded-2xl md:rounded-[2rem] px-8 md:px-12 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-2xl font-bold font-headline text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>
           </Tabs>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="py-24 md:py-48 bg-[#05070a] border-t border-white/5 text-white/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            <div className="lg:col-span-1 space-y-12">
               <div className="flex items-center space-x-4 group">
                <div className="rounded-2xl bg-primary p-5 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap className="h-10 w-10 text-accent" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-headline text-3xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mt-2">Success Operating System</span>
                </div>
              </div>
              <p className="text-xl leading-relaxed font-light max-w-sm">Dehradun's premier Student Success Ecosystem. Built on the pillars of military discipline and AI tracking.</p>
              <div className="space-y-6">
                <div className="flex gap-6 items-start text-left">
                  <MapPin className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-sm font-medium">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand 248001</p>
                </div>
                <div className="flex gap-6 items-start text-left">
                  <Phone className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-sm font-medium">+91 7878553385 • +91 6399000440</p>
                </div>
                <div className="flex gap-6 items-start text-left">
                  <Mail className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-sm font-medium">support@dronaiq.com</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Academic OS</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/student-dashboard">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent Monitor</Link></li>
                   <li><Link href="/academic-health-check">AI Diagnostics</Link></li>
                   <li><Link href="/career-guidance">Career Blueprint</Link></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Course Track</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li>NDA Foundation</li>
                   <li>JEE Excellence</li>
                   <li>NEET Roadmap</li>
                   <li>CBSE Boards</li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Locations</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li>Sahastradhara</li>
                   <li>Rajpur Road</li>
                   <li>IT Park Hub</li>
                   <li>Jakhan Circle</li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Company</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/about">Our Vision</Link></li>
                   <li><Link href="/results">Results Wall</Link></li>
                   <li><Link href="/contact">Support</Link></li>
                   <li><Link href="/tutor-portal">Join Network</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-24 md:pt-48 text-center space-y-10 border-t border-white/5 mt-24 md:mt-48">
             <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] text-white/20">© 2024 Drona IQ Student Success OS • Powered by Droneshwar Defence Academy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
