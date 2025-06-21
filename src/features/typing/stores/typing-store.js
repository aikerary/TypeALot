import { create } from 'zustand'

export const useTypingStore = create((set, get) => ({
  currentText: "The quick brown fox jumps over the lazy dog. This text will help you practice typing without the pressure of speed.",
  userInput: "",
  currentIndex: 0,
  errors: [],
  isTyping: false,
  startTime: null,
  wpm: 0,
  accuracy: 100,

  updateUserInput: (input) => {
    const { currentText, startTime } = get()
    const errors = []
    let currentIndex = 0
    
    for (let i = 0; i < input.length; i++) {
      if (i < currentText.length) {
        if (input[i] === currentText[i]) {
          currentIndex = i + 1
        } else {
          errors.push(i)
          break
        }
      }
    }
    
    const isTyping = input.length > 0
    const newStartTime = startTime || (isTyping ? Date.now() : null)
    
    set({
      userInput: input,
      currentIndex,
      errors,
      isTyping,
      startTime: newStartTime
    })
    
    get().calculateStats()
  },

  calculateStats: () => {
    const { userInput, startTime, errors } = get()
    
    if (!startTime || userInput.length === 0) {
      set({ wpm: 0, accuracy: 100 })
      return
    }
    
    const timeElapsed = (Date.now() - startTime) / 1000 / 60
    const wordsTyped = userInput.length / 5
    const wpm = Math.round(wordsTyped / timeElapsed) || 0
    const accuracy = Math.round(((userInput.length - errors.length) / userInput.length) * 100) || 100
    
    set({ wpm, accuracy })
  },

  setCurrentText: (text) => {
    set({ 
      currentText: text,
      userInput: "",
      currentIndex: 0,
      errors: [],
      isTyping: false,
      startTime: null,
      wpm: 0,
      accuracy: 100
    })
  },

  resetTyping: () => {
    set({
      userInput: "",
      currentIndex: 0,
      errors: [],
      isTyping: false,
      startTime: null,
      wpm: 0,
      accuracy: 100
    })
  }
})) 