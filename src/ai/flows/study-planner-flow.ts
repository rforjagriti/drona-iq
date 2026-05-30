'use server';
/**
 * @fileOverview AI Study Planner (DEMO MODE).
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
  return {
    dailyRoutine: [
      { time: "06:00 AM", activity: "Drona Discipline: Morning Fitness & Mental Agility" },
      { time: "04:30 PM", activity: "Intensive Subject Drill", subject: input.weakSubjects[0] || "Mathematics" },
      { time: "07:00 PM", activity: "Active Recall Session", subject: "Science" },
      { time: "09:00 PM", activity: "Strategy Review & Mock MCQ" }
    ],
    weeklyMilestones: [
      "Complete 3 full-length Mock Tests.",
      "Master the 'Weak Concepts' log for this week.",
      "Log 24 hours of focused practice."
    ],
    revisionStrategy: "Use the 'Spaced Retrieval' method: Review today's work in 24 hours, then 3 days, then 7 days.",
    testSchedule: ["Wednesday: Subjective Blitz", "Sunday: NDA/Board Full Mock Simulation"]
  };
}
