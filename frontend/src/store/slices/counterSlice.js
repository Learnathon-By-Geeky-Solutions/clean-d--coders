const counterSlice = (set) => ({
  counter: 0,
  increment: () => set((state) => { 
        if(state.counter === 5) {
            alert("Counter cannot be more than 5");
            return state;
        }
        
        return {counter: state.counter + 1 }
    }),
    decrement: () => set((state) => { 
        if(state.counter === 0) {
            alert("Counter cannot be less than 0");
            return state;
        }
        
        return {counter: state.counter - 1 }
    }),
});

export default counterSlice;