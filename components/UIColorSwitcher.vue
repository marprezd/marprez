<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="hs-dropdown relative inline-flex [--strategy:absolute] sm:[--trigger:hover]">
      <UButton
        icon="i-tabler-brightness-half"
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
        <ul class="mb-2 flex flex-row items-center justify-center py-2 first:pt-0 last:pb-0">
          <li
            v-for="color of ['system', 'light', 'dark']"
            :key="color"
            class="flex
          items-center
          gap-x-3.5
          rounded-lg
          px-3
          py-2
          text-sm
          text-cyan-800
          hover:bg-cyan-50
          focus:bg-gray-100 focus:outline-none
          dark:text-gray-300
          dark:hover:bg-cyan-200
          dark:hover:text-cyan-950
          dark:focus:bg-cyan-700"
            :class="{
              preferred: !$colorMode.unknown && color === $colorMode.preference,
              selected: !$colorMode.unknown && color === $colorMode.value
            }"
          >
            <component
              :is="`icon-${color}`"
              @click="$colorMode.preference = color"
            />
          </li>
        </ul>
        <div class="-m-2 rounded-b-lg bg-gray-50 px-5 py-3 dark:bg-gray-700">
          <p class="text-sm text-gray-800 dark:text-gray-200">
            <ColorScheme
              placeholder="..."
              tag="span"
            >
              Color mode: <b>{{ $colorMode.preference }}</b>
              <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
            </ColorScheme>
          </p>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="css">
.feather {
  @apply cursor-pointer m-0 rounded transition-all size-5
}
.selected .feather {
  @apply text-cyan-500 dark:text-cyan-400
}
</style>
