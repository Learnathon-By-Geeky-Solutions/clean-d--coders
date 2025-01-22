import { create } from "zustand";
const useUserStore = create((set) => ({
  user: null,
  isLoading: true,
  setUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    set({ user: {role: "mentee"}, isLoading: false })
  },
  clearUser: () => set({ user: null, isLoading: false }),
}));
export default useUserStore;
