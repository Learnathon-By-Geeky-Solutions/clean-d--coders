import { counterSlice } from '@/store/slices'
import { create } from 'zustand'
const store = create((...a) => ({
    ...counterSlice(...a),    
}))

export default store