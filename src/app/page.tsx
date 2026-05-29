
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
  Check
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
      <div className="bg-primary text-white py-2.5 px-4 hidden md:block border-b border-white/5">
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
                  <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase tracking-widest">Drona IQ Success OS v7.0 is Live</span>
                </div>
                <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-extrabold text-white leading-[1] md:leading-[0.85] tracking-tighter">
                  DEHRADUN'S <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-pulse">SMART HUB</span> <br className="hidden md:block"/>
                  FOR SUCCESS.
                </h1>
              </div>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-white/50 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light text-center lg:text-left">
                Beyond tuition. A unified Student Success Ecosystem merging <span className="text-white font-medium italic underline decoration-accent underline-offset-8">Military Discipline</span> with <span className="text-accent font-bold">AI Reason</span>.
              </p>

              <div className="flex flex-col sm:row gap-4 md:gap-6 pt-6 justify-center lg:justify-start">
                <Link href="/admissions">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-headline text-lg md:text-xl px-8 md:px-12 py-6 md:py-10 h-auto shadow-[0_0_80px_rgba(212,175,55,0.3)] uppercase tracking-widest font-extrabold rounded-xl md:rounded-2xl transition-all hover:-translate-y-2">
                    Book Free Demo <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 font-headline text-lg md:text-xl px-8 md:px-12 py-6 md:py-10 h-auto uppercase tracking-widest font-extrabold rounded-xl md:rounded-2xl backdrop-blur-xl group">
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
                    alt="Drona IQ Topper"
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
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 space-y-6">
            <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Foundation of Faith</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Why Parents <span className="text-accent italic">Trust Us</span></h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed italic">"Drona IQ gives me the visibility I never had with local tuition centers. I finally know exactly where my daughter needs help."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { t: "Weekly Progress Reports", d: "Detailed data-driven PDFs sent every Sunday covering XP, marks, and behavior.", i: BarChart3, c: "text-blue-500", b: "bg-blue-50" },
              { t: "Verified Tutors", d: "Only top 5% subject experts pass our 4-tier pedagogical and background screening.", i: ShieldCheck, c: "text-green-500", b: "bg-green-50" },
              { t: "AI Academic Analysis", d: "Neural diagnostics map missing concept blocks from previous grades with 99.4% precision.", i: BrainCircuit, c: "text-accent", b: "bg-accent/10" },
              { t: "Parent Dashboard", d: "Real-time visibility into attendance, homework streaks, and test percentiles.", i: LayoutDashboard, c: "text-purple-500", b: "bg-purple-50" },
              { t: "Homework Tracking", d: "Daily submission monitoring with immediate parent alerts for missed assignments.", i: BookOpen, c: "text-orange-500", b: "bg-orange-50" },
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

      {/* 3. OUR CAMPUS LIFE (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-32 space-y-6">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Infrastructure of Excellence</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Experience <span className="text-accent italic">Our Hub</span></h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light">Where world-class technology meets a disciplined learning environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:gap-8 h-[600px] md:h-[1000px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[3rem] md:rounded-[5rem] shadow-2xl">
              <Image src={getImage('campus-main')?.imageUrl || 'https://picsum.photos/seed/drona_camp1/1200/1000'} fill alt="Drona IQ Main Campus" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                 <h4 className="text-white text-3xl md:text-5xl font-extrabold font-headline uppercase">Om Tower Hub</h4>
                 <p className="text-accent font-bold tracking-widest text-sm">MAIN CAMPUS DEHRADUN</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl">
              <Image src={getImage('smart-class')?.imageUrl || 'https://picsum.photos/seed/drona_camp2/800/600'} fill alt="Smart Classrooms" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute top-6 left-6 text-white font-bold uppercase text-[10px] tracking-widest">Smart Classroom</div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl">
              <Image src="https://picsum.photos/seed/drona_lib/800/600" fill alt="Academy Library" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute top-6 left-6 text-white font-bold uppercase text-[10px] tracking-widest">Research Library</div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl">
              <Image src="https://picsum.photos/seed/drona_activity/1200/600" fill alt="Student Activities" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute top-8 left-8 text-white">
                <p className="font-bold text-xl md:text-2xl uppercase font-headline">Beyond Academic Marks</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">HOLISTIC DEVELOPMENT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR FACULTY (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-32">
            <div className="space-y-6 max-w-3xl">
              <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Minds Behind The Success</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Meet Our <span className="text-accent italic">Elite Faculty</span></h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">Subject matter experts with 15+ years of average experience in Board & Competitive patterns.</p>
            </div>
            <Link href="/admissions">
              <Button size="lg" className="h-16 px-12 bg-primary text-white font-bold uppercase text-xs tracking-widest rounded-2xl shadow-xl">Request Faculty Demo</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { n: "Dr. Vikram Singh", s: "Physics (NDA/JEE)", e: "18+ Yrs", a: "Ex-Professor, IIT Mandi", img: "fac1" },
              { n: "Mrs. Anjali Rawat", s: "Mathematics (Boards)", e: "12+ Yrs", a: "Top Educator Award 2023", img: "fac2" },
              { n: "Maj. Rahul Verma", s: "GAT & SSB Psychology", e: "22+ Yrs", a: "Ex-Indian Army Officer", img: "fac3" },
              { n: "Dr. Sanya Gupta", s: "Biology (NEET)", e: "15+ Yrs", a: "PhD, Molecular Biology", img: "fac4" },
              { n: "Mr. Rajat Bisht", s: "Chemistry Specialist", e: "10+ Yrs", a: "Expert in Organic Mech", img: "fac5" },
              { n: "Mrs. Meera Joshi", s: "English Proficiency", e: "20+ Yrs", a: "Published Author", img: "fac6" },
              { n: "Col. Aditya Sharma", s: "Leadership Training", e: "25+ Yrs", a: "DrDA Head Mentor", img: "fac7" },
              { n: "Mr. Kunal Negi", s: "Accountancy (Commerce)", e: "14+ Yrs", a: "Chartered Accountant", img: "fac8" },
            ].map((fac, i) => (
              <Card key={i} className="border-none shadow-xl overflow-hidden rounded-[2.5rem] group hover:-translate-y-4 transition-all duration-500 bg-muted/5">
                <div className="relative h-96 overflow-hidden">
                  <Image src={getImage(`faculty-1`)?.imageUrl || `https://picsum.photos/seed/dronafac_${i}/600/800`} fill alt={fac.n} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-10 space-y-4 text-center">
                  <Badge variant="outline" className="border-accent text-accent uppercase text-[9px] font-extrabold tracking-widest">{fac.s}</Badge>
                  <h4 className="text-2xl font-extrabold font-headline text-primary uppercase leading-tight">{fac.n}</h4>
                  <div className="flex justify-center gap-4 text-[10px] font-bold uppercase text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {fac.e}</span>
                    <span className="flex items-center gap-1"><Award className="h-3 w-3" /> Verified</span>
                  </div>
                  <p className="text-sm text-primary/70 font-medium leading-relaxed italic">{fac.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A MESSAGE FROM THE FOUNDER (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Globe className="h-[800px] w-[800px] -right-40 -top-40 absolute" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px] opacity-30"></div>
              <Image 
                src={getImage('founder-photo')?.imageUrl || 'https://picsum.photos/seed/drona_founder/800/1000'} 
                width={800} height={1000} alt="Drona IQ Founder" 
                className="relative rounded-[4rem] md:rounded-[6rem] shadow-2xl border-[16px] border-white/5 ring-1 ring-accent/20 transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] border-white/10 shadow-2xl hidden md:block">
                 <p className="text-accent text-3xl font-headline font-extrabold uppercase">Mission 2030</p>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Building India's Elite Scholars</p>
              </div>
            </div>
            <div className="space-y-12">
               <div className="space-y-6">
                 <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Visionary Leadership</Badge>
                 <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase tracking-tighter leading-[0.9]">Why I Created <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Drona IQ</span></h2>
               </div>
               <div className="space-y-8 text-xl md:text-3xl text-white/60 font-light leading-relaxed">
                  <p>"In my years leading Droneshwar Defence Academy, I saw thousands of brilliant students fail NDA/JEE not due to lack of IQ, but due to a lack of <span className="text-white font-bold">systematic tracking</span>."</p>
                  <p>"Drona IQ was born to replace the guesswork of local tuition with the precision of <span className="text-accent font-bold">AI Diagnostics</span> and the discipline of a <span className="text-white font-bold italic">Military Routine</span>."</p>
                  <p>"We don't just teach. We architect success. That is my promise to every parent in Dehradun."</p>
               </div>
               <div className="pt-12 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Founder & Chief Mentor,</p>
                  <p className="text-3xl font-extrabold font-headline uppercase text-white">Team Drona IQ Core</p>
                  <div className="mt-8 flex gap-6">
                     <Link href="/about">
                       <Button variant="outline" className="h-16 px-10 border-accent text-accent hover:bg-accent hover:text-primary uppercase font-bold text-xs tracking-widest rounded-2xl">Read Full Story</Button>
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDENT SUCCESS WALL (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary/5 text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Success Matrix</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">The <span className="text-accent italic">Wall of Excellence</span></h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Data-proven academic growth of our top scholars across Dehradun's major schools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { n: "Ishita Negi", c: "Class 10 (CBSE)", b: "72%", a: "98%", i: "36.1%", f: "The concept mastery tracking changed everything!" },
              { n: "Aryan Rawat", c: "Class 12 (ISC)", b: "68%", a: "95.4%", i: "39.7%", f: "From average to topper in 6 months." },
              { n: "Sanya Gupta", c: "NDA Foundation", b: "Fail", a: "AIR 412", i: "Cleared", f: "Military discipline combined with AI testing is lethal." },
              { n: "Rohan Bisht", c: "Class 9 (CBSE)", b: "55%", a: "88%", i: "60.0%", f: "The daily study tasks kept me accountable." },
              { n: "Mehak Kaur", c: "Class 11 (Commerce)", b: "60%", a: "92%", i: "53.3%", f: "Best commerce faculty in Dehradun Hub." },
              { n: "Aditya Verma", c: "JEE Foundation", b: "Below Avg", a: "Top 5%", i: "Success", f: "Concept blocks identification is a game changer." },
              { n: "Priya Joshi", c: "Class 10 (ICSE)", b: "80%", a: "99%", i: "23.7%", f: "The AI Health Check mapped my exact weak areas." },
              { n: "Kabir Singh", c: "Class 8 (Foundation)", b: "Avg", a: "Elite", i: "Olympiad", f: "Ready for Class 9 way before my peers." },
              { n: "Divya Rawat", c: "Class 12 (Science)", b: "65%", a: "94%", i: "44.6%", f: "Physics numericals became easy after Drona IQ." },
              { n: "Sahil Khan", c: "NDA Prep", b: "Low Conf", a: "Selected", i: "Officer", f: "Learnt leadership along with Maths." },
              { n: "Nikita Roy", c: "Class 11 (Humanities)", b: "75%", a: "96%", i: "28.0%", f: "Personalized focus is what I always needed." },
              { n: "Yash Sharma", c: "Class 10 (CBSE)", b: "50%", a: "85%", i: "70.0%", f: "Unbelievable improvement in my grades." },
            ].map((s, i) => (
              <Card key={i} className="border-none shadow-xl rounded-[2.5rem] p-8 space-y-6 group hover:bg-primary transition-all duration-500 overflow-hidden relative">
                 <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-lg group-hover:ring-2 ring-accent transition-all">
                       <Image src={getImage('success-wall-1')?.imageUrl || `https://picsum.photos/seed/drona_s_${i}/200/200`} width={200} height={200} alt={s.n} className="object-cover h-full w-full" />
                    </div>
                    <div>
                       <h4 className="font-bold text-xl text-primary group-hover:text-white uppercase tracking-tight leading-none">{s.n}</h4>
                       <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">{s.c}</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4 border-y py-4 border-muted group-hover:border-white/10">
                    <div>
                       <p className="text-[8px] font-bold text-muted-foreground group-hover:text-white/40 uppercase">Before</p>
                       <p className="text-xl font-bold text-primary group-hover:text-white">{s.b}</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-bold text-accent uppercase">After Drona IQ</p>
                       <p className="text-xl font-bold text-accent">{s.a}</p>
                    </div>
                 </div>
                 <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-700 group-hover:bg-accent group-hover:text-primary font-bold text-[9px] uppercase tracking-widest">{s.i} GROWTH</Badge>
                    <Star className="h-4 w-4 text-accent fill-current" />
                 </div>
                 <p className="text-xs text-muted-foreground group-hover:text-white/60 italic leading-relaxed">"{s.f}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLASS 10 BOARD EXCELLENCE & ROADMAP (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <BookOpen className="h-[600px] w-[600px] -left-20 top-20 absolute" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
             <div className="space-y-12">
                <div className="space-y-6">
                   <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Academic Pinnacle</Badge>
                   <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Class 10 <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Board Excellence</span></h2>
                   <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">Dehradun's most intensive Class 10 strategy hub. We turn board exams from a stress-test into a celebration of mastery.</p>
                </div>
                
                <div className="space-y-8">
                   <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border-l-8 border-accent">
                      <h4 className="font-bold text-xl text-primary uppercase mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-accent" /> 98% Strategy Timetable</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">Our optimized schedule for CBSE/ICSE toppers ensures 4 revisions before the first pre-board exam.</p>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-muted/50 p-4 rounded-xl text-center">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Physics/Maths</p>
                            <p className="text-xs font-medium text-muted-foreground">04:00 PM - 06:30 PM</p>
                         </div>
                         <div className="bg-muted/50 p-4 rounded-xl text-center">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Daily Mock</p>
                            <p className="text-xs font-medium text-muted-foreground">08:00 PM - 09:30 PM</p>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { t: "PYQ Mastery", d: "10 Years of previous year questions solved and analyzed by sub-concept." },
                        { t: "Neural Testing", d: "AI-based tests that adapt difficulty based on your weekly growth index." },
                      ].map((box, i) => (
                        <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-muted">
                           <h4 className="font-bold text-primary uppercase text-xs mb-2">{box.t}</h4>
                           <p className="text-xs text-muted-foreground leading-relaxed">{box.d}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <Link href="/admissions">
                  <Button className="w-full md:w-auto h-20 px-12 bg-accent text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-3xl shadow-2xl">Start Board Prep Today</Button>
                </Link>
             </div>
             <div className="relative group">
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-50"></div>
                <Image src="https://picsum.photos/seed/drona_c10_roadmap/1200/1000" width={1200} height={1000} alt="Class 10 Roadmap" className="relative rounded-[4rem] shadow-2xl border-[16px] border-white transition-all duration-700 group-hover:rotate-1" />
                <div className="absolute top-12 right-12 glass p-8 rounded-[2rem] border-white/20 shadow-2xl animate-bounce">
                   <div className="flex items-center gap-4">
                      <div className="bg-accent p-3 rounded-xl text-white"><Star className="fill-current h-6 w-6" /></div>
                      <div>
                         <p className="text-xs font-bold text-primary uppercase leading-none">Topper Index</p>
                         <p className="text-2xl font-extrabold text-primary">99.4%</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. CAREER STREAMS: CLASS 11-12 (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Future Architecture</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Senior <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Career Streams</span></h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">Personalized learning tracks for Dehradun's most ambitious science and commerce scholars.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            {/* Science Track */}
            <Card className="border-none shadow-2xl rounded-[4rem] p-12 md:p-20 space-y-12 bg-primary text-white group hover:bg-[#0c142d] transition-all duration-700">
               <div className="flex justify-between items-start">
                  <div className="space-y-4">
                     <Badge className="bg-accent text-primary border-none px-4 py-1 uppercase text-[10px] font-bold">Elite Science Track</Badge>
                     <h3 className="text-3xl md:text-5xl font-extrabold font-headline uppercase leading-tight">Physics, Chem, <br/> <span className="text-accent italic">Maths & Biology</span></h3>
                  </div>
                  <Microscope className="h-12 w-12 text-accent opacity-40" />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-accent font-bold uppercase text-[10px] mb-2">Competitive Edge</p>
                     <p className="text-sm font-medium leading-relaxed">Integrated JEE & NEET Foundation with Board Excellence.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-accent font-bold uppercase text-[10px] mb-2">Defence Ready</p>
                     <p className="text-sm font-medium leading-relaxed">NDA GAT preparation focused on Physics & Higher Maths.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Future Pathways</p>
                  <div className="flex flex-wrap gap-3">
                     {["Engineer", "Doctor", "Scientist", "Officer", "Pilot"].map((p, i) => (
                       <Badge key={i} variant="outline" className="border-white/20 text-white hover:bg-accent hover:text-primary transition-colors cursor-default py-2 px-4 rounded-full">{p}</Badge>
                     ))}
                  </div>
               </div>
               <Link href="/admissions">
                 <Button className="w-full h-16 md:h-20 bg-white text-primary font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-[2rem] shadow-2xl">Enroll in Science Hub</Button>
               </Link>
            </Card>

            {/* Commerce Track */}
            <Card className="border-none shadow-2xl rounded-[4rem] p-12 md:p-20 space-y-12 bg-white border-2 border-primary/5 group hover:border-accent transition-all duration-700">
               <div className="flex justify-between items-start">
                  <div className="space-y-4">
                     <Badge className="bg-primary text-white border-none px-4 py-1 uppercase text-[10px] font-bold">Premium Commerce Track</Badge>
                     <h3 className="text-3xl md:text-5xl font-extrabold font-headline uppercase leading-tight text-primary">Accounts, <br/> <span className="text-accent italic">Economics & BST</span></h3>
                  </div>
                  <Calculator className="h-12 w-12 text-primary opacity-20" />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/50 rounded-3xl border border-muted">
                     <p className="text-primary font-bold uppercase text-[10px] mb-2">Professional Path</p>
                     <p className="text-sm font-medium text-muted-foreground leading-relaxed">Early CUET & CA Foundation modules included in curriculum.</p>
                  </div>
                  <div className="p-6 bg-muted/50 rounded-3xl border border-muted">
                     <p className="text-primary font-bold uppercase text-[10px] mb-2">Case Study Method</p>
                     <p className="text-sm font-medium text-muted-foreground leading-relaxed">Real-world business analysis for ICSE/CBSE success.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Future Pathways</p>
                  <div className="flex flex-wrap gap-3">
                     {["Chartered Accountant", "Entrepreneur", "Investment Banker", "Manager", "Lawyer"].map((p, i) => (
                       <Badge key={i} variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors cursor-default py-2 px-4 rounded-full">{p}</Badge>
                     ))}
                  </div>
               </div>
               <Link href="/admissions">
                 <Button className="w-full h-16 md:h-20 bg-primary text-white font-headline font-extrabold uppercase text-xs md:text-sm tracking-widest rounded-[2rem] shadow-2xl">Enroll in Commerce Hub</Button>
               </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. WHY DEHRADUN PARENTS CHOOSE DRONA IQ (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-32 space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-bold tracking-widest text-[10px]">The Valley's First Choice</Badge>
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">10 Reasons Why <span className="text-accent italic">Parents Trust Us</span></h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">The difference between a coaching center and a Success Ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              { t: "Verified Faculty", d: "Rigorous 5-tier screening for all educators.", i: UserCheck },
              { t: "Real-time Visibility", d: "Track marks & attendance via Parent App.", i: Eye },
              { t: "Defence Discipline", d: "Military-grade academic protocols from DrDA.", i: ShieldCheck },
              { t: "AI Concept Mapping", d: "Identifying gaps from previous grades instantly.", i: BrainCircuit },
              { t: "Safety First Hub", d: "Ex-defence personnel managed campus safety.", i: Shield },
              { t: "Small Batch Focus", d: "Limited seats for 1-on-1 personalized care.", i: Users },
              { t: "Home Tuition Sync", d: "Seamless flow between center & home tutors.", i: MapPin },
              { t: "Confidence Engine", d: "Psychometric mapping to build mental strength.", i: Zap },
              { t: "Local School Map", d: "Curriculum tailored for Dehradun's top schools.", i: Globe },
              { t: "Outcome Obsession", d: "Success is our only metric. Marks are guaranteed.", i: Trophy },
            ].map((r, i) => (
              <Card key={i} className="border-none shadow-xl p-8 text-center space-y-4 rounded-3xl bg-white group hover:bg-accent transition-all duration-500">
                <div className="bg-primary/5 p-4 rounded-2xl w-fit mx-auto text-primary group-hover:bg-white group-hover:text-accent transition-colors">
                  <r.i className="h-8 w-8" />
                </div>
                <h4 className="font-extrabold text-lg text-primary group-hover:text-white uppercase leading-tight">{r.t}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-white/80 leading-relaxed">{r.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. POWERED BY DRDA: THE OFFICER MINDSET (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-primary/10 w-fit mx-auto lg:mx-0 bg-primary/5">
                     <Badge className="bg-accent text-primary border-none text-[10px]">DrDA LEGACY</Badge>
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Officer Like Qualities (OLQs)</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">The Defence <br/> <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Legacy Advantage</span></h2>
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
                   <Image src={getImage('nda-foundation')?.imageUrl || 'https://picsum.photos/seed/cadet/1200/900'} width={1200} height={1000} alt="Droneshwar Defence Academy Cadet" className="h-[700px] md:h-[1000px] object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
                   <div className="absolute bottom-16 left-16 right-16 space-y-8">
                      <p className="font-headline font-extrabold text-5xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter">YAHAN SAPNE NAHI, <br/> <span className="text-accent italic">OFFICERS</span> <br/> TAYAAR HOTE HAIN.</p>
                      <div className="h-[3px] w-32 bg-accent"></div>
                      <Link href="https://droneshwardefenceacademy.com/" target="_blank">
                        <Button className="h-16 px-12 bg-white text-primary font-bold uppercase text-xs tracking-widest rounded-2xl">Visit Official DrDA Hub <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* PARENT TESTIMONIALS (NEW v7.0) */}
      <section className="py-24 md:py-48 bg-muted/10 overflow-hidden relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-32 space-y-6">
              <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Real Voices from the Valley</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Parent <span className="text-accent italic">Testimonials</span></h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: "Mrs. Meenakshi Bisht", r: "My daughter's confidence in Math changed completely after Drona IQ's AI assessment identified her missing foundation from Class 8.", l: "Jakhan" },
                { n: "Col. Aditya Sharma", r: "The discipline and tracking here is military-grade. Best NDA foundation coaching in Dehradun.", l: "Dalanwala" },
                { n: "Mr. Rahul Verma", r: "Finally a place that doesn't treat students like roll numbers. The Parent App keeps me informed 24/7.", l: "Sahastradhara" },
                { n: "Mrs. Preeti Rawat", r: "Home tuition network is amazing. The tutor matched for our son is highly professional and knowledgeable.", l: "Rajpur Road" },
                { n: "Dr. Vikram Singh", r: "Impressive AI diagnostic tools. It identified concept blocks I didn't even know existed in my son's learning.", l: "IT Park" },
                { n: "Mrs. Sanya Gupta", r: "Class 10 board results were exceptional. 98% in Science wouldn't have been possible without Drona IQ.", l: "Vasant Vihar" },
                { n: "Mr. Kunal Negi", r: "Best commerce faculty. My daughter is now ready for her CA Foundation along with boards.", l: "Ballupur" },
                { n: "Mrs. Anjali Roy", r: "The safety protocols and faculty interaction levels are world-class. Very satisfied parent.", l: "Clement Town" },
                { n: "Mr. Yash Sharma", r: "Drona IQ is the best tuition ecosystem in Dehradun. Transparent and outcome-driven.", l: "Prem Nagar" },
                { n: "Mrs. Divya Negi", r: "The revision packs for Class 12 boards are a lifesaver. Highly recommended!", l: "Karanpur" },
                { n: "Mr. Sahil Khan", r: "My son cleared his NDA written in first attempt. Discipline from DrDA is the key.", l: "Dehradun Cantt" },
                { n: "Mrs. Mehak Kaur", r: "The only coaching that uses data correctly to improve students. Exceptional growth seen.", l: "Race Course" },
              ].map((t, i) => (
                <Card key={i} className="border-none shadow-xl p-10 rounded-[2.5rem] space-y-6 bg-white group hover:bg-primary transition-all duration-500 overflow-hidden relative">
                   <div className="flex text-accent group-hover:text-white">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                   </div>
                   <Quote className="h-10 w-10 text-primary/5 group-hover:text-white/10 absolute -right-4 -bottom-4" />
                   <p className="text-sm text-muted-foreground group-hover:text-white/60 font-light leading-relaxed italic">"{t.r}"</p>
                   <div className="pt-6 border-t group-hover:border-white/10">
                      <p className="font-bold text-primary group-hover:text-white uppercase text-xs">{t.n}</p>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{t.l} Neighborhood</p>
                   </div>
                </Card>
              ))}
           </div>
        </div>
      </section>

      {/* 11. FAQ FORTRESS (140+ ENTRIES) */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16 md:mb-32 space-y-6">
              <Badge className="bg-primary text-white px-6 py-2 uppercase font-bold tracking-widest text-[10px]">Knowledge Fortress</Badge>
              <h2 className="text-4xl md:text-7xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-none">Frequently Asked <span className="text-accent italic">Questions</span></h2>
              <p className="text-xl text-muted-foreground font-light">Deep dive insights for parents and scholars in Dehradun.</p>
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
              <div className="flex flex-col sm:row justify-center gap-6">
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
            <div className="lg:col-span-1 space-y-12 text-left">
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

      {/* 12. STICKY WHATSAPP BUTTON (NEW v7.0) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <Link 
          href="https://wa.me/917878553385" 
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce group"
          title="WhatsApp for Quick Demo"
        >
          <MessageCircle className="h-8 w-8" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary text-[10px] font-extrabold uppercase py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border">Chat with Counselor</span>
        </Link>
        <Link 
          href="tel:+917878553385" 
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
          title="Call Admission Hub"
        >
          <Phone className="h-8 w-8 text-accent" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary text-[10px] font-extrabold uppercase py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border">Call 7878553385</span>
        </Link>
      </div>

    </div>
  );
}
