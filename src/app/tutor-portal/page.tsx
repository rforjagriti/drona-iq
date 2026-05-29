"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { UserCheck, ShieldCheck, GraduationCap, Briefcase, FileText, CheckCircle2, Loader2, Sparkles, Plus, Clock } from 'lucide-react';

export default function TutorPortal() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Partner Program v4.0</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter">Educator Command Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">Join Dehradun's most elite network of academic mentors. Empowering 500+ tutors with AI-assisted teaching tools.</p>
        </div>

        {step === 1 && (
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-primary p-10 text-white flex justify-between items-center">
              <div className="space-y-2">
                <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-accent" /> Professional Identity
                </CardTitle>
                <CardDescription className="text-white/60">Step 1: Verification of credentials and location matching.</CardDescription>
              </div>
              <ShieldCheck className="h-16 w-16 text-accent opacity-30" />
            </div>
            <CardContent className="p-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Full Name</Label>
                  <Input placeholder="Maj. Gen. Vikram Singh" className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Phone (WhatsApp Link)</Label>
                  <Input placeholder="+91 XXXX" className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Govt ID / Aadhaar Number</Label>
                  <Input placeholder="XXXX-XXXX-XXXX" className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Locality in Dehradun</Label>
                  <Input placeholder="Rajpur Road / Jakhan" className="h-12 border-primary/10 bg-muted/30" />
                </div>
              </div>
              <Button onClick={() => setStep(2)} className="w-full h-16 font-headline uppercase tracking-widest font-extrabold bg-primary text-white shadow-xl">Continue to Expertise <Plus className="ml-2 h-5 w-5 text-accent" /></Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="navy-gradient p-10 text-white flex justify-between items-center">
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-accent" /> Academic Mastery
                  </CardTitle>
                  <CardDescription className="text-white/60">Step 2: Subject specialization and experience profile.</CardDescription>
                </div>
                <Sparkles className="h-16 w-16 text-accent opacity-30" />
              </div>
              <CardContent className="p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Highest Qualification</Label>
                    <Select>
                      <SelectTrigger className="h-12 border-primary/10 bg-muted/30">
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phd">PhD / Post-Doctorate</SelectItem>
                        <SelectItem value="masters">Masters / Post-Grad</SelectItem>
                        <SelectItem value="eng">Engineering Graduate</SelectItem>
                        <SelectItem value="ex-military">Ex-Defense Personnel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Teaching Experience (Years)</Label>
                    <Input type="number" placeholder="5" className="h-12 border-primary/10 bg-muted/30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Core Expertise (e.g. Physics for NDA, Organic Chem)</Label>
                  <Input placeholder="Enter comma separated subjects..." className="h-12 border-primary/10 bg-muted/30" />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Teaching Philosophy</Label>
                  <Textarea placeholder="How do you ensure student success in competitive patterns?" className="min-h-[120px] bg-muted/30 border-primary/10" />
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 h-12 uppercase font-bold text-[10px]">Back</Button>
                  <Button type="submit" disabled={loading} className="flex-[2] h-12 bg-accent text-white font-headline uppercase tracking-widest font-extrabold shadow-lg">
                    {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Finalize Application"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        )}

        {step === 3 && (
          <Card className="border-none shadow-2xl text-center py-20 animate-in zoom-in duration-700">
            <CardContent className="space-y-8">
              <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold font-headline text-primary uppercase">Profile Under Review</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Excellent! Your application has been logged into our central tutor database. Our academic panel will contact you for a demo within **48 hours**.
                </p>
              </div>
              <div className="flex flex-col sm:row justify-center gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="h-12 px-8 uppercase font-bold text-[10px] tracking-widest">Submit Another Domain</Button>
                <Button onClick={() => window.location.href = '/'} className="h-12 px-8 bg-primary text-white uppercase font-bold text-[10px] tracking-widest">Return Home</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Flexible Schedule", desc: "Set your own hours and manage students via our dedicated app." },
            { icon: Briefcase, title: "Premium Earnings", desc: "Top-tier compensation for verified subject experts in Dehradun." },
            { icon: Sparkles, title: "AI Content Library", desc: "Access premium tests, notes and doubt-solving assistance tools." },
            { icon: ShieldCheck, title: "Verified Status", desc: "Get a DIQ-Verified badge to increase your profile visibility." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-muted text-center space-y-3">
              <div className="bg-primary/5 p-3 rounded-2xl w-fit mx-auto text-primary"><item.icon className="h-6 w-6" /></div>
              <h4 className="font-bold text-primary font-headline text-xs uppercase tracking-tight">{item.title}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
