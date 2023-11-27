<script setup>
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
</script>

<template>
  <div>
    <NuxtLink
      :to="localePath('/')"
      class="ml-2 flex md:mr-24"
    >
      <NuxtImg
        src="/images/profile/marprez.jpg"
        preload
        class="ring-primary-500 mr-3 rounded-full p-1 ring-2 dark:ring-neutral-500"
        width="34"
        height="34"
        alt="MP"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
      >marprez</span>
    </NuxtLink>
  </div>
</template>
