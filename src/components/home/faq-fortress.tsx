
"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { MessageCircle, ShieldCheck, Zap, Coins, Clock } from 'lucide-react';

export function FaqFortress() {
  const faqs = [
    { 
      q: "Which is the best tuition center in Dehradun for Board exams?", 
      a: "Drona IQ is Dehradun's only 'Student Success Ecosystem' that combines board preparation with military-grade discipline. Our Class 10/12 results (avg. 94%) are proof of our effectiveness.",
      i: Zap
    },
    { 
      q: "How do you ensure tutor safety for Home Tuition in Dehradun?", 
      a: "Safety is our #1 priority. Every Drona IQ tutor undergoes a 10-Point Verification including mandatory Aadhaar-police link and psychometric testing. We also have a 'Safe-Home' feedback loop for parents.",
      i: ShieldCheck
    },
    { 
      q: "Can I get a home tutor for NDA Foundation specifically?", 
      a: "Yes. Our 'Officer-Gateway' program brings DrDA (Droneshwar Defence Academy) certified mentors to your home, preparing students for NDA while they complete school boards.",
      i: ShieldCheck
    },
    { 
      q: "What makes Drona IQ different from local coaching centers?", 
      a: "Coaching centers are 'factories' with 50-100 students per batch. Drona IQ offers 1-on-1 personalized tracking via our Digital Academic Twin and AI Risk Detector—something no other center in India currently offers.",
      i: MessageCircle
    },
    { 
      q: "Is there a trial class for home tuition?", 
      a: "Absolutely. We offer a 'Compatibility Demo' where the student and parent can evaluate the mentor's teaching style and temperament before committing.",
      i: Clock
    },
    { 
      q: "Do you provide study materials and tests?", 
      a: "We provide the 'Success Pack' which includes AI-generated revision notes, formula sheets, and our proprietary DIQ Mock Test Series which precisely mirrors CBSE/ICSE patterns.",
      i: Zap
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white border-t border-primary/5" id="faq">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-6 mb-24">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Strategic Intelligence</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">FAQ <br/> <span className="text-accent italic">Fortress.</span></h2>
          <p className="text-xl text-muted-foreground font-light">Answering every technical and emotional concern of a Dehradun parent.</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#fafafa] border-none rounded-[2.5rem] px-10 shadow-sm overflow-hidden group">
              <AccordionTrigger className="text-xl font-extrabold text-primary uppercase text-left hover:no-underline py-10">
                <div className="flex items-center gap-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-accent group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                    <faq.i className="h-5 w-5" />
                  </div>
                  <span className="leading-tight">{faq.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-lg font-light pb-10 pl-16 border-t border-primary/5 pt-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 p-12 bg-accent/5 rounded-[3rem] border border-accent/10 text-center space-y-6">
          <h4 className="text-2xl font-bold font-headline text-primary">Still have technical queries?</h4>
          <p className="text-muted-foreground font-light">Our Senior Academic Counselor at Sahastradhara Road Hub is available for a direct 1-on-1 strategy call.</p>
          <Link href="/contact">
            <Button className="h-16 px-12 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-xl">Contact Success Desk</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
