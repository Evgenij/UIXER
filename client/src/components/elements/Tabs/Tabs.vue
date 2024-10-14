<template>
  <div class="tabs-wrapper h-full flex flex-col">
    <div class="tabs">
      <ul class="flex px-12 space-x-6">
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"
            class="min-w-fit pb-4 cursor-pointer" @click="selectTab(tab)">
          <span>{{ tab.name }}</span>
        </li>
      </ul>
    </div>
    <div class="tabs-details h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import {onMounted, ref, watch} from "vue";

  const emit = defineEmits(['changeTab'])
  const props = defineProps({
    tabs: Array
  })

  const tabs = ref([])
  const tabActive = ref(null)

  onMounted(()=>{
    tabs.value = props.tabs
  })

  const selectTab = (selectedTab) => {
    tabs.value.forEach(tab => {
      tab.isActive = (tab?.name === selectedTab?.name);
      tabActive.value = selectedTab.name
    });
  }

  watch(tabActive, async (newVal)=>{
    emit('changeTab', newVal)
  })
</script>

<style scoped lang="scss">
  .data-area {
    height: inherit;
  }
</style>