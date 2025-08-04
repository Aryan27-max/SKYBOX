import  React, { useState, useEffect } from 'react'
import  StatsCards from './StatsCards'
import LiveStatus from './LiveStatus'
import SmartControls from './SmartControls'
import PricingAnalytics from './PricingAnalytics'
import MiniMap from './MiniMap' 

function Dashboard() {
   const [energyData, setEnergyData] = useState({
    totalGenerated: 847.2,
    chargingSessions: 12,
    emissionsSaved: 156.8,
    batteryLevel: 78,
    solarInput: 4.2,
    gridUsage: 2.1,
    isCharging: true,
    unitsConsumed: 45.7,
    currentBill: 28.45
  }) 

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        batteryLevel: Math.min(100, prev.batteryLevel + (Math.random() * 2 - 0.5)),
        solarInput: Math.max(0, 5 + Math.sin(Date.now() / 10000) * 3),
               gridUsage: Math.max(0, 2 + Math.random() * 2),
        totalGenerated: prev.totalGenerated + Math.random() * 0.1,
        unitsConsumed: prev.unitsConsumed + Math.random() * 0.05,
        currentBill: prev.currentBill + Math.random() * 0.02 
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
       <div className="max-w-7xl mx-auto p-3 sm:p-6 space-y-4 sm:space-y-8">
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Welcome to Sky Box</h2>
        <p className="text-sm sm:text-base text-gray-300">Smart EV Charging with Solar Integration</p>
      </div> 

           <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
        <div className="xl:col-span-3 space-y-4 sm:space-y-6">
          <StatsCards data={energyData} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <LiveStatus data={energyData} />
            <SmartControls data={energyData} onUpdate={setEnergyData} />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <MiniMap />
          <PricingAnalytics data={energyData} />
        </div>
      </div> 
    </div>
  )
}

export default Dashboard
 