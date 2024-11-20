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
        // take animate-left keyframe and add this tailwind to its classname
        'left-movement': 'left-movement 1s linear infinite',
        'right-movement': 'right-movement 1s linear infinite',
      },
      keyframes: {
        'ping-lg': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'left-movement': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'right-movement': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
