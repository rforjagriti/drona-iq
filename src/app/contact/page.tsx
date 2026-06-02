
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const firestore = useFirestore();

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;
    
    setLoading(true);
    try {
      await addDoc(collection(firestore, 'leads'), {
        parentName: formData.parentName,
        studentName: 'General Inquiry',
        phone: formData.phone,
        type: 'general_enquiry',
        status: 'new',
        message: formData.message,
        interest: formData.subject,
        createdAt: new Date().toISOString(),
        timestamp: serverTimestamp()
      });

      // CONVERSION TRACKING EVENT
      // @ts-ignore
      if(window.gtag) gtag('event', 'generate_lead', {
        'event_category': 'form_submission',
        'event_label': 'contact_page'
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error saving lead:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/20">
        <Navbar />
        <main className="container mx-auto px-4 py-32 flex justify-center">
          <Card className="max-w-md w-full border-none shadow-2xl text-center p-12 rounded-[3rem]">
            <div className="bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-extrabold font-headline text-primary mb-4 uppercase">Message Sent!</h2>
            <p className="text-muted-foreground mb-8">Your inquiry has been logged. A counselor will call you shortly.</p>
            <Button onClick={() => setSubmitted(false)} className="w-full h-14 rounded-xl font-bold uppercase tracking-widest">Send Another Message</Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <section className="bg-primary py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline uppercase leading-tight tracking-tighter">
              Get In <span className="text-accent italic">Touch</span>
            </h1>
            <p className="text-xl text-white/60 font-light">
              Connect with Dehradun’s elite academic counselors.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold font-headline text-primary uppercase">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-sm tracking-widest">Main Hub Dehradun</h4>
                    <p className="text-muted-foreground mt-1">3rd Floor, Om Tower, Sahastradhara Road, Near IT Park, Dehradun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none premium-shadow rounded-[3rem] overflow-hidden bg-white">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                    <Input required placeholder="Enter your name" className="h-12 rounded-xl bg-muted/30 border-none" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                    <Input required type="tel" placeholder="+91 XXXX" className="h-12 rounded-xl bg-muted/30 border-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Your Message</Label>
                  <Textarea required placeholder="How can we help you?" className="min-h-[150px] rounded-xl bg-muted/30 border-none p-4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>
                <Button disabled={loading} type="submit" className="w-full h-16 bg-primary text-white font-headline uppercase font-extrabold tracking-widest text-lg rounded-2xl shadow-xl">
                  {loading ? <Loader2 className="animate-spin" /> : <>Send Inquiry <Send className="ml-2 h-5 w-5 text-accent" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
