const QWERTY_LAYOUT = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

export function KeyboardLayout({ currentKey, layout = 'qwerty' }) {
  const getKeyColor = (key) => {
    if (key === currentKey?.toLowerCase()) {
      return 'bg-blue-500 text-white'
    }
    return 'bg-gray-600 text-gray-200 hover:bg-gray-500'
  }

  return (
    <div className="keyboard-layout max-w-2xl mx-auto p-4">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-300">
        Keyboard Guide - {layout.toUpperCase()}
      </h3>
      
      <div className="space-y-2">
        {QWERTY_LAYOUT.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex justify-center gap-1"
            style={{ paddingLeft: `${rowIndex * 12}px` }}
          >
            {row.map((key) => (
              <div
                key={key}
                className={`
                  w-10 h-10 rounded flex items-center justify-center 
                  font-mono font-semibold text-sm transition-colors
                  ${getKeyColor(key)}
                `}
              >
                {key.toUpperCase()}
              </div>
            ))}
          </div>
        ))}
        
        {/* Space bar */}
        <div className="flex justify-center mt-4">
          <div 
            className={`
              w-64 h-10 rounded flex items-center justify-center 
              font-mono font-semibold text-sm transition-colors
              ${getKeyColor(' ')}
            `}
          >
            SPACE
          </div>
        </div>
      </div>
      
      {currentKey && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Press: <span className="text-blue-400 font-semibold">{currentKey}</span>
          </p>
        </div>
      )}
    </div>
  )
} 