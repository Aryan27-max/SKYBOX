import  React from 'react'
import { Zap, Car, Leaf } from 'lucide-react'

function StatsCards({ data }) {
  const cards = [
       {
      title: 'Total Energy Generated',
      value: `${data.totalGenerated.toFixed(1)} kWh`,
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      pulse: false
    }, 
    {
      title: 'Charging Sessions Today',
      value: data.chargingSessions,
      icon: Car,
      color: 'from-blue-400 to-blue-600',
      pulse: false
    },
             {
      title: 'Emissions Saved',
      value: `${data.emissionsSaved} kg CO₂`,
      icon: Leaf,
      color: 'from-green-400 to-green-600',
      pulse: false
    }, 
    {
      title: 'Units Consumed',
      value: `${data.unitsConsumed?.toFixed(1) || '0.0'} kWh`,
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      pulse: false
    } 
  ]

   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> 
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 ${
            card.pulse ? 'energy-pulse' : ''
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-10`} />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-gradient-to-r ${card.color} rounded-lg shadow-lg`}>
                <card.icon className="h-6 w-6 text-white" />
              </div>
              {card.pulse && <div className="animate-pulse-slow text-green-400">●</div>}
            </div>
            <h3 className="text-sm font-medium text-gray-300 mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-white">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
 