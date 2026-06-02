import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

/**
 * Global Genkit instance configured for Drona IQ.
 * Using the provided API key for server-side AI flows.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: "AIzaSyCk-UvXG4w3FHjEShFzNYVMFF88pWuigiSxlfM",
    }),
  ],
  model: 'googleai/gemini-1.5-flash',
});
