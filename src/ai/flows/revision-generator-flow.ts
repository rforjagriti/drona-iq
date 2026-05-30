'use server';
/**
 * @fileOverview AI Revision Generator that creates concise summary notes and key questions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RevisionInputSchema = z.object({
  topic: z.string().describe('The subject or topic for revision.'),
  grade: z.string().describe('The student grade level.'),
  depth: z.enum(['Quick Summary', 'Detailed Analysis', 'Exam Focused']).default('Quick Summary'),
});

const RevisionOutputSchema = z.object({
  summary: z.string().describe('Concise revision notes.'),
  keyFormulas: z.array(z.string()).optional().describe('Important formulas or definitions.'),
  mustKnowQuestions: z.array(z.string()).describe('Critical questions likely to appear in exams.'),
  memoryTricks: z.array(z.string()).optional().describe('Mnemonics or tricks to remember the concept.'),
});

export type RevisionInput = z.infer<typeof RevisionInputSchema>;
export type RevisionOutput = z.infer<typeof RevisionOutputSchema>;

const revisionPrompt = ai.definePrompt({
  name: 'revisionGeneratorPrompt',
  input: { schema: RevisionInputSchema },
  output: { schema: RevisionOutputSchema },
  prompt: `You are an elite academic content creator. Generate revision material for:
Topic: {{{topic}}}
Grade: {{{grade}}}
Mode: {{{depth}}}

Make it highly actionable, easy to read, and optimized for high-scoring students in CBSE/ICSE patterns.`,
});

export async function generateRevisionNotes(input: RevisionInput): Promise<RevisionOutput> {
  const { output } = await revisionPrompt(input);
  return output!;
}
