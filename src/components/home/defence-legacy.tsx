
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Target, Users, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';

export function DefenceLegacySection() {
  return (
    <section className="py-24 bg-primary text-white border-y-8 border-accent">
      <div className="container mx-auto px-4 max-w-7xl">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <Badge className="bg-accent text-primary border-none uppercase font-bold tracking-widest text-[10px]">The Legacy Hub</Badge>
               <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter">Powered By <br/> <span className="text-accent italic">Droneshwar Defence Academy.</span></h2>
               <p className="text-xl text-white/60 font-light">We don't just teach marks; we build officers. Our curriculum is infused with military discipline.</p>
               <Link href="https://droneshwardefenceacademy.com" target="_blank">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary h-16 px-10 font-bold uppercase tracking-widest rounded-xl">Visit DrDA Global <Globe className="ml-2 h-4 w-4" /></Button>
               </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
               {[
                 { l: "15 OLQs System", i: Target },
                 { l: "Officer Mentors", i: Users },
                 { l: "Elite Discipline", i: ShieldCheck },
                 { l: "Courage Core", i: Heart }
               ].map((box, i) => (
                  <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center space-y-4">
                     <box.i className="h-12 w-12 text-accent mx-auto" />
                     <p className="font-bold text-sm uppercase tracking-widest">{box.l}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
