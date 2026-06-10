
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  PhoneCall, 
  BrainCircuit, 
  GraduationCap, 
  ArrowRight, 
  Activity, 
  UserPlus, 
  Database, 
  LogIn, 
  ShieldAlert, 
  Lock,
  MessageSquare,
  BarChart3
} from 'lucide-react';
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
          role: 'admin',
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
      { label: "Conversions", value: "0", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
      { label: "AI Diagnostic", value: "Active", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
      { label: "Conversion Index", value: "0%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
    ];

    const total = allLeads.length;
    const converted = allLeads.filter(l => l.status === 'converted').length;
    const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : 0;

    return [
      { label: "Total Inquiries", value: total.toString(), icon: PhoneCall, color: "text-orange-500", bg: "bg-orange-50" },
      { label: "Conversions", value: converted.toString(), icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
      { label: "AI Diagnostic", value: "Active", icon: BrainCircuit, color: "text-accent", bg: "bg-accent/10" },
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

  // Unauthorized UI with required contact message
  if (!user || (profile && profile.role !== 'admin')) {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12 rounded-[2.5rem] bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5"><ShieldAlert className="h-32 w-32" /></div>
            <CardContent className="space-y-8 relative z-10">
              <div className="bg-red-50 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
                <ShieldAlert className="h-12 w-12 text-red-600" />
              </div>
              <div className="space-y-4 px-6">
                <h2 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tight leading-none">Admin <br/> <span className="text-red-600">Restricted</span></h2>
                <div className="bg-muted/50 p-6 rounded-2xl border border-red-100">
                  <p className="text-primary font-bold text-sm leading-relaxed">
                    Please contact Droneshwar Defence Academy at <span className="text-accent underline">6399000437</span>. 
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest">They will provide you login ID and password.</p>
                </div>
              </div>
              {!user ? (
                <Button onClick={handleLogin} className="w-full font-headline bg-red-600 text-white hover:bg-red-700 py-7 h-auto rounded-2xl text-lg uppercase tracking-widest font-black shadow-xl">
                  <LogIn className="mr-2 h-5 w-5" /> Admin Login
                </Button>
              ) : (
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full py-6 rounded-2xl font-bold uppercase tracking-widest border-primary text-primary">Return Home</Button>
                </Link>
              )}
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
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-accent border-none px-3 py-1 uppercase text-[10px] font-bold">Admin OS v7.4</Badge>
              <span className="text-green-500 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                <Activity className="h-3 w-3" /> Live Pipeline
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary uppercase tracking-tighter">Command Center</h1>
            <p className="text-muted-foreground font-light flex items-center gap-2">
              <Database className="h-4 w-4 text-accent" /> Real-time Firestore Pipeline Control
            </p>
          </div>
          <div className="flex gap-4">
             <Link href="/admin/leads">
               <Button variant="outline" className="font-headline uppercase text-[10px] font-extrabold rounded-xl h-12 px-6 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all">
                 <BarChart3 className="mr-2 h-4 w-4" /> Full Pipeline
               </Button>
             </Link>
             <Button className="bg-primary text-white font-headline uppercase text-[10px] font-extrabold rounded-xl h-12 px-8 shadow-xl hover:shadow-2xl transition-all">
               <UserPlus className="mr-2 h-4 w-4 text-accent" /> New Enrollment
             </Button>
          </div>
        </div>

        {/* Global Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none premium-shadow hover:translate-y-[-5px] transition-transform duration-300 bg-white rounded-[2rem]">
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
          {/* Recent Inquiries List */}
          <Card className="lg:col-span-2 border-none premium-shadow overflow-hidden bg-white rounded-[2.5rem]">
            <CardHeader className="bg-primary text-white p-10 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Database className="h-24 w-24" /></div>
              <div className="flex justify-between items-center relative z-10">
                <div>
                  <CardTitle className="font-headline text-2xl uppercase tracking-tight">Incoming Lead Queue</CardTitle>
                  <CardDescription className="text-white/60">Live inquiries from Dehradun Hub.</CardDescription>
                </div>
                <Link href="/admin/leads">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl uppercase font-bold text-[10px] px-6">Manage All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-muted">
                {allLeads?.slice(0, 8).map((lead: any) => (
                  <div key={lead.id} className="p-8 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center font-bold text-primary shadow-inner uppercase border border-primary/5">
                        {lead.parentName?.[0] || 'L'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-primary text-lg">{lead.parentName}</p>
                          <Badge variant="outline" className="text-[9px] font-bold uppercase border-primary/10">{lead.type?.replace('_', ' ')}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
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
                        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/5"><ArrowRight className="h-5 w-5 text-accent" /></Button>
                      </Link>
                    </div>
                  </div>
                ))}
                {(leadsLoading || !allLeads) && <div className="p-24 text-center text-muted-foreground italic flex flex-col items-center gap-4">
                  <Activity className="animate-spin h-8 w-8 text-primary opacity-20" />
                  <p className="text-xs uppercase font-bold tracking-widest">Accessing Live Records...</p>
                </div>}
                {allLeads?.length === 0 && !leadsLoading && (
                   <div className="p-24 text-center text-muted-foreground font-light italic">No inquiries detected in the pipeline.</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Module Navigation */}
          <div className="space-y-8">
            <Card className="border-none premium-shadow bg-primary text-white p-10 space-y-6 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="h-32 w-32" /></div>
              <div className="bg-accent p-3 rounded-xl w-fit"><Activity className="h-6 w-6 text-primary" /></div>
              <h3 className="text-2xl font-bold font-headline uppercase leading-tight">System<br/>Infrastructure</h3>
              <div className="grid gap-3 relative z-10">
                {[
                  { label: "Lead CRM Engine", link: "/admin/leads", icon: Users },
                  { label: "Scholar Directory", link: "/admin/students", icon: GraduationCap },
                  { label: "Diagnostic Logs", link: "/admin/health-checks", icon: BrainCircuit },
                  { label: "Faculty Verification", link: "/tutor-portal", icon: UserPlus },
                ].map((m, i) => (
                  <Link href={m.link} key={i}>
                    <Button variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 justify-between font-headline text-[10px] uppercase tracking-widest font-extrabold h-14 rounded-xl">
                      <div className="flex items-center gap-3">
                        <m.icon className="h-4 w-4 text-accent" /> {m.label}
                      </div>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="border-none premium-shadow p-10 text-center space-y-6 rounded-[2.5rem] bg-white border border-primary/5">
              <div className="bg-accent/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-accent shadow-inner">
                 <MessageSquare className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary font-headline uppercase text-xl">Quick Support</h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-4">Contact technical support for any system sync issues.</p>
              </div>
              <Link href="tel:6399000437" className="block">
                <Button className="w-full bg-muted text-primary hover:bg-primary hover:text-white uppercase font-bold text-[10px] tracking-widest h-14 rounded-2xl transition-all">
                  Contact Technical Desk
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
