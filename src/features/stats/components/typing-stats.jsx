import { formatTime } from '../../../utils/text-utils'

export function TypingStats({ wpm, accuracy, timeElapsed, errorsCount }) {
  const stats = [
    {
      label: 'WPM',
      value: wpm || 0,
      color: 'text-blue-400',
      icon: '⚡'
    },
    {
      label: 'Accuracy',
      value: `${accuracy || 100}%`,
      color: 'text-green-400',
      icon: '🎯'
    },
    {
      label: 'Time',
      value: formatTime(timeElapsed || 0),
      color: 'text-yellow-400',
      icon: '⏱️'
    },
    {
      label: 'Errors',
      value: errorsCount || 0,
      color: 'text-red-400',
      icon: '❌'
    }
  ]

  return (
    <div className="typing-stats">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          💡 Take your time - accuracy matters more than speed!
        </p>
      </div>
    </div>
  )
} 