
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, BookOpen, Clock, ShieldCheck, Star, Award, ChevronRight, Bell, User } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline">Rohan's Academic Journey</h1>
              <p className="text-white/60 flex items-center gap-2 font-light">
                <Clock className="h-4 w-4" /> Last assessment updated 2 hours ago
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/10 flex-1 md:flex-none p-4 text-white">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Attendance</p>
                <p className="text-2xl font-bold font-headline">98.2%</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/10 flex-1 md:flex-none p-4 text-white">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Syllabus Covered</p>
                <p className="text-2xl font-bold font-headline text-accent">74%</p>
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
                  <Bell className="h-5 w-5 text-accent" /> Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="text-xs font-bold text-red-900 uppercase">Critical</p>
                  <p className="text-sm text-red-700">Physics Chapter 4 test failed. Revision scheduled for Tuesday.</p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-xs font-bold text-blue-900 uppercase">Update</p>
                  <p className="text-sm text-blue-700">Homework for Math (Calculus) submitted on time.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-accent text-white">
              <CardContent className="p-6 space-y-4">
                <Award className="h-10 w-10 mb-2" />
                <h4 className="font-headline font-bold text-xl">Top 5% Performer</h4>
                <p className="text-sm text-white/80">Rohan ranks in the top 5% of our NDA Foundation batch in Dehradun.</p>
                <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10">View Ranking</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Analytics Area */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-primary/5 p-3 rounded-xl"><BookOpen className="h-6 w-6 text-primary" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase">Upcoming Tests</p><p className="text-xl font-bold">03</p></div>
              </Card>
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-accent/10 p-3 rounded-xl"><Star className="h-6 w-6 text-accent" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase">Teacher Rating</p><p className="text-xl font-bold">Exemplary</p></div>
              </Card>
              <Card className="border-none shadow-sm flex items-center p-6 gap-4">
                <div className="bg-primary/5 p-3 rounded-xl"><TrendingUp className="h-6 w-6 text-primary" /></div>
                <div><p className="text-xs font-bold text-muted-foreground uppercase">Growth (30d)</p><p className="text-xl font-bold text-green-500">+18%</p></div>
              </Card>
            </div>

            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-white border-b flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-headline font-bold text-primary">Performance Trend</CardTitle>
                  <CardDescription>Weekly mock test progress across all subjects.</CardDescription>
                </div>
                <Tabs defaultValue="all">
                  <TabsList className="bg-muted/50 rounded-full h-8">
                    <TabsTrigger value="all" className="rounded-full text-xs">All</TabsTrigger>
                    <TabsTrigger value="math" className="rounded-full text-xs">Math</TabsTrigger>
                    <TabsTrigger value="sci" className="rounded-full text-xs">Science</TabsTrigger>
                  </TabsList>
                </Tabs>
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
              <CardHeader className="border-b">
                <CardTitle className="font-headline text-lg">Teacher Remarks & Homework Status</CardTitle>
              </CardHeader>
              <div className="divide-y">
                {[
                  { subject: 'Mathematics', teacher: 'Dr. Negi', remark: 'Strong conceptual clarity. Needs more practice in integration.', status: 'Completed' },
                  { subject: 'Physics', teacher: 'Prof. Rawat', remark: 'Good performance in Kinematics. Missed one assignment.', status: 'Pending' },
                  { subject: 'Chemistry', teacher: 'Ms. Sharma', remark: 'Exceptional in Organic Chemistry naming conventions.', status: 'Completed' },
                ].map((item, i) => (
                  <div key={i} className="p-6 flex flex-col md:flex-row justify-between gap-4 hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-primary">{item.subject}</h5>
                        <span className="text-xs text-muted-foreground">• {item.teacher}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"{item.remark}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={item.status === 'Completed' ? 'default' : 'destructive'} className="rounded-full text-[10px] uppercase">{item.status}</Badge>
                      <Button variant="ghost" size="sm">Details <ChevronRight className="h-4 w-4" /></Button>
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
