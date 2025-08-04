export  default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
           animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        'xs': '475px',
      } 
    },
  },
  plugins: [],
}
 