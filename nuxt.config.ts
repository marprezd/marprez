// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'unplugin-icons/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  plugins: ['~/plugins/preline.client.ts'],
  ui: {
    global: true,
    icons: ['heroicons', 'tabler']
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference.
    fallback: 'light', // fallback value if not system preference found.
    classSuffix: '' // set the classSuffix option to an empty string to compatibility with Tailwindcss.
  },
  googleFonts: {
    families: {
      Inter: {
        wght: '100..900'
      }
    },
    display: 'swap',
    preload: true,
    outputDir: 'assets',
    fontsDir: 'fonts',
    fontsPath: '../fonts'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },
  devtools: { enabled: true },
  image: {
    quality: 80,
    domains: ['res.cloudinary.com'],
    format: ['avif', 'webp', 'jpeg', 'jpg', 'png'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dieoeaoiy/image/upload/'
    }
  },
  i18n: {
    baseUrl: 'https://marprez.vercel.app',
    customRoutes: 'config',
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.ts'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.ts'
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        name: 'Türkçe',
        file: 'tr.ts'
      }
    ],
    lazy: true,
    langDir: 'translations',
    vueI18n: './i18n.config.ts'
  }
})
