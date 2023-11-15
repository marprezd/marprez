<script setup>
import { useI18n } from '#i18n'
import Button from 'primevue/button'

const { t } = useI18n()

const line1 = t('home.hero.desc1')
const line2 = t('home.hero.desc2')
const started = t('home.hero.started')
const hire = t('home.hire')

const data = [
  line1,
  line2
]
</script>

<template>
  <div class="order-last mr-auto place-self-center sm:order-first sm:col-span-7">
    <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
      {{ t("home.hero.title") }}
    </h1>
    <Typewriter
      :data="data"
    />
    <div class="flex flex-col gap-4 sm:flex-row">
      <!-- TODO: Add event to button -->
      <Button
        :label="started"
        :pt="{ root: { class: 'border-none' } }"
        class="inline-flex items-center justify-center rounded-lg border-none border-transparent bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  dark:bg-primary-300 dark:text-primary-950 dark:hover:bg-primary-400 dark:focus:ring-primary-900"
      />
      <!-- TODO: Add event to button -->
      <Button
        :label="hire"
        :pt="{ root: { class: '' } }"
        class="rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
      />
    </div>
  </div>
  <div class="sm:col-span-5 sm:mt-0 sm:flex">
    <DevActivitySvg />
  </div>
</template>

<style scoped></style>
