<script setup>

</script>

<template>
  <div
    class="badgeStatus absolute flex items-center gap-2 justify-center right-2 -top-4 sm:-top-2 z-50 p-1 px-2"
  >
    <span class="text-sm" :style="{color: 'white'}">In developing</span>
    <span class="relative flex align-center justify-center size-3">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
    </span>
  </div>
</template>

<style scoped lang="scss">

</style>