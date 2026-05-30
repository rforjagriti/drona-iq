
"use client"

import { Badge } from '@/components/ui/badge';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

export function FaqFortress() {
  const faqs = [
    { q: "Which is the best tuition in Dehradun?", a: "Drona IQ is Dehradun's #1 result-oriented hub, combining military discipline with AI tracking." },
    { q: "How do you ensure tutor safety?", a: "We have a strict 10-Point Safety Protocol including mandatory police verification." },
    { q: "Can we get NDA foundation with regular tuition?", a: "Yes, our Gateway program integrates board preparation with NDA foundation." },
    { q: "What makes you different from coaching factories?", a: "We provide 1-on-1 attention, a digital academic twin, and defense-legacy discipline." }
  ];

  return (
    <section className="py-24 md:py-48 bg-white border-t border-primary/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-6 mb-24">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Strategic Database</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase leading-none tracking-tighter">FAQ <br/> <span className="text-accent italic">Fortress.</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#fafafa] border rounded-2xl px-8 shadow-sm">
              <AccordionTrigger className="text-lg font-bold text-primary uppercase text-left hover:no-underline py-8">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-8">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
