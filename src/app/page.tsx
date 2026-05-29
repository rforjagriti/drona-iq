
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
  Phone, 
  Award, 
  Clock, 
  LayoutDashboard, 
  ClipboardList,
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
  SearchCheck,
  Heart,
  AlertTriangle
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
      
      {/* SECTION 1: CINEMATIC HERO - APPLE/STRIPE STYLE */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 lg:pt-0 lg:pb-0 overflow-hidden bg-[#05070a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[180px] -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-primary/40 rounded-full blur-[180px] translate-y-1/2 opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/5 bg-white/5">
                  <Badge className="bg-accent text-primary border-none text-[10px] font-bold">NEW</Badge>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Drona IQ Success OS v4.0 is Live</span>
                </div>
                <h1 className="font-headline text-6xl md:text-[8.5rem] font-extrabold text-white leading-[0.85] tracking-tighter">
                  DEHRADUN'S <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">SMART OS</span> <br/>
                  FOR SUCCESS.
                </h1>
              </div>
              
              <p className="text-2xl lg:text-3xl text-white/50 max-w-2xl leading-relaxed font-light">
                Beyond tuition. A unified Student Success Ecosystem merging <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military-Grade Discipline</span> with <span className="text-accent font-bold">Neural Diagnostics</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-headline text-xl px-12 py-10 h-auto shadow-[0_0_80px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em] font-extrabold rounded-2xl transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 font-headline text-xl px-12 py-10 h-auto uppercase tracking-[0.2em] font-extrabold rounded-2xl backdrop-blur-xl group">
                    AI Health Check <Sparkles className="ml-3 h-6 w-6 text-accent group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-16 pt-12 border-t border-white/5">
                {[
                  { v: "5000+", l: "Scholars Trained" },
                  { v: "96.4%", l: "Success Index" },
                  { v: "24/7", l: "AI Mentorship" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-4xl font-extrabold text-white font-headline tracking-tighter">{stat.v}</p>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.3em]">{stat.l}</p>
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
                  <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] border-white/10 shadow-2xl">
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

      {/* SECTION 2: WHY STUDENTS FAIL - THE REALITY CHECK */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-red-50 text-red-600 border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Reality Gap</Badge>
                 <h2 className="text-6xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Why Students <br/> <span className="text-red-500 italic underline decoration-red-100 underline-offset-8">Fail</span></h2>
                 <p className="text-2xl text-muted-foreground font-light leading-relaxed">Traditional coaching treats students like batches. Drona IQ treats every student like a <span className="text-primary font-bold">unique performance project</span>.</p>
               </div>
               <div className="grid gap-8">
                 {[
                   { t: "The Blind Spot", d: "68% of students repeat Class 8 mistakes in Class 10 because no one identifies the conceptual gap.", i: Eye },
                   { t: "Visibility Vacuum", d: "Parents only know marks, not metrics. 90% of failures happen 3 months before the exam.", i: SearchCheck },
                   { t: "Motivation Decay", d: "Without gamification or tracking, daily study becomes a chore rather than a mission.", i: Activity },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 p-10 rounded-[3rem] border border-muted hover:border-red-100 transition-all group bg-muted/5">
                     <div className="bg-white p-5 rounded-2xl text-red-500 shadow-xl group-hover:scale-110 transition-transform">
                       <item.i className="h-8 w-8" />
                     </div>
                     <div>
                       <h4 className="font-bold text-2xl text-primary uppercase tracking-tight mb-2">{item.t}</h4>
                       <p className="text-lg text-muted-foreground font-light leading-relaxed">{item.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
               <Card className="relative border-none shadow-[0_100px_200px_rgba(0,0,0,0.1)] rounded-[5rem] overflow-hidden bg-white p-20 space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tight">Parent Peace Of Mind Index™</h3>
                    <p className="text-lg text-muted-foreground font-light italic">"The moment you lose visibility, you lose control over your child's future."</p>
                  </div>
                  <div className="space-y-8">
                    {[
                      { l: "Safety & Verified Tutors", v: 100, c: "bg-green-500" },
                      { l: "Curriculum Progression", v: 82, c: "bg-accent" },
                      { l: "Weak Concept Alerting", v: 95, c: "bg-primary" },
                    ].map((idx, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary/60">
                          <span>{idx.l}</span>
                          <span>{idx.v}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className={`h-full ${idx.c} rounded-full`} style={{width: `${idx.v}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full h-20 bg-primary text-white font-headline uppercase tracking-[0.2em] font-extrabold rounded-3xl shadow-2xl">
                    View Monitoring OS <ArrowRight className="ml-2 h-6 w-6 text-accent" />
                  </Button>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE OS ADVANTAGE - WHY DRONA IQ EXISTS */}
      <section className="py-48 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.15)_0%,_transparent_60%)]"></div>
            <div className="absolute -left-40 bottom-0 opacity-10"><Database className="h-[800px] w-[800px]" /></div>
         </div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-32 space-y-8 max-w-4xl mx-auto">
             <Badge className="bg-accent text-primary border-none font-bold uppercase tracking-[0.4em] text-[10px] px-8 py-3 rounded-full">Engineering Excellence</Badge>
             <h2 className="text-6xl md:text-[6rem] font-extrabold font-headline leading-[0.8] uppercase tracking-tighter mb-10">The Success <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Operating System</span></h2>
             <p className="text-3xl text-white/50 font-light leading-relaxed pt-10">We don't just teach; we track. Every single minute of your child's academic journey is digitized, monitored, and optimized by our unified engine.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { t: "Digital Twin", d: "A real-time academic clone of the student, predicting test scores before they happen.", i: Users, bg: "bg-blue-500/10", c: "text-blue-400" },
               { t: "Neural Diagnostic", d: "Proprietary reasoning engine identifies missing foundation blocks from previous grades.", i: BrainCircuit, bg: "bg-accent/10", c: "text-accent" },
               { t: "XP Gamification", d: "Students earn experience points for consistency, converting boring study into a quest.", i: Zap, bg: "bg-green-500/10", c: "text-green-400" },
               { t: "Command Center", d: "Admin dashboard to manage 1000+ leads and scholars with military precision.", i: LayoutDashboard, bg: "bg-purple-500/10", c: "text-purple-400" },
             ].map((item, i) => (
               <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] group hover:bg-white/10 transition-all duration-700">
                 <div className={`${item.bg} p-8 w-fit rounded-[2.5rem] ${item.c} mb-10 group-hover:rotate-12 transition-transform`}>
                    <item.i className="h-12 w-12" />
                 </div>
                 <h4 className="text-4xl font-extrabold font-headline uppercase tracking-tight leading-none mb-6">{item.t}</h4>
                 <p className="text-xl text-white/40 leading-relaxed font-light">{item.d}</p>
               </Card>
             ))}
           </div>
         </div>
      </section>

      {/* SECTION 4: CLASS-WISE PROGRAMS (5-12) */}
      <section className="py-40 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
             <div className="space-y-6 max-w-3xl">
               <Badge className="bg-primary/5 text-primary border-none font-bold uppercase tracking-[0.4em] text-[10px] px-6 py-2 rounded-full">Foundation to Career</Badge>
               <h2 className="text-6xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Specialized <br/> <span className="text-accent italic">Tier Matrix</span></h2>
             </div>
             <p className="text-xl text-muted-foreground font-light max-w-sm border-l-4 border-accent pl-8">"Academic benchmarks for every age group, delivered with precision."</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-16">
             {/* Classes 5-8 */}
             <Card className="border-none shadow-2xl rounded-[5rem] overflow-hidden group bg-white">
                <div className="relative h-[500px]">
                   <Image src={getImage('class-5-8')?.imageUrl || 'https://picsum.photos/seed/drona_kids_premium/1000/800'} fill alt="Class 5-8" className="object-cover group-hover:scale-105 transition-transform duration-1000" data-ai-hint="children technology" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12">
                     <Badge className="bg-accent text-primary uppercase font-bold text-[10px] mb-4">Elite Foundation</Badge>
                     <h3 className="text-5xl font-extrabold font-headline text-white uppercase tracking-tighter">Classes 5-8</h3>
                   </div>
                </div>
                <CardContent className="p-16 space-y-8">
                   <div className="space-y-4">
                     <p className="text-2xl font-bold text-primary uppercase tracking-tight">The Cognitive Core</p>
                     <p className="text-muted-foreground text-lg font-light leading-relaxed">Building the mental architecture for high-level competitive exams (Olympiads, NTSE).</p>
                   </div>
                   <ul className="space-y-4">
                     {["Strong Fundamentals", "Logical Reasoning", "Homework Guard", "Confidence Building"].map((s, i) => (
                       <li key={i} className="flex items-center gap-4 text-primary font-bold uppercase text-xs">
                         <div className="h-2 w-2 rounded-full bg-accent"></div> {s}
                       </li>
                     ))}
                   </ul>
                   <Link href="/admissions" className="block pt-6">
                     <Button className="w-full h-16 bg-muted hover:bg-primary hover:text-white transition-all text-primary font-bold uppercase tracking-widest text-[10px] rounded-2xl">Explore Program</Button>
                   </Link>
                </CardContent>
             </Card>

             {/* Classes 9-10 */}
             <Card className="border-none shadow-2xl rounded-[5rem] overflow-hidden group bg-white scale-105 z-10 shadow-accent/10">
                <div className="relative h-[500px]">
                   <Image src={getImage('class-9-10')?.imageUrl || 'https://picsum.photos/seed/drona_boards_premium/1000/800'} fill alt="Class 9-10" className="object-cover group-hover:scale-105 transition-transform duration-1000" data-ai-hint="student library" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12">
                     <Badge className="bg-accent text-primary uppercase font-bold text-[10px] mb-4">Board Mastery</Badge>
                     <h3 className="text-5xl font-extrabold font-headline text-white uppercase tracking-tighter">Classes 9-10</h3>
                   </div>
                </div>
                <CardContent className="p-16 space-y-8">
                   <div className="space-y-4">
                     <p className="text-2xl font-bold text-primary uppercase tracking-tight">The Result Engine</p>
                     <p className="text-muted-foreground text-lg font-light leading-relaxed">Optimizing for CBSE/ICSE Board Excellence with weekly AI-driven mock tests.</p>
                   </div>
                   <ul className="space-y-4">
                     {["Board Test Matrix", "Revision Strategy", "Concept Blueprint", "Target 95% Index"].map((s, i) => (
                       <li key={i} className="flex items-center gap-4 text-primary font-bold uppercase text-xs">
                         <div className="h-2 w-2 rounded-full bg-accent"></div> {s}
                       </li>
                     ))}
                   </ul>
                   <Link href="/admissions" className="block pt-6">
                     <Button className="w-full h-16 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl shadow-xl">Apply Now</Button>
                   </Link>
                </CardContent>
             </Card>

             {/* Classes 11-12 */}
             <Card className="border-none shadow-2xl rounded-[5rem] overflow-hidden group bg-white">
                <div className="relative h-[500px]">
                   <Image src={getImage('class-11-12')?.imageUrl || 'https://picsum.photos/seed/drona_senior_premium/1000/800'} fill alt="Class 11-12" className="object-cover group-hover:scale-105 transition-transform duration-1000" data-ai-hint="career student" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12">
                     <Badge className="bg-accent text-primary uppercase font-bold text-[10px] mb-4">Career Architect</Badge>
                     <h3 className="text-5xl font-extrabold font-headline text-white uppercase tracking-tighter">Classes 11-12</h3>
                   </div>
                </div>
                <CardContent className="p-16 space-y-8">
                   <div className="space-y-4">
                     <p className="text-2xl font-bold text-primary uppercase tracking-tight">The Career Launchpad</p>
                     <p className="text-muted-foreground text-lg font-light leading-relaxed">Intensive coaching for Science, Commerce, and Humanities with entrance prep.</p>
                   </div>
                   <ul className="space-y-4">
                     {["Entrance Roadmap", "Domain Mastery", "Strategic Planning", "Future University Alignment"].map((s, i) => (
                       <li key={i} className="flex items-center gap-4 text-primary font-bold uppercase text-xs">
                         <div className="h-2 w-2 rounded-full bg-accent"></div> {s}
                       </li>
                     ))}
                   </ul>
                   <Link href="/admissions" className="block pt-6">
                     <Button className="w-full h-16 bg-muted hover:bg-primary hover:text-white transition-all text-primary font-bold uppercase tracking-widest text-[10px] rounded-2xl">Explore Program</Button>
                   </Link>
                </CardContent>
             </Card>
           </div>
        </div>
      </section>

      {/* SECTION 5: CAREER STREAMS GALLERY */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-32 space-y-6">
             <h2 className="text-5xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter">Future <span className="text-accent italic">Pathways</span></h2>
             <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto">We map student cognitive strengths to world-class career trajectories.</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { id: "doctor-visual", t: "Science (Medical)", d: "Doctors, Researchers, Bio-Tech Experts", i: Stethoscope },
               { id: "engineer-visual", t: "Science (Non-Med)", d: "Engineers, AI Experts, Aerospace", i: HardHat },
               { id: "officer-visual", t: "Defence Force", d: "Officers, Strategists, Leaders", i: Flag },
               { id: "pilot-visual", t: "Aviation & Ops", d: "Commercial Pilots, Logistics", i: Plane },
             ].map((career, i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="relative h-[650px] rounded-[4rem] overflow-hidden mb-8 shadow-2xl border-[8px] border-white ring-1 ring-muted">
                   <Image src={getImage(career.id)?.imageUrl || 'https://picsum.photos/seed/career/800/1000'} fill alt={career.t} className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12 space-y-4">
                     <div className="bg-accent/20 backdrop-blur-md p-4 rounded-2xl w-fit text-accent">
                        <career.i className="h-10 w-10" />
                     </div>
                     <h4 className="text-4xl font-extrabold font-headline text-white uppercase leading-none">{career.t}</h4>
                     <p className="text-white/60 text-lg font-light leading-relaxed">{career.d}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 6: THE INTELLIGENCE HUB (AI FEATURES) */}
      <section className="py-48 bg-muted/10 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16 animate-in slide-in-from-left duration-1000">
               <div className="space-y-8">
                 <Badge className="bg-primary text-accent px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Proprietary AI Core</Badge>
                 <h2 className="text-6xl md:text-[6rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.8]">Neural <br/> <span className="text-accent italic">Diagnostics</span></h2>
                 <p className="text-3xl text-muted-foreground font-light leading-relaxed">Our reasoning engine analyzes performance data to map learning gaps with <span className="text-primary font-bold">99.4% precision</span>. No more guessing why marks are low.</p>
               </div>
               <div className="grid sm:grid-cols-2 gap-12">
                 {[
                   { t: "Success Prediction", d: "Predicts final board results with +/- 2% accuracy based on mock pattern analysis.", i: LineChart },
                   { t: "Concept Risk Detector", d: "Alerts parents if a student's foundation in a sub-topic is at risk before tests.", i: AlertTriangle },
                   { t: "Future Roadmap", d: "AI-generated study plans that dynamically adjust to your child's pace.", i: Milestone },
                   { t: "Digital Academic Twin", d: "A metadata representation of every scholar's growth journey.", i: Fingerprint },
                 ].map((feat, i) => (
                   <div key={i} className="space-y-6 p-8 rounded-[3rem] bg-white shadow-xl hover:-translate-y-4 transition-all border border-muted/50">
                     <div className="bg-primary/5 text-primary p-6 rounded-2xl w-fit shadow-inner">
                       <feat.i className="h-8 w-8" />
                     </div>
                     <h4 className="text-2xl font-extrabold font-headline uppercase text-primary">{feat.t}</h4>
                     <p className="text-lg text-muted-foreground font-light leading-relaxed">{feat.d}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-30"></div>
              <Card className="relative border-[16px] border-white shadow-[0_100px_200px_rgba(0,0,0,0.2)] rounded-[6rem] overflow-hidden bg-white p-12 space-y-10">
                <div className="flex justify-between items-center border-b pb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Diagnostic Report</p>
                    <p className="text-2xl font-bold font-headline text-primary uppercase">Ishita Negi • Class 10</p>
                  </div>
                  <Badge className="bg-green-500 text-white uppercase text-[10px] px-4 py-1.5 font-bold">Validated</Badge>
                </div>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-muted/30 rounded-3xl text-center">
                       <p className="text-4xl font-extrabold text-primary font-headline">94.8%</p>
                       <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Prediction Index</p>
                    </div>
                    <div className="p-8 bg-accent/10 rounded-3xl text-center">
                       <p className="text-4xl font-extrabold text-accent font-headline">Elite</p>
                       <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Scholar Status</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60 border-l-4 border-accent pl-4">Critical Learning Gaps</p>
                    {["Quadratic Equations Basics (Class 8)", "Organic Reaction Stability", "Trigonometric Identities"].map((gap, i) => (
                      <div key={i} className="flex justify-between items-center p-5 bg-red-50 rounded-2xl">
                         <span className="text-sm font-bold text-red-900">{gap}</span>
                         <Badge variant="outline" className="border-red-200 text-red-600 uppercase text-[9px]">High Risk</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full h-16 bg-primary text-white font-bold uppercase tracking-widest text-[10px] rounded-3xl shadow-xl">Download AI PDF Report</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DEFENCE ADVANTAGE - DrDA LEGACY */}
      <section className="py-48 bg-[#0a0d14] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(212,175,55,0.2)_0%,_transparent_60%)]"></div>
          <div className="absolute -left-40 bottom-0 opacity-10"><Flag className="h-[700px] w-[700px]" /></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
             <div className="space-y-16">
               <div className="space-y-8">
                 <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 glass">
                   <Badge className="bg-accent text-primary border-none">DrDA PARTNERSHIP</Badge>
                   <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Elite Defence Pipeline</span>
                 </div>
                 <h2 className="text-7xl md:text-[6rem] font-extrabold font-headline leading-[0.8] uppercase tracking-tighter">Defence <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Advantage</span></h2>
                 <p className="text-3xl text-white/60 font-light leading-relaxed max-w-2xl">Powered by <span className="text-white font-bold italic">Droneshwar Defence Academy</span>. We don't just teach chapters; we architect officers for the Indian Armed Forces.</p>
               </div>
               <div className="grid sm:grid-cols-2 gap-12">
                 {[
                   { t: "OLQ Protocols", d: "Instilling Officer Like Qualities (OLQ) from Grade 8 onwards.", i: Shield },
                   { t: "NDA Foundation", d: "Early exposure to UPSC GAT & SSB patterns with elite trainers.", i: Target },
                   { t: "Command Presence", d: "Public speaking and articulation training for future leaders.", i: MessageCircle },
                   { t: "Physical Readiness", d: "Discipline-first routine inspired by military protocols.", i: Clock },
                 ].map((item, i) => (
                   <div key={i} className="group space-y-6 p-10 rounded-[3rem] hover:bg-white/5 transition-all duration-700 border border-white/5">
                     <div className="bg-white/10 text-accent p-6 rounded-[2rem] w-fit group-hover:bg-accent group-hover:text-primary transition-all duration-700 shadow-2xl">
                       <item.i className="h-10 w-10" />
                     </div>
                     <h4 className="text-2xl font-extrabold font-headline uppercase leading-none tracking-tight">{item.t}</h4>
                     <p className="text-lg text-white/40 leading-relaxed font-light">{item.d}</p>
                   </div>
                 ))}
               </div>
               <Link href="/admissions" className="inline-block pt-8">
                 <Button className="rounded-[2.5rem] px-20 h-24 bg-accent text-primary font-headline font-extrabold uppercase text-lg tracking-[0.3em] shadow-[0_0_80px_rgba(212,175,55,0.4)] hover:scale-105 transition-all">Join the Officer Cadre</Button>
               </Link>
             </div>
             <div className="relative group">
               <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-30"></div>
               <div className="relative rounded-[6rem] overflow-hidden border-[16px] border-white shadow-[0_100px_180px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-[1.03]">
                 <Image src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/drona_nda_premium/1200/900'} width={1200} height={1000} alt="NDA Academy" className="object-cover h-[900px] w-full" data-ai-hint="military cadet" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                 <div className="absolute bottom-16 left-16 right-16 space-y-6">
                    <p className="font-headline font-extrabold text-5xl lg:text-8xl uppercase leading-[0.9] tracking-tighter">YAHAN SAPNE NAHI, <br/> <span className="text-accent italic">OFFICERS</span> <br/> TAYAAR HOTE HAIN.</p>
                    <div className="h-[2px] w-24 bg-accent"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PARENT PSYCHOLOGY - MESSAGE TO PARENTS */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
             <div className="relative h-[850px] rounded-[5rem] overflow-hidden shadow-2xl group border-[12px] border-white ring-1 ring-muted">
               <Image src={getImage('parent-trust')?.imageUrl || 'https://picsum.photos/seed/drona_parent/1200/800'} fill alt="Parent Trust" className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]" data-ai-hint="happy parent child" />
               <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
               <div className="absolute bottom-16 left-16 right-16 p-10 glass rounded-[3rem] border-white/20">
                  <p className="text-white text-2xl font-light italic leading-relaxed">"Drona IQ changed how I see my son's future. It's not just tuition; it's an insurance for his success."</p>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mt-6">— Mrs. Meenakshi Bisht, Dehradun</p>
               </div>
             </div>
             <div className="space-y-16">
               <div className="space-y-8">
                 <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">A Letter to Parents</Badge>
                 <h2 className="text-6xl md:text-[6rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.8]">Peace <br/> <span className="text-accent italic">Of Mind</span></h2>
                 <p className="text-2xl text-muted-foreground font-light leading-relaxed">As parents, your biggest fear is your child's <span className="text-primary font-bold">wasted potential</span>. You worry about the lack of direction, the distraction of tech, and the gap in modern education. <br/><br/> Drona IQ exists to eliminate that worry. We provide the visibility you crave and the mentorship your child needs.</p>
               </div>
               <div className="space-y-8">
                 {[
                   { t: "Complete Visibility", d: "Live attendance, homework streaks, and test percentiles on your phone.", i: Eye },
                   { t: "Verified Tutors", d: "Only top 5% subject experts from Dehradun's elite circles.", i: UserCheck },
                   { t: "Safety First", d: "Strict background checks and child-safe learning environments.", i: ShieldCheck },
                 ].map((trust, i) => (
                   <div key={i} className="flex gap-8 items-start p-10 rounded-[3rem] bg-muted/5 hover:bg-muted/10 transition-all">
                     <div className="bg-white p-5 rounded-2xl text-primary shadow-lg">
                       <trust.i className="h-8 w-8" />
                     </div>
                     <div>
                       <h4 className="font-bold text-2xl text-primary uppercase tracking-tight mb-2">{trust.t}</h4>
                       <p className="text-lg text-muted-foreground font-light leading-relaxed">{trust.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
               <Button className="h-20 px-12 bg-primary text-white font-headline uppercase tracking-widest font-extrabold rounded-3xl shadow-2xl">
                 Schedule Parent Consultation <MessageCircle className="ml-2 h-6 w-6 text-accent" />
               </Button>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 9: HOW IT WORKS - INTERACTIVE TIMELINE */}
      <section className="py-48 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-32 space-y-6">
             <Badge className="bg-accent/10 text-accent border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Transformation Journey</Badge>
             <h2 className="text-5xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter">How Drona IQ <span className="text-accent italic">Works</span></h2>
           </div>
           
           <div className="max-w-[1400px] mx-auto grid md:grid-cols-5 gap-12">
             {[
               { s: "Step 01", t: "Assessment", d: "Neural Health Check identifies missing concept blocks.", i: Search },
               { s: "Step 02", t: "Analysis", d: "AI predicts growth path and sets target marks.", i: BarChart3 },
               { s: "Step 03", t: "Personalized OS", d: "Student OS profile is built with custom schedule.", i: LayoutDashboard },
               { s: "Step 04", t: "Growth Sync", d: "Daily tasks + Weekly test performance tracking.", i: Activity },
               { s: "Step 05", t: "Proven Result", d: "Consistent 24% avg improvement within 90 days.", i: Trophy },
             ].map((step, i) => (
               <div key={i} className="relative group">
                 {i < 4 && <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-muted-foreground/10 -translate-y-1/2 -z-10"></div>}
                 <Card className="border-none shadow-xl p-12 text-center space-y-6 rounded-[3.5rem] bg-white group-hover:scale-105 transition-all h-full">
                    <div className="bg-primary/5 text-primary p-6 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                       <step.i className="h-10 w-10" />
                    </div>
                    <Badge variant="outline" className="text-accent border-accent/20 uppercase font-bold text-[9px] tracking-widest">{step.s}</Badge>
                    <h4 className="text-3xl font-extrabold font-headline text-primary uppercase leading-tight">{step.t}</h4>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{step.d}</p>
                 </Card>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 10: HOME TUITION NETWORK */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
             <div className="space-y-16">
                <div className="space-y-8">
                  <Badge className="bg-primary text-accent px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Elite Home Mentorship</Badge>
                  <h2 className="text-6xl md:text-[6rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.8]">Verified <br/> <span className="text-accent italic">Home Tutors</span></h2>
                  <p className="text-3xl text-muted-foreground font-light leading-relaxed">Get Dehradun's most verified subject experts at your doorstep. We match tutors based on area, subject expertise, and psychometric alignment.</p>
                </div>
                <div className="grid gap-8">
                  {[
                    { t: "Rigorous 5-Step Verification", d: "Background checks, ID verification, and pedagogy testing.", i: ShieldCheck },
                    { t: "Area Coverage", d: "Rajpur Road, Jakhan, IT Park, Vasant Vihar, Ballupur, Prem Nagar.", i: MapPin },
                    { t: "Demo First Policy", d: "Experience the teaching before committing to a plan.", i: Play },
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-8 items-start p-10 rounded-[3rem] border border-muted hover:border-accent transition-all group">
                       <div className="bg-primary p-5 rounded-2xl text-accent shadow-xl group-hover:rotate-12 transition-transform">
                          <feat.i className="h-8 w-8" />
                       </div>
                       <div>
                         <h4 className="font-bold text-2xl text-primary uppercase tracking-tight mb-2">{feat.t}</h4>
                         <p className="text-lg text-muted-foreground font-light leading-relaxed">{feat.d}</p>
                       </div>
                    </div>
                  ))}
                </div>
                <Link href="/home-tuition">
                  <Button className="h-20 px-12 bg-primary text-white font-headline uppercase tracking-widest font-extrabold rounded-3xl shadow-2xl">
                    Find A Local Tutor <ArrowRight className="ml-2 h-6 w-6 text-accent" />
                  </Button>
                </Link>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px]"></div>
                <div className="relative rounded-[6rem] overflow-hidden border-[16px] border-white shadow-[0_100px_200px_rgba(0,0,0,0.1)] h-[900px]">
                   <Image src={getImage('home-tutor-session')?.imageUrl || 'https://picsum.photos/seed/drona_home_premium/1000/800'} fill alt="Home Tuition" className="object-cover" data-ai-hint="private tutor" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                   <div className="absolute bottom-16 left-16 right-16 glass p-10 rounded-[3rem] border-white/20">
                     <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Network Status</p>
                     <p className="text-3xl font-extrabold text-white font-headline uppercase">500+ Active Educators</p>
                     <p className="text-white/60 mt-4 text-lg font-light leading-relaxed">Serving every major residential hub in Dehradun.</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 11: SUCCESS WALL & TRANSFORMATIONS */}
      <section className="py-48 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-32 space-y-6">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Hall of Excellence</Badge>
            <h2 className="text-6xl md:text-[6rem] font-extrabold font-headline uppercase tracking-tighter leading-none">Proven <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Outcomes</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { n: "Ishita Negi", s: "74% to 98%", e: "CBSE Class 10", t: "The AI health check found exactly where my Math foundation was weak. I improved 24% in just 3 months of focused prep." },
              { n: "Aryan Rawat", s: "AIR 412", e: "NDA Foundation", t: "Drona IQ's discipline and tracking helped me manage my Boards and NDA prep together without burnout. The mock tests were identical to UPSC." },
              { n: "Sanya Gupta", s: "99.2 Percentile", e: "JEE Mains (Physics)", t: "Personalized home tuition sessions for Physics numericals were exactly what I needed to clear my complex doubts." },
            ].map((story, i) => (
              <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-3xl rounded-[5.5rem] p-20 space-y-12 hover:-translate-y-8 transition-all duration-1000 relative group overflow-hidden">
                 <Quote className="absolute top-16 right-16 h-28 w-28 text-white/5 group-hover:text-accent/10 transition-colors duration-1000" />
                 <div className="flex text-accent gap-2">
                   {[1,2,3,4,5].map(s => <Star key={s} className="h-7 w-7 fill-current" />)}
                 </div>
                 <p className="text-3xl font-light leading-relaxed italic text-white/80 relative z-10">"{story.t}"</p>
                 <div className="pt-12 border-t border-white/10 flex items-center gap-8">
                   <div className="h-28 w-28 rounded-[2.5rem] bg-white/10 overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-all shadow-2xl">
                      <Image src={`https://picsum.photos/seed/scholar${i}/400/400`} width={200} height={200} alt={story.n} className="object-cover h-full w-full opacity-80 group-hover:opacity-100" data-ai-hint="student photo" />
                   </div>
                   <div>
                     <p className="font-extrabold text-3xl text-white font-headline uppercase leading-none mb-2 tracking-tighter">{story.n}</p>
                     <p className="text-[12px] text-accent font-bold uppercase tracking-[0.3em]">{story.s} • {story.e}</p>
                   </div>
                 </div>
              </Card>
            ))}
          </div>
          <div className="pt-32 text-center">
             <Link href="/results">
               <Button variant="outline" className="h-20 px-12 border-white/10 text-white hover:bg-white/5 rounded-3xl font-headline uppercase tracking-widest font-extrabold">View 500+ Success Stories <ArrowUpRight className="ml-2 h-6 w-6" /></Button>
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: DEHRADUN LOCAL SEO MATRIX */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
             <div className="space-y-12">
                <div className="space-y-6">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Serving Uttarakhand Scholars</Badge>
                  <h2 className="text-6xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Local <br/> <span className="text-accent italic">Domination</span></h2>
                  <p className="text-2xl text-muted-foreground font-light leading-relaxed">Headquartered in Om Tower, Sahastradhara Road, we are the digital backbone for students across Dehradun's elite residential hubs.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Sahastradhara Road", "IT Park Hub", "Rajpur Road", "Ballupur", "Prem Nagar", "Jakhan", "Vasant Vihar", "Clement Town"
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-muted/30 rounded-2xl border border-muted/50 hover:border-accent transition-all cursor-pointer">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-bold text-primary text-sm uppercase tracking-tight">{loc}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative">
                <div className="h-[700px] rounded-[5rem] overflow-hidden border-[16px] border-white shadow-2xl relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.435732104068!2d78.0772225!3d30.3475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzUxLjAiTiA3OMKwMDQnMzguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="grayscale"
                  ></iframe>
                  <div className="absolute top-10 left-10 glass p-8 rounded-[2.5rem] border-white/20 max-w-xs shadow-2xl">
                    <p className="text-primary font-extrabold font-headline uppercase text-xl leading-tight">Head Hub Dehradun</p>
                    <p className="text-muted-foreground text-xs font-medium mt-2">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park.</p>
                    <Link href="tel:+917878553385" className="block mt-4">
                      <Button className="w-full bg-primary text-white h-12 text-[10px] uppercase font-bold rounded-xl">Visit Center</Button>
                    </Link>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 13: MASSIVE FAQ VAULT (SEO DOMINATION) */}
      <section className="py-48 bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-24 space-y-6">
            <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Support Vault</Badge>
            <h2 className="text-5xl md:text-[5rem] font-extrabold font-headline text-primary uppercase tracking-tighter">Common <span className="text-accent italic">Questions</span></h2>
            <p className="text-2xl text-muted-foreground font-light">Everything you need to know about Dehradun's smartest learning OS.</p>
          </div>
          
          <Tabs defaultValue="parents" className="space-y-12">
            <TabsList className="bg-white p-2 rounded-full border shadow-xl w-full max-w-2xl mx-auto grid grid-cols-3 h-auto">
               <TabsTrigger value="parents" className="rounded-full py-4 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">For Parents</TabsTrigger>
               <TabsTrigger value="students" className="rounded-full py-4 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">For Students</TabsTrigger>
               <TabsTrigger value="home-tuition" className="rounded-full py-4 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Home Tuition</TabsTrigger>
            </TabsList>

            <TabsContent value="parents" className="animate-in fade-in duration-700">
               <Accordion type="single" collapsible className="space-y-4">
                 {[
                   { q: "How is Drona IQ different from local coaching in Dehradun?", a: "Most centers only focus on completion of the syllabus. Drona IQ uses an AI-driven 'Student Success OS' that tracks every sub-concept performance, attendance, and behavioral patterns to predict results and identify learning risks 3 months before exams." },
                   { q: "Can I monitor my child's performance from my office?", a: "Yes. Our Parent Monitoring App provides live visibility into attendance, homework submission status, weekly test marks, and a 'Confidence Index' that shows how prepared your child actually is." },
                   { q: "Are the tutors at Sahastradhara hub verified?", a: "Absolutely. Every educator undergoes a 5-step screening process including background checks, domain mastery tests, and pedagogy trials. Only the top 5% applicants are selected." },
                   { q: "What is the fee structure for NDA Foundation?", a: "Our NDA Foundation batch (Grade 8-12) is highly focused with limited seats. Fees depend on the tier of coaching (Online/Hybrid/Offline). Please visit our Om Tower hub for a personalized quote." },
                   { q: "Do you provide weekly progress reports?", a: "Yes, every Sunday evening, a detailed PDF and app-notification are sent to parents summarizing the student's XP gain, test percentiles, and upcoming revision goals." }
                 ].map((faq, i) => (
                   <AccordionItem key={i} value={`parent-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                     <AccordionTrigger className="text-xl font-bold font-headline text-primary uppercase text-left hover:no-underline">{faq.q}</AccordionTrigger>
                     <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-8">{faq.a}</AccordionContent>
                   </AccordionItem>
                 ))}
               </Accordion>
               <div className="mt-12 text-center">
                 <p className="text-muted-foreground italic mb-6">Showing 5 of 120+ FAQs. Need more clarity?</p>
                 <Link href="/contact"><Button variant="outline" className="rounded-2xl h-14 px-10 font-bold uppercase tracking-widest text-[10px]">Talk to Expert Counselor</Button></Link>
               </div>
            </TabsContent>

            <TabsContent value="students" className="animate-in fade-in duration-700">
               <Accordion type="single" collapsible className="space-y-4">
                 {[
                   { q: "What are XP Points and how do I earn them?", a: "XP (Experience Points) are rewarded for consistency. Completing daily study tasks, submitting homework on time, and showing improvement in mock tests helps you level up in our Student Hub." },
                   { q: "Can the AI Assistant help me with school homework?", a: "Yes! The Drona IQ Scholar Assistant provides curriculum-specific guidance for CBSE, ICSE, and Competitive patterns, helping you clear doubts 24/7." },
                   { q: "Is there a leaderboard for Dehradun students?", a: "Yes. The Drona IQ Elite Board displays top performers across Sahastradhara, Rajpur, and IT Park hubs. High rankers earn special badges and premium mock test access." },
                   { q: "What if I miss a live session at the hub?", a: "Every session is logged. You can access the concept summaries and key formulas in your 'Digital Academic Twin' profile on the student dashboard." }
                 ].map((faq, i) => (
                   <AccordionItem key={i} value={`student-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                     <AccordionTrigger className="text-xl font-bold font-headline text-primary uppercase text-left hover:no-underline">{faq.q}</AccordionTrigger>
                     <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-8">{faq.a}</AccordionContent>
                   </AccordionItem>
                 ))}
               </Accordion>
            </TabsContent>

            <TabsContent value="home-tuition" className="animate-in fade-in duration-700">
               <Accordion type="single" collapsible className="space-y-4">
                 {[
                   { q: "Which areas of Dehradun do you cover for home tuition?", a: "We have a strong network in Sahastradhara Road, IT Park, Rajpur Road, Jakhan, Ballupur, Prem Nagar, Vasant Vihar, and Dehradun Cantt." },
                   { q: "Can I choose the time for my demo class?", a: "Yes. After you submit the inquiry, our coordinator will call you to schedule a demo at your preferred timing between 6:00 AM to 8:00 PM." },
                   { q: "What is the qualification of your home tutors?", a: "We only onboard Post-Graduates, Engineering Graduates, or Ph.D. holders with at least 5 years of teaching experience in their respective domains." }
                 ].map((faq, i) => (
                   <AccordionItem key={i} value={`tutor-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                     <AccordionTrigger className="text-xl font-bold font-headline text-primary uppercase text-left hover:no-underline">{faq.q}</AccordionTrigger>
                     <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-8">{faq.a}</AccordionContent>
                   </AccordionItem>
                 ))}
               </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SECTION 14: FINAL CONVERSION - RECRUITING THE NEXT BATCH */}
      <section className="py-60 bg-primary text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/20 rounded-full blur-[150px] opacity-30"></div>
          <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" fill alt="Academy" className="object-cover opacity-10 mix-blend-overlay" data-ai-hint="university building" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
           <div className="max-w-5xl mx-auto space-y-12">
              <Badge className="bg-accent text-primary border-none px-8 py-3 uppercase font-bold tracking-[0.4em] text-[12px] rounded-full">Batch 2026-27 Enrollment Open</Badge>
              <h2 className="text-7xl md:text-[8rem] font-extrabold font-headline leading-[0.85] uppercase tracking-tighter">Secure Your <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Scholar Seat</span></h2>
              <p className="text-3xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">Limited students. Focused training. Guaranteed visibility. Transform your child's potential into proven results today.</p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center pt-10">
                <Link href="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-headline text-2xl px-16 py-12 h-auto shadow-[0_0_100px_rgba(212,175,55,0.4)] uppercase tracking-widest font-extrabold rounded-[2.5rem] transition-all hover:scale-105">
                    Apply Now <ArrowRight className="ml-3 h-8 w-8" />
                  </Button>
                </Link>
                <Link href="https://wa.me/917878553385">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-2xl px-16 py-12 h-auto uppercase tracking-widest font-extrabold rounded-[2.5rem] backdrop-blur-xl">
                    <MessageCircle className="mr-3 h-8 w-8 text-accent" /> WhatsApp Hub
                  </Button>
                </Link>
              </div>

              <div className="pt-24 space-y-4">
                 <p className="text-sm font-bold uppercase tracking-[0.6em] text-white/30">Counseling Hotline</p>
                 <p className="text-5xl font-extrabold font-headline tracking-tighter text-white underline decoration-accent">+91 7878553385</p>
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER SECTION - SEO HEAVY */}
      <footer className="py-40 bg-[#05070a] border-t border-white/5 text-white/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-24">
            <div className="lg:col-span-1 space-y-12">
               <div className="flex items-center space-x-4 group">
                <div className="rounded-[2rem] bg-primary p-5 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap className="h-12 w-12 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mt-2">Success Operating System</span>
                </div>
              </div>
              <p className="text-xl leading-relaxed font-light">Dehradun's premier Student Success Ecosystem. Built on the pillars of military discipline and AI tracking.</p>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <MapPin className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-sm font-medium">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand 248001</p>
                </div>
                <div className="flex gap-6 items-start">
                  <Phone className="h-6 w-6 text-accent shrink-0" />
                  <p className="text-sm font-medium">+91 7878553385 • +91 6399000440</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-8">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Academic OS</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/student">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent Monitor</Link></li>
                   <li><Link href="/academic-health-check">AI Diagnostics</Link></li>
                   <li><Link href="/career-guidance">Career Blueprint</Link></li>
                   <li><Link href="/revision-generator">Revision Engine</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Location Hubs</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/tuition-in/rajpur-road">Rajpur Road</Link></li>
                   <li><Link href="/tuition-in/sahastradhara-road">Sahastradhara</Link></li>
                   <li><Link href="/tuition-in/it-park">IT Park Hub</Link></li>
                   <li><Link href="/tuition-in/ballupur">Ballupur Circle</Link></li>
                   <li><Link href="/tuition-in/jakhan">Jakhan Estate</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[10px] border-b border-accent/20 w-fit pb-2">Trust Center</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/why-drona-iq">The Advantage</Link></li>
                   <li><Link href="/results">Wall of Excellence</Link></li>
                   <li><Link href="/about">Our Institution</Link></li>
                   <li><Link href="/tutor-portal">Educator Hub</Link></li>
                   <li><Link href="/contact">Support Lines</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-40 text-center space-y-10 border-t border-white/5 mt-40">
             <p className="text-[11px] font-bold uppercase tracking-[0.8em] text-white/20">© 2024 Drona IQ Student Success OS • Powered by Droneshwar Defence Academy</p>
             <div className="flex flex-wrap justify-center gap-8 text-[9px] uppercase font-extrabold tracking-widest text-white/10 max-w-4xl mx-auto">
               <span>Best Tuition In Dehradun</span>
               <span>Home Tuition Network Dehradun</span>
               <span>CBSE Coaching Sahastradhara Road</span>
               <span>NDA Foundation Academy Dehradun</span>
               <span>Student Performance Tracking App</span>
               <span>ISO 9001:2015 Certified Institution</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
