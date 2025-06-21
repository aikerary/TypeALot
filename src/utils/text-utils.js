export function calculateWPM(charactersTyped, timeInMinutes) {
  if (timeInMinutes === 0) return 0
  const wordsTyped = charactersTyped / 5
  return Math.round(wordsTyped / timeInMinutes)
}

export function calculateAccuracy(correctChars, totalChars) {
  if (totalChars === 0) return 100
  return Math.round((correctChars / totalChars) * 100)
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function isCharCorrect(userChar, targetChar) {
  return userChar === targetChar
}

export function getTextDifficulty(text) {
  const specialChars = /[!@#$%^&*()_+{}|:"<>?]/g
  const numbers = /[0-9]/g
  const capitalLetters = /[A-Z]/g
  
  const specialCharCount = (text.match(specialChars) || []).length
  const numberCount = (text.match(numbers) || []).length
  const capitalCount = (text.match(capitalLetters) || []).length
  
  const complexityScore = (specialCharCount * 3) + (numberCount * 2) + capitalCount
  const complexityRatio = complexityScore / text.length
  
  if (complexityRatio > 0.2) return 'hard'
  if (complexityRatio > 0.1) return 'medium'
  return 'easy'
}

export function getSampleTexts() {
  return [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "How vexingly quick daft zebras jump!",
    "The five boxing wizards jump quickly.",
    "Jaded zombies acted quaintly but kept driving their oxen forward.",
    "Programming is not about what you know; it's about what you can figure out.",
    "The best way to learn is by doing, not by reading about it.",
    "Clean code always looks like it was written by someone who cares."
  ]
} 