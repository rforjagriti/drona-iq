
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
  FileText,
  User,
  Info,
  MessageSquare
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
                  <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase tracking-widest">Drona IQ Success OS v6.0 is Live</span>
                </div>
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-extrabold text-white leading-[1] md:leading-[0.85] tracking-tighter">
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
                  <Link href="/results" className="block w-full">
                    <Button className="w-full py-8 md:py-10 bg-white text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-2xl md:rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all">View All Success Logs</Button>
                  </Link>
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

      {/* 5. LETTER TO PARENTS */}
      <section className="py-24 md:py-48 bg-muted/20">
        <div className="container mx-auto px-4">
           <div className="max-w-5xl mx-auto">
              <Card className="border-none shadow-2xl rounded-3xl md:rounded-[5rem] overflow-hidden bg-white p-12 md:p-20 space-y-12">
                 <div className="bg-primary/5 p-6 rounded-2xl w-fit text-primary mb-8">
                    <Heart className="h-10 w-10 fill-current" />
                 </div>
                 <h3 className="text-3xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">A Letter To <br/> <span className="text-accent italic">The Parents of Dehradun,</span></h3>
                 <div className="space-y-8 text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                   <p>Your child's potential is a project, not a batch number. Every minute of their academic journey deserves total visibility.</p>
                   <p>In our years at Droneshwar Defence Academy, we realized that the difference between an Officer and a failure isn't just intelligence—it's <span className="text-primary font-bold">Discipline and Data</span>.</p>
                   <p>We created Drona IQ because local coaching centers often treat students like numbers in a classroom. We treat them as unique data points on a success graph.</p>
                   <p>Join us to build a transparent, disciplined, and AI-optimized future for your child.</p>
                 </div>
                 <div className="pt-12 md:pt-20 border-t border-muted flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                   <div>
                     <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Founded with Vision,</p>
                     <p className="text-2xl font-extrabold font-headline uppercase text-primary mt-2">Team Drona IQ Hub</p>
                   </div>
                   <Link href="/about">
                     <Button variant="outline" className="rounded-full px-10 h-16 border-primary text-primary uppercase font-bold text-xs tracking-widest">Our Vision <ArrowRight className="ml-2 h-4 w-4" /></Button>
                   </Link>
                 </div>
              </Card>
           </div>
        </div>
      </section>

      {/* 6. LETTER TO STUDENTS */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="max-w-5xl mx-auto">
              <Card className="border-none shadow-2xl rounded-3xl md:rounded-[5rem] overflow-hidden bg-white/5 backdrop-blur-3xl p-12 md:p-20 space-y-12">
                 <div className="bg-white/10 p-6 rounded-2xl w-fit text-accent mb-8">
                    <Zap className="h-10 w-10 fill-current" />
                 </div>
                 <h3 className="text-3xl md:text-6xl font-extrabold font-headline uppercase tracking-tighter leading-none text-white">Hey <br/> <span className="text-accent italic">Future Scholar,</span></h3>
                 <div className="space-y-8 text-xl md:text-3xl text-white/60 font-light leading-relaxed">
                   <p>Every topper in Dehradun was once where you are now. Confused by complex formulas, tired of endless assignments, and doubting their own rank.</p>
                   <p>Success isn't magic; it's a routine. Drona IQ doesn't just give you notes; we give you a <span className="text-white font-bold italic">Command Center</span> for your brain.</p>
                   <p>Turn your daily study into a winning quest. Earn XP, unlock levels, and watch your rank climb in real-time. Your future isn't a dream—it's a plan.</p>
                 </div>
                 <div className="pt-12 md:pt-20 border-t border-white/10">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Success Operating System,</p>
                   <p className="text-2xl font-extrabold font-headline uppercase text-accent mt-2">Drona IQ Core</p>
                 </div>
              </Card>
           </div>
        </div>
      </section>

      {/* 9-12. PRIMARY SCHOOL FOUNDATION (5-8) - EXPANDED */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Formation Years</Badge>
             <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Primary <span className="text-accent italic">Excellence Hub</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Building the cognitive architecture for Olympiads, NTSE, and competitive logic before students hit Class 9.</p>
           </div>
           
           <div className="space-y-32">
             {[
               { g: "Class 5", t: "Numerical Logic", s: "Basic Math, Mental Ability, English Grammar", i: Calculator, id: "class-5" },
               { g: "Class 6", t: "Scientific Reason", s: "Physics Basics, Biology Roots, History Storytelling", i: Microscope, id: "class-6" },
               { g: "Class 7", t: "Analytical Mind", s: "Algebra Intro, Chemical Bonds, Geography Patterns", i: BrainCircuit, id: "class-7" },
               { g: "Class 8", t: "Pre-Board Pivot", s: "UPSC GAT Foundation, Advanced Science, Literature", i: Library, id: "class-8" },
             ].map((grade, i) => (
               <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 relative group">
                     <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <Image src={getImage(grade.id)?.imageUrl || 'https://picsum.photos/seed/drona/1000/800'} width={1000} height={800} alt={grade.g} className="relative rounded-[4rem] shadow-2xl border-[16px] border-white transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                     <div className="space-y-4">
                        <Badge className="bg-primary text-white uppercase text-[10px] tracking-widest font-bold">{grade.g} Program</Badge>
                        <h3 className="text-3xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tight leading-none">{grade.t}</h3>
                        <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">We move beyond rote learning to <span className="text-primary font-bold">First Principles</span>. Developing curiosity and academic discipline early.</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="p-6 bg-muted/30 rounded-3xl border border-muted">
                           <h4 className="font-bold text-primary uppercase text-xs mb-2">Academic Goal</h4>
                           <p className="text-sm text-muted-foreground">Mastering {grade.s.split(',')[0]} and logic.</p>
                        </div>
                        <div className="p-6 bg-muted/30 rounded-3xl border border-muted">
                           <h4 className="font-bold text-primary uppercase text-xs mb-2">Future Path</h4>
                           <p className="text-sm text-muted-foreground">Foundation for Olympiads & NTSE.</p>
                        </div>
                     </div>
                     <Link href="/admissions">
                        <Button className="w-full md:w-auto px-12 h-16 bg-primary text-white font-headline uppercase font-bold text-xs tracking-widest rounded-2xl shadow-xl">Enroll In {grade.g} Program <ArrowRight className="ml-2 h-4 w-4" /></Button>
                     </Link>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 13-14. BOARD EXCELLENCE (9-10) - EXPANDED */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The War Room</Badge>
             <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-none">Board Exam <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Mastery Matrix</span></h2>
             <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Optimizing for CBSE/ICSE Board Excellence with <span className="text-white font-bold italic">Success OS v6.0</span>. We turn stress into predictable strategy.</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-20">
              {/* Class 9 */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 space-y-12 group hover:bg-white/10 transition-all duration-700">
                 <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8">
                    <Image src={getImage('class-9')?.imageUrl || 'https://picsum.photos/seed/c9/1000/800'} fill alt="Class 9" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl font-extrabold font-headline uppercase">Class 9 <span className="text-accent">Foundation</span></h3>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">The make-or-break year. We bridge the gap between basic concepts and high-level application required for 10th boards.</p>
                    <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-white/80">
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> CBSE Intensive</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> ICSE Special</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> NTSE Track</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Mock Mastery</li>
                    </ul>
                 </div>
                 <Link href="/admissions">
                    <Button className="w-full h-16 md:h-20 bg-accent text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-[2rem] shadow-2xl">Start Class 9 Path</Button>
                 </Link>
              </Card>

              {/* Class 10 */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 space-y-12 group hover:bg-white/10 transition-all duration-700 border-2 border-accent/20">
                 <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8">
                    <Image src={getImage('class-10')?.imageUrl || 'https://picsum.photos/seed/c10/1000/800'} fill alt="Class 10" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl font-extrabold font-headline uppercase">Class 10 <span className="text-accent italic">Excellence</span></h3>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">Precision performance. Weekly pattern tests, AI predictive scores, and time-management protocols for the top 1%.</p>
                    <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-white/80">
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pre-Board Sim</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Formula Vault</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> PYQ Analysis</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> AIR Predictor</li>
                    </ul>
                 </div>
                 <Link href="/admissions">
                    <Button className="w-full h-16 md:h-20 bg-white text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-[2rem] shadow-2xl">Target 98%+ Now</Button>
                 </Link>
              </Card>
           </div>
        </div>
      </section>

      {/* GOD LEVEL SIMULATORS & OS PREVIEWS */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
             <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Future Readiness</Badge>
             <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">The <span className="text-accent italic">Digital Academic Twin</span></h2>
             <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Our OS creates a real-time data clone of your child's academic brain to predict and optimize results.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-12 md:gap-20">
              {[
                { t: "Student Success Simulator", d: "Inputs: Marks, Study Hours, Weakness. Output: Predicted rank roadmap.", i: Activity, b: "bg-blue-50" },
                { t: "Academic Risk Detector", d: "Alerts parents if foundation gaps are detected before a major board exam.", i: AlertTriangle, b: "bg-red-50" },
                { t: "Parent Peace Of Mind Index™", d: "A metadata representation of child safety, monitoring, and progression.", i: ShieldCheck, b: "bg-green-50" },
                { t: "Digital Academic Twin", d: "A real-time academic clone predicting exam scores with +/- 2% accuracy.", i: Fingerprint, b: "bg-accent/10" },
                { t: "Success Prediction Engine", d: "Neural reasoning engine analyzing patterns in 500+ past successful scholars.", i: BrainCircuit, b: "bg-purple-50" },
                { t: "Drona IQ Command Center", d: "Central control for admin to manage 1000+ scholars with military precision.", i: Database, b: "bg-primary/5" },
              ].map((mod, i) => (
                <Card key={i} className="border-none shadow-2xl p-12 md:p-20 rounded-[4rem] group hover:bg-primary transition-all duration-700 overflow-hidden relative">
                   <div className={`${mod.b} p-8 rounded-[2.5rem] w-fit mb-12 group-hover:bg-white/10 transition-colors`}><mod.i className="h-10 w-10 text-primary group-hover:text-accent" /></div>
                   <h4 className="text-2xl md:text-4xl font-extrabold font-headline uppercase leading-none tracking-tight mb-8 group-hover:text-white">{mod.t}</h4>
                   <p className="text-lg md:text-xl text-muted-foreground group-hover:text-white/40 leading-relaxed font-light">{mod.d}</p>
                   <div className="pt-12">
                      <Link href="/blog">
                        <Button variant="ghost" className="text-accent font-bold uppercase text-xs tracking-widest p-0 group-hover:text-white">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                   </div>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* DEFENCE ADVANTAGE (DrDA) - EXPANDED */}
      <section className="py-24 md:py-48 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-primary/10 w-fit mx-auto lg:mx-0 bg-primary/5">
                     <Badge className="bg-accent text-primary border-none text-[10px]">DrDA LEGACY</Badge>
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Officer Like Qualities</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Defence <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Advantage</span></h2>
                  <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Powered by <span className="text-primary font-bold italic">Droneshwar Defence Academy</span>. We don't just teach chapters; we architect Officers for the Indian Armed Forces.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                   {[
                     { t: "NDA Foundation", d: "Early exposure to UPSC GAT and SSB psychological patterns from Grade 8.", i: Target },
                     { t: "Character Building", d: "Instilling integrity, resilience, and the 'Country First' mindset in every student.", i: Shield },
                     { t: "Leadership Dev", d: "Command presence and public speaking workshops as part of core curriculum.", i: Users },
                     { t: "Mental Fortitude", d: "Pressure management and situational reaction training for life's challenges.", i: Zap },
                   ].map((item, i) => (
                     <div key={i} className="group space-y-4">
                        <div className="bg-primary/5 text-primary p-6 rounded-[2rem] w-fit group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-primary/5"><item.i className="h-10 w-10" /></div>
                        <h4 className="text-2xl font-extrabold font-headline uppercase leading-tight text-primary">{item.t}</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">{item.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative group">
                <div className="absolute -inset-20 bg-accent/10 rounded-full blur-[150px] opacity-20"></div>
                <div className="relative rounded-[5rem] overflow-hidden border-[20px] border-white shadow-2xl">
                   <Image src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/cadet/1200/900'} width={1200} height={1000} alt="Defence Academy" className="h-[700px] md:h-[1000px] object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
                   <div className="absolute bottom-16 left-16 right-16 space-y-8">
                      <p className="font-headline font-extrabold text-5xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter">YAHAN SAPNE NAHI, <br/> <span className="text-accent italic">OFFICERS</span> <br/> TAYAAR HOTE HAIN.</p>
                      <div className="h-[3px] w-32 bg-accent"></div>
                      <Link href="https://droneshwardefenceacademy.com/" target="_blank">
                        <Button className="h-16 px-12 bg-white text-primary font-bold uppercase text-xs tracking-widest rounded-2xl">Visit DrDA Hub <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* MASSIVE FAQ VAULT (140+ ENTRIES - TABS BASED) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16 md:mb-32 space-y-6">
              <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Knowledge Fortress</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Frequently Asked <span className="text-accent italic">Questions</span></h2>
           </div>
           
           <Tabs defaultValue="parents" className="space-y-12">
              <TabsList className="bg-muted p-2 rounded-full shadow-inner w-full flex h-auto overflow-x-auto no-scrollbar scroll-smooth">
                 <TabsTrigger value="parents" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">For Parents (50)</TabsTrigger>
                 <TabsTrigger value="students" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">For Students (50)</TabsTrigger>
                 <TabsTrigger value="home-tuition" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">Home Tuition (20)</TabsTrigger>
                 <TabsTrigger value="ai-health" className="flex-1 rounded-full py-4 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white min-w-[150px]">AI Health (20)</TabsTrigger>
              </TabsList>

              <TabsContent value="parents" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How is Drona IQ different from local coaching in Dehradun?", a: "Most centers only focus on syllabus completion. Drona IQ uses an AI-driven 'Student Success OS' that tracks every sub-concept performance, attendance, and behavioral patterns to predict results and identify learning risks 3 months before exams." },
                      { q: "Can I monitor my child's performance from my office?", a: "Yes. Our Parent Monitoring App provides live visibility into attendance, homework submission status, weekly test marks, and a 'Confidence Index' that shows how prepared your child actually is." },
                      { q: "Is the tutoring environment safe?", a: "Extremely. Every hub and home tutor undergoes a 5-tier pedagogical and background screening. We have a strict child-safety protocol managed by ex-defence personnel from DrDA." },
                      { q: "What is the fee structure for Class 10 Boards?", a: "Fees are personalized based on the diagnostic report results. We offer Online, Hybrid, and Offline (Om Tower) modes. Visit us for a free counseling session." },
                      { q: "Do you provide transport facility in Dehradun?", a: "We have designated pickup points for our Sahastradhara and Rajpur Road hubs. Please check with the admission coordinator for your locality." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`p-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-2xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="students" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How do I earn XP and Level Up?", a: "Completing daily study tasks, submitting assignments on time, and showing improvement in weekly tests earns you XP. High XP unlocks Elite Scholar status and exclusive mentoring sessions." },
                      { q: "Can the AI Assistant solve my school homework?", a: "The AI Scholar Assistant provides instant concept explanations and step-by-step logic, helping you solve homework while actually learning the concept." },
                      { q: "Is the study plan flexible?", a: "Yes. The OS adapts to your pace. If you're struggling with Physics, it automatically re-allocates time from your stronger subjects to help you catch up." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`s-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-2xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="home-tuition" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How do you verify home tutors in Dehradun?", a: "Every tutor undergoes a strict 4-stage screening: Subject proficiency test, pedagogical interview, Aadhaar-linked background check, and a psychometric evaluation for child safety." },
                      { q: "Can I get a replacement if the tutor isn't a good match?", a: "Absolutely. We offer a 'No-Questions-Asked' tutor replacement policy if you feel the teaching style isn't aligning with your child's needs." },
                      { q: "How does the Demo Class work?", a: "You can book a free demo session. A coordinator will match you with a tutor, and after the class, you can choose to proceed with the enrollment." },
                      { q: "Is home tuition available for NDA preparation?", a: "Yes, we have specialized mentors from Droneshwar Defence Academy who provide home-based foundation coaching for NDA aspirants." },
                      { q: "How do parents track home tuition sessions?", a: "All sessions are logged in the Parent App. You can see attendance, topics covered, and the tutor's remarks after every class." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`ht-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-2xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>

              <TabsContent value="ai-health" className="animate-in fade-in duration-700">
                 <Accordion type="single" collapsible className="space-y-4">
                    {[
                      { q: "How accurate is the Drona IQ AI Health Check?", a: "Our neural diagnostic engine is calibrated using 10,000+ past student data points and has a concept-mapping accuracy of 99.4%." },
                      { q: "What data is required for the diagnostic?", a: "The AI analyzes recent test scores, time spent per subject, and specific weak areas mentioned by parents to generate a 360-degree improvement roadmap." },
                      { q: "How long does it take to get the AI report?", a: "The executive summary is generated instantly. A detailed PDF report is delivered to your dashboard within 15 minutes of analysis." },
                      { q: "Can the AI predict board exam percentages?", a: "Yes. By analyzing current mastery and consistency, our Success Prediction Engine can forecast board marks with +/- 2% accuracy." },
                      { q: "Is the AI analysis free?", a: "Yes, we offer one comprehensive AI Health Check for free to all new students in Dehradun to identify their learning gaps." }
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`ai-${i}`} className="bg-muted/30 border shadow-sm rounded-[2rem] px-10 md:px-16 overflow-hidden">
                        <AccordionTrigger className="text-xl md:text-2xl font-extrabold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </TabsContent>
           </Tabs>
        </div>
      </section>

      {/* FINAL ADMISSION CTA */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-8xl font-extrabold font-headline uppercase tracking-tighter leading-[0.9]">Your Success Journey <br className="hidden md:block"/> <span className="text-accent italic">Starts Today.</span></h2>
              <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed">Join Dehradun's elite cadre of scholars. Limited seats available for Batch 2026-27.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link href="/admissions">
                    <Button size="lg" className="w-full sm:w-auto h-20 px-12 bg-accent text-primary font-headline font-extrabold uppercase text-sm tracking-widest rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.4)]">Book Free Demo Class</Button>
                 </Link>
                 <Link href="tel:+917878553385">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-20 px-12 border-white/20 text-white hover:bg-white/10 font-headline font-extrabold uppercase text-sm tracking-widest rounded-3xl">Call Counselor: 7878553385</Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="py-24 md:py-48 bg-[#05070a] border-t border-white/5 text-white/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            <div className="lg:col-span-1 space-y-12">
               <div className="flex items-center space-x-4 group">
                <div className="rounded-2xl bg-primary p-5 shadow-2xl">
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
                   <li><Link href="/revision-generator">Revision Generator</Link></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Location Hubs</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/tuition-in/sahastradhara-road">Sahastradhara</Link></li>
                   <li><Link href="/tuition-in/rajpur-road">Rajpur Road</Link></li>
                   <li><Link href="/tuition-in/it-park">IT Park Hub</Link></li>
                   <li><Link href="/tuition-in/jakhan">Jakhan Circle</Link></li>
                   <li><Link href="/tuition-in/ballupur">Ballupur Estate</Link></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Resources</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/blog">Success Articles</Link></li>
                   <li><Link href="/results">Results Wall</Link></li>
                   <li><Link href="/tutor-portal">Join Tutor Network</Link></li>
                   <li><Link href="/why-drona-iq">The Comparison</Link></li>
                 </ul>
              </div>
              <div className="space-y-8 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Support</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/contact">Contact Hub</Link></li>
                   <li><Link href="/about">Our Vision</Link></li>
                   <li><Link href="https://wa.me/917878553385">WhatsApp Support</Link></li>
                   <li><Link href="tel:+917878553385">Call Admission</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-24 md:pt-48 text-center space-y-10 border-t border-white/5 mt-24 md:mt-48">
             <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] text-white/20">© 2024 Drona IQ Student Success OS • Powered by Droneshwar Defence Academy (DrDA)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
