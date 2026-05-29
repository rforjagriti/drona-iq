"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { getCareerGuidance, type CareerGuidanceOutput } from '@/ai/flows/career-guidance-flow';
import { Compass, Loader2, Sparkles, Target, GraduationCap, MapPin, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

export default function CareerGuidance() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CareerGuidanceOutput | null>(null);
  const [formData, setFormData] = useState({
    currentClass: 'Class 10th',
    interests: 'Robotics, Space, Mathematics',
    strengths: 'Analytical Thinking, Physics'
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await getCareerGuidance({
        currentClass: formData.currentClass,
        interests: formData.interests.split(',').map(s => s.trim()),
        academicStrengths: formData.strengths.split(',').map(s => s.trim())
      });
      setResult(response);
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
          <Badge className="bg-accent text-white px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Visionary AI Core</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter">AI Career Guidance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Don't just choose a stream. Architect a future with Dehradun's most advanced career prediction engine.
          </p>
        </div>

        {!result ? (
          <Card className="border-none shadow-2xl overflow-hidden animate-in fade-in duration-700">
            <div className="navy-gradient p-12 text-white flex justify-between items-center">
              <div className="space-y-2">
                <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight">Future Architect</CardTitle>
                <CardDescription className="text-white/60">Help our AI map your cognitive strengths to global opportunities.</CardDescription>
              </div>
              <Compass className="h-16 w-16 text-accent opacity-30 animate-pulse" />
            </div>
            <CardContent className="p-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Current Standard</Label>
                  <Input value={formData.currentClass} onChange={e => setFormData({...formData, currentClass: e.target.value})} className="h-12 border-primary/10 bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Interests & Hobbies</Label>
                  <Input value={formData.interests} onChange={e => setFormData({...formData, interests: e.target.value})} placeholder="e.g. Coding, Music, Sports" className="h-12 border-primary/10 bg-muted/30" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Top Academic Strengths</Label>
                <Input value={formData.strengths} onChange={e => setFormData({...formData, strengths: e.target.value})} placeholder="e.g. Physics, History, Public Speaking" className="h-12 border-primary/10 bg-muted/30" />
              </div>
              <Button onClick={handleGenerate} disabled={loading} className="w-full h-16 bg-primary text-white font-headline text-xl uppercase tracking-widest font-extrabold rounded-xl shadow-xl">
                {loading ? <><Loader2 className="animate-spin mr-2" /> Plotting Career Trajectories...</> : <>Discover My Path <Sparkles className="ml-2 h-6 w-6 text-accent" /></>}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-2xl bg-white overflow-hidden">
                <CardHeader className="bg-primary text-white p-8">
                  <CardTitle className="text-2xl font-headline font-bold uppercase tracking-tight">Your Career Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="bg-muted/30 p-6 rounded-2xl border-l-4 border-accent">
                    <p className="text-lg leading-relaxed text-primary font-light italic">"{result.careerRoadmap}"</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-primary uppercase text-sm tracking-widest flex items-center gap-2"><Target className="h-4 w-4 text-accent" /> Recommended Streams</h4>
                    <div className="flex flex-wrap gap-3">
                      {result.recommendedStreams.map((s, i) => (
                        <Badge key={i} className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold">{s}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-primary uppercase text-sm tracking-widest flex items-center gap-2"><GraduationCap className="h-4 w-4 text-accent" /> Target Entrance Exams</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {result.requiredEntranceExams.map((e, i) => (
                        <div key={i} className="p-4 border rounded-xl bg-muted/20">
                          <p className="font-bold text-primary">{e.examName}</p>
                          <p className="text-xs text-muted-foreground uppercase mt-1">Start Prep: {e.idealPrepStartTime}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <h4 className="text-xl font-headline font-bold uppercase flex items-center gap-2"><BookOpen className="h-5 w-5" /> Skills to Build</h4>
                    <div className="space-y-3">
                      {result.skillsToDevelop.map((s, i) => (
                        <div key={i} className="flex gap-3 items-center text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0" /> {s}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl p-8 text-center space-y-4">
                  <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary"><MapPin className="h-8 w-8" /></div>
                  <h4 className="font-bold text-primary font-headline uppercase">Dehradun Hub Support</h4>
                  <p className="text-sm text-muted-foreground">Book a face-to-face session with our Senior Counselor at Rajpur Road to finalize your exam strategy.</p>
                  <Button variant="outline" className="w-full border-primary text-primary font-bold uppercase text-[10px]">Schedule In-Person</Button>
                </Card>
              </div>
            </div>
            <div className="text-center">
              <Button variant="ghost" onClick={() => setResult(null)} className="text-muted-foreground font-headline uppercase tracking-widest text-xs font-bold">Run New Analysis</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
