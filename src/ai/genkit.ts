import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

/**
 * Global Genkit instance configured for Drona IQ.
 * Using your dedicated Gemini API Key for server-side AI flows.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: "AQ.Ab8RN6LoJ0GBrLZDTps0jGFwrmrHxnhhJJMUYHA2pN9S8J4ODQ",
    }),
  ],
  model: 'googleai/gemini-1.5-flash',
});
