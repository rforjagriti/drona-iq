'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuth } from '../provider';

/**
 * Hook to track the current Firebase user.
 * Includes error handling for project-level API issues (like Identity Toolkit).
 */
export function useUser() {
  const auth = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (u) => {
        setUser(u);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Firebase Auth State Change Error:", err.code, err.message);
        setError(err);
        setLoading(false);
        
        // Check for Identity Toolkit error and log a helpful message for the developer
        if (err.message.includes('identity-toolkit-api')) {
          console.warn(
            "CRITICAL: Identity Toolkit API is not enabled for this project. " +
            "Please visit the link in the error message to enable it."
          );
        }
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, error };
}
