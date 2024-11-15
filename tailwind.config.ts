import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },

      animation: {
        // Hero section availability ping
        'ping-lg': 'ping-lg 1s ease-in-out infinite',
      },
      keyframes: {
        'ping-lg': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
