import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">
          🎯 TypeALot
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Master typing at your own pace - Where every keystroke counts, but perfection isn't the pressure.
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Ready to start typing?
          </h2>
          <div className="text-left font-mono text-lg bg-gray-900 p-4 rounded border">
            <span className="text-gray-400">Type this text: </span>
            <span className="text-white">The quick brown fox jumps over the lazy dog.</span>
          </div>
        </div>

        <div className="flex space-x-4 justify-center">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Test Counter: {count}
          </button>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
            Start Typing
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>✨ Tailwind CSS 4 + Zustand + Vite + React ✨</p>
        </div>
      </div>
    </div>
  )
}

export default App
