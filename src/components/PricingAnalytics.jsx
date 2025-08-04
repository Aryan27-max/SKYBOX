import  React, { useState, useEffect, useRef } from 'react' 
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import  { TrendingUp, DollarSign, Clock, CreditCard } from 'lucide-react'
import PaymentModal from './PaymentModal' 

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

function  PricingAnalytics({ data }) {
  const [showPayment, setShowPayment] = useState(false)
  const costSaved = 127.45
  const currentTier = 'Off-Peak'
  const currentBill = data.currentBill || 28.45 
  
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cost Saved ($)',
        data: [65, 89, 103, 95, 112, 127],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2" />
        Pricing & Analytics
      </h3>
      
      <div className="space-y-6">
               <div className="grid grid-cols-1 gap-3">
          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <span className="text-green-300 text-xs font-medium">Cost Saved</span>
            </div>
            <p className="text-xl font-bold text-white">${costSaved.toFixed(2)}</p>
            <p className="text-green-300 text-xs">This month</p>
          </div>

          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-red-400" />
                <span className="text-red-300 text-xs font-medium">Current Bill</span>
              </div>
                           <button 
                onClick={() => setShowPayment(true)}
                className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
              >
                Pay Now
              </button> 
            </div>
            <p className="text-xl font-bold text-white">${currentBill.toFixed(2)}</p>
            <p className="text-red-300 text-xs">{data.unitsConsumed?.toFixed(1) || '0.0'} kWh consumed</p>
          </div>
          
          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-xs font-medium">Pricing Tier</span>
            </div>
            <p className="text-lg font-bold text-white">{currentTier}</p>
            <p className="text-blue-300 text-xs">$0.12/kWh until 6 PM</p>
          </div>
        </div> 

               <div>
          <h4 className="text-white font-medium mb-3 text-sm">Monthly Report</h4>
          <div className="h-24">
            <Line data={chartData} options={chartOptions} />
          </div>
               </div>

        <PaymentModal
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          amount={currentBill.toFixed(2)}
          units={data.unitsConsumed?.toFixed(1) || '0.0'}
        />
      </div>
    </div>
  )
} 

export default PricingAnalytics
 