import { create } from 'zustand'

export const useKeyboardStore = create((set) => ({
  currentLayout: 'qwerty',
  
  setLayout: (layout) => set({ currentLayout: layout })
})) 