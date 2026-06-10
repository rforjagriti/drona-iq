
"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Phone, Loader2, Users, PieChart, MoreVertical, CheckCircle2, Clock, ShieldAlert, LogIn, Lock, BrainCircuit } from 'lucide-react';
import { useFirestore, useCollection, useUser, useAuth, useDoc } from '@/firebase';
import { collection, query, orderBy, doc, updateDoc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

export default function AdminLeads() {
  const { user, loading: authLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const [filter, setFilter] = useState('');

  // Role check
  const userProfileRef = useMemo(() => (firestore && user) ? doc(firestore, 'users', user.uid) : null, [firestore, user]);
  const { data: profile, loading: profileLoading } = useDoc(userProfileRef);
  
  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('timestamp', 'desc'));
  }, [firestore]);

  const { data: leads, loading } = useCollection(leadsQuery);

  const handleLogin = async () => {
    if (!auth || !firestore) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      const userRef = doc(firestore, 'users', loggedUser.uid);
      
      await setDoc(userRef, {
        uid: loggedUser.uid,
        email: loggedUser.email,
        displayName: loggedUser.displayName,
        photoURL: loggedUser.photoURL,
        role: 'admin',
        lastLogin: new Date().toISOString(),
        timestamp: serverTimestamp()
      }, { merge: true });
      
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  const filteredLeads = useMemo(() => {
    if (!leads) return [];
    return leads.filter((l: any) => 
      l.parentName?.toLowerCase().includes(filter.toLowerCase()) ||
      l.studentName?.toLowerCase().includes(filter.toLowerCase()) ||
      l.phone?.includes(filter)
    );
  }, [leads, filter]);

  const updateLeadStatus = async (leadId: string, status: string) => {
    if (!firestore) return;
    const leadRef = doc(firestore, 'leads', leadId);
    await updateDoc(leadRef, { status });
  };

  const stats = useMemo(() => {
    if (!leads) return { new: 0, converted: 0, total: 0 };
    return {
      new: leads.filter(l => l.status === 'new').length,
      converted: leads.filter(l => l.status === 'converted').length,
      total: leads.length
    };
  }, [leads]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <BrainCircuit className="h-12 w-12 text-primary animate-pulse" />
      </div>
    );
  }

  if (!user || (profile && profile.role !== 'admin')) {
    return (
      <div className="min-h-screen flex flex-col bg-muted/10">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4 pt-32">
          <Card className="max-w-md w-full border-none shadow-2xl text-center py-12 rounded-[2.5rem] bg-white">
            <CardContent className="space-y-8">
              <div className="bg-red-50 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto">
                <ShieldAlert className="h-12 w-12 text-red-600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tight">Access Restricted</h2>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-primary font-bold text-sm leading-relaxed">
                    Please contact Droneshwar Defence Academy at <span className="text-accent underline">6399000437</span>.
                  </p>
                </div>
              </div>
              <Button onClick={handleLogin} className="w-full font-headline bg-red-600 text-white py-7 h-auto rounded-2xl text-lg uppercase tracking-widest font-black shadow-xl">
                <LogIn className="mr-2 h-5 w-5" /> Admin Login
              </Button>
              {user && (
                <Link href="/" className="block mt-4">
                  <p className="text-xs text-muted-foreground hover:underline">Return to Home Page</p>
                </Link>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Lead Command Center</h1>
            <p className="text-muted-foreground font-light italic">Managing real-time inquiries from Dehradun.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="font-headline uppercase tracking-widest text-[10px] font-bold"><PieChart className="mr-2 h-4 w-4" /> Reports</Button>
            <Button className="bg-primary text-white font-headline uppercase tracking-widest text-[10px] font-bold px-6">+ Add Lead</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "New Inquiries", count: stats.new, color: "text-blue-500", bg: "bg-blue-50", icon: Clock },
            { label: "Conversions", count: stats.converted, color: "text-green-500", bg: "bg-green-50", icon: CheckCircle2 },
            { label: "Total Database", count: stats.total, color: "text-primary", bg: "bg-muted", icon: Users },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm overflow-hidden">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.count}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem] bg-white">
          <CardHeader className="bg-white border-b py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <CardTitle className="font-headline text-lg uppercase tracking-tight">Active Pipeline</CardTitle>
              <Badge className="bg-green-500/10 text-green-600 border-none animate-pulse">Live Firestore</Badge>
            </div>
            <div className="relative flex-1 md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search name or phone..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-12 h-12 bg-muted/20 border-none rounded-xl" 
              />
            </div>
          </CardHeader>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-32 text-center flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary opacity-20" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Accessing Records...</p>
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50 border-none">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-10 py-6">Date</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Parent / Student</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Inquiry Type</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-10">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead: any) => (
                    <TableRow key={lead.id} className="hover:bg-muted/30 transition-colors border-b last:border-0 group">
                      <TableCell className="px-10 py-6 font-medium text-muted-foreground text-xs">
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-IN') : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                            {lead.parentName?.[0] || 'L'}
                          </div>
                          <div>
                            <p className="font-bold text-primary leading-tight text-sm">{lead.parentName}</p>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">{lead.studentName} • {lead.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[9px] uppercase font-bold border-primary/10 px-2 py-0.5">
                          {lead.type?.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={`uppercase text-[9px] font-black px-3 py-1 border-none shadow-sm ${
                          lead.status === 'new' ? 'bg-blue-500 text-white' :
                          lead.status === 'contacted' ? 'bg-orange-500 text-white' :
                          lead.status === 'converted' ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-10">
                        <div className="flex justify-end gap-2">
                          <Link href={`tel:${lead.phone}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-green-600 bg-green-50"><Phone className="h-4 w-4" /></Button>
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-muted/50"><MoreVertical className="h-4 w-4" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-2xl border-none">
                              <DropdownMenuItem onClick={() => updateLeadStatus(lead.id, 'contacted')} className="cursor-pointer font-bold">Mark Contacted</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateLeadStatus(lead.id, 'converted')} className="cursor-pointer text-green-600 font-bold">Mark Converted</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateLeadStatus(lead.id, 'lost')} className="cursor-pointer text-red-500">Mark Lost</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
