"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateStudyPlan, type StudyPlannerOutput } from '@/ai/flows/study-planner-flow';
import { BrainCircuit, Loader2, Calendar, BookOpen, Clock, Target, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AIStudyPlanner() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<StudyPlannerOutput | null>(null);
  const [formData, setFormData] = useState({
    studentClass: 'Class 10th',
    targetMarks: '95',
    hours: '4',
    weaknesses: 'Trigonometry, Organic Chemistry'
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await generateStudyPlan({
        studentClass: formData.studentClass,
        targetMarks: parseInt(formData.targetMarks),
        availableHoursPerDay: parseInt(formData.hours),
        weakSubjects: formData.weaknesses.split(',').map(s => s.trim())
      });
      setPlan(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent text-white px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Neural Planner v4.0</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter">AI Study Planner</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Our AI engine optimizes your study routine based on your target scores and current weak points.
          </p>
        </div>

        {!plan ? (
          <Card className="border-none shadow-2xl animate-in fade-in duration-700 overflow-hidden">
            <div className="navy-gradient p-10 text-white flex justify-between items-center">
              <div className="space-y-2">
                <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight">Configuration</CardTitle>
                <CardDescription className="text-white/60">Help our AI understand your academic goals.</CardDescription>
              </div>
              <Sparkles className="h-12 w-12 text-accent opacity-50" />
            </div>
            <CardContent className="p-10 space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Current Class</Label>
                  <Input value={formData.studentClass} onChange={e => setFormData({...formData, studentClass: e.target.value})} className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Target Percentage (%)</Label>
                  <Input type="number" value={formData.targetMarks} onChange={e => setFormData({...formData, targetMarks: e.target.value})} className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Study Hours / Day</Label>
                  <Input type="number" value={formData.hours} onChange={e => setFormData({...formData, hours: e.target.value})} className="h-12 border-primary/10 bg-muted/30" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase text-muted-foreground">Subjects Needing Attention (comma separated)</Label>
                <Input value={formData.weaknesses} onChange={e => setFormData({...formData, weaknesses: e.target.value})} placeholder="Trigonometry, Calculus..." className="h-12 border-primary/10 bg-muted/30" />
              </div>

              <Button onClick={handleGenerate} disabled={loading} className="w-full h-16 bg-primary text-white font-headline text-xl uppercase tracking-widest font-extrabold rounded-xl shadow-xl hover:shadow-2xl transition-all">
                {loading ? <><Loader2 className="animate-spin mr-2" /> Calculating Optimal Routine...</> : <>Generate Study Blueprint <BrainCircuit className="ml-2 h-6 w-6 text-accent" /></>}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="grid lg:grid-cols-3 gap-10">
              <Card className="lg:col-span-2 border-none shadow-2xl bg-white overflow-hidden">
                <div className="bg-primary text-white p-8 flex justify-between items-center">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">Daily Optimization</h3>
                  <Badge className="bg-accent text-white border-none">Active Schedule</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {plan.dailyRoutine.map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="h-12 w-24 shrink-0 bg-muted rounded-xl flex items-center justify-center font-bold text-primary border border-muted group-hover:bg-accent group-hover:text-white transition-colors">{item.time}</div>
                        <div className="space-y-1">
                          <p className="font-bold text-lg text-primary">{item.activity}</p>
                          {item.subject && <Badge variant="outline" className="text-[10px] uppercase font-bold border-primary/20">{item.subject}</Badge>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
                  <div className="p-8 space-y-4">
                    <Target className="h-10 w-10 mb-2" />
                    <h4 className="text-2xl font-headline font-bold uppercase">Weekly Goals</h4>
                    <div className="space-y-3">
                      {plan.weeklyMilestones.map((m, i) => (
                        <div key={i} className="flex gap-3 items-center text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0" /> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-none shadow-xl">
                  <CardHeader className="border-b">
                    <CardTitle className="text-lg font-headline flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Revision Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{plan.revisionStrategy}"</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-sm font-headline flex items-center gap-2 text-primary"><Calendar className="h-4 w-4 text-accent" /> Mock Tests</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    {plan.testSchedule.map((t, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg text-xs font-bold text-primary">
                        {t} <ChevronRight className="h-3 w-3 text-accent" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="text-center">
              <Button variant="ghost" onClick={() => setPlan(null)} className="text-muted-foreground font-headline uppercase tracking-widest text-xs font-bold">Configure New Plan</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
