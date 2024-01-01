import 'preline/preline'

declare let HSStaticMethods: {
  autoInit(collection?: string | string[]): void
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    HSStaticMethods.autoInit()
  })
})
