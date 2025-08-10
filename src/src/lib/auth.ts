"use client";

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig";

export async function loginWithGoogle() {
  await signInWithPopup(auth, googleProvider);
}

export async function logout() {
  await signOut(auth);
}
