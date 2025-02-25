import { create } from "zustand";
import { supabase } from "./suparbaseClient";

const useUserStore = create((set) => ({
  user: null,
  isLoading: true,
  setUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ user: { role: ["user", "mentee", "mentor"],data: null}, isLoading: false });
  },
  clearUser: () => set({user: null, isLoading: false }),

  signUp: async (email, password) => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      set({ user: {data: data.user,role: ["mentee"]}, isLoading: false });
      return data;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({ 
        user: {
          role: ["mentee"],
          data: data.user
        }, 
        isLoading: false 
      });
      //console.log('Signed in user: ', useUserStore.getState.user)
      return data;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      //console.error('Sign out failed:', error.message)
      throw error;
    }
  },
  initializeAuth: async () => {
    try {
      set({ isLoading: true });
      const { data: { session }, error } = await supabase.auth.getSession();
      //console.log("Initial session:", session) 

      if (error) throw error;

      if (session?.user) {
        const userData = {
          data: session.user,
          role: ["mentee"],
        };
       // console.log("User initialized:", userData)  Log the user data
        set({ user: userData, isLoading: false });
      } else {
       // console.log("No user session found")
        set({ isLoading: false });
      }

      // Set up auth state change listener
      supabase.auth.onAuthStateChange((_event, session) => {
       // console.log("Auth state changed. Event:", _event) Log auth state changes
        if (session?.user) {
          const userData = {
            data: session.user,
            role: [ "mentee"],
          };
         // console.log("User updated:", userData)
          set({ user: userData, isLoading: false });
        } else {
         // console.log("User cleared")
          set({ isLoading: false });
        }
      });
    } catch (error) {
      //console.error('Error initializing auth:', error)
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;

