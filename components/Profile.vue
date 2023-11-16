<script lang="ts" setup></script>

<template>
  <header class="flex w-full items-center justify-center">
    <ProfileHeader />
  </header>
  <div
    class="-mt-10 flex flex-col rounded-3xl bg-light-50 shadow-[-4px_-4px_20px_-12px_rgba(0,0,0,0.1),_4px_4px_20px_0px_rgba(45,78,255,0.15)] dark:bg-dark-900 sm:flex-row lg:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
  >
    <div
      class="basis-full border-b border-dotted border-gray-400 dark:border-gray-800 sm:basis-5/6 sm:border-b-0 sm:border-r"
    >
      <ProfileBio />
    </div>
    <aside class="basis-full sm:basis-1/6">
      <ProfileAside />
    </aside>
  </div>
</template>

<style scoped></style>
