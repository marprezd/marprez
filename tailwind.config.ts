/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import preline from 'preline/plugin'

export default <Partial<Config>> {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
    'content/**/*.md',
    './node_modules/preline/preline.js'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      backgroundImage: {
        heroLight: "url('https://res.cloudinary.com/dieoeaoiy/image/upload/v1704152302/marprez-dev/hero/polygon-bg-light_p7semz.svg')",
        heroDark: "url('https://res.cloudinary.com/dieoeaoiy/image/upload/v1704152302/marprez-dev/hero/polygon-bg-dark_grrrz9.svg')"

      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Jetbrains Mono Variable', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        secondary: colors.pink,
        tertiary: colors.orange
      },
      animation: {
        blink: '1s infinite' // typewriter animation
      },
      keyframes: {
        blink: {
          '0%': {
            borderColor: 'transparent'
          },
          '45%': {
            borderColor: 'transparent'
          },
          '50%': {
            borderColor: '#9CA3AF'
          },
          '100%': {
            borderColor: '#9CA3AF'
          }
        }
      }
    }
  },
  plugins: [typography, preline]
}
