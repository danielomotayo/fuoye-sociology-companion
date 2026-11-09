import { supabase } from './supabase';
import type { User, Session } from '@supabase/supabase-js';

export interface AuthResult {
  success: boolean;
  message: string;
  user?: User | null;
  session?: Session | null;
}

export async function signUp(
  email: string,
  password: string,
  fullName: string
): Promise<AuthResult> {
  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: {
      data: {
        full_name: fullName.trim()
      }
    }
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: data.session
      ? 'Account created successfully.'
      : 'Account created. Check your email if confirmation is required.',
    user: data.user,
    session: data.session
  };
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResult> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: 'Login successful.',
    user: data.user,
    session: data.session
  };
}

export async function signOut(): Promise<AuthResult> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: 'You have signed out.' };
}

export async function getCurrentSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Unable to retrieve session:', error.message);
    return null;
  }

  return data.session;
}

export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return data.user;
}

export async function resetPassword(email: string): Promise<AuthResult> {
  const { error } = await supabase.auth.resetPasswordForEmail(
    email.trim().toLowerCase(),
    {
      redirectTo: `${window.location.origin}/`
    }
  );

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: 'Password recovery instructions have been sent if the email is registered.'
  };
}

export function onAuthStateChange(
  callback: (session: Session | null) => void
) {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });

  return data.subscription;
      }
