'use client';

/**
 * Drona IQ - Unified Firebase Configuration
 * 
 * IMPORTANT: 
 * 1. For Auth/Database: Use the "Web API Key" from Project Settings (starts with AIzaSy...).
 * 2. The key AQ.Ab8... is for Gemini AI (Genkit) and should not be put here for Auth.
 */
export const firebaseConfig = {
  // Replace this with your actual Web API Key from Firebase Console (Project Settings -> General)
  // It usually looks like: AIzaSyB...
  apiKey: "AIzaSyCk-UvXG4w3FHjEShFzNYVMFF88pWuigiSxlfM", 
  authDomain: "dronaiq.firebaseapp.com",
  projectId: "dronaiq",
  storageBucket: "dronaiq.firebasestorage.app",
  messagingSenderId: "380315187121",
  appId: "1:380315187121:web:07486f9ab96e12d6f8af90"
};
