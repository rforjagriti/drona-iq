"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, BookOpen, Clock, ShieldCheck, Star, Award, ChevronRight } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

const performanceData = [
  { month: 'Jan', math: 65, physics: 70, chem: 60 },
  { month: 'Feb', math: 68, physics: 72, chem: 65 },
  { month: 'Mar', math: 75, physics: 78, chem: 70 },
  { month: 'Apr', math: 82, physics: 80, chem: 75 },
  { month: 'May', math: 88, physics: 85, chem: 82 },
];

const chartConfig: ChartConfig = {
  math: { label: "Mathematics", color: "hsl(var(--chart-1))" },
  physics: { label: "Physics", color: "hsl(var(--chart-2))" },
  chem: { label: "Chemistry", color: "hsl(var(--chart-3))" },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      {/* Premium Header */}
      <div className="navy-gradient py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-accent text-white border-none uppercase text-[10px] tracking-widest font-bold">Premium Parent Portal</Badge>
                <div className="flex text-accent h-4 w-4">
                  <Star className="fill-current h-3 w-3" />
                  <Star className="fill-current h-3 w-3" />
                  <Star className="fill-current h-3 w-3" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-headline">Aarav Sharma's Progress</h1>
              <p className="text-white/60 font-light italic">NDA Foundation Batch | Student ID: DIQ-2024-089</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
                <p className="text-white/50 text-xs uppercase font-bold mb-1">Attendance</p>
                <p className="text-2xl font-bold font-headline">96.4%</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
                <p className="text-white/50 text-xs uppercase font-bold mb-1">Growth Index</p>
                <p className="text-2xl font-bold font-headline text-accent">+24%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white border shadow-sm p-1 rounded-full w-full max-w-md mx-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="overview" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="academic" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Academic</TabsTrigger>
            <TabsTrigger value="attendance" className="rounded-full py-2.5 font-headline uppercase text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
            {/* Quick Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Weekly Tests', value: '08/08', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
                { label: 'Practice Hours', value: '42.5h', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
                { label: 'Subject Ranking', value: 'Top 5%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
                { label: 'Mock Rank', value: 'AIR 42', icon: Award, color: 'text-purple-500', bg: 'bg-purple-50' },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`${item.bg} p-3 rounded-xl`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">{item.label}</p>
                      <p className="text-xl font-bold font-headline text-primary">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Analytics Chart */}
              <Card className="lg:col-span-2 border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline font-bold text-primary flex items-center justify-between">
                    Learning Curve Analysis
                    <Badge variant="outline" className="border-primary/10 text-primary uppercase text-[10px]">Real-time Data</Badge>
                  </CardTitle>
                  <CardDescription>Visual breakdown of concept mastery over the last 5 months.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 h-[350px]">
                  <ChartContainer config={chartConfig} className="w-full h-full">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorMath" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dx={-10} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="math" stroke="hsl(var(--chart-1))" strokeWidth={3} fillOpacity={1} fill="url(#colorMath)" />
                      <Area type="monotone" dataKey="physics" stroke="hsl(var(--chart-2))" strokeWidth={3} fill="transparent" />
                      <Area type="monotone" dataKey="chem" stroke="hsl(var(--chart-3))" strokeWidth={3} fill="transparent" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Mentorship Updates */}
              <div className="space-y-6">
                <Card className="border-none shadow-xl">
                  <CardHeader className="bg-primary text-white rounded-t-xl py-6">
                    <CardTitle className="text-lg font-headline font-bold">Mentor's Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "Aarav is showing exceptional results in Analytical Physics. Focus next week should shift to Organic Chemistry naming conventions."
                      </p>
                    </div>
                    <div className="pt-4 border-t border-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-primary uppercase">Confidence Index</span>
                        <span className="text-xs font-bold text-accent">88%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full">
                        <div className="h-full bg-accent w-[88%] rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-accent text-white">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <ShieldCheck className="h-12 w-12" />
                    <h4 className="font-headline font-bold text-lg">Council Meeting Scheduled</h4>
                    <p className="text-white/80 text-sm">Next parent-mentor interaction: <br/> <strong>Sat, May 15th at 4:30 PM</strong></p>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 mt-2 font-headline">Reschedule</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Test Results Table */}
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle className="font-headline font-bold text-primary">Detailed Assessment Logs</CardTitle>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-xs">Date</th>
                      <th className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-xs">Assessment Title</th>
                      <th className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-xs">Score</th>
                      <th className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-xs">Percentile</th>
                      <th className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-xs">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {[
                      { date: 'May 04, 2024', title: 'Periodic Test - Kinematics', score: '42/50', percentile: '92nd' },
                      { date: 'Apr 28, 2024', title: 'Full Length - NDA Mock #4', score: '380/600', percentile: '88th' },
                      { date: 'Apr 15, 2024', title: 'Calculus Intensive', score: '88/100', percentile: '95th' },
                      { date: 'Apr 02, 2024', title: 'English Proficiency V', score: '95/100', percentile: '99th' },
                    ].map((test, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-muted-foreground">{test.date}</td>
                        <td className="px-6 py-4 font-bold text-primary">{test.title}</td>
                        <td className="px-6 py-4 font-bold text-primary">{test.score}</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">{test.percentile}</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-accent flex items-center gap-1 font-bold text-xs uppercase hover:underline">
                            Details <ChevronRight className="h-3 w-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="academic" className="text-center py-20 animate-in fade-in duration-500">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground">Deep dive subject analytics coming soon to your parent portal.</p>
          </TabsContent>
          <TabsContent value="attendance" className="text-center py-20 animate-in fade-in duration-500">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground">Live session attendance tracking logs available after next update.</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}