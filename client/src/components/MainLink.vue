<template>
  <RouterLink :to="{name: href}"
              class="main-link flex flex-col justify-center items-center space-x-3 uppercase font-light">
    <slot></slot>
    <div class="dot"></div>
  </RouterLink>
</template>

<script setup>
  defineProps({
    href: String
  })
</script>

<style scoped lang="scss">
  @import "../assets/variables";

  .main-link {
    position: relative;
    top: 3px;
    width: 120px;

    &:hover .dot:before {
      opacity: 1;
    }

    & .dot {
      margin-top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: relative;

      &:before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: -7px;
        top: -7px;
        border-radius: 50%;
        transition: .3s ease-in-out;
        opacity: 0;
      }
    }

    &:after{
      content: '';
      position: absolute;
      left: 50%;
      width: 1px;
      height: 500vh;
      z-index: -100;
      top: -400px;
    }
  }
</style>