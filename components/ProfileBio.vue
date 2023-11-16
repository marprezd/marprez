<script lang="ts" setup>
import { useI18n } from '#i18n'
const { t } = useI18n()
</script>

<template>
  <div class="px-4 pb-4 pt-12">
    <i18n-t
      tag="p"
      class="text-sm lg:text-base"
      keypath="home.profile.bio1"
      scope="global"
    >
      <span class="font-semibold dark:text-white">Django</span>
      <span class="font-semibold dark:text-white">FastApi</span>
      <span class="font-semibold dark:text-white">Flask</span>
      <span class="font-semibold dark:text-white">Firebase</span>
      <span class="font-semibold dark:text-white">MongoDB</span>
      <span class="font-semibold dark:text-white">PostgreSQL</span>
    </i18n-t>
    <i18n-t
      tag="p"
      class="my-4 text-sm lg:text-base"
      keypath="home.profile.bio2"
      scope="global"
    >
      <span class="font-semibold dark:text-white">Vuejs</span>
      <span class="font-semibold dark:text-white">Nuxtjs</span>
    </i18n-t>
    <p class="text-sm lg:text-base">
      {{ t("home.profile.bio3") }}
    </p>
  </div>
</template>

<style scoped></style>
