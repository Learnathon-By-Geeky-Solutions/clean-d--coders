import { create } from "zustand";
import { supabase } from "./suparbaseClient";

const useUserStore = create((set) => ({
  user: null,
  isLoading: true,
  setUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((prev) => ({
      ...prev,
      user: { role: ["user", "mentee", "mentor"], data: null },
      isLoading: false,
    }));
  },
  clearUser: () => set((prev) => ({ ...prev, user: null, isLoading: false })),

  signUp: async (email, password) => {
    try {
      set((prev) => ({ ...prev, isLoading: true }));
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      set((prev) => ({
        ...prev,
        user: { data: data.user, role: ["mentee"] },
        isLoading: false,
      }));
      return data;
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      set((prev) => ({ ...prev, isLoading: true }));
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set((prev) => ({
        ...prev,
        user: {
          ...data.user,
          role: ["mentee"],
        },
        isLoading: false,
      }));
      //console.log('Signed in user: ', useUserStore.getState.user)
      return data;
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  },
  signInByGoogle: async () => {
    try {
      set((prev) => ({ ...prev, isLoading: true }));

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${import.meta.env.VITE_HOST}/dashboard`,
        },
      });
      if (error) throw error;
      set((prev) => ({
        ...prev,
        user: {
          ...data.user,
          role: ["mentee"],
        },
        isLoading: false,
      }));
      return data;
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set((prev) => ({ ...prev, user: null, isLoading: false }));
    } catch (error) {
      set((prev) => ({ ...prev, user: null, isLoading: false }));
      //console.error('Sign out failed:', error.message)
      throw error;
    }
  },
  initializeAuth: async () => {
    try {
      set((prev) => ({ ...prev, isLoading: true }));
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      //console.log("Initial session:", session)

      if (error) throw error;

      if (session?.user) {
        const userData = {
          ...session.user,
          role: ["mentee"],
        };
        // console.log("User initialized:", userData)  Log the user data
        set((prev) => ({ ...prev, user: userData, isLoading: false }));
      } else {
        // console.log("No user session found")
        set((prev) => ({ ...prev, isLoading: false }));
      }

      // Set up auth state change listener
      supabase.auth.onAuthStateChange((_event, session) => {
        // console.log("Auth state changed. Event:", _event) Log auth state changes
        if (session?.user) {
          const userData = {
            ...session.user,
            role: ["mentee"],
          };
          // console.log("User updated:", userData)
          set((prev) => ({ ...prev, user: userData, isLoading: false }));
        } else {
          // console.log("User cleared")
          set((prev) => ({ ...prev, isLoading: false }));
        }
      });
    } catch (error) {
      console.error("Error initializing auth:", error);
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
}));

export default useUserStore;
