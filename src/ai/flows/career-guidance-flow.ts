'use server';
/**
 * @fileOverview AI Career Guidance agent.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CareerGuidanceInputSchema = z.object({
  currentClass: z.string(),
  interests: z.array(z.string()),
  academicStrengths: z.array(z.string()),
});

const CareerGuidanceOutputSchema = z.object({
  recommendedStreams: z.array(z.string()),
  careerRoadmap: z.string(),
  requiredEntranceExams: z.array(z.object({
    examName: z.string(),
    idealPrepStartTime: z.string(),
  })),
  skillsToDevelop: z.array(z.string()),
});

export type CareerGuidanceInput = z.infer<typeof CareerGuidanceInputSchema>;
export type CareerGuidanceOutput = z.infer<typeof CareerGuidanceOutputSchema>;

export async function getCareerGuidance(input: CareerGuidanceInput): Promise<CareerGuidanceOutput> {
  const prompt = ai.definePrompt({
    name: 'careerGuidancePrompt',
    input: { schema: CareerGuidanceInputSchema },
    output: { schema: CareerGuidanceOutputSchema },
    prompt: `You are an AI Career Counselor for Indian students.
    Student Info: Class {{{currentClass}}}, Interests: {{#each interests}}{{{this}}}, {{/each}}, Strengths: {{#each academicStrengths}}{{{this}}}, {{/each}}.
    
    Provide a professional career roadmap, suggesting streams (Science, Commerce, etc.), exams (JEE, NEET, CLAT, NDA, UPSC), and preparation timelines.`,
  });

  const { output } = await prompt(input);
  return output!;
}
