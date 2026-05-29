
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldCheck, UserCheck, Star, Clock, Home, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function HomeTuitionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-accent text-white border-none px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">Premium Home Mentorship</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
              Dehradun's Most Trusted <br/> <span className="text-accent">Home Tuition</span> Network
            </h1>
            <p className="text-xl text-white/70 font-light">
              Verified subject experts delivered to your doorstep. Tailored learning for CBSE, ICSE, and Competitive Exam Foundation.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-accent h-5 w-5" />
                <span className="text-sm font-medium">Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="text-accent h-5 w-5" />
                <span className="text-sm font-medium">Background Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-accent h-5 w-5 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <Card className="border-none shadow-2xl overflow-hidden">
                <CardHeader className="bg-white border-b py-8">
                  <CardTitle className="font-headline text-2xl text-primary uppercase">Request a Free Demo Class</CardTitle>
                  <CardDescription>Our coordinator will match you with the perfect tutor within 2 hours.</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Parent Name</Label>
                        <Input placeholder="Full Name" required className="bg-muted/30" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                        <Input type="tel" placeholder="+91 XXXX" required className="bg-muted/30" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student Class</Label>
                        <Select>
                          <SelectTrigger className="bg-muted/30">
                            <SelectValue placeholder="Select Class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-8">Class 5th - 8th</SelectItem>
                            <SelectItem value="9-10">Class 9th - 10th</SelectItem>
                            <SelectItem value="11-12">Class 11th - 12th</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</Label>
                        <Input placeholder="e.g. Math, Physics" className="bg-muted/30" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Learning Mode</Label>
                        <Select defaultValue="home">
                          <SelectTrigger className="bg-muted/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="home">Home (In-person)</SelectItem>
                            <SelectItem value="online">Online Live</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Locality in Dehradun</Label>
                      <Input placeholder="e.g. Rajpur Road, Jakhan, Vasant Vihar" className="bg-muted/30" />
                    </div>

                    <Button type="submit" className="w-full py-7 h-auto text-lg font-headline bg-accent hover:bg-accent/90">
                      Book Free Trial Class
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center py-20 border-none shadow-xl">
                <CardContent className="space-y-6">
                  <div className="bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-extrabold font-headline text-primary">Demo Requested!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you. A counselor from our Rajpur Road hub will contact you shortly to confirm your demo schedule.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Request for another child</Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Trust Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-primary border-b pb-4">Why Drona IQ Tutors?</h3>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Rigorous Screening", desc: "Only 5% of applicants pass our subject expertise & psychometric test." },
                { icon: Clock, title: "Flexible Timing", desc: "Learn at your comfort. Tutors available from 6 AM to 9 PM." },
                { icon: GraduationCap, title: "Result Oriented", desc: "Regular mock tests and performance tracking via Parent App." },
                { icon: MapPin, title: "Local Presence", desc: "Dehradun-centric network ensures quick tutor replacement if needed." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-primary p-2 h-fit rounded-lg text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-primary text-white border-none">
              <CardContent className="p-6 text-center space-y-4">
                <p className="italic text-white/80">"The tutor provided by Drona IQ for my son's Class 10 Boards was exceptional. His Math score improved from 65 to 94!"</p>
                <p className="font-bold text-accent">— Mrs. Rawat, Jakhan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>{children}</div>
}
