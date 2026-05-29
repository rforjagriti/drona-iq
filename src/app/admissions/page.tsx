
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Phone, MapPin, Loader2 } from 'lucide-react';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = useFirestore();

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    currentClass: 'class-10',
    targetExam: 'nda'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;
    
    setLoading(true);

    const leadData = {
      ...formData,
      type: 'admission',
      status: 'new',
      createdAt: new Date().toISOString(),
      timestamp: serverTimestamp()
    };

    const leadsRef = collection(db, 'leads');

    addDoc(leadsRef, leadData)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch(async (error) => {
        setLoading(false);
        const permissionError = new FirestorePermissionError({
          path: leadsRef.path,
          operation: 'create',
          requestResourceData: leadData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
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
                Join the elite cadre of students in Dehradun bridging the gap between potential and performance. Limited slots available for Batch 2026-27.
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
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Parent Name</Label>
                    <Input 
                      placeholder="Full Name" 
                      required 
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Phone Number</Label>
                    <Input 
                      type="tel" 
                      placeholder="+91 XXXX" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Student Name</Label>
                  <Input 
                    placeholder="Child's Name" 
                    required 
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Current Class</Label>
                    <Select value={formData.currentClass} onValueChange={(v) => setFormData({...formData, currentClass: v})}>
                      <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class-8">Class 8th</SelectItem>
                        <SelectItem value="class-10">Class 10th</SelectItem>
                        <SelectItem value="class-12">Class 12th</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Target Exam</Label>
                    <Select value={formData.targetExam} onValueChange={(v) => setFormData({...formData, targetExam: v})}>
                      <SelectTrigger><SelectValue placeholder="Select Exam" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nda">NDA / Foundation</SelectItem>
                        <SelectItem value="jee">JEE</SelectItem>
                        <SelectItem value="neet">NEET</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-white font-headline text-lg py-7 h-auto rounded-xl">
                  {loading ? <Loader2 className="animate-spin" /> : "Request Callback & Study Path"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
