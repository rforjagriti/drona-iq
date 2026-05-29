'use server';
/**
 * @fileOverview AI Doubt Solver for students.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DoubtSolverInputSchema = z.object({
  question: z.string().describe('The academic doubt or question.'),
  subject: z.string().optional().describe('The subject of the doubt.'),
  grade: z.string().optional().describe('The grade/class of the student.'),
});

const DoubtSolverOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the concept.'),
  stepByStep: z.array(z.string()).describe('Step-by-step solution if applicable.'),
  relatedConcepts: z.array(z.string()).describe('Topics to review for better understanding.'),
});

export type DoubtSolverInput = z.infer<typeof DoubtSolverInputSchema>;
export type DoubtSolverOutput = z.infer<typeof DoubtSolverOutputSchema>;

export async function solveDoubt(input: DoubtSolverInput): Promise<DoubtSolverOutput> {
  const prompt = ai.definePrompt({
    name: 'doubtSolverPrompt',
    input: { schema: DoubtSolverInputSchema },
    output: { schema: DoubtSolverOutputSchema },
    prompt: `You are an expert tutor for Indian school students (CBSE/ICSE).
    Subject: {{{subject}}}
    Grade: {{{grade}}}
    Question: {{{question}}}
    
    Provide a clear, encouraging, and highly detailed explanation. If it's a mathematical or logical problem, provide a step-by-step solution.`,
  });

  const { output } = await prompt(input);
  return output!;
}