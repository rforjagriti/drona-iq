'use server';
/**
 * @fileOverview An AI academic diagnostic tool that analyzes student assessment performance
 * to generate a personalized learning gap report and suggest a tailored study path.
 *
 * - academicDiagnosticReport - A function that handles the academic diagnostic report generation process.
 * - AcademicDiagnosticReportInput - The input type for the academicDiagnosticReport function.
 * - AcademicDiagnosticReportOutput - The return type for the academicDiagnosticReport function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AcademicDiagnosticReportInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  gradeLevel: z.string().describe('The current grade level of the student (e.g., "Grade 8", "10th Standard").'),
  assessmentData: z.array(
    z.object({
      subject: z.string().describe('The subject of the assessment (e.g., "Mathematics", "Physics").'),
      score: z.number().describe('The score obtained by the student in the assessment.'),
      totalScore: z.number().describe('The maximum possible score for the assessment.'),
      weakAreas: z.array(z.string()).optional().describe('Specific topics or concepts where the student performed weakly.'),
      strengths: z.array(z.string()).optional().describe('Specific topics or concepts where the student showed strong performance.'),
    })
  ).describe('An array of assessment results for different subjects.'),
  additionalContext: z.string().optional().describe('Any additional context or parent concerns regarding the student\'s academic performance.'),
});
export type AcademicDiagnosticReportInput = z.infer<typeof AcademicDiagnosticReportInputSchema>;

const AcademicDiagnosticReportOutputSchema = z.object({
  reportSummary: z.string().describe('A comprehensive summary of the student\'s overall academic performance, highlighting general trends and observations.'),
  learningGaps: z.array(
    z.object({
      subject: z.string().describe('The subject in which the learning gap is identified.'),
      description: z.string().describe('A detailed description of the specific learning gap.'),
      recommendedFocus: z.string().describe('Specific areas or concepts to focus on to address this gap.'),
    })
  ).describe('A list of identified learning gaps across different subjects, with descriptions and recommended areas of focus.'),
  studyPlanRecommendations: z.array(
    z.object({
      subject: z.string().describe('The subject for which the recommendation is given.'),
      recommendation: z.string().describe('A clear, actionable recommendation for a tailored study plan.'),
      priority: z.enum(['High', 'Medium', 'Low']).describe('The priority level of this recommendation.'),
    })
  ).describe('A tailored study plan with actionable recommendations and their priority levels.'),
});
export type AcademicDiagnosticReportOutput = z.infer<typeof AcademicDiagnosticReportOutputSchema>;

const diagnosticPrompt = ai.definePrompt({
  name: 'academicDiagnosticReportPrompt',
  input: { schema: AcademicDiagnosticReportInputSchema },
  output: { schema: AcademicDiagnosticReportOutputSchema },
  prompt: `You are an expert academic diagnostician and educational consultant. Your task is to analyze a student's assessment performance and generate a personalized report.

Student Name: {{{studentName}}}
Grade Level: {{{gradeLevel}}}

Assessment Results:
{{#each assessmentData}}
- Subject: {{this.subject}}
  Score: {{this.score}} / {{this.totalScore}}
  {{#if this.weakAreas}}Weak Areas: {{#each this.weakAreas}}- {{this}}{{/each}}{{/if}}
  {{#if this.strengths}}Strengths: {{#each this.strengths}}- {{this}}{{/each}}{{/if}}
{{/each}}

{{#if additionalContext}}
Additional Context/Parent Concerns: {{{additionalContext}}}
{{/if}}

Based on the provided information, generate a structured report that includes:
1. A comprehensive 'reportSummary' of the student's overall academic performance.
2. A list of specific 'learningGaps', detailing the subject, a description of the gap, and recommended focus areas.
3. A 'studyPlanRecommendations' with actionable steps for each subject, along with their priority (High, Medium, Low).

Ensure the output is in the specified JSON format.`,
});

export async function academicDiagnosticReport(input: AcademicDiagnosticReportInput): Promise<AcademicDiagnosticReportOutput> {
  const { output } = await diagnosticPrompt(input);
  return output!;
}
