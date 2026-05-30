
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
                    data-ai-hint="elite student"
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

      {/* PARENT TRUST ZONE */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
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
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 text-center">
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

      {/* SECTION 1: FIND THE PERFECT TUTOR */}
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
              { c: "Class 11 Com", s: "Accounts, Eco, BST", e: "6+ Years", b: "CA Foundation", id: "t5" }
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

      {/* SECTION 2: AREAS WE SERVE */}
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
              "Sahastradhara Road", "IT Park", "Rajpur Road", "Jakhan", "Ballupur"
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

      {/* SECTION 3: HOW IT WORKS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none"><Milestone className="h-[400px] w-[400px]" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
             <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Protocol</Badge>
             <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">Your Journey to <br/> <span className="text-accent italic">Excellence</span></h2>
          </div>

          <div className="grid md:grid-cols-6 gap-8 relative">
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

      {/* SECTION 4: MEET OUR EXPERT TUTORS */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Verified Faculty</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Dehradun's <span className="text-accent italic">Elite Educators</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
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
                  <Button variant="outline" className="w-full border-primary/10 text-primary hover:bg-primary hover:text-white uppercase font-bold text-[10px] tracking-widest h-12 rounded-2xl">Book Demo Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-24 bg-muted/20 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Knowledge Hub</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Everything You <span className="text-accent italic">Need to Know</span></h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
             {[
               { q: "What are home tuition fees in Dehradun?", a: "Drona IQ offers personalized fee structures based on the tutor's experience level, class, and subjects. Visit our Om Tower Hub for a detailed quote." },
               { q: "Is a free demo class available?", a: "Yes. Every student is entitled to one 100% free demo class with a verified subject specialist." },
               { q: "Can I change the tutor if not satisfied?", a: "Absolutely. We offer a 'No-Questions-Asked' tutor replacement policy within 48 hours." },
               { q: "Are female tutors available for home sessions?", a: "Yes, we have a large network of verified female subject specialists for all areas in Dehradun." }
             ].map((faq, i) => (
               <AccordionItem key={i} value={`faq-${i}`} className="bg-white border shadow-sm rounded-[2rem] px-10 overflow-hidden">
                 <AccordionTrigger className="text-xl font-bold font-headline text-primary uppercase text-left hover:no-underline py-10">{faq.q}</AccordionTrigger>
                 <AccordionContent className="text-lg text-muted-foreground font-light leading-relaxed pb-12">{faq.a}</AccordionContent>
               </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 14: OUR COMMITMENT (FOUNDER) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
               <div className="space-y-6 text-left">
                  <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">A Note from the Founder</Badge>
                  <h2 className="text-4xl md:text-[9rem] font-extrabold text-primary uppercase leading-[0.85] tracking-tighter">Our <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Commitment</span></h2>
               </div>
               <div className="space-y-12 text-xl md:text-3xl text-muted-foreground font-light leading-relaxed italic">
                  <p>"We believe that every child in Dehradun deserves more than just a tuition teacher. They deserve a mentor and a success system."</p>
               </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-primary rounded-[6rem] rotate-6 group-hover:rotate-0 transition-transform duration-1000 -z-10"></div>
               <Card className="p-16 md:p-32 bg-white text-primary rounded-[6rem] shadow-2xl border-none space-y-12 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Quote className="h-64 w-64 text-primary" /></div>
                  <h3 className="text-4xl md:text-6xl font-extrabold font-headline uppercase leading-none relative z-10">Trust is <br/> <span className="text-accent italic">Architected</span></h3>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DEFENCE ADVANTAGE SECTION */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 text-center space-y-16">
          <div className="space-y-6">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">DrDA Legacy</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter">The Defence <br/> <span className="text-accent italic">Advantage</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Officer Mindset", d: "Instilling leadership and courage." },
              { t: "Elite Discipline", d: "Military-grade academic scheduling." },
              { t: "Character Building", d: "Developing integrity and patriotism." }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-10 rounded-[3rem] text-center space-y-6 hover:bg-white/10 transition-all">
                <Shield className="h-12 w-12 text-accent mx-auto" />
                <h4 className="text-2xl font-bold font-headline uppercase">{item.t}</h4>
                <p className="text-white/60">{item.d}</p>
              </Card>
            ))}
          </div>
          <Link href="https://droneshwardefenceacademy.com" target="_blank">
            <Button className="h-16 px-12 bg-accent text-primary font-bold uppercase tracking-widest rounded-2xl">Visit Official Academy Website</Button>
          </Link>
        </div>
      </section>

      {/* NEW SECTION 15: BEYOND MARKS */}
      <section id="beyond-marks" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Holistic Transformation</Badge>
            <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">Beyond Marks: <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Building Humans</span></h2>
            <p className="text-xl text-muted-foreground font-light">Drona IQ is not only an academic platform. We develop responsible, confident and disciplined students for life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { t: "Character Building", i: Shield, d: "Ethics and integrity at the core." },
              { t: "Discipline & Responsibility", i: ListChecks, d: "Taking ownership of tasks." },
              { t: "Leadership Development", i: Trophy, d: "Leading by example." },
              { t: "Confidence Building", i: Sunrise, d: "Self-belief and public speaking." },
              { t: "Communication Skills", i: MessageSquare, d: "Articulating thoughts clearly." },
              { t: "Digital Discipline", i: Monitor, d: "Responsible screen time usage." },
              { t: "Respect for All", i: Heart, d: "Respecting parents and teachers." },
              { t: "Time Management", i: Clock, d: "Mastering the 24-hour cycle." },
              { t: "Goal Setting", i: Target, d: "Visioning the 5-year future." },
              { t: "Positive Mindset", i: Smile, d: "Resilience in face of failure." }
            ].map((card, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] p-8 space-y-6 bg-muted/20 hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="bg-primary/5 p-4 w-fit rounded-2xl group-hover:bg-white/10 transition-colors"><card.i className="h-8 w-8 text-primary group-hover:text-accent" /></div>
                <h4 className="text-xl font-bold font-headline uppercase leading-tight">{card.t}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-white/60">{card.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 16: LIFE SKILLS */}
      <section id="life-skills" className="py-24 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Future Readiness</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Life Skills <span className="text-accent italic">Programme</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { t: "Public Speaking", i: Mic },
              { t: "Presentation", i: Play },
              { t: "Interview Skills", i: Users },
              { t: "Critical Thinking", i: Brain },
              { t: "Problem Solving", i: Zap },
              { t: "Teamwork", i: Users },
              { t: "Decision Making", i: Scale },
              { t: "Emotional Intelligence", i: Heart },
              { t: "Financial Awareness", i: Calculator },
              { t: "Digital Awareness", i: Globe }
            ].map((skill, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="bg-white p-10 rounded-full shadow-2xl mx-auto w-fit group-hover:bg-accent transition-colors duration-500">
                  <skill.i className="h-10 w-10 text-primary group-hover:text-white" />
                </div>
                <p className="font-bold uppercase text-[10px] tracking-widest text-primary">{skill.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 17: STUDENT VALUES */}
      <section id="student-values" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Our Foundation</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase tracking-tighter">Our Student <span className="text-accent italic">Values</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Integrity", "Honesty", "Respect", "Discipline", "Patriotism", "Leadership", "Kindness", "Responsibility", "Hard Work", "Self Belief"
            ].map((val, i) => (
              <div key={i} className="px-10 py-6 bg-primary text-white rounded-[2rem] font-headline font-extrabold uppercase tracking-[0.2em] text-sm md:text-xl shadow-2xl hover:bg-accent transition-colors cursor-default">
                {val}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 18: SOCIAL RESPONSIBILITY */}
      <section id="humanity" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Humanity First</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none">Social <br/> <span className="text-accent italic">Responsibility</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { t: "Helping Others", i: HandHeart },
              { t: "Community Service", i: Globe },
              { t: "National Pride", i: Flag },
              { t: "Responsible Citizenship", i: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center">
                <item.i className="h-12 w-12 text-accent mx-auto" />
                <h4 className="text-xl font-bold font-headline uppercase">{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 19: MESSAGE TO PARENTS */}
      <section id="parents-message" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <Card className="border-none shadow-[0_50px_100px_rgba(11,19,43,0.1)] rounded-[4rem] overflow-hidden bg-muted/20">
               <div className="p-16 md:p-32 grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">To Dehradun Parents</Badge>
                      <h2 className="text-4xl md:text-7xl font-extrabold text-primary uppercase leading-[0.9] tracking-tighter">Preparing for <br/> <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Life, Not Exams.</span></h2>
                    </div>
                    <div className="space-y-8 text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                      <p>"Ye sirf tuition nahi hai, ye aapke bachche ke future ka complete ecosystem hai."</p>
                      <p>We focus on building character, confidence, and discipline alongside academics. Our mission is to transform students into leaders of tomorrow.</p>
                    </div>
                    <Link href="/admissions">
                      <Button className="h-20 px-12 bg-primary text-white font-bold uppercase tracking-widest rounded-2xl shadow-2xl">Start the Journey Today</Button>
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
                    <Image src="https://picsum.photos/seed/dronaparents/1200/1200" width={1200} height={1200} alt="Parent Connection" className="rounded-[4rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-[2000ms]" data-ai-hint="happy parent child" />
                  </div>
               </div>
             </Card>
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
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div className="space-y-12 text-left">
                 <h4 className="font-bold text-white uppercase tracking-[0.4em] text-[12px] border-b border-accent/20 w-fit pb-4">Academic OS</h4>
                 <ul className="space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors cursor-pointer">
                   <li><Link href="/student-dashboard">Scholar Hub</Link></li>
                   <li><Link href="/parent-dashboard">Parent Monitor</Link></li>
                   <li><Link href="/academic-health-check">AI Diagnostics</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-32 md:pt-64 text-center space-y-12 border-t border-white/5 mt-32 md:mt-64">
             <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.6em] text-white/20">© 2024 Drona IQ Student Success OS</p>
                <div className="flex gap-10 grayscale opacity-20">
                   <div className="font-headline font-extrabold text-white text-xl uppercase tracking-tighter">DRDA Legacy</div>
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
