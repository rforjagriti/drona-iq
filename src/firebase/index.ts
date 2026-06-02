
'use client';

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

/**
 * Initializes Firebase services with error handling for blocked APIs.
 * If you see 'auth/requests-to-this-api-identitytoolkit-method...-are-blocked',
 * you must enable the "Identity Toolkit API" in the Google Cloud Console.
 */
export function initializeFirebase() {
  let firebaseApp: FirebaseApp;
  
  try {
    if (!getApps().length) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = getApps()[0];
    }

    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return { firebaseApp, auth, firestore };
  } catch (error) {
    console.error("Firebase Initialization Error:", error);
    // Return null-safe placeholders or re-throw depending on app needs
    // For now, we return the initialized (even if restricted) instances to allow standard SDK error flows
    return {
      firebaseApp: getApps()[0] || initializeApp(firebaseConfig),
      auth: getAuth(getApps()[0]),
      firestore: getFirestore(getApps()[0])
    };
  }
}

export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
