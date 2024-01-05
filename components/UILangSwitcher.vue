<script setup>
import { useSwitchLocalePath } from '#i18n'
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <ClientOnly>
    <div class="hs-dropdown relative inline-flex [--strategy:absolute] sm:[--trigger:hover]">
      <UButton
        icon="i-tabler-language"
        size="sm"
        color="white"
        square
        variant="solid"
        :ui="{ base: 'hs-dropdown-toggle disabled:opacity-50 disabled:pointer-events-none', rounded: 'rounded-xl' }"
      />
      <div
        class="
        hs-dropdown-menu
        duration
        mt-2
        hidden
        min-w-[15rem]
        rounded-lg
        bg-white
        p-2
        opacity-0
        shadow-md
        transition-[opacity,margin]
        before:absolute
        before:-top-4 before:start-0 before:h-4 before:w-full
        after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full
        hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800
      "
      >
        <div class="-m-2 rounded-t-lg bg-cyan-50 px-5 py-3 dark:bg-gray-700">
          <p class="text-sm text-cyan-700 dark:text-gray-400">
            {{ t('languages.pline1') }}
          </p>
          <p class="text-sm font-medium text-cyan-800 dark:text-gray-300">
            {{ t('languages.pline2') }}
          </p>
        </div>
        <div class="mt-2 py-2 first:pt-0 last:pb-0">
          <NuxtLink
            v-for="loc in availableLocales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="flex
          items-center
          gap-x-3.5
          rounded-lg
          px-3
          py-2
          text-sm text-cyan-800
          hover:bg-cyan-50
          focus:bg-gray-100 focus:outline-none
          dark:text-gray-400
          dark:hover:bg-cyan-200
          dark:hover:text-cyan-950
          dark:focus:bg-cyan-700"
          >
            {{
              loc.name
            }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
