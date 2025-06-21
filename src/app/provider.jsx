import { createContext, useContext } from 'react'

// This will be expanded as we add more global providers
const AppContext = createContext()

export function AppProvider({ children }) {
  const value = {
    // Global app state will go here
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
} 