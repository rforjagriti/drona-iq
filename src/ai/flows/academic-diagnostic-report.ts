'use server';
/**
 * @fileOverview An AI academic diagnostic tool (DEMO MODE).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AcademicDiagnosticReportInputSchema = z.object({
  studentName: z.string(),
  gradeLevel: z.string(),
  assessmentData: z.array(
    z.object({
      subject: z.string(),
      score: z.number(),
      totalScore: z.number(),
      weakAreas: z.array(z.string()).optional(),
      strengths: z.array(z.string()).optional(),
    })
  ),
  additionalContext: z.string().optional(),
});
export type AcademicDiagnosticReportInput = z.infer<typeof AcademicDiagnosticReportInputSchema>;

const AcademicDiagnosticReportOutputSchema = z.object({
  reportSummary: z.string(),
  learningGaps: z.array(
    z.object({
      subject: z.string(),
      description: z.string(),
      recommendedFocus: z.string(),
    })
  ),
  studyPlanRecommendations: z.array(
    z.object({
      subject: z.string(),
      recommendation: z.string(),
      priority: z.enum(['High', 'Medium', 'Low']),
    })
  ),
});
export type AcademicDiagnosticReportOutput = z.infer<typeof AcademicDiagnosticReportOutputSchema>;

export async function academicDiagnosticReport(input: AcademicDiagnosticReportInput): Promise<AcademicDiagnosticReportOutput> {
  // Mocking the AI response for Demo Mode
  return {
    reportSummary: `Demo Report for ${input.studentName}. Overall performance is stable, but there is a clear conceptual gap in logical foundations. In-depth analysis suggests a 24% improvement potential with focused intervention.`,
    learningGaps: [
      {
        subject: input.assessmentData[0]?.subject || "Mathematics",
        description: "The student struggles with multi-step problem solving and application of core formulas in unfamiliar contexts.",
        recommendedFocus: "Focus on Active Recall and Spaced Repetition for core conceptual definitions."
      }
    ],
    studyPlanRecommendations: [
      {
        subject: input.assessmentData[0]?.subject || "Mathematics",
        recommendation: "Allocate 45 minutes daily to numerical practice focusing on previous year board patterns.",
        priority: "High"
      },
      {
        subject: "General Aptitude",
        recommendation: "Integrate 15 minutes of logical reasoning to build cognitive agility for competitive patterns.",
        priority: "Medium"
      }
    ]
  };
}
