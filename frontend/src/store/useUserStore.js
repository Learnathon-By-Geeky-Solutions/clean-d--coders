import { create } from "zustand";
const useUserStore = create((set) => ({
  user: {role: null},
  setUser: (data) => set({ user: data }),
  clearUser: () => set({ user: null }),
}));
export default useUserStore;
