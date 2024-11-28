module.exports = {
	darkMode: ['class'],
	content: [
	  './index.html', // Include index.html
	  './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS files inside the src folder
	],
	theme: {
		extend: {
		animation: {
			'slide-down': 'slide-down 0.3s ease-out',
			'slide-up': 'slide-up 0.3s ease-in',
			'fade-in': 'fade-in 0.5s ease-out',
		},
		keyframes: {
			'slide-down': {
			'0%': { transform: 'translateY(-20px)', opacity: 0 },
			'100%': { transform: 'translateY(0)', opacity: 1 },
			},
			'slide-up': {
			'0%': { transform: 'translateY(0)', opacity: 1 },
			'100%': { transform: 'translateY(-20px)', opacity: 0 },
			},
			'fade-in': {
			'0%': { opacity: 0, transform: 'translateY(10px)' },
			'100%': { opacity: 1, transform: 'translateY(0)' },
			},
		},
		},
	},
	plugins: []
  }