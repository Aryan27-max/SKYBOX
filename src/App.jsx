import  React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import AdminLogin from './components/AdminLogin'
import { Zap } from 'lucide-react'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-1.5 sm:p-2 bg-indigo-500 rounded-lg">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Sky Box</h1>
            </div>
            <button
              onClick={() => setShowLogin(true)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </header> 

      <main>
        <Dashboard />
      </main>

      {showLogin && (
        <AdminLogin
          onClose={() => setShowLogin(false)}
          onLogin={(success) => {
            setIsAdmin(success)
            setShowLogin(false)
          }}
        />
      )}
    </div>
  )
}

export default App
 