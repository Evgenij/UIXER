<template>
  <div class="page flex flex-col justify-between grow">
    <PageHeader></PageHeader>
    <main class="page-data">
      <RouterView />
    </main>
    <PageFooter></PageFooter>
  </div>
</template>

<script setup>
import PageFooter from "./components/elements/PageFooter.vue";
import PageHeader from "./components/elements/PageHeader.vue";
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
