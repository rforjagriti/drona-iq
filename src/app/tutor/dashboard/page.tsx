
"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Clock, 
  Plus, 
  CheckCircle2, 
  MessageSquare, 
  LayoutDashboard, 
  TrendingUp,
  Award,
  MoreVertical
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TutorDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();

  // In a real app, we'd query students assigned to this tutor's ID
  const studentsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'students'), orderBy('level', 'desc'));
  }, [firestore]);

  const { data: students, loading } = useCollection(studentsQuery);

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      <div className="navy-gradient py-12 text-white border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-accent text-white border-none uppercase text-[10px] tracking-widest font-bold px-3">Educator Portal v1.0</Badge>
                <div className="flex text-accent">
                  <Award className="fill-current h-3 w-3" />
                  <Award className="fill-current h-3 w-3" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline">Welcome, {user?.displayName?.split(' ')[0] || 'Mentor'}</h1>
              <p className="text-white/60 flex items-center gap-2 font-light uppercase tracking-widest text-xs">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Verified Senior Faculty
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center flex-1 md:flex-none">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Total Classes</p>
                <p className="text-2xl font-bold font-headline">142</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center flex-1 md:flex-none">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Student Rating</p>
                <p className="text-2xl font-bold font-headline text-accent">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-10 relative z-10">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white border shadow-sm p-1 rounded-full w-full max-w-lg mx-auto grid grid-cols-4 h-auto">
            <TabsTrigger value="overview" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="students" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Students</TabsTrigger>
            <TabsTrigger value="schedule" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Schedule</TabsTrigger>
            <TabsTrigger value="earnings" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Today's Sessions", value: "04", icon: Calendar, color: "text-blue-500" },
                { label: "Pending Attendance", value: "02", icon: Clock, color: "text-orange-500" },
                { label: "Reports to Submit", value: "05", icon: BookOpen, color: "text-purple-500" },
                { label: "Growth Insight", value: "Elite", icon: TrendingUp, color: "text-green-500" },
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-md flex items-center p-6 gap-4">
                  <div className="bg-muted p-3 rounded-xl"><stat.icon className={`h-6 w-6 ${stat.color}`} /></div>
                  <div>
                    <p className="text-[10px] font-extrabold text-muted-foreground uppercase">{stat.label}</p>
                    <p className="text-xl font-bold font-headline">{stat.value}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-xl bg-white overflow-hidden">
                <CardHeader className="border-b bg-muted/30 py-6 px-8 flex justify-between items-center flex-row">
                  <div>
                    <CardTitle className="text-xl font-headline font-bold text-primary uppercase">Assigned Scholars</CardTitle>
                    <CardDescription>Live academic profiles of students under your mentorship.</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-none font-bold text-[10px] uppercase">Active Status</Badge>
                </CardHeader>
                <div className="divide-y">
                  {students?.map((student: any) => (
                    <div key={student.id} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{student.studentName?.[0] || 'S'}</div>
                        <div>
                          <p className="font-bold text-primary">{student.studentName}</p>
                          <p className="text-xs text-muted-foreground uppercase font-bold tracking-tight text-[10px]">{student.grade} | {student.targetExam}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-bold">Mark Attendance</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-muted/50"><MoreVertical className="h-4 w-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-2xl border-none">
                            <DropdownMenuItem className="cursor-pointer font-bold">Assign Homework</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Submit Progress Report</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-blue-600">Message Parent</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                  {students?.length === 0 && (
                    <div className="p-10 text-center text-muted-foreground italic">No students assigned yet.</div>
                  )}
                </div>
              </Card>

              <div className="space-y-6">
                <Card className="border-none shadow-xl bg-primary text-white overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-headline uppercase tracking-tight flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-accent" /> Mentor Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 italic text-sm text-white/70 leading-relaxed">
                      "Remember to emphasize numerical practice for the upcoming NDA Mock Test. Use the DIQ Question Bank for Class 10th."
                    </div>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 uppercase font-bold text-[10px] h-11">Add New Note</Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl overflow-hidden">
                  <CardHeader className="bg-muted/30 border-b">
                    <CardTitle className="text-sm font-headline uppercase tracking-tight">Center Notice Board</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></div>
                      <p className="text-xs text-muted-foreground">Staff meeting at Rajpur Road Hub: Friday, 5:00 PM.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></div>
                      <p className="text-xs text-muted-foreground">Monthly faculty training for AI diagnostic tools next Monday.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="students" className="animate-in fade-in duration-500">
             {/* Extended student list could go here */}
             <div className="text-center py-20 text-muted-foreground italic">Comprehensive student analytics loading...</div>
          </TabsContent>
          <TabsContent value="schedule" className="animate-in fade-in duration-500">
             <div className="text-center py-20 text-muted-foreground italic">Calendar sync engine initializing...</div>
          </TabsContent>
          <TabsContent value="earnings" className="animate-in fade-in duration-500">
             <div className="text-center py-20 text-muted-foreground italic">Billing history processing...</div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
