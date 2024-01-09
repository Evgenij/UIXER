<template>
  <div class="page flex flex-col justify-between grow">
    <PageHeader />
    <main class="page-data">
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from "@/components/page_elements/PageHeader.vue";
import PageFooter from "./components/page_elements/PageFooter.vue";
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
