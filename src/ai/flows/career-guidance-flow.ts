'use server';
/**
 * @fileOverview AI Career Guidance agent (DEMO MODE).
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
  return {
    recommendedStreams: ["Science (PCM)", "Commerce with Math"],
    careerRoadmap: "Demo Roadmap: Based on your analytical strengths, you are ideally suited for an Engineering or Defense pathway. Start by building a solid foundation in Physics and Logical Reasoning.",
    requiredEntranceExams: [
      { examName: "NDA (National Defence Academy)", idealPrepStartTime: "Class 11 Beginning" },
      { examName: "JEE Mains", idealPrepStartTime: "Class 10 Mid-term" }
    ],
    skillsToDevelop: ["Analytical Thinking", "Strategic Planning", "Physical Fitness Drills"]
  };
}
