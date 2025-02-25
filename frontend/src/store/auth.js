import { create } from 'zustand';
import { supabase } from './suparbaseClient';


const useAuthStore = create((set) => ({
  user: null,
  session: null,
  loading: false,
  error: null,

  // Sign Up
  signUp: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      set({ user: data.user, session: data.session, loading: false });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Sign In
  signIn: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({ user: data.user, session: data.session, loading: false });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Sign Out
  signOut: async () => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, session: null, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Get current session
  fetchSession: async () => {
    set({ loading: true, error: null });
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      set({ session, user: session?.user || null, loading: false });
      return session;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Get current user
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      set({ user, loading: false });
      return user;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));

export default useAuthStore;
