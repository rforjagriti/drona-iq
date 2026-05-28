"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12">
            <CardContent className="space-y-6">
              <div className="bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold font-headline text-primary">Application Received!</h2>
              <p className="text-muted-foreground">
                Our academic counselor will reach out to you within the next 2 hours to schedule your personalized center visit at Rajpur Road.
              </p>
              <Button onClick={() => window.location.href = '/'} className="w-full font-headline">Return Home</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/10">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold font-headline text-primary leading-tight">
                Secure Your Seat at <br/> <span className="text-accent">Drona IQ Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join the elite cadre of students in Dehradun bridging the gap between potential and performance. Limited slots available for Batch 2024.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="bg-primary p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Counseling Hotline</h4>
                  <p className="text-muted-foreground">+91 99999 00000 (09:00 - 20:00)</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="bg-primary p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Head Hub</h4>
                  <p className="text-muted-foreground">3rd Floor, Elite Heights, Rajpur Road, Dehradun</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
              <h4 className="font-headline font-bold text-primary mb-4">The Drona Trust Promise</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-primary/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Guaranteed Gap-Analysis for every new admission.
                </li>
                <li className="flex items-center gap-2 text-sm text-primary/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Direct Mentorship by Subject Matter Experts.
                </li>
                <li className="flex items-center gap-2 text-sm text-primary/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Interactive Parent Monitoring Dashboard Access.
                </li>
              </ul>
            </div>
          </div>

          <Card className="border-none shadow-2xl p-2 bg-white">
            <CardHeader className="bg-primary text-white rounded-xl py-8 mb-4">
              <CardTitle className="font-headline uppercase tracking-tight">Admission Inquiry</CardTitle>
              <CardDescription className="text-white/60">Fill in the details to start your child's success journey.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Parent Name</Label>
                    <Input placeholder="Full Name" required className="border-muted bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                    <Input type="tel" placeholder="+91 XXXX" required className="border-muted bg-muted/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student Name</Label>
                  <Input placeholder="Child's Name" required className="border-muted bg-muted/20" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Current Class</Label>
                    <Select defaultValue="class-8">
                      <SelectTrigger className="border-muted bg-muted/20">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class-8">Class 8th</SelectItem>
                        <SelectItem value="class-9">Class 9th</SelectItem>
                        <SelectItem value="class-10">Class 10th</SelectItem>
                        <SelectItem value="class-11">Class 11th</SelectItem>
                        <SelectItem value="class-12">Class 12th</SelectItem>
                        <SelectItem value="dropper">Dropper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Target Exam</Label>
                    <Select defaultValue="nda">
                      <SelectTrigger className="border-muted bg-muted/20">
                        <SelectValue placeholder="Select Exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nda">NDA / Foundation</SelectItem>
                        <SelectItem value="jee">JEE Mains / Advance</SelectItem>
                        <SelectItem value="neet">NEET</SelectItem>
                        <SelectItem value="boards">School Boards Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-white font-headline text-lg py-7 h-auto rounded-xl mt-4">
                  {loading ? <Loader2 className="animate-spin" /> : "Request Callback & Study Path"}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  By submitting, you agree to receive academic updates from Drona IQ.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}