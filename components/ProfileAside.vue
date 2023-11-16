<script lang="ts" setup>
import { useI18n } from '#i18n'
const { t } = useI18n()

const yearsExperience = Math.floor((new Date().getTime() - new Date('2019-08-13').getTime()) / 3.15576e10)
</script>

<template>
  <div class="border-b border-dotted border-gray-400 dark:border-gray-800">
    <div class="flex flex-col items-center justify-center p-4 text-center">
      <p class="text-2xl font-bold text-gray-600 dark:text-gray-300">
        {{ yearsExperience }}
      </p>
      <p class="text-sm font-normal">
        {{ t("home.profile.experience") }}
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center p-4 lg:px-4 lg:pb-4 lg:pt-7">
    <div class="flex flex-row gap-6 sm:flex-col md:!gap-4">
      <div class="flex flex-col items-center justify-center">
        <p class="text-2xl font-bold text-gray-600 dark:text-gray-300">
          104
        </p>
        <p class="text-sm font-normal">
          {{ t("home.profile.tweets") }}
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="text-2xl font-bold text-gray-600 dark:text-gray-300">
          38
        </p>
        <p class="text-sm font-normal">
          {{ t("home.profile.followers") }}
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="text-2xl font-bold text-gray-600 dark:text-gray-300">
          82
        </p>
        <p class="text-sm font-normal">
          {{ t("home.profile.following") }}
        </p>
      </div>
    </div>
    <p
      class="mt-4 text-center text-xs font-semibold uppercase tracking-widest"
    >
      On Twitter
    </p>
  </div>
</template>

<style scoped></style>
