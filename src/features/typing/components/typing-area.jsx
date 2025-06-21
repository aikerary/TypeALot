import { useState } from 'react'

export function TypingArea({ text, onProgress }) {
  const [currentInput, setCurrentInput] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleInput = (e) => {
    const value = e.target.value
    setCurrentInput(value)
    
    if (value === text.slice(0, value.length)) {
      setCurrentIndex(value.length)
      onProgress?.(value.length, text.length)
    }
  }

  return (
    <div className="typing-area">
      <div className="text-display p-6 bg-gray-800 rounded-lg font-mono text-lg">
        <span className="text-green-400">
          {text.slice(0, currentIndex)}
        </span>
        <span className="bg-blue-500 text-white">
          {text[currentIndex] || ''}
        </span>
        <span className="text-gray-400">
          {text.slice(currentIndex + 1)}
        </span>
      </div>
      
      <textarea
        value={currentInput}
        onChange={handleInput}
        className="w-full mt-4 p-4 bg-gray-700 text-white rounded-lg font-mono text-lg"
        placeholder="Start typing here..."
        rows={4}
      />
    </div>
  )
} 