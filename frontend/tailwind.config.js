/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      }
    },
  },
  variants: {
    // ... other variants
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [
    // ... other plugins
    require('@tailwindcss/aspect-ratio'),
  ],
}