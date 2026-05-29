
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateRevisionNotes, type RevisionOutput } from '@/ai/flows/revision-generator-flow';
import { Sparkles, Loader2, BookOpen, ListChecks, Zap, Download, FileText, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function RevisionGeneratorPage() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<RevisionOutput | null>(null);
  const [formData, setFormData] = useState({
    topic: 'Laws of Motion',
    grade: 'Class 11th',
    depth: 'Exam Focused' as const
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await generateRevisionNotes(formData);
      setNotes(response);
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
          <Badge className="bg-accent text-white px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Neural Revision Engine</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary uppercase tracking-tighter">AI Revision Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Turn complex chapters into concise, exam-winning notes in seconds.
          </p>
        </div>

        {!notes ? (
          <Card className="border-none shadow-2xl overflow-hidden animate-in fade-in duration-700">
            <div className="navy-gradient p-12 text-white flex justify-between items-center">
              <div className="space-y-2">
                <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight">Configuration</CardTitle>
                <CardDescription className="text-white/60">Select your topic and depth for the AI to process.</CardDescription>
              </div>
              <BookOpen className="h-16 w-16 text-accent opacity-30" />
            </div>
            <CardContent className="p-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Subject / Topic</Label>
                  <Input 
                    value={formData.topic} 
                    onChange={e => setFormData({...formData, topic: e.target.value})} 
                    placeholder="e.g. Periodic Table, Calculus"
                    className="h-12 border-primary/10 bg-muted/30" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Grade Level</Label>
                  <Input 
                    value={formData.grade} 
                    onChange={e => setFormData({...formData, grade: e.target.value})} 
                    className="h-12 border-primary/10 bg-muted/30" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase text-muted-foreground">Analysis Mode</Label>
                <Select value={formData.depth} onValueChange={(v: any) => setFormData({...formData, depth: v})}>
                  <SelectTrigger className="h-12 border-primary/10 bg-muted/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Quick Summary">Quick Summary (1-page notes)</SelectItem>
                    <SelectItem value="Detailed Analysis">Detailed Analysis (Deep concept map)</SelectItem>
                    <SelectItem value="Exam Focused">Exam Focused (Key questions & formulas)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleGenerate} disabled={loading} className="w-full h-16 bg-primary text-white font-headline text-xl uppercase tracking-widest font-extrabold rounded-xl shadow-xl">
                {loading ? <><Loader2 className="animate-spin mr-2" /> Synthesizing Content...</> : <>Generate Revision Pack <Sparkles className="ml-2 h-6 w-6 text-accent" /></>}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-2xl bg-white overflow-hidden">
                <CardHeader className="bg-primary text-white p-8 flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl font-headline font-bold uppercase tracking-tight">{formData.topic}</CardTitle>
                    <CardDescription className="text-white/60">Synthesized Exam Notes</CardDescription>
                  </div>
                  <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20"><Download className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="p-8 space-y-10">
                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-bold font-headline text-primary border-l-4 border-accent pl-4 mb-4">Core Summary</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground font-light whitespace-pre-wrap">{notes.summary}</p>
                  </div>

                  {notes.keyFormulas && notes.keyFormulas.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Key Formulas & Definitions</h3>
                      <div className="grid gap-3">
                        {notes.keyFormulas.map((f, i) => (
                          <div key={i} className="p-4 bg-muted/30 rounded-xl font-mono text-sm border border-muted flex items-center gap-3">
                            <Zap className="h-4 w-4 text-accent" /> {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <h4 className="text-xl font-headline font-bold uppercase flex items-center gap-2 text-white"><ListChecks className="h-5 w-5" /> High-Yield Qs</h4>
                    <p className="text-white/60 text-xs uppercase font-bold">Likely to appear in CBSE/ICSE</p>
                    <div className="space-y-4">
                      {notes.mustKnowQuestions.map((q, i) => (
                        <div key={i} className="flex gap-3 items-start text-sm font-medium border-t border-white/10 pt-4 first:border-0 first:pt-0">
                          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">Q{i+1}</span> {q}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {notes.memoryTricks && notes.memoryTricks.length > 0 && (
                  <Card className="border-none shadow-xl">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-sm font-headline flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Mnemonics / Tricks</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      {notes.memoryTricks.map((t, i) => (
                        <p key={i} className="text-sm text-muted-foreground italic border-b last:border-0 pb-3 last:pb-0">{t}</p>
                      ))}
                    </CardContent>
                  </Card>
                )}

                <div className="text-center p-6 space-y-4">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Need personalized help?</p>
                  <Link href="/assistant">
                    <Button className="w-full bg-primary text-white font-headline text-xs uppercase tracking-widest font-bold">Talk to AI Tutor <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button variant="ghost" onClick={() => setNotes(null)} className="text-muted-foreground font-headline uppercase tracking-widest text-xs font-bold">New Revision Pack</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

import Link from 'next/link';
