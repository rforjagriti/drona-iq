
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, PhoneCall, BrainCircuit, GraduationCap, ArrowRight, Activity, UserPlus, Database, LogIn, ShieldAlert, Lock } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useAuth, useDoc } from '@/firebase';
import { collection, query, orderBy, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useMemo } from 'react';

export default function AdminDashboard() {
  const { user, loading: authLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();

  // Fetch role-specific profile data
  const userProfileRef = useMemo(() => (firestore && user) ? doc(firestore, 'users', user.uid) : null, [firestore, user]);
  const { data: profile, loading: profileLoading } = useDoc(userProfileRef);

  const handleLogin = async () => {
    if (!auth || !firestore) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      const userRef = doc(firestore, 'users', loggedUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: loggedUser.uid,
          email: loggedUser.email,
          displayName: loggedUser.displayName,
          photoURL: loggedUser.photoURL,
          role: 'admin', // First time login from this page grants admin for demo
          createdAt: new Date().toISOString(),
          timestamp: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('timestamp', 'desc'));
  }, [firestore]);

  const { data: allLeads, loading: leadsLoading } = useCollection(leadsQuery);

  const stats = useMemo(() => {
    if (!allLeads) return [
      { label: "Total Inquiries", value: "0", icon: PhoneCall, color: "text-orange-500", bg: "bg-orange-50" },
      { label: "Successful Conversions", value: "0", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
      { label: "AI Diagnostic Engine", value: "Active", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
      { label: "Conversion Index", value: "0%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
    ];

    const total = allLeads.length;
    const converted = allLeads.filter(l => l.status === 'converted').length;
    const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : 0;

    return [
      { label: "Total Inquiries", value: total.toString(), icon: PhoneCall, color: "text-orange-500", bg: "bg-orange-50" },
      { label: "Successful Conversions", value: converted.toString(), icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
      { label: "AI Diagnostic Engine", value: "Active", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
      { label: "Conversion Index", value: `${conversionRate}%`, icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
    ];
  }, [allLeads]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <div className="flex flex-col items-center gap-4">
          <BrainCircuit className="h-12 w-12 text-primary animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Authenticating Command Hub...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12 rounded-[2.5rem] bg-white">
            <CardContent className="space-y-8">
              <div className="bg-red-50 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto">
                <ShieldAlert className="h-12 w-12 text-red-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tight">Admin Restricted</h2>
                <p className="text-muted-foreground font-light px-6">
                  This portal is for Drona IQ management only. Please log in with an authorized account.
                </p>
              </div>
              <Button onClick={handleLogin} className="w-full font-headline bg-red-600 text-white py-7 h-auto rounded-2xl text-lg uppercase tracking-widest font-black shadow-xl">
                <LogIn className="mr-2 h-5 w-5 text-accent" /> Admin Login
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  // Role Protection
  if (profile && profile.role !== 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12 rounded-[2.5rem] bg-white">
            <CardContent className="space-y-8">
              <div className="bg-orange-50 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto">
                <Lock className="h-12 w-12 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tight">Unauthorized</h2>
                <p className="text-muted-foreground font-light px-6">
                  Your account is registered as a <span className="font-bold text-primary uppercase">{profile.role}</span>. You do not have permissions to access the Admin Command Center.
                </p>
              </div>
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full py-6 rounded-2xl font-bold uppercase tracking-widest">Return to Home</Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold font-headline text-primary uppercase tracking-tighter">Unified OS Command</h1>
            <p className="text-muted-foreground font-light flex items-center gap-2">
              <Database className="h-4 w-4 text-accent" /> Real-time Firestore Pipeline Control
            </p>
          </div>
          <div className="flex gap-4">
             <Link href="/admin/leads">
               <Button variant="outline" className="font-headline uppercase text-[10px] font-extrabold rounded-xl h-12 px-6">View All Leads</Button>
             </Link>
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
                  <CardTitle className="font-headline text-2xl uppercase tracking-tight">Recent Inquiries</CardTitle>
                  <CardDescription className="text-white/60">Top leads from the pipeline.</CardDescription>
                </div>
                <Link href="/admin/leads">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl uppercase font-bold text-[10px] px-6">Lead CRM</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {allLeads?.slice(0, 10).map((lead: any) => (
                  <div key={lead.id} className="p-8 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center font-bold text-primary shadow-inner uppercase">
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
                          lead.status === 'contacted' ? 'bg-orange-500 text-white' :
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
                {(leadsLoading || !allLeads) && <div className="p-20 text-center text-muted-foreground italic flex flex-col items-center gap-4">
                  <Activity className="animate-spin h-8 w-8 text-primary opacity-20" />
                  Loading Live CRM Records...
                </div>}
                {allLeads?.length === 0 && !leadsLoading && (
                   <div className="p-20 text-center text-muted-foreground">No leads found.</div>
                )}
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
                  { label: "Tutor Verification", link: "/tutor-portal" },
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
                <p className="text-xs text-muted-foreground leading-relaxed">Manually register an offline scholar.</p>
              </div>
              <Button className="w-full uppercase font-bold text-[10px] tracking-widest h-14 rounded-2xl shadow-lg">New Admission</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
