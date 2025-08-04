import  React from 'react'
import { MapPin, Home, Zap, Sun } from 'lucide-react'

function MiniMap() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <MapPin className="h-5 w-5 mr-2" />
        Location Overview
      </h3>
      
           <div className="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg h-40 sm:h-56 overflow-hidden border border-white/10"> 
               {/* Interactive map background */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-400/20"></div>
          
          {/* Animated network lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <path 
              d="M20,40 Q80,20 140,60 T200,80" 
              stroke="url(#energyGradient)" 
              strokeWidth="2" 
              fill="none" 
              className="animate-pulse"
            />
            <path 
              d="M60,100 Q120,80 180,120" 
              stroke="url(#energyGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
          
          {/* Energy flow indicators */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-green-500/30 rounded-full animate-pulse-slow flex items-center justify-center">
            <div className="w-8 h-8 bg-green-400/50 rounded-full animate-bounce-slow"></div>
          </div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-8 w-8 h-8 bg-yellow-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div> 
        
        {/* Location markers */}
        <div className="absolute inset-0 p-4">
          <div className="relative h-full">
            {/* Home location */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="p-2 bg-indigo-500 rounded-full shadow-lg animate-bounce-slow">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-white mt-1 bg-black/50 px-2 py-1 rounded">Home</span>
            </div>
            
            {/* Solar panels indicator */}
            <div className="absolute top-4 right-8 flex flex-col items-center">
              <div className="p-2 bg-yellow-500 rounded-full shadow-lg">
                <Sun className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-white mt-1 bg-black/50 px-2 py-1 rounded">Solar</span>
            </div>
            
            {/* Charging station */}
            <div className="absolute bottom-8 left-8 flex flex-col items-center">
              <div className="p-2 bg-green-500 rounded-full shadow-lg energy-pulse">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-white mt-1 bg-black/50 px-2 py-1 rounded">EV</span>
            </div>
          </div>
        </div>
        
               {/* Real-time status overlay */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-black/40 backdrop-blur rounded px-2 py-1">
            <div className="flex justify-between text-xs text-gray-200">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                San Francisco, CA
              </span>
              <span>☀️ 72°F • Optimal</span>
            </div>
          </div>
        </div> 
      </div>
      
           <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="p-2 bg-white/5 rounded-lg">
          <p className="text-white font-semibold text-sm">4.2 kW</p>
          <p className="text-gray-400 text-xs">Solar Gen</p>
        </div>
        <div className="p-2 bg-white/5 rounded-lg">
          <p className="text-white font-semibold text-sm">0.8 mi</p>
          <p className="text-gray-400 text-xs">Nearest Station</p>
        </div>
      </div> 
    </div>
  )
}

export default MiniMap
 