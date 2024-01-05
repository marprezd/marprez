<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <UContainer class="mb-10">
    <h2
      class="text-center text-3xl font-bold sm:text-4xl md:text-5xl md:leading-none"
    >
      {{ title }}
    </h2>

    <div class="mx-auto mt-6 flex justify-center">
      <span class="inline-block h-1 w-40 rounded-full bg-secondary-500 dark:bg-secondary-400" />
      <span class="mx-1 inline-block h-1 w-3 rounded-full bg-secondary-500 dark:bg-secondary-400" />
      <span class="inline-block h-1 w-1 rounded-full bg-secondary-500 dark:bg-secondary-400" />
    </div>

    <h3 class="mx-auto mt-6 max-w-2xl text-center text-gray-600 dark:text-gray-200">
      {{ description }}
    </h3>
  </UContainer>
</template>

<style scoped></style>
