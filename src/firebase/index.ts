'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, enableNetwork } from 'firebase/firestore';
import { firebaseConfig } from './config';

/**
 * Standard Firebase Initialization for Drona IQ.
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

    // Ensure connectivity
    enableNetwork(firestore).catch(() => {});

    return { firebaseApp, auth, firestore };
  } catch (error) {
    console.error("Firebase Initialization Failed:", error);
    throw error;
  }
}

export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
