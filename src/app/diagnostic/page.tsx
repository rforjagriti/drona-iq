"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { academicDiagnosticReport, type AcademicDiagnosticReportOutput } from '@/ai/flows/academic-diagnostic-report';
import { BrainCircuit, Loader2, CheckCircle2, AlertTriangle, ArrowRight, User, GraduationCap, ClipboardList, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function DiagnosticPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AcademicDiagnosticReportOutput | null>(null);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    studentName: '',
    gradeLevel: '',
    subject: 'Mathematics',
    score: '',
    totalScore: '100',
    weakAreas: '',
    strengths: '',
    additionalContext: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await academicDiagnosticReport({
        studentName: formData.studentName,
        gradeLevel: formData.gradeLevel,
        assessmentData: [{
          subject: formData.subject,
          score: parseInt(formData.score),
          totalScore: parseInt(formData.totalScore),
          weakAreas: formData.weakAreas.split(',').map(s => s.trim()),
          strengths: formData.strengths.split(',').map(s => s.trim())
        }],
        additionalContext: formData.additionalContext
      });
      setResult(response);
      setStep(3);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="text-accent border-accent/20 bg-accent/5 px-4 py-1 uppercase tracking-widest font-bold">
            Drona IQ Intelligence Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">AI Academic Diagnostic</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our neural reasoning engine analyzes performance data to map learning gaps with 99.4% precision.
          </p>
        </div>

        {step === 1 && (
          <Card className="border-none shadow-2xl">
            <CardHeader className="bg-primary text-white rounded-t-xl py-8">
              <div className="flex items-center gap-3 mb-2">
                <User className="h-6 w-6 text-accent" />
                <CardTitle className="font-headline uppercase tracking-tight">Step 1: Student Profile</CardTitle>
              </div>
              <CardDescription className="text-white/60">Help us understand the context of the assessment.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-primary font-bold">Student Full Name</Label>
                  <Input 
                    id="studentName" 
                    placeholder="e.g. Aarav Sharma" 
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    className="border-primary/20 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradeLevel" className="text-primary font-bold">Current Grade / Class</Label>
                  <Input 
                    id="gradeLevel" 
                    placeholder="e.g. 10th Standard / Grade 8" 
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
                    className="border-primary/20 focus-visible:ring-accent"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-8 bg-muted/50 flex justify-end rounded-b-xl">
              <Button 
                onClick={() => setStep(2)} 
                disabled={!formData.studentName || !formData.gradeLevel}
                className="font-headline px-8 py-6 h-auto text-lg"
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <Card className="border-none shadow-2xl">
              <CardHeader className="bg-primary text-white rounded-t-xl py-8">
                <div className="flex items-center gap-3 mb-2">
                  <ClipboardList className="h-6 w-6 text-accent" />
                  <CardTitle className="font-headline uppercase tracking-tight">Step 2: Assessment Data</CardTitle>
                </div>
                <CardDescription className="text-white/60">Enter scores and observations from recent school or coaching tests.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary font-bold">Subject</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="score" className="text-primary font-bold">Score Obtained</Label>
                    <Input 
                      id="score" 
                      type="number"
                      placeholder="85" 
                      value={formData.score}
                      onChange={(e) => setFormData({...formData, score: e.target.value})}
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalScore" className="text-primary font-bold">Total Marks</Label>
                    <Input 
                      id="totalScore" 
                      type="number"
                      placeholder="100" 
                      value={formData.totalScore}
                      onChange={(e) => setFormData({...formData, totalScore: e.target.value})}
                      className="border-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="weakAreas" className="text-primary font-bold flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Known Weak Areas (optional)
                    </Label>
                    <Input 
                      id="weakAreas" 
                      placeholder="Algebra, Trigonometry, etc." 
                      value={formData.weakAreas}
                      onChange={(e) => setFormData({...formData, weakAreas: e.target.value})}
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="strengths" className="text-primary font-bold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Specific Strengths (optional)
                    </Label>
                    <Input 
                      id="strengths" 
                      placeholder="Geometry, Probability, etc." 
                      value={formData.strengths}
                      onChange={(e) => setFormData({...formData, strengths: e.target.value})}
                      className="border-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="context" className="text-primary font-bold flex items-center gap-2">
                    <Info className="h-4 w-4 text-accent" />
                    Additional Context / Concerns
                  </Label>
                  <Textarea 
                    id="context" 
                    placeholder="e.g. Student feels anxious during timed tests or needs more focus on competitive exam pattern." 
                    className="min-h-[120px] border-primary/20"
                    value={formData.additionalContext}
                    onChange={(e) => setFormData({...formData, additionalContext: e.target.value})}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-8 bg-muted/50 flex justify-between rounded-b-xl">
                <Button variant="ghost" onClick={() => setStep(1)} className="font-headline">Go Back</Button>
                <Button type="submit" disabled={loading || !formData.score} className="font-headline px-8 py-6 h-auto text-lg bg-accent text-white hover:bg-accent/90">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing Performance...
                    </>
                  ) : (
                    <>
                      Generate AI Report <BrainCircuit className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}

        {step === 3 && result && (
          <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            <Card className="border-2 border-accent shadow-2xl overflow-hidden bg-white">
              <div className="navy-gradient p-10 text-white">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-extrabold font-headline">DIAGNOSTIC REPORT</h2>
                    <p className="text-accent font-bold tracking-widest text-sm">PREPARED BY DRONA IQ AI ENGINE</p>
                  </div>
                  <Badge className="bg-accent text-white border-none px-4 py-2">CONFIDENTIAL</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Student</p>
                    <p className="font-headline font-bold">{formData.studentName}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Grade</p>
                    <p className="font-headline font-bold">{formData.gradeLevel}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Analysis Date</p>
                    <p className="font-headline font-bold">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Status</p>
                    <p className="text-green-400 font-headline font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" /> COMPLETED
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Executive Summary</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{result.reportSummary}</p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Identified Learning Gaps</h3>
                  <div className="grid gap-6">
                    {result.learningGaps.map((gap, i) => (
                      <div key={i} className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold font-headline text-red-900">{gap.subject}</h4>
                          <Badge variant="outline" className="text-red-600 border-red-200 uppercase text-[10px] font-bold">Improvement Required</Badge>
                        </div>
                        <p className="text-red-800 mb-4">{gap.description}</p>
                        <div className="bg-white p-4 rounded-lg border border-red-100">
                          <p className="text-xs font-bold text-red-900 uppercase mb-1">Recommended Focus Areas</p>
                          <p className="text-sm text-red-700">{gap.recommendedFocus}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Strategic Study Plan</h3>
                  <div className="grid gap-6">
                    {result.studyPlanRecommendations.map((plan, i) => (
                      <div key={i} className="bg-primary/5 border border-primary/10 p-6 rounded-xl relative overflow-hidden">
                        {plan.priority === 'High' && (
                          <div className="absolute top-0 right-0 bg-accent text-white text-[10px] px-3 py-1 font-bold rounded-bl-lg">CRITICAL</div>
                        )}
                        <h4 className="text-xl font-bold font-headline text-primary mb-3">{plan.subject}</h4>
                        <p className="text-muted-foreground mb-4 pr-16">{plan.recommendation}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase text-primary/50">Urgency:</span>
                          <Progress value={plan.priority === 'High' ? 100 : plan.priority === 'Medium' ? 60 : 30} className="w-24 h-2" />
                          <span className="text-xs font-bold text-primary">{plan.priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 bg-accent/5 border-t flex flex-col items-center text-center gap-6">
                <div>
                  <h4 className="text-xl font-bold font-headline text-primary mb-2">Want to bridge these gaps in the next 30 days?</h4>
                  <p className="text-muted-foreground">Book a detailed 1-on-1 counselor session at our Rajpur Road hub.</p>
                </div>
                <div className="flex gap-4">
                  <Button className="font-headline px-8 h-12">Download PDF Report</Button>
                  <Button variant="outline" className="font-headline px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white">Schedule Free Consultation</Button>
                </div>
              </CardFooter>
            </Card>
            <div className="text-center">
              <Button variant="ghost" onClick={() => {setResult(null); setStep(1);}} className="text-muted-foreground">
                Run New Analysis
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}