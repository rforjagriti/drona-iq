import { Navbar } from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ShieldCheck, Target, GraduationCap, Heart, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <section className="navy-gradient py-24 lg:py-40 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <Badge className="bg-accent text-white border-none px-6 py-2 uppercase tracking-[0.3em] text-[10px] font-bold">Our Institution</Badge>
          <h1 className="text-5xl md:text-8xl font-extrabold font-headline uppercase tracking-tighter leading-tight">
            More Than Just <br/> A <span className="text-accent italic">Tuition Center</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Drona IQ is the digital backbone of Droneshwar Defence Academy, built to bridge the gap between potential and performance.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-32 space-y-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase leading-tight">Founded on <br/> <span className="text-accent">Discipline & Tech</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Located in the heart of Dehradun at Sahastradhara Road, Drona IQ was born out of a simple observation: students in the valley have high potential but lack the data-driven tracking needed to excel in modern competitive landscapes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light italic border-l-4 border-accent pl-6 bg-accent/5 py-4">
              "We don't just teach chapters; we architect careers. Every student is a project, and success is the only milestone."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Founded", value: "2018", icon: Rocket },
              { label: "ISO Certified", value: "9001:2015", icon: ShieldCheck },
              { label: "Success Rate", value: "92%", icon: Target },
              { label: "Total Scholars", value: "5000+", icon: GraduationCap },
            ].map((stat, i) => (
              <Card key={i} className="border-none premium-shadow rounded-[2rem] p-8 text-center space-y-2">
                <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-extrabold font-headline text-primary">{stat.value}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-extrabold font-headline text-primary uppercase">Our Core Pillars</h3>
            <p className="text-muted-foreground">The foundation of every Drona IQ scholar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "AI-driven tracking that identifies exactly where the student needs focus." },
              { icon: ShieldCheck, title: "Discipline", desc: "Military-grade academic scheduling for consistent growth." },
              { icon: Heart, title: "Mentorship", desc: "Hand-picked educators from Dehradun's elite teaching circles." },
            ].map((pillar, i) => (
              <Card key={i} className="border-none shadow-xl p-10 text-center space-y-6 rounded-[2.5rem] bg-white group hover:bg-primary transition-colors duration-500">
                <div className="bg-primary/5 p-4 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold font-headline text-primary group-hover:text-white uppercase">{pillar.title}</h4>
                <p className="text-muted-foreground group-hover:text-white/60 font-light">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white rounded-[3rem] p-16 text-center space-y-8 premium-shadow">
          <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
          <h3 className="text-4xl font-extrabold font-headline uppercase">Visit Our Dehradun Hub</h3>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Experience the technology and environment firsthand. Our hub at Sahastradhara Road is open for counseling sessions.
          </p>
          <div className="space-y-2">
            <p className="font-bold uppercase tracking-widest text-xs">Headquarters</p>
            <p className="text-lg">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun</p>
          </div>
        </section>
      </main>
    </div>
  );
}
