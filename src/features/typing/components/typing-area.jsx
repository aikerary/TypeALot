import { useEffect, useRef } from 'react'
import { useTypingStore } from '../stores/typing-store'

export function TypingArea() {
  const { 
    currentText, 
    userInput, 
    currentIndex, 
    errors,
    updateUserInput,
    resetTyping 
  } = useTypingStore()
  
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    
    if (errors.length > 0 && value.length > userInput.length) {
      return
    }
    
    updateUserInput(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      resetTyping()
    }
  }

  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = 'text-gray-400'
      
      if (index < currentIndex) {
        className = 'text-green-400'
      } else if (index === currentIndex) {
        className = 'bg-blue-500 text-white'
      } else if (errors.includes(index)) {
        className = 'bg-red-500 text-white'
      }
      
      return (
        <span key={index} className={className}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      )
    })
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 p-6 rounded-lg font-mono text-xl leading-relaxed border">
        {renderText()}
      </div>
      
      <textarea
        ref={textareaRef}
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full p-4 bg-gray-700 text-white rounded-lg font-mono text-lg resize-none"
        placeholder="Start typing... (Press Esc to reset)"
        rows={3}
        spellCheck={false}
      />
      
      {errors.length > 0 && (
        <div className="text-red-400 text-sm">
          Fix the error to continue typing
        </div>
      )}
    </div>
  )
} 