
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  MessageCircle
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
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-student');
  const primaryImage = PlaceHolderImages.find(img => img.id === 'class-5-8');
  const boardsImage = PlaceHolderImages.find(img => img.id === 'class-9-10');
  const homeTutorImage = PlaceHolderImages.find(img => img.id === 'home-tutor-session');
  const ndaImage = PlaceHolderImages.find(img => img.id === 'nda-foundation');
  const videoThumb = PlaceHolderImages.find(img => img.id === 'video-placeholder');

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* SECTION 1: CINEMATIC HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.2)_0%,_transparent_60%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(28,37,65,1)_0%,_transparent_70%)]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-16 bg-accent"></div>
                  <span className="text-accent font-bold uppercase tracking-[0.5em] text-[12px]">Dehradun's Elite Academic Hub</span>
                </div>
                <h1 className="font-headline text-7xl lg:text-[9.5rem] font-extrabold text-white leading-[0.8] tracking-tighter">
                  SMART <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">SUCCESS</span> <br/>
                  ENGINE
                </h1>
              </div>
              
              <p className="text-2xl lg:text-3xl text-white/70 max-w-3xl leading-relaxed font-light">
                Bridging the gap between potential and performance with <span className="text-white font-bold underline decoration-accent underline-offset-8">Military-Grade Discipline</span> & <span className="text-accent font-bold">Neural Diagnostics</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 pt-6">
                <Link href="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-headline text-xl px-16 py-12 h-auto shadow-[0_0_70px_rgba(212,175,55,0.4)] uppercase tracking-widest font-extrabold rounded-3xl transition-all hover:-translate-y-2 hover:scale-105">
                    Apply Now <ArrowRight className="ml-3 h-8 w-8" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-xl px-16 py-12 h-auto uppercase tracking-widest font-extrabold rounded-3xl backdrop-blur-md">
                    AI Health Check
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-12 pt-12">
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-white font-headline tracking-tighter">5000+</span>
                  <span className="text-[12px] text-white/40 uppercase font-bold tracking-[0.3em] mt-2">Scholars Trained</span>
                </div>
                <div className="h-16 w-[1px] bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-accent font-headline tracking-tighter">96.4%</span>
                  <span className="text-[12px] text-white/40 uppercase font-bold tracking-[0.3em] mt-2">Success Index</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative group">
                <div className="absolute -inset-16 bg-accent/25 rounded-full blur-[150px] group-hover:bg-accent/40 transition-all duration-700"></div>
                <div className="relative glass p-8 rounded-[6rem] shadow-2xl border-white/10 ring-1 ring-white/20">
                  {heroImage && (
                    <Image 
                      src={heroImage.imageUrl} 
                      alt={heroImage.description}
                      width={1200}
                      height={1600}
                      className="rounded-[5.5rem] object-cover h-[800px] w-full shadow-2xl"
                      priority
                      data-ai-hint={heroImage.imageHint}
                    />
                  )}
                  {/* Floating Analytics Card */}
                  <div className="absolute -bottom-12 -left-16 glass p-12 rounded-[4rem] flex items-center gap-8 max-w-sm premium-shadow border-white/20 ring-1 ring-white/10">
                    <div className="bg-accent p-6 rounded-[2rem] text-primary shadow-2xl">
                      <TrendingUp className="h-12 w-12" />
                    </div>
                    <div>
                      <p className="text-[12px] font-extrabold text-muted-foreground uppercase tracking-[0.2em] mb-1">Growth Metric</p>
                      <p className="text-primary font-extrabold text-3xl tracking-tighter">+24.8% Avg</p>
                    </div>
                  </div>
                  {/* Floating Rank Card */}
                  <div className="absolute top-24 -right-16 glass p-8 rounded-[3rem] flex items-center gap-5 premium-shadow border-white/20 animate-bounce ring-1 ring-white/10">
                    <div className="bg-green-500 p-4 rounded-2xl text-white shadow-xl">
                      <Trophy className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-lg leading-none">AIR 412</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">NDA 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: IMMERSIVE YOUTUBE / ACADEMY LIFE SECTION */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-600 border-none font-bold uppercase tracking-[0.3em] text-[12px] px-6 py-2 rounded-full">Drona IQ Vision</Badge>
                <h2 className="text-6xl md:text-8xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.85]">Inside the <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Digital Campus</span></h2>
                <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">Experience the synergy of high-energy classrooms and silent AI-driven precision that produces Dehradun's top 1%.</p>
              </div>
              <div className="grid gap-8">
                {[
                  { t: "The DrDA Legacy", d: "High-discipline training sessions at Sahastradhara Hub.", i: Youtube },
                  { t: "Success Flow", d: "How our scholars use the AI Doubt Solver daily.", i: Play },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-center p-8 rounded-[3rem] border border-muted hover:border-accent transition-all duration-500 group cursor-pointer bg-muted/5 hover:bg-white shadow-sm hover:shadow-2xl">
                    <div className="bg-primary/5 p-5 rounded-2xl text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <item.i className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-primary uppercase tracking-tight">{item.t}</h4>
                      <p className="text-lg text-muted-foreground font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-8 bg-primary/5 rounded-[5rem] blur-3xl opacity-50"></div>
              <div className="relative rounded-[5rem] overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.2)] group-hover:shadow-[0_100px_200px_rgba(0,0,0,0.3)] transition-all duration-1000 border-[12px] border-white ring-1 ring-muted">
                {videoThumb && (
                  <Image 
                    src={videoThumb.imageUrl} 
                    width={1280} 
                    height={720} 
                    alt="Academy Video" 
                    className="object-cover w-full h-[600px] group-hover:scale-105 transition-transform duration-1000"
                    data-ai-hint="cinematic classroom"
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                  <div className="h-32 w-32 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse border-4 border-accent">
                    <Play className="h-14 w-14 text-accent fill-current ml-3" />
                  </div>
                </div>
                <div className="absolute bottom-16 left-16 text-white space-y-2">
                  <Badge className="bg-accent text-primary uppercase font-bold text-[10px]">Featured Content</Badge>
                  <p className="font-headline font-extrabold text-3xl uppercase tracking-widest">Platform Walkthrough</p>
                  <p className="text-lg opacity-80 font-light italic">"From login to merit list: The student journey."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARENTS TRUST DRONA IQ */}
      <section className="py-40 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-32 space-y-8 max-w-5xl mx-auto">
            <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.4em] text-[12px] px-8 py-3 rounded-full">The Gold Standard</Badge>
            <h2 className="text-6xl md:text-[9rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.8] mb-8">Engineered for <br/> <span className="text-accent italic">Reliability</span></h2>
            <p className="text-muted-foreground text-3xl font-light leading-relaxed pt-10">We don't just teach; we track. Every single minute of your child's academic journey is monitored by our unified OS.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: ClipboardList, title: "Weekly Analytics", desc: "Granular subject-wise performance logs delivered to your phone every Sunday evening.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: UserCheck, title: "Elite Faculty", desc: "Every mentor is hand-picked from Dehradun's top 1% teaching circle through 4 rounds of testing.", color: "text-accent", bg: "bg-accent/10" },
              { icon: BrainCircuit, title: "AI Diagnostic", desc: "Proprietary reasoning engine identifies missing foundational blocks from previous years.", color: "text-green-500", bg: "bg-green-50" },
              { icon: LayoutDashboard, title: "Real-time Monitor", desc: "Track attendance, homework streaks, and test percentiles in our premium parent app.", color: "text-red-500", bg: "bg-red-50" },
              { icon: Clock, title: "Discipline Engine", desc: "Military-grade scheduling and daily task management inspired by DrDA protocols.", color: "text-yellow-500", bg: "bg-yellow-50" },
              { icon: Award, title: "Scholar Rankings", desc: "Local benchmarking against elite students from St. Joseph's, Brightlands, and more.", color: "text-purple-500", bg: "bg-purple-50" },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-2xl hover:-translate-y-6 transition-all duration-700 rounded-[5rem] group overflow-hidden bg-white p-16">
                <CardContent className="p-0 space-y-10">
                  <div className={`${feature.bg} p-10 w-fit rounded-[3rem] ${feature.color} group-hover:rotate-12 transition-transform duration-700 shadow-inner`}>
                    <feature.icon className="h-16 w-16" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tight leading-none">{feature.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">{feature.desc}</p>
                  </div>
                  <div className="pt-6 flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    Explore Feature <ChevronRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: DEFENCE FOUNDATION (DrDA) - RELOADED */}
      <section className="py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(212,175,55,0.25)_0%,_transparent_60%)]"></div>
          <div className="absolute -left-20 bottom-0 opacity-10"><Flag className="h-[600px] w-[600px]" /></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <Badge className="bg-accent text-primary border-none font-bold uppercase tracking-[0.4em] text-[12px] px-8 py-3 rounded-full">The Legacy Hub</Badge>
                <h2 className="text-7xl md:text-[10rem] font-extrabold font-headline leading-[0.8] uppercase tracking-tighter">Defence <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Edge</span></h2>
                <p className="text-3xl text-white/60 font-light leading-relaxed max-w-2xl">Powered by <span className="text-white font-bold italic">Droneshwar Defence Academy</span>. We don't just teach chapters; we architect officers for the Indian Armed Forces.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { icon: Flag, title: "Leadership IQ", d: "Instilling command presence from Grade 8." },
                  { icon: Award, title: "OLQ Protocols", d: "Officer Like Qualities development program." },
                  { icon: Target, title: "NDA Foundation", d: "Early exposure to UPSC GAT & SSB patterns." },
                  { icon: MessageCircle, title: "Articulation", d: "Advanced English & SSB soft skills." }
                ].map((item, i) => (
                  <div key={i} className="space-y-6 group p-8 rounded-[3rem] hover:bg-white/5 transition-all">
                    <div className="bg-white/10 text-accent p-6 rounded-[2.5rem] w-fit group-hover:bg-accent group-hover:text-primary transition-all duration-700 shadow-2xl border border-white/10">
                      <item.icon className="h-10 w-10" />
                    </div>
                    <h4 className="font-bold text-2xl uppercase font-headline tracking-tight">{item.title}</h4>
                    <p className="text-lg text-white/40 leading-relaxed font-light">{item.d}</p>
                  </div>
                ))}
              </div>
              <Link href="/admissions" className="inline-block pt-10">
                <Button className="rounded-[3rem] px-20 h-24 bg-accent text-primary font-headline font-extrabold uppercase text-lg tracking-[0.3em] shadow-[0_0_80px_rgba(212,175,55,0.3)] hover:scale-105 transition-all">Join the Officer Cadre</Button>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-16 bg-accent/20 rounded-[6rem] blur-[150px] opacity-30"></div>
              <div className="relative rounded-[6rem] overflow-hidden border-[16px] border-white shadow-[0_100px_180px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-[1.03]">
                {ndaImage && (
                  <Image 
                    src={ndaImage.imageUrl} 
                    width={1200} 
                    height={900} 
                    alt="NDA Academy" 
                    className="object-cover h-[850px] w-full shadow-2xl"
                    data-ai-hint="military student" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
                <div className="absolute bottom-16 left-16 space-y-6 pr-12">
                  <p className="font-headline font-extrabold text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter">YAHAN SAPNE NAHI, <br/> <span className="text-accent italic">OFFICERS</span> TAYAAR HOTE HAIN.</p>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-accent"></div>
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-accent">DrDA Elite Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: SUCCESS STORIES - RELOADED */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-32 space-y-8">
            <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.4em] text-[12px] px-8 py-3 rounded-full">Wall of Excellence</Badge>
            <h2 className="text-6xl md:text-[9rem] font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.8] mb-8">Proven <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Outcomes</span></h2>
            <p className="text-muted-foreground text-3xl font-light max-w-3xl mx-auto italic">"Dehradun's most documented academic transformations."</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { n: "Ishita Negi", s: "74% to 98%", e: "CBSE Class 10", t: "The AI health check found exactly where my Math foundation was weak. I improved 24% in just 3 months of focused prep." },
              { n: "Aryan Rawat", s: "AIR 412", e: "NDA Foundation", t: "Drona IQ's discipline and tracking helped me manage my Boards and NDA prep together without burnout. The mock tests were identical to UPSC." },
              { n: "Sanya Gupta", s: "99.2 Percentile", e: "JEE Mains (Physics)", t: "Personalized home tuition sessions for Physics numericals were exactly what I needed to clear my complex doubts." },
            ].map((story, i) => (
              <Card key={i} className="border-none shadow-[0_80px_150px_rgba(0,0,0,0.08)] rounded-[5.5rem] p-20 bg-white space-y-12 hover:-translate-y-8 transition-all duration-1000 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-accent/10 transition-colors"></div>
                 <Quote className="absolute top-16 right-16 h-28 w-28 text-muted/10 group-hover:text-accent/20 transition-colors duration-1000" />
                 <div className="flex text-accent gap-3">
                   {[1,2,3,4,5].map(s => <Star key={s} className="h-7 w-7 fill-current" />)}
                 </div>
                 <p className="text-3xl font-light leading-relaxed italic text-primary relative z-10">"{story.t}"</p>
                 <div className="pt-12 border-t border-muted flex items-center gap-8">
                   <div className="h-28 w-28 rounded-[2.5rem] bg-muted overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-all duration-1000 shadow-2xl">
                      <Image src={`https://picsum.photos/seed/scholar${i}/400/400`} width={200} height={200} alt={story.n} className="object-cover h-full w-full" />
                   </div>
                   <div>
                     <p className="font-extrabold text-3xl text-primary font-headline uppercase leading-none mb-2 tracking-tighter">{story.n}</p>
                     <p className="text-[12px] text-accent font-bold uppercase tracking-[0.3em]">{story.s} • {story.e}</p>
                   </div>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="py-40 bg-muted/10 border-t border-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-24">
            <div className="lg:col-span-1 space-y-12">
               <div className="flex items-center space-x-4 group">
                <div className="rounded-[2rem] bg-primary p-5 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap className="h-12 w-12 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-4xl font-extrabold tracking-tighter text-primary uppercase leading-none">DRONA IQ</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mt-2">Success Operating System</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">Dehradun's premier EdTech ecosystem combining military discipline with advanced AI tracking.</p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-2xl text-accent shadow-sm"><MapPin className="h-7 w-7" /></div>
                  <div>
                    <p className="font-bold text-primary uppercase text-sm tracking-widest">Main Hub Dehradun</p>
                    <p className="text-lg text-muted-foreground font-light mt-1">3rd Floor, Om Tower, Sahastradhara Road, Dehradun 248001</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-2xl text-accent shadow-sm"><Phone className="h-7 w-7" /></div>
                  <div>
                    <p className="font-bold text-primary uppercase text-sm tracking-widest">Counseling Lines</p>
                    <p className="text-lg text-muted-foreground font-light mt-1">+91 7878553385 • +91 6399000440</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-16 pt-6">
              <div className="space-y-10">
                 <h4 className="font-bold text-primary uppercase tracking-[0.4em] text-[12px] border-b border-accent w-fit pb-2">Academic Ecosystem</h4>
                 <ul className="space-y-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="/academic-health-check" className="hover:text-accent transition-colors">AI Health Check</Link></li>
                   <li><Link href="/home-tuition" className="hover:text-accent transition-colors">Home Tuition Network</Link></li>
                   <li><Link href="/career-guidance" className="hover:text-accent transition-colors">Career Blueprint</Link></li>
                   <li><Link href="/revision-generator" className="hover:text-accent transition-colors">AI Revision Pack</Link></li>
                   <li><Link href="/results" className="hover:text-accent transition-colors">Success Gallery</Link></li>
                 </ul>
              </div>
              <div className="space-y-10">
                 <h4 className="font-bold text-primary uppercase tracking-[0.4em] text-[12px] border-b border-accent w-fit pb-2">Unified Portals</h4>
                 <ul className="space-y-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="/student-dashboard" className="hover:text-accent transition-colors">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard" className="hover:text-accent transition-colors">Parent Monitor</Link></li>
                   <li><Link href="/tutor-portal" className="hover:text-accent transition-colors">Educator Registration</Link></li>
                   <li><Link href="/admin" className="hover:text-accent transition-colors">Admin Command CRM</Link></li>
                 </ul>
              </div>
              <div className="space-y-10">
                 <h4 className="font-bold text-primary uppercase tracking-[0.4em] text-[12px] border-b border-accent w-fit pb-2">Join Communities</h4>
                 <ul className="space-y-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="https://t.me/droneshwardefenceacademy" className="hover:text-accent transition-colors">Telegram Cadre</Link></li>
                   <li><Link href="#" className="hover:text-accent transition-colors">Instagram Scholars</Link></li>
                   <li><Link href="#" className="hover:text-accent transition-colors">WhatsApp Hub</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-48 text-center space-y-8">
             <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.6em] opacity-50">© 2024 Drona IQ Success Ecosystem • Powered by Droneshwar Defence Academy</p>
             <p className="text-[10px] text-muted-foreground/30 max-w-6xl mx-auto leading-relaxed uppercase tracking-widest font-bold">Drona IQ (DIQ) is an ISO 9001:2015 Certified Institution for Academic Excellence. Headquartered in Om Tower, Sahastradhara Road, Dehradun. Serving elite scholars across Uttarakhand with military-grade discipline. All AI reports are for academic guidance based on concept mastery benchmarks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
