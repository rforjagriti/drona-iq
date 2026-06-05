
"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  MapPin, 
  Zap, 
  Search, 
  ArrowRight,
  Video,
  Home
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

export default function ClassesPage() {
  const [filter, setFilter] = useState('');
  const firestore = useFirestore();

  const classesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'classes'), orderBy('status', 'asc'));
  }, [firestore]);

  const { data: remoteClasses } = useCollection(classesQuery);

  const staticClasses = [
    {
      id: 'c1',
      title: 'NDA Foundation Batch 2026',
      grade: 'Class 10th - 11th',
      subject: 'Maths & GAT',
      type: 'center',
      timing: '04:00 PM - 07:00 PM',
      status: 'enrolling',
      mentor: 'Dr. Amit Negi',
      description: 'Military-grade discipline with intensive board and IR-logical preparation.'
    },
    {
      id: 'c2',
      title: 'Board Excellence: Physics',
      grade: 'Class 12th',
      subject: 'Physics',
      type: 'online',
      timing: '06:30 PM - 08:00 PM',
      status: 'full',
      mentor: 'Dr. Rahul Pratap Singh',
      description: 'Digital live sessions focused on conceptual clarity and mechanics by an 18-year veteran.'
    },
    {
      id: 'c3',
      title: 'Mathematics Intensive',
      grade: 'Class 10th',
      subject: 'Maths',
      type: 'center',
      timing: '05:00 PM - 06:30 PM',
      status: 'enrolling',
      mentor: 'Er. Lokesh Garg',
      description: 'Mastering the board patterns with 17+ years of expertise.'
    }
  ];

  const displayClasses = remoteClasses && remoteClasses.length > 0 ? remoteClasses : staticClasses;

  const filteredClasses = displayClasses.filter((c: any) => 
    c.title.toLowerCase().includes(filter.toLowerCase()) ||
    c.subject.toLowerCase().includes(filter.toLowerCase()) ||
    c.grade.toLowerCase().includes(filter.toLowerCase())
  );

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": displayClasses.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "provider": {
          "@type": "Organization",
          "name": "Drona IQ Academy",
          "sameAs": "https://doondefenceexam.com"
        }
      }
    }))
  };

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
            <p className="text-[8px] font-bold uppercase text-muted-foreground">Mentor</p>
            <p className="text-xs font-bold text-primary truncate">{item.mentor}</p>
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <section className="navy-gradient pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <Badge className="bg-accent text-primary border-none px-6 py-2 uppercase font-extrabold tracking-widest text-[10px]">Course Directory</Badge>
          <h1 className="text-5xl md:text-8xl font-extrabold font-headline uppercase tracking-tighter leading-none">
            Active <br/> <span className="text-accent italic">Learning Hubs.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Real-time directory of running batches in Dehradun. Find your elite learning path guided by the valley's top intellect.
          </p>
          
          <div className="max-w-2xl mx-auto relative mt-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input 
              placeholder="Search by subject, grade..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-16 pl-16 pr-8 bg-white/10 border-white/20 text-white rounded-full backdrop-blur-xl focus-visible:ring-accent text-lg placeholder:text-white/30"
            />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((c: any) => <ClassCard key={c.id} item={c} />)}
        </div>
      </main>
    </div>
  );
}
