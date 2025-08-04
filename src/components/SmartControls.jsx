import  React, { useState } from 'react'
import { Power, Settings, Zap, AlertCircle } from 'lucide-react'

function SmartControls({ data, onUpdate }) {
  const [showAI, setShowAI] = useState(true)

  const toggleCharging = () => {
    onUpdate(prev => ({ ...prev, isCharging: !prev.isCharging }))
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Settings className="h-5 w-5 mr-2" />
        Smart Controls
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center space-x-3">
            <Power className={`h-6 w-6 ${data.isCharging ? 'text-green-400' : 'text-gray-400'}`} />
            <span className="text-white font-medium">EV Charging</span>
          </div>
          <button
            onClick={toggleCharging}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              data.isCharging ? 'bg-green-500' : 'bg-gray-600'
            }`}
          >
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              data.isCharging ? 'translate-x-7' : 'translate-x-1'
            }`} />
          </button>
        </div>

        {showAI && (
          <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 animate-pulse-slow">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-purple-200 text-sm font-medium">AI Suggestion</p>
                <p className="text-white text-sm mt-1">
                  Delay charge to 9 PM to save 27% cost based on dynamic pricing
                </p>
                <div className="flex space-x-2 mt-3">
                  <button className="px-3 py-1 bg-purple-500 text-white text-xs rounded-md hover:bg-purple-600 transition-colors">
                    Apply
                  </button>
                  <button
                    onClick={() => setShowAI(false)}
                    className="px-3 py-1 bg-gray-600 text-white text-xs rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <h4 className="text-white font-medium mb-3 flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Energy Source Priority
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Solar</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Battery</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Grid</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartControls
 