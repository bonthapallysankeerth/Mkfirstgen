/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cricket: {
          dark: '#041009',      // Deep black-green background
          pitch: '#07180e',     // Dark green card background
          emerald: '#0a3219',   // Forest green accent
          light: '#105028',     // Mid green
          vibrant: '#1ab155',   // Vivid emerald grass green
          gold: '#d4af37',      // Premium metallic gold
          goldlight: '#f1d26f', // Bright golden yellow
          golddark: '#aa811a',  // Deep amber bronze
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float-ball': 'floatBall 6s ease-in-out infinite',
        'swing-bat': 'swingBat 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-particle': 'floatParticle 8s ease-in-out infinite',
      },
      keyframes: {
        floatBall: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -30px) scale(1.1) rotate(180deg)' },
        },
        swingBat: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-15deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.05)' },
        },
        floatParticle: {
          '0%, 100%': { transform: 'translate(0, 0) opacity: 0.2' },
          '50%': { transform: 'translate(-20px, -40px) opacity: 0.6' },
        }
      }
    },
  },
  plugins: [],
}
