
"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Home, 
  MapPin, 
  Zap, 
  ChevronRight, 
  Search, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

export default function ClassesPage() {
  const [filter, setFilter] = useState('');
  const firestore = useFirestore();

  // Fetch real-time class data from Firestore
  const classesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'classes'), orderBy('status', 'asc'));
  }, [firestore]);

  const { data: remoteClasses, loading } = useCollection(classesQuery);

  // Fallback static data if Firestore is empty
  const staticClasses = [
    {
      id: 'c1',
      title: 'NDA Foundation Batch 2026',
      grade: 'Class 10th - 11th',
      subject: 'Maths & GAT',
      type: 'center',
      timing: '04:00 PM - 07:00 PM',
      status: 'enrolling',
      mentor: 'Maj. Gen. Aditya Rawat',
      description: 'Military-grade discipline with intensive board preparation.'
    },
    {
      id: 'c2',
      title: 'Board Excellence: Physics',
      grade: 'Class 12th',
      subject: 'Physics',
      type: 'online',
      timing: '06:30 PM - 08:00 PM',
      status: 'full',
      mentor: 'Dr. Shalini Bisht',
      description: 'Digital live sessions focused on conceptual clarity and numericals.'
    },
    {
      id: 'c3',
      title: 'Home Mentorship: Calculus',
      grade: 'Class 12th',
      subject: 'Mathematics',
      type: 'home_tuition',
      timing: 'Flexible',
      status: 'enrolling',
      mentor: 'Er. Amit Negi',
      description: 'One-on-one expert guidance at your doorstep in Rajpur Road.'
    },
    {
      id: 'c4',
      title: 'Junior logic Hub',
      grade: 'Class 7th - 8th',
      subject: 'Science & Vedic Maths',
      type: 'center',
      timing: '03:30 PM - 05:00 PM',
      status: 'upcoming',
      mentor: 'Mentor Rahul Verma',
      description: 'Building cognitive agility through Vedic logic and experiments.'
    }
  ];

  const displayClasses = remoteClasses && remoteClasses.length > 0 ? remoteClasses : staticClasses;

  const filteredClasses = displayClasses.filter((c: any) => 
    c.title.toLowerCase().includes(filter.toLowerCase()) ||
    c.subject.toLowerCase().includes(filter.toLowerCase()) ||
    c.grade.toLowerCase().includes(filter.toLowerCase())
  );

  const ClassCard = ({ item }: { item: any }) => (
    <Card className="border-none shadow-xl overflow-hidden rounded-[2.5rem] group hover:scale-[1.02] transition-all duration-500 bg-white">
      <div className={`p-6 ${
        item.type === 'center' ? 'bg-primary text-white' : 
        item.type === 'online' ? 'bg-blue-600 text-white' : 
        'bg-accent text-primary'
      } flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          {item.type === 'center' ? <MapPin className="h-5 w-5" /> : 
           item.type === 'online' ? <Video className="h-5 w-5" /> : 
           <Home className="h-5 w-5" />}
          <span className="text-[10px] font-black uppercase tracking-widest">{item.type.replace('_', ' ')}</span>
        </div>
        <Badge className={`border-none ${
          item.status === 'enrolling' ? 'bg-green-500 text-white' : 
          item.status === 'full' ? 'bg-red-500 text-white' : 
          'bg-orange-500 text-white'
        } uppercase text-[8px] font-bold`}>
          {item.status}
        </Badge>
      </div>
      <CardContent className="p-8 space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.grade}</p>
          <h3 className="text-2xl font-extrabold font-headline text-primary leading-tight">{item.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground font-light line-clamp-2 italic">"{item.description}"</p>
        
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted">
          <div className="space-y-1">
            <p className="text-[8px] font-bold uppercase text-muted-foreground">Subject</p>
            <p className="text-xs font-bold text-primary flex items-center gap-2"><Zap className="h-3 w-3 text-accent" /> {item.subject}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] font-bold uppercase text-muted-foreground">Timing</p>
            <p className="text-xs font-bold text-primary flex items-center gap-2"><Clock className="h-3 w-3 text-accent" /> {item.timing}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-[10px]">
            {item.mentor[0]}
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold uppercase text-muted-foreground leading-none">Senior Mentor</span>
            <span className="text-xs font-bold text-primary">{item.mentor}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Link href="/admissions" className="w-full">
          <Button className="w-full h-16 bg-muted text-primary hover:bg-primary hover:text-white rounded-none font-headline uppercase tracking-widest text-[10px] font-bold border-t">
            {item.status === 'full' ? 'Join Waitlist' : 'Join This Batch'} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      {/* Hero */}
      <section className="navy-gradient pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <GraduationCap className="h-96 w-96 -mr-20 -mt-10" />
        </div>
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Live Success OS v7.4</Badge>
          <h1 className="text-5xl md:text-8xl font-extrabold font-headline uppercase tracking-tighter leading-none">
            Active <br/> <span className="text-accent italic">Learning Hubs.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Real-time directory of running batches in Dehradun. From Om Tower hubs to verified home mentorship, find your elite learning path.
          </p>
          
          <div className="max-w-2xl mx-auto relative mt-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input 
              placeholder="Search by subject, grade, or school sync..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-16 pl-16 pr-8 bg-white/10 border-white/20 text-white rounded-full backdrop-blur-xl focus-visible:ring-accent text-lg placeholder:text-white/30"
            />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-12 relative z-20">
        <Tabs defaultValue="all" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-white p-1.5 rounded-full shadow-2xl h-auto border border-primary/5">
              <TabsTrigger value="all" className="rounded-full px-8 py-3 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white">All Paths</TabsTrigger>
              <TabsTrigger value="center" className="rounded-full px-8 py-3 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Om Tower Hub</TabsTrigger>
              <TabsTrigger value="home" className="rounded-full px-8 py-3 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Home Mentorship</TabsTrigger>
              <TabsTrigger value="online" className="rounded-full px-8 py-3 font-headline uppercase text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Live Online</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((c: any) => <ClassCard key={c.id} item={c} />)}
              {filteredClasses.length === 0 && (
                <div className="col-span-full py-20 text-center space-y-4">
                  <Sparkles className="h-12 w-12 text-accent mx-auto opacity-20" />
                  <p className="text-muted-foreground italic">No matching classes found. Try a different subject or grade.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="center" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.filter((c: any) => c.type === 'center').map((c: any) => <ClassCard key={c.id} item={c} />)}
            </div>
          </TabsContent>

          <TabsContent value="home" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.filter((c: any) => c.type === 'home_tuition').map((c: any) => <ClassCard key={c.id} item={c} />)}
            </div>
          </TabsContent>

          <TabsContent value="online" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.filter((c: any) => c.type === 'online').map((c: any) => <ClassCard key={c.id} item={c} />)}
            </div>
          </TabsContent>
        </Tabs>

        {/* Global Stats Footer */}
        <section className="mt-32 grid md:grid-cols-4 gap-8">
          {[
            { label: "Active Scholars", value: "142", icon: Users },
            { label: "Verified Mentors", value: "52", icon: ShieldCheck },
            { label: "Hours Logged", value: "2400+", icon: Clock },
            { label: "Success Rate", value: "92%", icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-primary/5 text-center space-y-2">
              <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-3xl font-black text-primary font-headline">{stat.value}</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="py-20 text-center space-y-6">
        <h4 className="text-2xl font-bold font-headline text-primary uppercase">Don't see your batch?</h4>
        <p className="text-muted-foreground max-w-md mx-auto">Our academic counselors at Om Tower can design a personalized learning path just for you.</p>
        <Link href="/contact">
           <Button className="h-16 px-12 bg-primary text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-xl hover:scale-105 transition-all">Request Custom Batch</Button>
        </Link>
      </footer>
    </div>
  );
}
