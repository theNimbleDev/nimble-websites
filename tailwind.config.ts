import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear':
          'linear-gradient(90deg, #FFA673 0%, #FF7354 50%, #FF7D06 100%)',
        'custom-gradient':
          'linear-gradient(to bottom right, #D9D9D9 0%, #D9D9D9 44%, #737373 35%, #737373 100%)',
        'custom-diagonal-gradient':
          'linear-gradient(to bottom right, rgba(217, 217, 217, 0) 0%, rgba(115, 115, 115, 0.17) 100%)',
        'review-gradient':
          'linear-gradient(to bottom right, rgba(29, 29, 29, 0) 0%, rgba(22, 22, 22) 100%)'
      },
      backgroundColor: {
        'custom-rgba': 'rgba(217, 217, 217, 0.18)',
        'custom-rgba-2': 'rgba(0, 0, 0, 0.67)'
      },
      screens: {
        mxd: { raw: '(min-width: 768px) and (max-width: 768px)' }
      },
      colors: {
        primary: {
          100: '#FF6600',
          200: 'rgba(255, 124, 17, 0.1)',
          300: '#1D1D1D'
        },
        secondary: {
          100: '#A020F0',
          200: 'rgba(160, 32, 240, 0.34)'
        },
        subtext: {
          100: '#989898'
        },
        nav: {
          100: '#282828'
        },
        academy: {
          black: '#212121'
        }
      },
      letterSpacing: {
        widest: '.35rem',
        wider: '.10rem'
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(calc(-50% - 2.5rem))' }
        }
      },
      animation: {
        scroll: 'scroll 20s linear infinite'
      }
    }
  },
  plugins: [nextui()]
}

export default config
