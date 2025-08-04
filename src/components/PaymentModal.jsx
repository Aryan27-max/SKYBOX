import  React, { useState } from 'react'
import { X, CreditCard, Lock, CheckCircle } from 'lucide-react'

function PaymentModal({ isOpen, onClose, amount, units }) {
  const [step, setStep] = useState(1)
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  })
  const [processing, setProcessing] = useState(false)

  if (!isOpen) return null

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setStep(3)
      setTimeout(() => {
        onClose()
        setStep(1)
      }, 2000)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md">
        {step === 1 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Payment Details</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-indigo-500/20 rounded-lg p-4 mb-6">
              <div className="flex justify-between text-white mb-2">
                <span>Energy Consumed:</span>
                <span>{units} kWh</span>
              </div>
              <div className="flex justify-between text-white text-lg font-bold">
                <span>Amount Due:</span>
                <span>${amount}</span>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <CreditCard className="h-5 w-5" />
              <span>Pay with Card</span>
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Card Details</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardData.number}
                  onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-indigo-500 focus:outline-none"
                  maxLength="19"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                  className="bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-indigo-500 focus:outline-none"
                  maxLength="5"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardData.cvv}
                  onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                  className="bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-indigo-500 focus:outline-none"
                  maxLength="3"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={cardData.name}
                  onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Lock className="h-5 w-5" />
                <span>{processing ? 'Processing...' : `Pay $${amount}`}</span>
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
            <p className="text-gray-300">Thank you for your payment of ${amount}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentModal
 