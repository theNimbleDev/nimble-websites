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
      screens: {
        mxd: { raw: '(min-width: 768px) and (max-width: 768px)' }
      },
      colors: {
        brand: {
          orange: '#FF6600',
          white: '#FFFFFF',
          nearBlack: '#1D1D1D',
          darkGray: '#333333',
          mediumGray: '#5F5F5F',
          lightGray: '#989898',
          offWhite: '#FAFAFA',
          border: 'rgba(29, 29, 29, 0.1)'
        }
      },
      letterSpacing: {
        widest: '.35rem',
        wider: '.10rem'
      }
    }
  },
  plugins: [nextui()]
}

export default config
