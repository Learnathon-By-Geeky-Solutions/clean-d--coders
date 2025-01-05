import { create } from "zustand";
const useCounterStore = create((set) => ({
  counter: 0,
  setCounter: (val) => set({ counter: val }),
  increment: () =>
    set((state) => {
      if (state.counter >= 100) {
        alert("Counter cannot be more than 100");
        return state;
      }
      return { counter: state.counter + 1 };
    }),
  decrement: () =>
    set((state) => {
      if (state.counter <= 0) {
        alert("Counter cannot be less than 0");
        return state;
      }
      return { counter: state.counter - 1 };
    }),
}));
export default useCounterStore;
