import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/home/hero';
import { OlympiadSection } from '@/components/home/olympiad-section';
import { GenesisSection } from '@/components/home/genesis';
import { TechSuiteSection } from '@/components/home/tech-suite';
import { NeuroHubSection } from '@/components/home/neuro-hub';
import { ClassUniverseSection } from '@/components/home/class-universe';
import { DefenceLegacySection } from '@/components/home/defence-legacy';
import { LocalSeoMatrix } from '@/components/home/local-seo';
import { FaqFortress } from '@/components/home/faq-fortress';
import { OLQRadarSection } from '@/components/home/olq-radar';
import { AdmissionReadiness } from '@/components/home/admission-readiness';
import { SchoolSyncMatrix } from '@/components/home/school-sync';
import { LivePulse } from '@/components/home/live-pulse';
import { ROICalculator } from '@/components/home/roi-calculator';
import { FacultySection } from '@/components/home/faculty';
import { SuccessHallSection } from '@/components/home/success-hall';
import { VideoHubSection } from '@/components/home/video-hub';
import { GalleryLabSection } from '@/components/home/gallery-lab';
import { CompetitiveMatrix } from '@/components/competitive-matrix';
import { Quote, Zap, ArrowRight, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-accent selection:text-white overflow-x-hidden font-body">
      <Navbar />
      
      <main>
        {/* 1. CINEMATIC HERO (The Hook) */}
        <HeroSection />

        {/* 2. OLYMPIAD COLLABORATION */}
        <OlympiadSection />

        {/* 3. LIVE PULSE */}
        <LivePulse />

        {/* 4. ADMISSION READINESS */}
        <AdmissionReadiness />

        {/* 5. GENESIS: FOUNDER'S LETTER */}
        <GenesisSection />

        {/* 6. COMPETITIVE MATRIX (Strategic Trust) */}
        <CompetitiveMatrix />

        {/* 7. SUCCESS HALL: RESULTS */}
        <SuccessHallSection />

        {/* 8. TECH SUITE: SIMULATORS */}
        <TechSuiteSection />

        {/* 9. FACULTY WALL */}
        <FacultySection />

        {/* 10. VIDEO HUB */}
        <VideoHubSection />

        {/* 11. GALLERY */}
        <GalleryLabSection />

        {/* 12. OLQ RADAR */}
        <OLQRadarSection />

        {/* 13. NEUROSCIENCE HUB */}
        <NeuroHubSection />

        {/* 14. ROI CALCULATOR */}
        <ROICalculator />

        {/* 15. SCHOOL SYNC (Local Dominance) */}
        <SchoolSyncMatrix />

        {/* 16. THE CLASS UNIVERSE */}
        <ClassUniverseSection />

        {/* 17. PSYCHOLOGY HUB: WHY WE WIN */}
        <section className="py-24 bg-muted/20 overflow-hidden border-y border-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-tight tracking-tighter">Why Dehradun Students <br/> <span className="text-accent">Hit a Plateau.</span></h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      We studied 5,000+ students in the valley. The failure isn't lack of potential—it's the "Discipline Gap" and "Tracking Blindness."
                    </p>
                  </div>
                  <div className="space-y-8">
                     {[
                       { t: "The Coaching Factory Trap", d: "Being just a roll number in a batch of 100 students." },
                       { t: "The Home Tutor Roulette", d: "Unverified quality and lack of academic monitoring." },
                       { t: "Travel Fatigue", d: "Losing 2+ hours daily in traffic on Sahastradhara Road or Rajpur Road." }
                     ].map((point, i) => (
                       <div key={i} className="flex gap-6 items-start group">
                         <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1 group-hover:bg-red-200 transition-colors"><span className="text-red-600 font-bold text-xs">!</span></div>
                         <div>
                           <p className="font-bold text-primary uppercase text-sm">{point.t}</p>
                           <p className="text-muted-foreground text-sm leading-relaxed">{point.d}</p>
                         </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px]"></div>
                  <div className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl space-y-8 relative z-10">
                     <Quote className="h-16 w-16 text-accent opacity-20" />
                     <h3 className="text-3xl font-bold font-headline uppercase leading-tight">The DIQ Cure: <br/> Zero Compromise.</h3>
                     <p className="text-white/60 font-light italic leading-relaxed">
                       "Drona IQ is the only hub that combines the individual attention of a Home Tutor with the system-wide tracking of an Elite Academy."
                     </p>
                     <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-bold text-primary">DIQ</div>
                        <div>
                          <p className="font-bold uppercase text-xs tracking-widest">Scientific Advisory Board</p>
                          <p className="text-[10px] text-white/40 uppercase">Drona IQ Research Hub</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 18. DEFENCE LEGACY */}
        <DefenceLegacySection />

        {/* 19. DEHRADUN 360 LOCALITY GRID */}
        <LocalSeoMatrix />

        {/* 20. FAQ FORTRESS */}
        <FaqFortress />

        {/* FINAL EMOTIONAL CTA */}
        <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden border-t-8 border-accent">
          <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
             <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
             <div className="space-y-10">
               <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
               <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">Don't settle for average expectations. Give your child the Success OS they deserve.</p>
             </div>
             <Link href="/admissions">
                <Button className="h-24 px-16 bg-accent text-primary font-headline text-xl rounded-[2.5rem] shadow-2xl uppercase tracking-widest font-extrabold hover:scale-105 transition-all">Enroll Your Child Now</Button>
             </Link>
          </div>
        </section>
      </main>

      {/* MEGA FOOTER */}
      <footer className="py-24 bg-[#05070a] text-white/40 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="space-y-6 text-left">
                 <div className="flex items-center space-x-2">
                    <div className="rounded-xl bg-primary p-2 border border-white/10">
                       <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-headline text-2xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                 </div>
                 <p className="text-sm leading-relaxed">Dehradun's apex Student Success Ecosystem. Powered by DrDA legacy.</p>
                 <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent transition-colors"><ShieldCheck className="h-5 w-5" /></div>
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent transition-colors"><Star className="h-5 w-5" /></div>
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent transition-colors"><TrendingUp className="h-5 w-5" /></div>
                 </div>
              </div>
              <div className="text-left">
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6 border-b border-white/5 pb-2">Quick Access</h4>
                 <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                    <li><Link href="/why-drona-iq">The DIQ Advantage</Link></li>
                    <li><Link href="/academic-health-check">AI Academic Diagnostic</Link></li>
                    <li><Link href="/home-tuition">Verified Home Tuition</Link></li>
                    <li><Link href="/revision-generator">AI Revision Pack</Link></li>
                 </ul>
              </div>
              <div className="text-left">
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6 border-b border-white/5 pb-2">Student Hub</h4>
                 <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest hover:[&_li]:text-accent transition-colors">
                    <li><Link href="/student">My Success Dashboard</Link></li>
                    <li><Link href="/results">Hall of Excellence</Link></li>
                    <li><Link href="/about">Our Philosophy</Link></li>
                    <li><Link href="/contact">Support Hotline</Link></li>
                 </ul>
              </div>
              <div className="text-left">
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6 border-b border-white/5 pb-2">Connect</h4>
                 <div className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <p className="flex items-center gap-2"><Zap className="h-3 w-3 text-accent" /> Admissions: +91 78785 53385</p>
                    <p className="flex items-center gap-2"><Zap className="h-3 w-3 text-accent" /> General: +91 63990 00440</p>
                    <p className="mt-6 text-white/20">Om Tower, Sahastradhara Road<br/>Near IT Park, Dehradun</p>
                 </div>
              </div>
           </div>
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-center">
              <p>© 2026 Drona IQ Academy. All Rights Reserved. ISO 9001:2015 Certified.</p>
              <div className="flex gap-8">
                 <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                 <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
