
"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, BookOpen, Clock, ShieldCheck, Star, Award, ChevronRight, Bell, User, LayoutDashboard, FileText, Wallet, AlertCircle, Info } from 'lucide-react';
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
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline">Child Progress Monitor</h1>
              <p className="text-white/60 flex items-center gap-2 font-light">
                <ShieldCheck className="h-4 w-4 text-accent" /> Secure access for {user?.displayName || "Guardian"}
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center flex-1 md:flex-none">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Attendance</p>
                <p className="text-2xl font-bold font-headline">98.2%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center flex-1 md:flex-none">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">XP Rank</p>
                <p className="text-2xl font-bold font-headline text-accent">#14</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          <div className="space-y-6">
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-primary text-white rounded-t-xl">
                <CardTitle className="text-lg font-headline flex items-center gap-2">
                  <Bell className="h-5 w-5 text-accent" /> Academic Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="text-xs font-bold text-red-900 uppercase">Warning</p>
                  <p className="text-sm text-red-700">Mathematics Quiz: 45%. Needs improvement in Calculus basics.</p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <p className="text-xs font-bold text-green-900 uppercase">Milestone</p>
                  <p className="text-sm text-green-700">Physics Syllabus: 85% completed ahead of schedule.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-primary text-white">
              <CardContent className="p-6 space-y-4 text-center">
                <Wallet className="h-10 w-10 mx-auto mb-2 text-accent" />
                <h4 className="font-headline font-bold text-xl uppercase">Fee Status</h4>
                <div className="space-y-1">
                  <p className="text-xs text-white/60 uppercase">Current Month</p>
                  <p className="text-2xl font-bold font-headline">PAID</p>
                </div>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bold uppercase text-[10px] h-10 tracking-widest">Billing History</Button>
              </CardContent>
            </Card>

            <Button className="w-full justify-between h-auto py-5 bg-accent hover:bg-accent/90 text-white font-headline uppercase tracking-widest text-[10px] font-bold px-6">
              Download Report Card <FileText className="h-4 w-4" />
            </Button>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Syllabus Progress", value: "78%", icon: BookOpen, color: "text-blue-500" },
                { label: "Homework Streak", value: "12 Days", icon: Award, color: "text-orange-500" },
                { label: "Confidence Index", value: "High", icon: TrendingUp, color: "text-green-500" },
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

            <Card className="border-none shadow-2xl overflow-hidden bg-white">
              <CardHeader className="border-b flex flex-row items-center justify-between py-6">
                <div>
                  <CardTitle className="font-headline font-bold text-primary uppercase tracking-tight">Academic Growth Engine</CardTitle>
                  <CardDescription>Real-time concept mastery tracking via AI diagnostics.</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-700 border-none px-4 py-1 uppercase text-[10px] font-bold animate-pulse">Live Sync</Badge>
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
              <CardHeader className="bg-muted/30 border-b flex justify-between items-center flex-row">
                <CardTitle className="text-lg font-headline uppercase tracking-tight">Monthly Insights</CardTitle>
                <Badge variant="outline"><Info className="h-3 w-3 mr-1" /> AI Generated</Badge>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                   <div className="flex gap-4 items-start">
                     <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0"><TrendingUp className="h-5 w-5 text-accent" /></div>
                     <div>
                       <p className="font-bold text-primary mb-1">Consistent Progression</p>
                       <p className="text-sm text-muted-foreground italic">"Your child has shown a 24% improvement in Physics conceptual clarity over the last 30 days. Focus on 'Wave Optics' is recommended next month."</p>
                     </div>
                   </div>
                   <div className="flex gap-4 items-start">
                     <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><BookOpen className="h-5 w-5 text-blue-600" /></div>
                     <div>
                       <p className="font-bold text-primary mb-1">Homework Pattern</p>
                       <p className="text-sm text-muted-foreground italic">"100% submission rate achieved this month. This discipline is contributing significantly to their mock test rankings."</p>
                     </div>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
