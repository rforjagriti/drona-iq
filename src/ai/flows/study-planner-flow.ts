'use server';
/**
 * @fileOverview AI Study Planner that generates personalized schedules.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const StudyPlannerInputSchema = z.object({
  studentClass: z.string(),
  targetMarks: z.number(),
  availableHoursPerDay: z.number(),
  weakSubjects: z.array(z.string()),
});

const StudyPlannerOutputSchema = z.object({
  dailyRoutine: z.array(z.object({
    time: z.string(),
    activity: z.string(),
    subject: z.string().optional(),
  })),
  weeklyMilestones: z.array(z.string()),
  revisionStrategy: z.string(),
  testSchedule: z.array(z.string()),
});

export type StudyPlannerInput = z.infer<typeof StudyPlannerInputSchema>;
export type StudyPlannerOutput = z.infer<typeof StudyPlannerOutputSchema>;

export async function generateStudyPlan(input: StudyPlannerInput): Promise<StudyPlannerOutput> {
  const prompt = ai.definePrompt({
    name: 'studyPlannerPrompt',
    input: { schema: StudyPlannerInputSchema },
    output: { schema: StudyPlannerOutputSchema },
    prompt: `You are an expert academic strategist. Generate a hyper-personalized study plan for a student in {{{studentClass}}}.
    Target Marks: {{{targetMarks}}}%
    Available Daily Time: {{{availableHoursPerDay}}} hours.
    Weak Areas: {{#each weakSubjects}}{{{this}}}, {{/each}}.
    
    Ensure the plan is realistic, prioritizes weak subjects, and includes breaks.`,
  });

  const { output } = await prompt(input);
  return output!;
}
