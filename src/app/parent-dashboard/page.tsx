"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, BookOpen, Clock, ShieldCheck, Star, Award, ChevronRight, Bell, User, LayoutDashboard, FileText } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useUser } from '@/firebase';

const performanceData = [
  { week: 'W1', score: 65 },
  { week: 'W2', score: 72 },
  { week: 'W3', score: 68 },
  { week: 'W4', score: 85 },
  { week: 'W5', score: 92 },
];

const chartConfig: ChartConfig = {
  score: { label: "Performance Score", color: "hsl(var(--accent))" },
};

export default function ParentDashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      
      {/* Premium Dashboard Header */}
      <div className="navy-gradient py-12 text-white border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-accent text-white border-none uppercase text-[10px] tracking-widest font-bold px-3">Parent Hub v2.0</Badge>
                <div className="flex text-accent">
                  <Star className="fill-current h-3 w-3" />
                  <Star className="fill-current h-3 w-3" />
                  <Star className="fill-current h-3 w-3" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline">Parent Control Center</h1>
              <p className="text-white/60 flex items-center gap-2 font-light">
                <Clock className="h-4 w-4" /> Monitoring {user?.displayName || "Student"}'s Progress
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/10 flex-1 md:flex-none p-4 text-white text-center">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Attendance</p>
                <p className="text-2xl font-bold font-headline">98.2%</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/10 flex-1 md:flex-none p-4 text-white text-center">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Academic Rank</p>
                <p className="text-2xl font-bold font-headline text-accent">#04</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Metrics */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-primary text-white rounded-t-xl">
                <CardTitle className="text-lg font-headline flex items-center gap-2">
                  <Bell className="h-5 w-5 text-accent" /> Live Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="text-xs font-bold text-red-900 uppercase">Academic Warning</p>
                  <p className="text-sm text-red-700">Calculus Quiz score: 42%. Extra session recommended.</p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <p className="text-xs font-bold text-green-900 uppercase">Homework</p>
                  <p className="text-sm text-green-700">Physics assignment submitted on time.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-accent text-white">
              <CardContent className="p-6 space-y-4 text-center">
                <LayoutDashboard className="h-10 w-10 mx-auto mb-2" />
                <h4 className="font-headline font-bold text-xl uppercase">Fee Status</h4>
                <p className="text-sm text-white/80">Next billing cycle: June 1st. Amount: ₹4,500</p>
                <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10">Pay Online</Button>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Button variant="outline" className="w-full justify-between h-auto py-4 font-headline uppercase text-[10px] tracking-widest">
                Download Report Card <FileText className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between h-auto py-4 font-headline uppercase text-[10px] tracking-widest">
                Chat with Mentor <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Main Analytics Area */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-primary/5 p-3 rounded-xl"><BookOpen className="h-6 w-6 text-primary" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Syllabus Completion</p><p className="text-xl font-bold">78%</p></div>
              </Card>
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-accent/10 p-3 rounded-xl"><Star className="h-6 w-6 text-accent" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Engagement Score</p><p className="text-xl font-bold">High</p></div>
              </Card>
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-primary/5 p-3 rounded-xl"><TrendingUp className="h-6 w-6 text-primary" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Predicted Marks</p><p className="text-xl font-bold text-green-500">92%</p></div>
              </Card>
            </div>

            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-white border-b flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-headline font-bold text-primary">Performance Trend</CardTitle>
                  <CardDescription>AI-generated growth trajectory based on weekly mocks.</CardDescription>
                </div>
                <Badge variant="outline" className="border-accent text-accent uppercase text-[10px]">Real-time Sync</Badge>
              </CardHeader>
              <CardContent className="p-8 h-[350px]">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dx={-10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="score" stroke="hsl(var(--accent))" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="font-headline text-lg uppercase tracking-tight">Assigned Home Tutors</CardTitle>
              </CardHeader>
              <div className="divide-y">
                {[
                  { name: 'Dr. Rahul Negi', subject: 'Mathematics', sessions: '12/16', rating: 4.8 },
                  { name: 'Ms. Priya Sharma', subject: 'Physics', sessions: '08/16', rating: 4.9 },
                ].map((tutor, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{tutor.name[0]}</div>
                      <div>
                        <p className="font-bold text-primary">{tutor.name}</p>
                        <p className="text-xs text-muted-foreground">{tutor.subject} • {tutor.sessions} Sessions Done</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-accent mb-1 justify-end">
                        <Star className="h-3 w-3 fill-current" /> <span className="text-xs font-bold">{tutor.rating}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase h-8">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
