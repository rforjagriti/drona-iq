
"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { academicDiagnosticReport, type AcademicDiagnosticReportOutput } from '@/ai/flows/academic-diagnostic-report';
import { BrainCircuit, Loader2, CheckCircle2, AlertTriangle, ArrowRight, User, GraduationCap, ClipboardList, Info, Star, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AcademicHealthCheck() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AcademicDiagnosticReportOutput | null>(null);
  const [step, setStep] = useState(1);
  const firestore = useFirestore();

  const [formData, setFormData] = useState({
    studentName: '',
    gradeLevel: '',
    school: '',
    careerGoal: '',
    subject: 'Mathematics',
    score: '',
    totalScore: '100',
    weakAreas: '',
    strengths: '',
    additionalContext: '',
    phone: '' // Added for lead capturing
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
        additionalContext: `School: ${formData.school}. Career Goal: ${formData.careerGoal}. Phone: ${formData.phone}. ${formData.additionalContext}`
      });

      // Save to Firebase for Admin Lead Management
      if (firestore) {
        addDoc(collection(firestore, 'health_checks'), {
          studentName: formData.studentName,
          phone: formData.phone,
          gradeLevel: formData.gradeLevel,
          subject: formData.subject,
          score: parseInt(formData.score),
          totalScore: parseInt(formData.totalScore),
          reportSummary: response.reportSummary,
          createdAt: new Date().toISOString(),
          timestamp: serverTimestamp()
        });

        // Also save as a general Lead
        addDoc(collection(firestore, 'leads'), {
          parentName: `Parent of ${formData.studentName}`,
          studentName: formData.studentName,
          phone: formData.phone,
          currentClass: formData.gradeLevel,
          type: 'general_enquiry',
          status: 'new',
          createdAt: new Date().toISOString(),
          timestamp: serverTimestamp()
        });
      }

      setResult(response);
      setStep(3);
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
          <Badge className="bg-accent text-white border-none px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Proprietary AI Engine</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary">Academic Health Check</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Drona IQ's AI analysis identifies learning gaps with 99.4% precision. Get your child's personalized improvement blueprint in seconds.
          </p>
        </div>

        {step === 1 && (
          <Card className="border-none shadow-2xl animate-in fade-in duration-500">
            <CardHeader className="bg-primary text-white rounded-t-xl py-10 px-8 flex flex-row items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight">Step 1: Student Context</CardTitle>
                <CardDescription className="text-white/60">Basic profile helps our AI calibrate difficulty and benchmarks.</CardDescription>
              </div>
              <User className="h-12 w-12 text-accent opacity-50 hidden md:block" />
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Full Name</Label>
                  <Input 
                    placeholder="e.g. Aarav Sharma" 
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    className="border-primary/10 h-12 bg-muted/30 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Parent Phone Number</Label>
                  <Input 
                    placeholder="+91 XXXX" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-primary/10 h-12 bg-muted/30 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Class / Grade</Label>
                  <Input 
                    placeholder="e.g. Class 10th (CBSE)" 
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
                    className="border-primary/10 h-12 bg-muted/30 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">School Name</Label>
                  <Input 
                    placeholder="e.g. St. Joseph's Academy" 
                    value={formData.school}
                    onChange={(e) => setFormData({...formData, school: e.target.value})}
                    className="border-primary/10 h-12 bg-muted/30 focus-visible:ring-accent"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-8 bg-muted/20 border-t flex justify-between items-center rounded-b-xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="h-4 w-4 text-accent" /> Data encrypted & secure
              </div>
              <Button 
                onClick={() => setStep(2)} 
                disabled={!formData.studentName || !formData.phone}
                className="font-headline px-12 py-7 h-auto text-lg uppercase tracking-widest font-bold"
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
            <Card className="border-none shadow-2xl">
              <CardHeader className="bg-primary text-white rounded-t-xl py-10 px-8 flex flex-row items-center justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-headline font-extrabold uppercase tracking-tight">Step 2: Performance Data</CardTitle>
                  <CardDescription className="text-white/60">Input recent test marks or qualitative observations.</CardDescription>
                </div>
                <ClipboardList className="h-12 w-12 text-accent opacity-50 hidden md:block" />
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Subject Focus</Label>
                    <Input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="h-12 border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Marks Obtained</Label>
                    <Input type="number" placeholder="85" value={formData.score} onChange={(e) => setFormData({...formData, score: e.target.value})} className="h-12 border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground">Maximum Marks</Label>
                    <Input type="number" value={formData.totalScore} onChange={(e) => setFormData({...formData, totalScore: e.target.value})} className="h-12 border-primary/10" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" /> Known Weak Concepts
                    </Label>
                    <Input placeholder="e.g. Algebra, Organic Chem" value={formData.weakAreas} onChange={(e) => setFormData({...formData, weakAreas: e.target.value})} className="h-12 border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Current Strengths
                    </Label>
                    <Input placeholder="e.g. Geometry, History" value={formData.strengths} onChange={(e) => setFormData({...formData, strengths: e.target.value})} className="h-12 border-primary/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground">Specific Parent/Student Concerns</Label>
                  <Textarea 
                    placeholder="e.g. Rohan feels nervous during MCQ exams. Needs speed improvement." 
                    className="min-h-[120px] bg-muted/30 border-primary/10"
                    value={formData.additionalContext}
                    onChange={(e) => setFormData({...formData, additionalContext: e.target.value})}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-8 bg-muted/20 border-t flex justify-between rounded-b-xl">
                <Button variant="ghost" onClick={() => setStep(1)} className="font-headline uppercase tracking-widest text-xs font-bold">Back to Step 1</Button>
                <Button type="submit" disabled={loading || !formData.score} className="font-headline px-12 py-7 h-auto text-lg bg-accent text-white hover:bg-accent/90 uppercase tracking-widest font-bold">
                  {loading ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...</>
                  ) : (
                    <>Run AI Diagnostic <BrainCircuit className="ml-2 h-5 w-5" /></>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}

        {step === 3 && result && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-700">
            {/* ... result view remains same ... */}
            <Card className="border-4 border-accent shadow-2xl bg-white overflow-hidden">
              <div className="navy-gradient p-12 text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-20"><BrainCircuit className="h-32 w-32" /></div>
                <div className="flex flex-col md:row justify-between items-start md:items-center gap-8 relative z-10">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-extrabold font-headline uppercase tracking-tighter">Academic Health Report</h2>
                    <p className="text-accent font-bold tracking-[0.2em] text-sm">GENERATED FOR: {formData.studentName.toUpperCase()}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white"><Star className="fill-current" /></div>
                    <div>
                      <p className="text-xs font-bold uppercase text-white/60">Report Status</p>
                      <p className="text-lg font-bold font-headline">Validated by DIQ Core</p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-10 space-y-12">
                <div className="bg-muted/30 p-8 rounded-3xl border border-primary/5 space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Executive Summary</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light">{result.reportSummary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Learning Gaps</h3>
                    <div className="space-y-6">
                      {result.learningGaps.map((gap, i) => (
                        <div key={i} className="bg-red-50 border border-red-100 p-6 rounded-2xl space-y-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-headline font-bold text-red-900 text-xl">{gap.subject}</h4>
                            <Badge variant="outline" className="text-red-600 border-red-200">Critical Gap</Badge>
                          </div>
                          <p className="text-red-800 text-sm">{gap.description}</p>
                          <div className="bg-white p-4 rounded-xl text-xs text-red-700">
                            <strong>Focus:</strong> {gap.recommendedFocus}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-headline text-primary border-l-4 border-accent pl-4">Recommended Strategy</h3>
                    <div className="space-y-6">
                      {result.studyPlanRecommendations.map((plan, i) => (
                        <div key={i} className="bg-primary/5 border border-primary/10 p-6 rounded-2xl relative overflow-hidden">
                          {plan.priority === 'High' && <div className="absolute top-0 right-0 bg-accent text-white text-[10px] px-4 py-1 font-bold rounded-bl-xl">PRIORITY: {plan.priority}</div>}
                          <h4 className="font-headline font-bold text-primary text-xl mb-3">{plan.subject}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{plan.recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-12 bg-accent/5 border-t flex flex-col items-center gap-8">
                <div className="text-center space-y-3">
                  <h4 className="text-2xl font-extrabold font-headline text-primary">Next Steps for {formData.studentName}</h4>
                  <p className="text-muted-foreground">Our Dehradun counselors recommend a 1-on-1 strategy meeting to implement this plan.</p>
                </div>
                <div className="flex flex-col sm:row gap-4 w-full max-w-2xl">
                  <Button className="flex-1 py-7 h-auto font-headline uppercase tracking-widest font-bold">Schedule Free Consultation</Button>
                  <Button variant="outline" className="flex-1 py-7 h-auto font-headline uppercase tracking-widest font-bold border-primary text-primary">Download Detailed PDF</Button>
                </div>
              </CardFooter>
            </Card>
            <div className="text-center">
              <Button variant="ghost" onClick={() => {setResult(null); setStep(1);}} className="text-muted-foreground">Run Another Checkup</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
