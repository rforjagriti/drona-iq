
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldCheck, UserCheck, Star, Clock, Home, MapPin, CheckCircle2, GraduationCap, Loader2 } from 'lucide-react';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function HomeTuitionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const firestore = useFirestore();

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentClass: '9-10',
    subject: '',
    mode: 'home',
    locality: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (firestore) {
      await addDoc(collection(firestore, 'leads'), {
        ...formData,
        type: 'home_tuition',
        status: 'new',
        createdAt: new Date().toISOString(),
        timestamp: serverTimestamp()
      });
    }

    setLoading(false);
    setSubmitted(true);
  };

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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Parent Name</Label>
                        <Input 
                          placeholder="Full Name" 
                          required 
                          className="bg-muted/30" 
                          value={formData.parentName}
                          onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                        <Input 
                          type="tel" 
                          placeholder="+91 XXXX" 
                          required 
                          className="bg-muted/30"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student Class</Label>
                        <Select value={formData.studentClass} onValueChange={(v) => setFormData({...formData, studentClass: v})}>
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
                        <Input 
                          placeholder="e.g. Math, Physics" 
                          className="bg-muted/30"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Learning Mode</Label>
                        <Select value={formData.mode} onValueChange={(v) => setFormData({...formData, mode: v})}>
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
                      <Input 
                        placeholder="e.g. Rajpur Road, Jakhan, Vasant Vihar" 
                        className="bg-muted/30"
                        value={formData.locality}
                        onChange={(e) => setFormData({...formData, locality: e.target.value})}
                      />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full py-7 h-auto text-lg font-headline bg-accent hover:bg-accent/90">
                      {loading ? <Loader2 className="animate-spin" /> : "Book Free Trial Class"}
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
                    Thank you. A coordinator from our Rajpur Road hub will contact you shortly to confirm your demo schedule.
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
          </div>
        </div>
      </main>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>{children}</div>
}
