
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, PhoneCall, BrainCircuit, GraduationCap, ArrowRight, PieChart, Activity, UserPlus, MapPin, Database } from 'lucide-react';
import Link from 'next/link';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useMemo } from 'react';

export default function AdminDashboard() {
  const firestore = useFirestore();

  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('timestamp', 'desc'), limit(10));
  }, [firestore]);

  const { data: recentLeads, loading: leadsLoading } = useCollection(leadsQuery);

  const stats = [
    { label: "Active Admissions", value: "142", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "New Leads (24h)", value: "08", icon: PhoneCall, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "AI Diagnostic Engine", value: "Active", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
    { label: "Conversion Index", value: "18.4%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tighter">Unified OS Command</h1>
            <p className="text-muted-foreground font-light flex items-center gap-2">
              <Database className="h-4 w-4 text-accent" /> Real-time Firestore Pipeline Control
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="font-headline uppercase text-[10px] font-extrabold rounded-xl h-12 px-6">System Reports</Button>
             <Button className="bg-primary text-white font-headline uppercase text-[10px] font-extrabold rounded-xl h-12 px-8 shadow-xl hover:shadow-2xl transition-all">+ New Enrolment</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none premium-shadow hover:translate-y-[-5px] transition-transform duration-300">
              <CardContent className="p-8 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-4 rounded-2xl`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 border-none premium-shadow overflow-hidden bg-white rounded-[2.5rem]">
            <CardHeader className="bg-primary text-white p-10">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="font-headline text-2xl uppercase tracking-tight">Active Inquiries</CardTitle>
                  <CardDescription className="text-white/60">Multi-source lead pipeline monitoring.</CardDescription>
                </div>
                <Link href="/admin/leads">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl uppercase font-bold text-[10px] px-6">CRM Dashboard</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentLeads?.map((lead: any) => (
                  <div key={lead.id} className="p-8 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center font-bold text-primary shadow-inner">
                        {lead.parentName?.[0] || 'L'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-primary text-lg">{lead.parentName}</p>
                          <Badge variant="outline" className="text-[9px] font-bold uppercase">{lead.type?.replace('_', ' ')}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                           {lead.studentName} • {lead.phone}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-6">
                      <div className="hidden md:block">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">Status</p>
                        <Badge className={`uppercase text-[9px] font-bold px-3 py-1 border-none shadow-sm ${
                          lead.status === 'new' ? 'bg-blue-500 text-white' :
                          lead.status === 'converted' ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          {lead.status}
                        </Badge>
                      </div>
                      <Link href="/admin/leads">
                        <Button variant="ghost" size="icon" className="rounded-xl"><ArrowRight className="h-5 w-5" /></Button>
                      </Link>
                    </div>
                  </div>
                ))}
                {leadsLoading && <div className="p-20 text-center text-muted-foreground italic flex flex-col items-center gap-4">
                  <Activity className="animate-spin h-8 w-8 text-primary opacity-20" />
                  Loading Central Records...
                </div>}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-none premium-shadow bg-accent text-white p-10 space-y-6 rounded-[2.5rem]">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center"><Activity className="h-8 w-8" /></div>
              <h3 className="text-2xl font-bold font-headline uppercase">Operational OS</h3>
              <div className="grid gap-3">
                {[
                  { label: "Lead CRM Engine", link: "/admin/leads" },
                  { label: "Scholar Directory", link: "/admin/students" },
                  { label: "Diagnostic Analytics", link: "/admin/health-checks" },
                  { label: "Tutor Verification Hub", link: "/tutor-portal" },
                ].map((m, i) => (
                  <Link href={m.link} key={i}>
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 justify-between font-headline text-[10px] uppercase tracking-widest font-extrabold h-12 rounded-xl">
                      {m.label} <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="border-none premium-shadow p-10 text-center space-y-6 rounded-[2.5rem] bg-white">
              <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">
                 <UserPlus className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary font-headline uppercase text-xl">Quick Enrollment</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Manually register a scholar who converted offline at Om Tower Hub.</p>
              </div>
              <Button className="w-full uppercase font-bold text-[10px] tracking-widest h-14 rounded-2xl shadow-lg">New Admission</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
