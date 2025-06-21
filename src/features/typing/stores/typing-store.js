import { create } from 'zustand'

export const useTypingStore = create((set, get) => ({
  // State
  currentText: "The quick brown fox jumps over the lazy dog.",
  userInput: "",
  currentIndex: 0,
  errors: [],
  isTyping: false,
  startTime: null,
  endTime: null,
  wpm: 0,
  accuracy: 100,

  // Actions
  setCurrentText: (text) => set({ currentText: text }),
  
  updateUserInput: (input) => {
    const { currentText } = get()
    const errors = []
    let currentIndex = 0
    
    // Check for errors and calculate current position
    for (let i = 0; i < input.length; i++) {
      if (i < currentText.length) {
        if (input[i] === currentText[i]) {
          currentIndex = i + 1
        } else {
          errors.push(i)
          break // Stop progression on error (TypeALot's key feature)
        }
      }
    }
    
    set({
      userInput: input,
      currentIndex,
      errors,
      isTyping: input.length > 0,
      startTime: get().startTime || Date.now()
    })
  },

  calculateStats: () => {
    const { userInput, currentText, startTime, errors } = get()
    const timeElapsed = (Date.now() - startTime) / 1000 / 60 // minutes
    const wordsTyped = userInput.length / 5 // standard word length
    const wpm = Math.round(wordsTyped / timeElapsed) || 0
    const accuracy = Math.round(((userInput.length - errors.length) / userInput.length) * 100) || 100
    
    set({ wpm, accuracy })
  },

  resetTyping: () => set({
    userInput: "",
    currentIndex: 0,
    errors: [],
    isTyping: false,
    startTime: null,
    endTime: null,
    wpm: 0,
    accuracy: 100
  }),

  completeTyping: () => set({
    isTyping: false,
    endTime: Date.now()
  })
})) 