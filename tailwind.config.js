/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F4EC',
          dark: '#EAE5D9',
        },
        charcoal: {
          DEFAULT: '#1B1B1B',
          light: '#2C2C2C',
          dark: '#111111',
        },
        kodak: {
          DEFAULT: '#FFD43B',
          orange: '#F97316',
        },
        film: {
          red: '#D62828',
          green: '#6C9A8B',
          blue: '#1A365D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        kalam: ['Kalam', 'cursive'],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
        'shutter': 'shutter 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards',
        'wiggle': 'wiggle 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '95%': { transform: 'translate(-10%, 10%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        shutter: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' }
        },
        wiggle: {
          '0%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(2deg)' }
        }
      }
    },
  },
  plugins: [],
}
