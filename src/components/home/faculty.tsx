
"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function FacultySection() {
  const mentors = [
    {
      name: "Dr. Amit Negi",
      role: "Founder & Chief Academic Architect",
      exp: "7+ Years",
      tags: ["PhD in IR", "UPSC Veteran", "Logic Head"],
      imageUrl: "/images/amit-negi.webp",
      desc: "PhD in International Relations with extensive UPSC experience. A visionary architect of the Drona IQ curriculum with a profound command over subjects."
    },
    {
      name: "Dr. Rahul Pratap Singh",
      role: "Senior Physics Mentor",
      exp: "18+ Years",
      tags: ["Physics Core", "Conceptual Expert"],
      imageUrl: getPlaceholderById('faculty-2'),
      desc: "Physics veteran with 18 years of experience. Master of conceptual mechanics and competitive exam strategies for Boards and NDA."
    },
    {
      name: "Er. Lokesh Garg",
      role: "Lead Math Faculty",
      exp: "17+ Years",
      tags: ["Calculus King", "Academic Strategy"],
      imageUrl: getPlaceholderById('faculty-3'),
      desc: "Mathematics wizard with 17+ years of track record. Specializes in advanced calculus and board-topping techniques across Dehradun."
    },
    {
      name: "Mrs. Suruchi Tiwari",
      role: "Chemistry Expert",
      exp: "8+ Years",
      tags: ["Organic Chem Specialist", "Comp. Expert"],
      imageUrl: getPlaceholderById('faculty-4'),
      desc: "Chemistry expert with 8 years of specialization in competitive patterns. Known for simplifying complex organic reactions and molecular logic."
    },
    {
      name: "Mrs. Amita",
      role: "English Proficiency Lead",
      exp: "6+ Years",
      tags: ["Grammar Expert", "Soft Skills"],
      imageUrl: getPlaceholderById('faculty-5'),
      desc: "English proficiency mentor with 6 years experience. Expert in communication skills and grammar logic for Olympiads and Board exams."
    },
    {
      name: "Mrs. Sapna",
      role: "Biology Specialist",
      exp: "6+ Years",
      tags: ["Medical Foundation", "Life Sciences"],
      imageUrl: getPlaceholderById('faculty-6'),
      desc: "Biology specialist with 6 years experience. Passionate about medical foundation and life sciences for high-performance scholars."
    },
    {
      name: "Mr. Brijesh",
      role: "GS & Social Sciences Lead",
      exp: "10+ Years",
      tags: ["History & Geo", "General Studies"],
      imageUrl: getPlaceholderById('faculty-7'),
      desc: "General Studies (GS) expert. Bringing deep insights into history, geography, and current affairs for holistic competitive growth."
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-white border-b border-primary/5" id="faculty">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto">
          <Badge className="bg-primary text-white border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">The Success Architects</Badge>
          <h2 className="text-4xl md:text-8xl font-extrabold text-primary uppercase tracking-tighter leading-none">Wall of <br/> <span className="text-accent italic">Intellect.</span></h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We don't hire 'teachers'. We hire subject-matter experts, PhD scholars and veterans to build leaders of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <Card key={i} className="border-none shadow-2xl rounded-[3rem] overflow-hidden group hover:-translate-y-4 transition-all duration-700 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image 
                  src={mentor.imageUrl} 
                  fill 
                  alt={mentor.name} 
                  className="object-cover transition-all duration-1000"
                  data-ai-hint="professional teacher portrait"
                  unoptimized={mentor.name === "Dr. Amit Negi"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {mentor.tags.map((tag, j) => (
                      <Badge key={j} className="bg-accent text-white border-none text-[8px] uppercase font-black px-2 py-0.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h4 className="text-2xl font-extrabold uppercase text-primary group-hover:text-accent transition-colors leading-none mb-2">{mentor.name}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{mentor.role} • {mentor.exp}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">"{mentor.desc}"</p>
                <div className="flex gap-4 pt-2 border-t border-muted">
                  <Linkedin className="h-4 w-4 text-primary/30 hover:text-primary cursor-pointer transition-colors" />
                  <Youtube className="h-4 w-4 text-primary/30 hover:text-accent cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
