
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, PhoneCall, BrainCircuit, GraduationCap, ArrowRight, PieChart, Activity, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useMemo } from 'react';

export default function AdminDashboard() {
  const firestore = useFirestore();

  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('createdAt', 'desc'), limit(5));
  }, [firestore]);

  const { data: recentLeads, loading: leadsLoading } = useCollection(leadsQuery);

  const stats = [
    { label: "Total Admissions", value: "142", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Pending Leads", value: "24", icon: PhoneCall, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "AI Checks Run", value: "89", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
    { label: "Conversion Rate", value: "18%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Business Overview</h1>
            <p className="text-muted-foreground font-light italic">Drona IQ Unified Management System</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="font-headline uppercase text-[10px] font-bold">Download Reports</Button>
             <Button className="bg-primary text-white font-headline uppercase text-[10px] font-bold">+ New Enrolment</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-default">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main CRM Link */}
          <Card className="lg:col-span-2 border-none shadow-2xl overflow-hidden bg-white">
            <CardHeader className="bg-primary text-white p-8">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="font-headline text-2xl uppercase tracking-tight">Lead Pipeline</CardTitle>
                  <CardDescription className="text-white/60">Real-time inquiries from all sources.</CardDescription>
                </div>
                <Link href="/admin/leads">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Manage All Leads</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentLeads?.map((lead: any) => (
                  <div key={lead.id} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center font-bold text-primary">
                        {lead.parentName?.[0] || 'L'}
                      </div>
                      <div>
                        <p className="font-bold text-primary">{lead.parentName}</p>
                        <p className="text-xs text-muted-foreground">{lead.type} • {lead.studentName}</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 uppercase text-[9px] border-none">{lead.status}</Badge>
                  </div>
                ))}
                {leadsLoading && <div className="p-10 text-center text-muted-foreground italic">Loading leads...</div>}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Other Modules */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-accent text-white p-8 space-y-4">
              <Activity className="h-8 w-8" />
              <h3 className="text-xl font-bold font-headline uppercase">Operational Modules</h3>
              <div className="grid gap-3">
                {[
                  { label: "Home Tuition Allocation", link: "/admin/leads" },
                  { label: "Academic Health Checks", link: "/admin/health-checks" },
                  { label: "Revenue Dashboard", link: "#" },
                  { label: "Marketing Analytics", link: "#" },
                ].map((m, i) => (
                  <Link href={m.link} key={i}>
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 justify-between font-headline text-[10px] uppercase tracking-widest">
                      {m.label} <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="border-none shadow-xl p-8 text-center space-y-4">
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                 <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary font-headline uppercase">Scholar Onboarding</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Assign a converted lead to a batch or tutor to begin their success journey.</p>
              <Button className="w-full uppercase font-bold text-[10px] tracking-widest h-11">Go to Enrolment</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
