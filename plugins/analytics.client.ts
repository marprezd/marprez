import { defineNuxtPlugin } from 'nuxt/app'
import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  inject()
})
