"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Loader2, BrainCircuit, Calendar, User, ArrowRight, ShieldAlert, LogIn } from 'lucide-react';
import { useFirestore, useCollection, useUser, useAuth, useDoc } from '@/firebase';
import { collection, query, orderBy, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MASTER_ADMIN_EMAIL = 'rforjagriti@gmail.com';

export default function AdminHealthChecks() {
  const { user, loading: authLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const [filter, setFilter] = useState('');

  // Role check
  const userProfileRef = useMemo(() => (firestore && user) ? doc(firestore, 'users', user.uid) : null, [firestore, user]);
  const { data: profile, loading: profileLoading } = useDoc(userProfileRef);

  const checksQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'health_checks'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: checks, loading } = useCollection(checksQuery);

  const handleLogin = async () => {
    if (!auth || !firestore) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      if (loggedUser.email === MASTER_ADMIN_EMAIL) {
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
      }
      
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  const filteredChecks = useMemo(() => {
    if (!checks) return [];
    return checks.filter((c: any) => 
      c.studentName?.toLowerCase().includes(filter.toLowerCase()) ||
      c.subject?.toLowerCase().includes(filter.toLowerCase())
    );
  }, [checks, filter]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <BrainCircuit className="h-12 w-12 text-primary animate-pulse" />
      </div>
    );
  }

  // Unauthorized UI: Strict email check
  if (!user || user.email !== MASTER_ADMIN_EMAIL) {
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
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest">Only the master ID (rforjagriti@gmail.com) can access this dashboard.</p>
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
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Diagnostic Analytics</h1>
            <p className="text-muted-foreground font-light">Lead nurturing via AI Health Check reports</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Filter by student or subject..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-12 h-12 bg-white border-none shadow-sm rounded-xl" 
            />
          </div>
        </div>

        <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem] bg-white">
          <CardHeader className="bg-primary text-white py-8 px-10">
            <div className="flex items-center gap-4">
              <BrainCircuit className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline text-lg uppercase tracking-tight">All Diagnostic Logs</CardTitle>
            </div>
          </CardHeader>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-32 text-center flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary opacity-20" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Fetching AI Reports...</p>
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50 border-none">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-10 py-6">Date</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Student</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Subject / Grade</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Score</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-10">Analysis</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredChecks.map((check: any) => (
                    <TableRow key={check.id} className="hover:bg-muted/30 transition-colors border-b last:border-0 group">
                      <TableCell className="px-10 py-6 font-medium text-muted-foreground">
                        {check.createdAt ? new Date(check.createdAt).toLocaleDateString() : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4 text-accent" />
                          <p className="font-bold text-primary">{check.studentName}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-primary uppercase text-xs">{check.subject}</p>
                        <p className="text-[10px] text-muted-foreground font-bold">{check.gradeLevel}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-bold">
                          {check.score} / {check.totalScore}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-10">
                        <button className="text-accent font-headline font-bold uppercase text-[9px] tracking-widest hover:underline flex items-center gap-1 ml-auto">
                          Full Report <ArrowRight className="h-3 w-3" />
                        </button>
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
