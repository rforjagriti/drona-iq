'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

/**
 * Listens for global Firestore permission errors and throws them
 * so they can be caught by the Next.js development error overlay.
 */
export function FirebaseErrorListener() {
  useEffect(() => {
    const unsubscribe = errorEmitter.on('permission-error', (error) => {
      // Re-throw the error to trigger the dev overlay
      console.error('Firestore Permission Denied:', error.context);
      throw error;
    });

    return () => unsubscribe();
  }, []);

  return null;
}
