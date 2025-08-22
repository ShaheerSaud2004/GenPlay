/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1220',
        card: '#171A2B',
        accent: '#4ADE80',
        'accent-2': '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'drift-reverse': 'driftReverse 12s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.9)' },
          '75%': { transform: 'translate(20px, 10px) scale(1.05)' },
        },
        driftReverse: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-25px, 20px) scale(0.95)' },
          '50%': { transform: 'translate(35px, -15px) scale(1.1)' },
          '75%': { transform: 'translate(-15px, -25px) scale(1.02)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(74, 222, 128, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(74, 222, 128, 0.8), 0 0 30px rgba(74, 222, 128, 0.3)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
