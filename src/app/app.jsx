import { useState, useEffect } from 'react'
import { TypingArea } from '../features/typing/components/typing-area'
import { KeyboardLayout } from '../features/keyboard/components/keyboard-layout'
import { TypingStats } from '../features/stats/components/typing-stats'
import { useTypingStore } from '../features/typing/stores/typing-store'

function App() {
  const {
    currentText,
    userInput,
    currentIndex,
    errors,
    wpm,
    accuracy,
    updateUserInput,
    calculateStats,
    resetTyping
  } = useTypingStore()

  const [timeElapsed, setTimeElapsed] = useState(0)

  // Timer effect
  useEffect(() => {
    if (userInput.length > 0) {
      const interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
        calculateStats()
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [userInput, calculateStats])

  const handleTypingProgress = (current, total) => {
    if (current === total) {
      // Typing completed
      console.log('Typing completed!')
    }
  }

  const handleReset = () => {
    resetTyping()
    setTimeElapsed(0)
  }

  const currentChar = currentText[currentIndex]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-400">
            🎯 TypeALot
          </h1>
          <p className="text-gray-300">
            Master typing at your own pace
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats Section */}
        <TypingStats
          wpm={wpm}
          accuracy={accuracy}
          timeElapsed={timeElapsed}
          errorsCount={errors.length}
        />

        {/* Typing Area */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">
              Practice Text
            </h2>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
            >
              Reset
            </button>
          </div>
          
          <TypingArea
            text={currentText}
            onProgress={handleTypingProgress}
          />
        </div>

        {/* Keyboard Guide */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <KeyboardLayout currentKey={currentChar} />
        </div>

        {/* Instructions */}
        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            🌟 TypeALot Features
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>✅ <strong>Error-First Approach:</strong> Text stops when you make a mistake</li>
            <li>✅ <strong>No Pressure:</strong> Take your time to fix errors</li>
            <li>✅ <strong>Visual Guidance:</strong> See which key to press next</li>
            <li>✅ <strong>Progress Tracking:</strong> Monitor your improvement without stress</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
