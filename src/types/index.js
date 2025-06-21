// Shared types used across the application

export const KEYBOARD_LAYOUTS = {
  QWERTY: 'qwerty',
  DVORAK: 'dvorak',
  COLEMAK: 'colemak'
}

export const TYPING_STATUS = {
  IDLE: 'idle',
  TYPING: 'typing',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  ERROR: 'error'
}

// JSDoc types for better IDE support
/**
 * @typedef {Object} TypingSession
 * @property {string} text - The text to type
 * @property {string} userInput - Current user input
 * @property {number} currentIndex - Current character position
 * @property {number[]} errors - Array of error positions
 * @property {number} startTime - Session start timestamp
 * @property {number} endTime - Session end timestamp
 * @property {number} wpm - Words per minute
 * @property {number} accuracy - Accuracy percentage
 */

/**
 * @typedef {Object} KeyboardKey
 * @property {string} key - The key character
 * @property {string} finger - Which finger should press it
 * @property {boolean} isActive - Whether key is currently highlighted
 */ 