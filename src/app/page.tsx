
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  BrainCircuit, 
  Home, 
  Target, 
  Star, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Zap, 
  MessageCircle, 
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
  FileText,
  BarChart3,
  Quote
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
  const careerImage = PlaceHolderImages.find(img => img.id === 'class-11-12');
  const homeTutorImage = PlaceHolderImages.find(img => img.id === 'home-tutor-session');
  const ndaImage = PlaceHolderImages.find(img => img.id === 'nda-foundation');
  const parentAppImage = PlaceHolderImages.find(img => img.id === 'parent-app-mockup');
  const studentAppImage = PlaceHolderImages.find(img => img.id === 'student-app-mockup');

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* SECTION 1: PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-56 overflow-hidden bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] animate-pulse"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="px-4 py-1 text-[10px] font-bold bg-accent text-white uppercase tracking-[0.2em] border-none rounded-full">
                  Admission 2026-27 Open
                </Badge>
                <div className="flex items-center gap-1 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                  <Star className="h-3 w-3 fill-accent text-accent" /> Dehradun's #1 Ranked
                </div>
              </div>
              <h1 className="font-headline text-5xl lg:text-[7rem] font-extrabold text-white leading-[0.85] tracking-tighter">
                Dehradun’s Smart <br/> <span className="text-accent italic">Success</span> <br/> Ecosystem
              </h1>
              <p className="text-xl text-white/70 max-w-lg leading-relaxed font-light">
                Elite offline coaching combined with AI-driven home tuition and parent monitoring. Transforming students into future leaders and officers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-headline text-lg px-10 py-9 h-auto shadow-2xl uppercase tracking-widest font-extrabold rounded-2xl transition-all hover:-translate-y-1">
                    Book Free Demo <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/academic-health-check">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-headline text-lg px-10 py-9 h-auto uppercase tracking-widest font-extrabold rounded-2xl">
                    Free AI Health Check
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-muted/20 overflow-hidden">
                      <Image src={`https://picsum.photos/seed/student${i}/100/100`} width={100} height={100} alt="Student" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-white text-[10px] font-bold">5K+</div>
                </div>
                <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Trusted by 5000+ Scholars</p>
              </div>
            </div>
            
            <div className="relative lg:block hidden animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[120px]"></div>
              <div className="relative glass p-4 rounded-[4rem]">
                {heroImage && (
                  <Image 
                    src={heroImage.imageUrl} 
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="rounded-[3.5rem] object-cover h-[600px]"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                <div className="absolute -bottom-12 -left-12 glass p-10 rounded-[2.5rem] flex items-center gap-6 max-w-sm premium-shadow">
                  <div className="bg-primary p-5 rounded-2xl text-accent shadow-lg">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Growth Index</p>
                    <p className="text-primary font-extrabold text-xl">+24% Avg. Improvement</p>
                  </div>
                </div>
                <div className="absolute top-10 -right-12 glass p-6 rounded-[2rem] flex items-center gap-4 premium-shadow animate-bounce">
                  <div className="bg-green-500 p-2 rounded-lg text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <p className="text-primary font-bold text-sm">Verified Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARENTS TRUST DRONA IQ */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-24 space-y-4 max-w-3xl mx-auto">
          <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">The Drona Trust</Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.9]">Why Parents Trust <br/> <span className="text-accent italic">Our Ecosystem</span></h2>
          <p className="text-muted-foreground text-xl font-light leading-relaxed">Unlike traditional tuition, Drona IQ provides a data-driven layer of security and tracking for your child's academic journey. We bridge the gap between classroom teaching and home preparation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: ClipboardList, title: "Weekly Progress Reports", desc: "No more end-of-term surprises. Get detailed subject-wise analysis every week delivered to your smartphone.", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: UserCheck, title: "Verified Subject Experts", desc: "Every tutor passes a rigorous 4-stage screening process for subject competency and behavioral psychology.", color: "text-accent", bg: "bg-accent/10" },
            { icon: BrainCircuit, title: "AI Academic Analysis", desc: "Our neural engine identifies exactly where your child is losing marks and provides a concept-level improvement roadmap.", color: "text-green-500", bg: "bg-green-50" },
            { icon: LayoutDashboard, title: "Dedicated Parent App", desc: "Track attendance, homework status, and test scores in real-time from our secure parent portal.", color: "text-red-500", bg: "bg-red-50" },
            { icon: Clock, title: "Homework Tracking", desc: "Ensure discipline with our real-time homework submission monitoring system and daily task logs.", color: "text-yellow-500", bg: "bg-yellow-50" },
            { icon: TrendingUp, title: "Performance Benchmarking", desc: "See how your child ranks compared to students across elite Dehradun schools with our competitive analytics.", color: "text-purple-500", bg: "bg-purple-50" },
          ].map((feature, i) => (
            <Card key={i} className="border-none premium-shadow hover:translate-y-[-10px] transition-all duration-500 rounded-[3rem] group overflow-hidden bg-white p-12">
              <CardContent className="p-0 space-y-6">
                <div className={`${feature.bg} p-6 w-fit rounded-[2rem] ${feature.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold font-headline text-primary uppercase tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: CLASS-WISE PROGRAMS */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <Badge className="bg-primary text-white border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Holistic Coverage</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter">Academic Programs</h2>
            <p className="text-muted-foreground text-xl font-light">Tailored learning paths for every standard from Class 5 to Class 12, focusing on Board excellence and competitive foundation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
              <Card key={grade} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-48">
                  <Image 
                    src={`https://picsum.photos/seed/class${grade}/600/400`} 
                    fill 
                    alt={`Class ${grade}`} 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    data-ai-hint="classroom study"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6 bg-accent text-white h-12 w-12 rounded-xl flex items-center justify-center font-headline font-extrabold text-xl shadow-lg">
                    {grade}
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold font-headline text-primary uppercase tracking-tight">Class {grade} Program</h4>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1">Foundation & Excellence</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-[9px] uppercase font-bold border-muted/50">Mathematics</Badge>
                        <Badge variant="outline" className="text-[9px] uppercase font-bold border-muted/50">Science</Badge>
                        <Badge variant="outline" className="text-[9px] uppercase font-bold border-muted/50">English</Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Learning Outcomes:</p>
                      <ul className="text-[10px] text-muted-foreground space-y-1">
                        <li>• 100% Concept Mastery</li>
                        <li>• Exam Pattern Training</li>
                        <li>• Logical Reasoning Skills</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/admissions">
                    <Button variant="ghost" className="w-full border border-primary/10 rounded-xl font-bold uppercase text-[10px] group-hover:bg-primary group-hover:text-white transition-all">Enquire Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRIMARY SCHOOL FOUNDATION (5-8) */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-2xl"></div>
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
              {primaryImage && (
                <Image src={primaryImage.imageUrl} width={800} height={600} alt="Primary School Foundation" className="object-cover h-[500px]" data-ai-hint="children learning" />
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl premium-shadow max-w-[200px] text-center space-y-2">
               <Zap className="h-10 w-10 text-accent mx-auto" />
               <p className="font-bold text-primary font-headline uppercase text-xs">Concept Mastery</p>
               <p className="text-[9px] text-muted-foreground leading-tight">We focus on 'Why' before 'How' for classes 5-8.</p>
            </div>
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge className="bg-blue-50 text-blue-600 border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">The Golden Years</Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase leading-[0.9]">Strong Fundamentals for <br/> <span className="text-accent italic">Primary Scholars</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">Classes 5 to 8 are critical for building cognitive curiosity. Drona IQ replaces rote memorization with experiential learning and regular homework support, ensuring your child develops a love for numbers and science early on.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Concept Clarity", desc: "Using visual aids and real-world analogies to explain complex Science and Math theories." },
                { title: "Confidence Building", desc: "Public speaking and weekly presentation modules to remove stage fear and build articulation." },
                { title: "Olympiad Prep", desc: "Specialized training for IMO, NSO, and ASSET exams to challenge the brain beyond syllabus." },
                { title: "Parent Connectivity", desc: "Daily updates on learning milestones via the Student Success Hub for complete transparency." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-primary/5 p-2 rounded-lg h-fit text-primary"><CheckCircle2 className="h-5 w-5" /></div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-primary text-sm uppercase">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/admissions">
              <Button className="rounded-2xl px-10 h-16 bg-primary text-white font-headline font-bold uppercase text-xs tracking-widest shadow-xl">Start Foundation Journey</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOARD EXAM EXCELLENCE (9-10) */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <BookOpen className="h-96 w-96 -mr-20 -mt-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <Badge className="bg-accent text-white border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Mission Board 2026</Badge>
                <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-[0.9] uppercase">Board Exam <br/> <span className="text-accent italic">Dominance</span></h2>
                <p className="text-xl text-white/60 font-light leading-relaxed">High scores in CBSE and ICSE don't come from hard work alone; they come from strategic preparation, pattern recognition, and bi-weekly testing cycles.</p>
              </div>
              <ul className="space-y-6">
                {[
                  "Intensive revision strategy based on last 10 years papers and trend analysis.",
                  "Bi-weekly full-length mock tests under actual board exam conditions.",
                  "Subject-wise doubt clearing sessions at our Sahastradhara Hub.",
                  "AI-driven weakness detection in Mathematics and Physics numericals.",
                  "Personalized exam time-management blueprint for each scholar."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0"><Milestone className="h-4 w-4" /></div>
                    <span className="text-lg font-light text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link href="/admissions">
                  <Button className="rounded-2xl px-12 h-16 bg-accent text-white hover:bg-accent/90 font-headline font-bold uppercase text-xs tracking-widest shadow-2xl">Download Board Prep Guide</Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/30 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative glass p-4 rounded-[4rem]">
                {boardsImage && (
                  <Image src={boardsImage.imageUrl} width={800} height={600} alt="Board Exam Preparation" className="rounded-[3.5rem] object-cover h-[500px]" data-ai-hint="student exam" />
                )}
                <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] flex items-center gap-6 max-w-sm premium-shadow bg-white text-primary">
                  <Award className="h-12 w-12 text-accent" />
                  <div>
                    <p className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Success Rate</p>
                    <p className="font-extrabold text-xl">96% Above 90+ Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CAREER STREAMS (11-12) */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Specialization</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">Choose Your Path</h2>
          <p className="text-muted-foreground text-xl font-light">Expert mentorship for the most crucial years of your life, mapping your interests to global career opportunities.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { 
              title: "Science (PCM/PCB)", 
              desc: "Deep dive into Physics, Chem, Math/Bio with a focus on JEE, NEET, and Board patterns. Advanced labs and regular testing.", 
              future: "Engineering, Medicine, Pure Sciences, Data Science, Research.",
              icon: BrainCircuit,
              color: "bg-blue-500"
            },
            { 
              title: "Commerce", 
              desc: "Mastering Accounts, Economics, and Business Studies. Specialized CUET preparation for admission into elite colleges.", 
              future: "Chartered Accountancy, Investment Banking, MBA, Entrepreneurship.",
              icon: TrendingUp,
              color: "bg-green-500"
            },
            { 
              title: "Humanities", 
              desc: "Developing critical thinking in History, Psychology, and Pol Science with a foundation for civil services and law.", 
              future: "UPSC, Corporate Law, Journalism, International Relations.",
              icon: Globe,
              color: "bg-orange-500"
            },
          ].map((stream, i) => (
            <Card key={i} className="border-none shadow-2xl rounded-[3rem] overflow-hidden group bg-white flex flex-col h-full">
              <div className="p-12 space-y-8 flex-1">
                <div className={`${stream.color} h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/10`}>
                  <stream.icon className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold font-headline text-primary uppercase">{stream.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{stream.desc}</p>
                </div>
                <div className="pt-6 border-t border-muted space-y-2">
                  <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Future Pathways:</p>
                  <p className="text-sm font-bold text-primary italic">{stream.future}</p>
                </div>
              </div>
              <div className="p-8 bg-muted/30">
                <Link href="/admissions">
                  <Button className="w-full rounded-2xl py-6 bg-white text-primary border border-primary/5 hover:bg-primary hover:text-white transition-all font-bold uppercase text-[10px] tracking-widest shadow-sm">Explore Stream</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 7: HOME TUITION NETWORK */}
      <section className="py-32 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Doorstep Learning</Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter leading-[0.9]">Dehradun's Largest <br/> <span className="text-accent italic">Verified Tutor</span> Network</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">Sometimes a classroom environment isn't enough. Our network of 500+ home tutors ensures 1-on-1 personalized attention in the comfort of your home, monitored by the Drona IQ OS.</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-primary">
                     <ShieldCheck className="h-5 w-5 text-accent" />
                     <h4 className="font-bold text-sm uppercase">Rigorous Screening</h4>
                   </div>
                   <p className="text-xs text-muted-foreground">Only 5% of applicants pass our subject competency, pedagogical skills, and behavioral tests.</p>
                 </div>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-primary">
                     <MapPin className="h-5 w-5 text-accent" />
                     <h4 className="font-bold text-sm uppercase">Local Coverage</h4>
                   </div>
                   <p className="text-xs text-muted-foreground">From Rajpur Road to Sahastradhara and Ballupur, we have subject experts in your locality.</p>
                 </div>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-primary">
                     <UserCheck className="h-5 w-5 text-accent" />
                     <h4 className="font-bold text-sm uppercase">Parent Safety</h4>
                   </div>
                   <p className="text-xs text-muted-foreground">Mandatory police verification, background checks, and real-time session tracking for total peace of mind.</p>
                 </div>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2 text-primary">
                     <ClipboardList className="h-5 w-5 text-accent" />
                     <h4 className="font-bold text-sm uppercase">Free Demo</h4>
                   </div>
                   <p className="text-xs text-muted-foreground">Experience the teaching quality first-hand before you commit to the program. 100% satisfaction guarantee.</p>
                 </div>
              </div>
              <Link href="/home-tuition">
                <Button className="rounded-2xl px-10 h-16 bg-primary text-white font-headline font-bold uppercase text-xs tracking-widest shadow-xl">Find a Local Tutor</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px]"></div>
              <div className="relative glass p-4 rounded-[4rem]">
                {homeTutorImage && (
                  <Image src={homeTutorImage.imageUrl} width={800} height={600} alt="Home Tuition Network" className="rounded-[3.5rem] object-cover h-[550px]" data-ai-hint="home tutor" />
                )}
                <div className="absolute top-10 -right-12 bg-white p-6 rounded-[2rem] shadow-2xl border-l-4 border-accent max-w-[240px] space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-xs text-primary font-bold italic">"The most professional home tutor network in Dehradun. The tracking app is a game changer for monitoring progress."</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase">— Parent of Class 10 Scholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: ACADEMIC HEALTH CHECK PREVIEW */}
      <section className="py-32 container mx-auto px-4">
        <Card className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-primary text-white p-12 lg:p-20 relative">
          <div className="absolute top-0 right-0 p-20 opacity-10"><BrainCircuit className="h-96 w-96" /></div>
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-8">
              <Badge className="bg-accent text-white border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Proprietary Tech</Badge>
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline leading-[0.9] uppercase">The AI <br/> <span className="text-accent italic">Health Check</span></h2>
              <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">Most students struggle because they don't know *exactly* where their conceptual gaps are. Our AI Diagnostic maps performance data against 500+ concept benchmarks.</p>
              <div className="space-y-6">
                {[
                  { t: "Neural Mapping", d: "Matches student marks against concepts to identify hidden weakness nodes." },
                  { t: "Improvement Roadmap", d: "Generates a personalized, day-by-day study plan to bridge identified gaps." },
                  { t: "Priority Matrix", d: "Directs focus towards high-impact topics for maximum score improvement." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-xl h-fit text-accent"><Sparkles className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight text-accent">{item.t}</h4>
                      <p className="text-sm text-white/40">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/academic-health-check">
                <Button className="rounded-2xl px-12 h-16 bg-accent text-white hover:bg-accent/90 font-headline font-bold uppercase text-xs tracking-widest shadow-2xl">Run Free AI Checkup Now</Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="glass p-8 rounded-[3rem] space-y-6 bg-white/5 backdrop-blur-2xl border-white/10 shadow-2xl">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Sample Diagnostic Report</p>
                    <p className="text-xl font-headline font-bold">Scholar Profile • Class 10</p>
                  </div>
                  <Badge className="bg-green-500 text-white font-bold px-3 py-1">Live Sync</Badge>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-2xl flex justify-between items-center">
                    <p className="text-sm font-bold">Physics Proficiency</p>
                    <p className="text-accent font-bold">64%</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl flex justify-between items-center">
                    <p className="text-sm font-bold">Math Foundation</p>
                    <p className="text-red-400 font-bold">42% (Critical Gap)</p>
                  </div>
                </div>
                <div className="p-6 bg-accent/10 border-l-4 border-accent rounded-r-2xl">
                   <p className="text-xs font-bold text-accent uppercase mb-2">AI Diagnostic Insight:</p>
                   <p className="text-sm text-white/70 italic">"Scholar struggles with 'Trigonometry' application in Physics numericals. Recommended Action: 12-hour Foundation Intensive before Term-1."</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* SECTION 9: HOW DRONA IQ WORKS */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <Badge className="bg-primary text-white border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">The Success Blueprint</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">Your Road to Excellence</h2>
          <p className="text-muted-foreground text-xl font-light">From zero to success in 5 calculated, data-driven steps.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 -z-10"></div>
          <div className="grid lg:grid-cols-5 gap-10">
            {[
              { s: "01", t: "Assessment", d: "Take our online AI Diagnostic or visit Sahastradhara Hub for a manual bench-marking test.", i: Search },
              { s: "02", t: "Analysis", d: "Get a comprehensive gap report identifying specific weak concept nodes across subjects.", i: BrainCircuit },
              { s: "03", t: "Plan", d: "We assign the perfect subject expert and create a hyper-personalized daily routine.", i: LayoutDashboard },
              { s: "04", t: "Tracking", d: "Weekly tests, parent monitor, and real-time XP gamification to ensure zero friction in growth.", i: TrendingUp },
              { s: "05", t: "Results", d: "Celebrate as you cross your target exam benchmarks with absolute confidence.", i: Trophy },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="h-20 w-20 rounded-3xl bg-white border-4 border-muted flex items-center justify-center mx-auto group-hover:border-accent transition-all duration-500 shadow-xl group-hover:scale-110">
                  <step.i className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest">Step {step.s}</span>
                  <h4 className="text-xl font-bold font-headline text-primary uppercase">{step.t}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY DRONA IQ IS DIFFERENT (Comparison) */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">The Comparison Matrix</h2>
              <p className="text-muted-foreground text-xl font-light">Why families are switching from traditional models to Drona IQ's Ecosystem.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-xl rounded-[3rem] p-12 bg-white space-y-8 relative overflow-hidden ring-4 ring-accent">
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest">The EdTech Leader</div>
                <h3 className="text-3xl font-extrabold font-headline text-primary uppercase">Drona IQ</h3>
                <ul className="space-y-6">
                  {["AI Learning Gap Analysis", "Real-time Parent App Tracking", "4-Stage Subject Expert Matching", "24/7 AI Tutor Support", "XP & Gamified Growth Engine"].map((f, i) => (
                    <li key={i} className="flex gap-3 items-center text-primary font-bold">
                      <CheckCircle2 className="h-5 w-5 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/admissions">
                  <Button className="w-full h-16 bg-primary text-white rounded-2xl uppercase font-bold text-xs shadow-xl">Choose Excellence</Button>
                </Link>
              </Card>

              <Card className="border-none shadow-lg rounded-[3rem] p-12 bg-white/50 space-y-8 grayscale opacity-70">
                <h3 className="text-2xl font-bold font-headline text-primary uppercase">Coaching Centers</h3>
                <ul className="space-y-6">
                  {["Crowded Classrooms (40:1)", "No Individual Goal Tracking", "One-Size-Fits-All Pace", "No Daily Parent Monitoring", "Rote Memorization Focus"].map((f, i) => (
                    <li key={i} className="flex gap-3 items-center text-muted-foreground font-medium">
                      <ShieldCheck className="h-5 w-5 opacity-20" /> {f}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="border-none shadow-lg rounded-[3rem] p-12 bg-white/50 space-y-8 grayscale opacity-70">
                <h3 className="text-2xl font-bold font-headline text-primary uppercase">Solo Home Tutors</h3>
                <ul className="space-y-6">
                  {["Varying Quality Standards", "Zero Academic Progress Data", "No Structured Backup Tutors", "Unverified Safety Background", "Limited Competitive Range"].map((f, i) => (
                    <li key={i} className="flex gap-3 items-center text-muted-foreground font-medium">
                      <ShieldCheck className="h-5 w-5 opacity-20" /> {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: DEFENCE FOUNDATION ADVANTAGE */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="bg-primary text-white border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">The DrDA Legacy</Badge>
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase leading-[0.9]">Defense Foundation <br/> <span className="text-accent italic">Advantage</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">Powered by **Droneshwar Defence Academy (DrDA)**, we don't just teach chapters; we architect officers. Our foundation program is for students who aspire for NDA but need solid academic footing first.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Flag, title: "Leadership Skills", d: "Instilling command presence and decision-making from an early age." },
                { icon: MessageCircle, title: "Communication", d: "Advanced soft skills and English proficiency for SSB prep." },
                { icon: Target, title: "NDA Orientation", d: "Early exposure to UPSC defense exam patterns and GAT syllabus." },
                { icon: Award, title: "Officer Personality", d: "Developing 'Officer Like Qualities' (OLQ) through disciplined routine." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="bg-primary text-accent p-3 rounded-2xl w-fit"><item.icon className="h-6 w-6" /></div>
                  <h4 className="font-bold text-primary uppercase text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
            <Link href="/admissions">
              <Button className="rounded-2xl px-10 h-16 bg-primary text-white font-headline font-bold uppercase text-xs tracking-widest shadow-xl">Join the Officer Cadre</Button>
            </Link>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
            {ndaImage && (
              <Image src={ndaImage.imageUrl} width={800} height={600} alt="NDA Foundation" className="object-cover h-[600px] group-hover:scale-105 transition-transform duration-700" data-ai-hint="military student" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white space-y-2">
              <p className="font-headline font-extrabold text-3xl uppercase">Yahan Sapne Nahi, <br/> <span className="text-accent">Officers Tayaar Hote Hain.</span></p>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Droneshwar Defence Academy Collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 & 13: DASHBOARD PREVIEWS */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4 space-y-24">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline uppercase tracking-tighter">A Unified Experience</h2>
            <p className="text-white/60 font-light text-xl">Real-time data synchronization between students, parents, and academic mentors for zero friction in success.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8 group">
              <div className="flex items-center justify-between border-l-4 border-accent pl-6">
                 <h3 className="text-3xl font-bold font-headline uppercase">Parent Monitor Hub</h3>
                 <BarChart3 className="h-8 w-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-white/60 font-light leading-relaxed">Monitor live attendance, review weekly AI performance logs, track fee status, and schedule 1-on-1 mentor interactions at our Om Tower Hub directly from your smartphone.</p>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                 {parentAppImage && (
                   <Image src={parentAppImage.imageUrl} width={800} height={600} alt="Parent Dashboard Mockup" className="object-cover opacity-80" data-ai-hint="mobile analytics" />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Live Parent Analytics Active</p>
                 </div>
              </div>
            </div>
            <div className="space-y-8 group">
              <div className="flex items-center justify-between border-l-4 border-accent pl-6">
                 <h3 className="text-3xl font-bold font-headline uppercase">Student Success Hub</h3>
                 <Activity className="h-8 w-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-white/60 font-light leading-relaxed">Access daily tasks, earn XP points for completing assignments, launch the AI doubt solver, and follow a hyper-personalized study routine designed by our reasoning engine.</p>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                 {studentAppImage && (
                   <Image src={studentAppImage.imageUrl} width={800} height={600} alt="Student Hub Mockup" className="object-cover opacity-80" data-ai-hint="student dashboard" />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">XP Engine Synchronization</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: SUCCESS STORIES */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <Badge className="bg-accent/10 text-accent border-none font-bold uppercase tracking-[0.2em] text-[10px] px-4">Hall of Excellence</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">The Valley's Best Outcomes</h2>
          <p className="text-muted-foreground text-xl font-light">Real stories of academic transformation from students across Dehradun.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { n: "Ishita Negi", s: "74% to 98%", e: "CBSE Class 10", t: "The AI health check found exactly where my Math foundation was weak. I improved 24% in just 3 months of focused prep." },
            { n: "Aryan Rawat", s: "AIR 412", e: "NDA Foundation", t: "Drona IQ's discipline and tracking helped me manage my Boards and NDA prep together without burnout. The mock tests were identical to UPSC." },
            { n: "Sanya Gupta", s: "99.2 Percentile", e: "JEE Mains (Physics)", t: "Personalized home tuition sessions for Physics numericals were exactly what I needed to clear my complex doubts and improve speed." },
          ].map((story, i) => (
            <Card key={i} className="border-none shadow-xl rounded-[3rem] p-10 bg-white space-y-6 hover:-translate-y-2 transition-transform duration-500 relative">
               <Quote className="absolute top-6 right-6 h-12 w-12 text-muted/20" />
               <div className="flex text-accent gap-1">
                 {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
               </div>
               <p className="text-lg font-light leading-relaxed italic text-primary relative z-10">"{story.t}"</p>
               <div className="pt-6 border-t flex items-center gap-4">
                 <div className="h-14 w-14 rounded-full bg-muted overflow-hidden border-2 border-accent/20">
                    <Image src={`https://picsum.photos/seed/story${i}/200/200`} width={100} height={100} alt={story.n} />
                 </div>
                 <div>
                   <p className="font-extrabold text-primary font-headline uppercase text-sm">{story.n}</p>
                   <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{story.s} • {story.e}</p>
                 </div>
               </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 15: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tighter">Everything You Need to Know</h2>
             <p className="text-muted-foreground font-light italic">Frequently asked questions about Dehradun's #1 learning success ecosystem.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "What exactly is Drona IQ?", a: "Drona IQ is a unified student success ecosystem combining elite offline coaching, verified home tuition network, and AI-driven academic tracking to ensure 100% student outcomes." },
              { q: "How is it different from traditional coaching centers in Dehradun?", a: "Unlike local centers, we offer real-time parent monitoring via an app, AI-driven learning gap analysis, 24/7 AI tutor support, and a personalized mentor-matching engine based on psychometric analysis." },
              { q: "Where is your main hub located?", a: "Our headquarters is located at 3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun." },
              { q: "Do you provide home tuition in Rajpur Road and Jakhan?", a: "Yes, we have a network of 500+ verified subject experts covering all major localities in Dehradun including Rajpur Road, Jakhan, Ballupur, and Clement Town." },
              { q: "What is the AI Academic Health Check?", a: "It is a proprietary neural engine that analyzes student performance data to identify hidden conceptual weaknesses and suggests a hyper-personalized improvement roadmap." },
              { q: "Do you specialize in NDA Foundation training?", a: "Absolutely. Powered by Droneshwar Defence Academy, we provide elite foundation coaching for students from Class 8th to 12th aspiring for defense careers." },
              { q: "What are your center timings?", a: "Our hub is open for counseling and classes from 9:00 AM to 8:00 PM, Monday to Saturday." },
              { q: "How do you verify your home tutors?", a: "Every tutor undergoes subject competency tests, pedagogical skills assessment, and thorough background/police verification." },
              { q: "Can I track my child's attendance daily?", a: "Yes, the Parent Monitor Hub provides live attendance logs, homework submission status, and test score analysis instantly." },
              { q: "Is the first demo class for home tuition free?", a: "Yes, we provide one free trial session for home tuition to ensure a perfect match between the student's learning style and the mentor." },
              { q: "Do you follow the CBSE or ICSE curriculum?", a: "We provide specialized coaching and home tuition for both CBSE and ICSE boards, with school-specific curriculum mapping for local elite schools." },
              { q: "How much does home tuition cost in Dehradun?", a: "Pricing depends on the class, subject complexity, and tutor experience. We provide multiple budget tiers to suit every family's requirements." },
              { q: "Do you provide online classes as well?", a: "Yes, we offer live 1-on-1 and small group online sessions using our interactive learning tools for students who prefer online mode." },
              { q: "What is the average score improvement in students?", a: "On average, Drona IQ scholars see a 24% improvement in conceptual proficiency and a significant jump in percentile within the first 90 days." },
              { q: "How do I enroll my child?", a: "You can book a counseling visit via our website, call our counselors at +91 7878553385, or visit our Sahastradhara Road hub." },
              { q: "Is there an entrance test for the academy?", a: "We conduct an AI Diagnostic Assessment to understand the student's starting point, not to reject them, but to personalize their future learning path." },
              { q: "Do you provide synthesized study material?", a: "Yes, students get access to synthesized revision notes, high-yield question banks, and daily practice modules tailored to current exam patterns." },
              { q: "What is the XP Gamification system?", a: "Students earn XP (Experience Points) for completing tasks, attending classes, and scoring well. These can be used to unlock badges and achievement levels, keeping them highly motivated." },
              { q: "Can I switch my home tutor if I am not satisfied?", a: "Yes, we offer a seamless tutor replacement guarantee if the learning style doesn't match the student's needs within the first 3 sessions." },
              { q: "Are there any scholarships available?", a: "We offer merit-based scholarships for high-performing students and special defense ward discounts for children of army personnel." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-8 rounded-2xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-primary uppercase text-xs hover:no-underline group py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 border-t pt-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 16: DEHRADUN LOCAL SEO SECTION */}
      <section className="py-32 container mx-auto px-4">
         <div className="bg-primary/5 rounded-[4rem] p-12 lg:p-20 text-center space-y-12">
           <div className="space-y-4 max-w-2xl mx-auto">
             <h2 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Your Local Success Partner</h2>
             <p className="text-muted-foreground font-light">The #1 rated student success ecosystem serving all major pockets of the Doon Valley.</p>
           </div>
           <div className="flex flex-wrap justify-center gap-4">
             {["Best Tuition in Dehradun", "Home Tuition in Dehradun", "CBSE Tuition Dehradun", "Class 10 Tuition Dehradun", "NDA Foundation Dehradun", "IT Park", "Sahastradhara Road", "Rajpur Road", "Ballupur", "Jakhan", "Dehradun Cantt"].map((tag, i) => (
               <Badge key={i} className="bg-white text-primary border border-primary/10 px-6 py-2 rounded-xl text-[10px] font-bold uppercase shadow-sm">
                 {tag}
               </Badge>
             ))}
           </div>
           <div className="max-w-4xl mx-auto text-sm text-muted-foreground font-light leading-relaxed space-y-6">
             <p>Looking for the **best tuition classes in Dehradun**? Drona IQ, located conveniently near IT Park on Sahastradhara Road, is transforming how students prepare for **CBSE Class 10** and **Class 12 Boards**. We provide high-quality **home tuition in Dehradun** with verified subject experts who specialize in Math, Science, and English.</p>
             <p>Whether you reside in **Rajpur Road**, **Jakhan**, **Ballupur**, or **Dehradun Cantt**, our ecosystem brings elite academic tracking and AI-driven diagnostics right to your doorstep. We take pride in our collaboration with **Droneshwar Defence Academy** to provide the most rigorous **NDA Foundation coaching** in the region. Join Dehradun’s most advanced academy today and secure your child's academic future.</p>
           </div>
         </div>
      </section>

      {/* SECTION 17: BLOG PREVIEW */}
      <section className="py-32 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Scholar's Journal</h2>
            <p className="text-muted-foreground font-light italic">Latest insights, study techniques, and Board Exam updates for Dehradun students.</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="rounded-xl font-bold uppercase text-[10px] tracking-widest px-8 h-12">Visit Full Blog</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "10 Tips for CBSE Class 10 Boards 2026", d: "Discover the most effective ways to master the new MCQ and Assertion-Reasoning exam pattern...", c: "CBSE UPDATES" },
            { t: "Why NDA Foundation is Crucial After Class 10", d: "Early orientation can give you a 2-year headstart over your peers in SSB and GAT preparation...", c: "NDA PREP" },
            { t: "Overcoming Math Anxiety with AI Diagnostics", d: "How data helps remove the fear of numbers for primary scholars by identifying missing foundations...", c: "STUDY TIPS" }
          ].map((post, i) => (
            <Card key={i} className="border-none shadow-lg rounded-[2.5rem] overflow-hidden group bg-white cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56">
                <Image src={`https://picsum.photos/seed/blog${i}/600/400`} fill alt="Blog post" className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="classroom study" />
              </div>
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-primary/5 text-primary border-none font-bold uppercase tracking-widest text-[8px]">{post.c}</Badge>
                <h4 className="text-xl font-extrabold font-headline text-primary uppercase leading-tight group-hover:text-accent transition-colors">{post.t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{post.d}</p>
                <div className="flex items-center gap-1 text-accent font-bold uppercase text-[9px] tracking-widest pt-2">
                  Read Full Article <ChevronRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 18: ADMISSION CTA */}
      <section className="py-32 container mx-auto px-4">
        <Card className="border-none shadow-2xl rounded-[4rem] overflow-hidden bg-accent text-white p-12 lg:p-24 text-center space-y-10 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-4xl md:text-7xl font-extrabold font-headline uppercase leading-[0.85] tracking-tighter">Your Success Story <br/> Starts <span className="italic">Today</span></h2>
            <p className="text-xl text-white/80 font-light italic">"Precision in practice leads to excellence in performance. Secure your child's seat at Dehradun's most advanced academy today."</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
              <Link href="/admissions">
                <Button className="rounded-2xl px-12 h-20 bg-primary text-white hover:bg-primary/90 font-headline font-bold uppercase text-lg tracking-widest shadow-2xl">Apply for Admission</Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start justify-center text-left bg-white/10 backdrop-blur-md px-8 rounded-2xl border border-white/20">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Admission Counseling:</p>
                <p className="text-2xl font-headline font-extrabold">+91 7878553385</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* SECTION 19: CONTACT SECTION */}
      <section className="py-32 bg-muted/10 border-t">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="space-y-8">
               <div className="flex items-center space-x-2">
                <div className="rounded-xl bg-primary p-2">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <span className="font-headline text-4xl font-extrabold tracking-tighter text-primary uppercase">DRONA IQ</span>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">Dehradun's Smart Student Success Ecosystem. Combining elite offline coaching, home tuition, and AI-driven academic tracking for a stronger future.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <p className="font-bold text-primary uppercase text-xs">Head Hub Dehradun</p>
                    <p className="text-sm text-muted-foreground">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand 248001</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <p className="font-bold text-primary uppercase text-xs">Admission Counseling</p>
                    <p className="text-sm text-muted-foreground">+91 7878553385 • +91 6399000440</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-10">
              <div className="space-y-8">
                 <h4 className="font-bold text-primary uppercase tracking-widest text-[10px]">Academic Ecosystem</h4>
                 <ul className="space-y-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="/academic-health-check" className="hover:text-accent transition-colors">AI Health Check</Link></li>
                   <li><Link href="/home-tuition" className="hover:text-accent transition-colors">Home Tuition Network</Link></li>
                   <li><Link href="/career-guidance" className="hover:text-accent transition-colors">Career Blueprint</Link></li>
                   <li><Link href="/revision-generator" className="hover:text-accent transition-colors">AI Revision Pack</Link></li>
                   <li><Link href="/results" className="hover:text-accent transition-colors">Success Gallery</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="font-bold text-primary uppercase tracking-widest text-[10px]">Student Portals</h4>
                 <ul className="space-y-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="/student-dashboard" className="hover:text-accent transition-colors">Scholar Success Hub</Link></li>
                   <li><Link href="/parent-dashboard" className="hover:text-accent transition-colors">Parent Monitor Hub</Link></li>
                   <li><Link href="/tutor-portal" className="hover:text-accent transition-colors">Educator Registration</Link></li>
                   <li><Link href="/admin" className="hover:text-accent transition-colors">Admin Command CRM</Link></li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="font-bold text-primary uppercase tracking-widest text-[10px]">Local Communities</h4>
                 <ul className="space-y-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                   <li><Link href="https://t.me/droneshwardefenceacademy" className="hover:text-accent transition-colors">Telegram Community</Link></li>
                   <li><Link href="#" className="hover:text-accent transition-colors">Instagram Scholars</Link></li>
                   <li><Link href="#" className="hover:text-accent transition-colors">WhatsApp Hub</Link></li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="pt-24 text-center space-y-4">
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">© 2024 Drona IQ Success Ecosystem • Powered by Droneshwar Defence Academy</p>
             <p className="text-[8px] text-muted-foreground/40 max-w-4xl mx-auto leading-relaxed">Drona IQ (DIQ) is an ISO 9001:2015 Certified Institution for Academic Excellence. Headquartered in Om Tower, Dehradun. Serving elite students across Uttarakhand with advanced educational technology and military-grade discipline. All AI reports are for academic guidance and generated based on concept mastery benchmarks.</p>
          </div>
        </div>
      </section>

      {/* SECTION 20: SEO FOOTER - Managed globally in RootLayout but reinforced with internal links */}
    </div>
  );
}
