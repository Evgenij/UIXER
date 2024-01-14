<template>
  <div v-show="isActive" class="h-full">
    <slot></slot>
  </div>
</template>

<script setup>

  import {computed} from "vue";

  const props = defineProps({
    name: {
      required: true
    },
    activeTab: {
      required: true
    }
  })

  const isActive = computed(()=>{
    return props.name === props.activeTab
  })
</script>

<style scoped lang="scss">

</style>