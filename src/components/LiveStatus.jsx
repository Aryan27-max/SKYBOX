import  React from 'react'
import { Sun, Zap, Power } from 'lucide-react'

function LiveStatus({ data }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">Live Status Panel</h3>
      
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"> 
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-3">
            <div className="absolute inset-0 bg-green-500 rounded-full opacity-20"></div>
            <div
              className="absolute inset-1 bg-green-500 rounded-full transition-all duration-1000"
              style={{ clipPath: `polygon(0 ${100 - data.batteryLevel}%, 100% ${100 - data.batteryLevel}%, 100% 100%, 0% 100%)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{Math.round(data.batteryLevel)}%</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm">Battery Level</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 bg-yellow-500/20 rounded-full">
            <Sun className={`h-8 w-8 text-yellow-400 ${data.solarInput > 3 ? 'animate-spin-slow' : ''}`} />
          </div>
          <p className="text-white font-bold">{data.solarInput.toFixed(1)} kW</p>
          <p className="text-gray-300 text-sm">Solar Input</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 bg-blue-500/20 rounded-full">
            <Zap className="h-8 w-8 text-blue-400" />
          </div>
          <p className="text-white font-bold">{data.gridUsage.toFixed(1)} kW</p>
          <p className="text-gray-300 text-sm">Grid Usage</p>
        </div>

        <div className="text-center">
          <div className={`flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full ${
            data.isCharging ? 'bg-green-500/20 charging-animation' : 'bg-gray-500/20'
          }`}>
            <Power className={`h-8 w-8 ${data.isCharging ? 'text-white' : 'text-gray-400'}`} />
          </div>
          <p className="text-white font-bold">{data.isCharging ? 'Charging' : 'Idle'}</p>
          <p className="text-gray-300 text-sm">EV Status</p>
        </div>
      </div>
    </div>
  )
}

export default LiveStatus
 