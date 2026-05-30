import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

/**
 * Global Genkit instance configured for Drona IQ.
 * Using the API key explicitly to ensure server-side flows have access.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: 'AIzaSyBCd4w3FHjEShFzNYVMFF88pWuigiSxlfM',
    }),
  ],
  model: 'googleai/gemini-1.5-flash',
});
