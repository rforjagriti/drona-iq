
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/home/hero';
import { GenesisSection } from '@/components/home/genesis';
import { TechSuiteSection } from '@/components/home/tech-suite';
import { ClassUniverseSection } from '@/components/home/class-universe';
import { DefenceLegacySection } from '@/components/home/defence-legacy';
import { LocalSeoMatrix } from '@/components/home/local-seo';
import { FaqFortress } from '@/components/home/faq-fortress';
import { Quote, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* 1. CINEMATIC HERO */}
        <HeroSection />

        {/* 2. GENESIS: FOUNDER'S LETTER */}
        <GenesisSection />

        {/* 3. TECH SUITE: SIMULATORS & TWINS */}
        <TechSuiteSection />

        {/* 4. THE CLASS UNIVERSE: GRADE-WISE BLOCKS */}
        <ClassUniverseSection />

        {/* 5. DEFENCE LEGACY: DrDA INTEGRATION */}
        <DefenceLegacySection />

        {/* 6. NEUROSCIENCE HUB (INLINE FOR VISUALS) */}
        <section className="py-24 md:py-48 bg-[#05070a] text-white">
          <div className="container mx-auto px-4 max-w-6xl text-center space-y-16">
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Neuroscience <br/> <span className="text-accent italic">Of Mastery.</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { t: "Active Recall", d: "Strengthening synaptic connections." },
                { t: "Gap Analysis", d: "AI detection of conceptual voids." },
                { t: "Focus States", d: "Optimizing concentration." },
                { t: "Retrieval Drills", d: "Stopping the Forgetting Curve." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                  <h4 className="text-xl font-bold uppercase text-accent">{item.t}</h4>
                  <p className="text-sm text-white/40 font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. DEHRADUN 360 LOCALITY GRID */}
        <LocalSeoMatrix />

        {/* 8. FAQ FORTRESS */}
        <FaqFortress />

        {/* FINAL EMOTIONAL CTA */}
        <section className="py-32 md:py-64 bg-primary text-white text-center relative overflow-hidden border-t-8 border-accent">
          <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-16">
             <Quote className="h-20 w-20 text-accent mx-auto opacity-30" />
             <div className="space-y-10">
               <h2 className="text-4xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none">Your Child's Success Is <br/> <span className="text-accent italic">Our Sole Milestone.</span></h2>
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
              <div className="space-y-6">
                 <div className="flex items-center space-x-2">
                    <div className="rounded-xl bg-primary p-2 border border-white/10">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-headline text-2xl font-extrabold tracking-tighter text-white uppercase leading-none">DRONA IQ</span>
                 </div>
                 <p className="text-sm leading-relaxed">Dehradun's apex Student Success Ecosystem. Powered by DrDA legacy.</p>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Quick Links</h4>
                 <ul className="space-y-4 text-xs font-bold uppercase tracking-widest hover:[&_li]:text-accent">
                    <li><Link href="/academic-health-check">AI Health Check</Link></li>
                    <li><Link href="/home-tuition">Home Tuition</Link></li>
                    <li><Link href="/student">Student Hub</Link></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Contact</h4>
                 <div className="space-y-4 text-xs font-bold uppercase">
                    <p>+91 78785 53385</p>
                    <p>Om Tower, Sahastradhara Road</p>
                    <p>Dehradun, Uttarakhand</p>
                 </div>
              </div>
           </div>
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-center">
              <p>© 2026 Drona IQ Academy. All Rights Reserved.</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
