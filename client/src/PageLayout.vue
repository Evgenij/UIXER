<template>
  <div class="page flex flex-col justify-between grow">
    <PageHeader/>
    <main class="page-data">
      <RouterView/>
    </main>
<!--    <page-footer></page-footer>-->
  </div>
</template>

<script setup>

import PageHeader from "@/components/page_elements/PageHeader.vue";
</script>

<style scoped>
  .page-data {
    height: 100vh;
    padding: 100px;

  }

  .page {
    height: 100vh;
  }

  .side {
    width: 100px;
  }
</style>