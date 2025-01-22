import { create } from "zustand";
const useUserStore = create((set) => ({
  user: {role: "mentee"},
  isLoading: false,
  setUser: (data) => set({ user: data, isLoading: false }),
  clearUser: () => set({ user: null, isLoading: false }),
}));
export default useUserStore;
