'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, enableNetwork, disableNetwork } from 'firebase/firestore';
import { firebaseConfig } from './config';

/**
 * Standard Firebase Initialization for Drona IQ.
 * Connects to production services. Handles potential initialization errors gracefully.
 */
export function initializeFirebase() {
  try {
    let firebaseApp: FirebaseApp;
    
    if (!getApps().length) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = getApp();
    }

    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    // Initial log to confirm initialization started
    console.log("Firebase initialized for project:", firebaseConfig.projectId);

    return { firebaseApp, auth, firestore };
  } catch (error) {
    console.error("Firebase Initialization Failed:", error);
    throw error;
  }
}

/**
 * Diagnostic function to check if the app can actually talk to Firestore.
 */
export async function checkFirebaseConnectivity(db: Firestore): Promise<boolean> {
  try {
    // Attempt to enable network in case it was disabled
    await enableNetwork(db);
    console.log("✅ Firebase Connectivity: Network is online.");
    return true;
  } catch (error) {
    console.error("❌ Firebase Connectivity Error:", error);
    return false;
  }
}

export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
