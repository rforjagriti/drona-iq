'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuth } from '../provider';

/**
 * Hook to track the current Firebase user.
 * Improved to explicitly detect Identity Toolkit API issues.
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
        
        // Detailed log for Identity Toolkit propagation issues
        if (err.message.includes('identity-toolkit-api')) {
          console.warn(
            "ACTION REQUIRED: Identity Toolkit API propagation in progress. " +
            "If you enabled it recently, please wait 5 minutes and refresh."
          );
        }
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, error };
}
