"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig"; // আগে ছিল ../../../ ভুল পাথ
import { loginWithGoogle, logout } from "../lib/auth";       // আগে ছিল ../../lib/auth


export default function AuthGate() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="p-6">Loading…</div>;

  if (!user)
    return (
      <div className="p-6 flex flex-col items-start gap-3">
        <h2 className="text-xl font-semibold">Welcome to PHIQUENCE</h2>
        <button
          onClick={loginWithGoogle}
          className="px-4 py-2 rounded bg-yellow-500 text-black font-medium"
        >
          Sign in with Google
        </button>
      </div>
    );

  return (
    <div className="p-6 flex flex-col gap-3">
      <div className="text-sm text-gray-400">
        Signed in as <span className="font-semibold">{user.email}</span>
      </div>
      <button
        onClick={logout}
        className="px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
      >
        Sign out
      </button>
    </div>
  );
}
