'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuth } from '../provider';

/**
 * Hook to track the current Firebase user.
 * Improved to explicitly detect Identity Toolkit API and API Key restriction issues.
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
        console.error("Firebase Auth Error:", err.code, err.message);
        setError(err);
        setLoading(false);
        
        // Detection for specific API Blocked or Disabled issues
        if (err.message.includes('identity-toolkit-api') || err.message.includes('are-blocked')) {
          console.error(
            "CRITICAL: Identity Toolkit API is blocked or not enabled. " +
            "Please check API Key restrictions in Google Cloud Console."
          );
        }
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, error };
}
