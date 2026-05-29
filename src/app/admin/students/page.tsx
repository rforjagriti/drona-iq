"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Loader2, GraduationCap, Trophy, Target, MoreVertical, UserPlus, FileText } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminStudents() {
  const firestore = useFirestore();
  const [filter, setFilter] = useState('');

  const studentsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'students'), orderBy('level', 'desc'));
  }, [firestore]);

  const { data: students, loading } = useCollection(studentsQuery);

  const filteredStudents = useMemo(() => {
    if (!students) return [];
    return students.filter((s: any) => 
      s.studentName?.toLowerCase().includes(filter.toLowerCase()) ||
      s.userId?.toLowerCase().includes(filter.toLowerCase())
    );
  }, [students, filter]);

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Scholar Directory</h1>
            <p className="text-muted-foreground font-light">Academic performance & XP monitoring engine</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button variant="outline" className="font-headline uppercase tracking-widest text-[10px] font-bold"><FileText className="mr-2 h-4 w-4" /> Bulk Export</Button>
            <Button className="bg-primary text-white font-headline uppercase tracking-widest text-[10px] font-bold px-6 shadow-xl"><UserPlus className="mr-2 h-4 w-4" /> Enroll Student</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Active Scholars", count: students?.length || 0, color: "text-blue-500", bg: "bg-blue-50", icon: GraduationCap },
            { label: "Elite Tier (Lvl 10+)", count: students?.filter(s => s.level >= 10).length || 0, color: "text-accent", bg: "bg-accent/10", icon: Trophy },
            { label: "Avg. Progression", count: "82%", color: "text-green-500", bg: "bg-green-50", icon: Target },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
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
              <CardTitle className="font-headline text-lg uppercase tracking-tight">Live Student Database</CardTitle>
              <Badge className="bg-primary text-white border-none text-[9px] uppercase font-bold tracking-widest">One Backend</Badge>
            </div>
            <div className="relative flex-1 md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name or ID..." 
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
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Accessing Academic Records...</p>
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50 border-none">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-10 py-6">Scholar</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Level / XP</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Class / Goal</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-10">Manage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student: any) => (
                    <TableRow key={student.id} className="hover:bg-muted/30 transition-colors border-b last:border-0 group">
                      <TableCell className="px-10 py-6">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                            {student.studentName?.[0] || 'S'}
                          </div>
                          <div>
                            <p className="font-bold text-primary leading-tight">{student.studentName || 'Unnamed'}</p>
                            <p className="text-[9px] text-muted-foreground font-bold uppercase">ID: {student.userId?.slice(0, 8)}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-bold text-primary uppercase text-xs">Level {student.level || 0}</p>
                          <p className="text-[10px] text-accent font-bold">{student.xp || 0} XP Total</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-primary uppercase text-xs">{student.grade || 'N/A'}</p>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">{student.targetExam || 'General'}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700 border-none uppercase text-[9px] font-bold">Active</Badge>
                      </TableCell>
                      <TableCell className="text-right px-10">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-muted/50"><MoreVertical className="h-4 w-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-2xl border-none">
                            <DropdownMenuItem className="cursor-pointer font-bold">View Growth Chart</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Learning Plan</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-600">Suspend Access</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredStudents.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-20 text-muted-foreground italic">No scholars found matching your search.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
