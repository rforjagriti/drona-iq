'use server';
/**
 * @fileOverview An AI Study Assistant that provides instant, curriculum-specific guidance.
 *
 * - askScholarAssistant - A function that handles academic questions.
 * - AIScholarAssistantInput - The input type for the askScholarAssistant function.
 * - AIScholarAssistantOutput - The return type for the askScholarAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIScholarAssistantInputSchema = z.object({
  question: z.string().describe('The academic question from the student.'),
});
export type AIScholarAssistantInput = z.infer<
  typeof AIScholarAssistantInputSchema
>;

const AIScholarAssistantOutputSchema = z.object({
  answer: z.string().describe('The academic guidance and support provided by the AI.'),
});
export type AIScholarAssistantOutput = z.infer<
  typeof AIScholarAssistantOutputSchema
>;

export async function askScholarAssistant(
  input: AIScholarAssistantInput
): Promise<AIScholarAssistantOutput> {
  return aiScholarAssistantFlow(input);
}

const scholarAssistantPrompt = ai.definePrompt({
  name: 'scholarAssistantPrompt',
  input: {schema: AIScholarAssistantInputSchema},
  output: {schema: AIScholarAssistantOutputSchema},
  prompt: `You are an AI Study Assistant acting as a 24/7 academic mentor for students.

Your goal is to provide instant, contextual, and curriculum-specific guidance and support for the student's academic questions. Be helpful, clear, and encouraging.

Student Question: {{{question}}}`,
});

const aiScholarAssistantFlow = ai.defineFlow(
  {
    name: 'aiScholarAssistantFlow',
    inputSchema: AIScholarAssistantInputSchema,
    outputSchema: AIScholarAssistantOutputSchema,
  },
  async input => {
    const {output} = await scholarAssistantPrompt(input);
    return output!;
  }
);
