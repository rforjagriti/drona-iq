"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { UserCheck, ShieldCheck, GraduationCap, Briefcase, FileText, CheckCircle2, Loader2 } from 'lucide-react';

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
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-primary text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Tutor Partnership Program</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase">Empowering Educators</h1>
          <p className="text-xl text-muted-foreground">Join Dehradun's most prestigious home tuition network. Teach on your terms.</p>
        </div>

        {step === 1 && (
          <Card className="border-none shadow-2xl">
            <CardHeader className="bg-primary text-white rounded-t-xl py-8">
              <CardTitle className="font-headline uppercase flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-accent" /> Basic Information
              </CardTitle>
              <CardDescription className="text-white/60">Help us verify your identity and professional background.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Enter your full name" className="border-primary/10" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+91 XXXX" className="border-primary/10" />
                </div>
                <div className="space-y-2">
                  <Label>Aadhaar Number (for verification)</Label>
                  <Input placeholder="XXXX-XXXX-XXXX" className="border-primary/10" />
                </div>
                <div className="space-y-2">
                  <Label>Current Locality in Dehradun</Label>
                  <Input placeholder="e.g. Jakhan, Ballupur" className="border-primary/10" />
                </div>
              </div>
              <Button onClick={() => setStep(2)} className="w-full h-12 font-headline uppercase tracking-widest font-bold">Next: Expertise Details</Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <Card className="border-none shadow-2xl">
              <CardHeader className="bg-primary text-white rounded-t-xl py-8">
                <CardTitle className="font-headline uppercase flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-accent" /> Academic Expertise
                </CardTitle>
                <CardDescription className="text-white/60">Select the subjects and classes you are comfortable teaching.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Highest Qualification</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select Qualification" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="masters">Masters / Post-Grad</SelectItem>
                        <SelectItem value="bachelors">Bachelors / Under-Grad</SelectItem>
                        <SelectItem value="eng">Engineering Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Years of Experience</Label>
                    <Input type="number" placeholder="e.g. 5" className="border-primary/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Subject Expertise (comma separated)</Label>
                  <Input placeholder="e.g. Mathematics, Physics, Chemistry" className="border-primary/10" />
                </div>

                <div className="space-y-2">
                  <Label>Resume Link (GDrive / Dropbox)</Label>
                  <Input placeholder="https://..." className="border-primary/10" />
                </div>

                <div className="space-y-2">
                  <Label>Short Bio / Teaching Philosophy</Label>
                  <Textarea placeholder="Tell us how you help students succeed..." className="min-h-[100px]" />
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">Back</Button>
                  <Button type="submit" disabled={loading} className="flex-1 bg-accent text-white font-headline h-12 uppercase">
                    {loading ? <Loader2 className="animate-spin" /> : "Submit Application"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        )}

        {step === 3 && (
          <Card className="border-none shadow-2xl text-center py-16 animate-in zoom-in duration-500">
            <CardContent className="space-y-6">
              <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold font-headline text-primary uppercase">Application Received</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for applying. Our academic board will review your profile and contact you for a demo session within 48 hours.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="font-headline uppercase text-xs">Register Another Account</Button>
                <Button onClick={() => window.location.href = '/'} className="font-headline uppercase text-xs">Return Home</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Verified Badges", desc: "Get a 'Drona IQ Verified' badge to increase your demo requests by 3x." },
            { icon: Briefcase, title: "Full Support", desc: "We handle billing, scheduling, and parent communication for you." },
            { icon: FileText, title: "Smart Content", desc: "Access premium DIQ test papers and study material for your students." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="bg-primary p-3 rounded-full w-fit mx-auto text-accent"><item.icon className="h-6 w-6" /></div>
              <h4 className="font-bold text-primary font-headline text-sm uppercase">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
