<template>
  <section class="content page-main h-full">
    <PageSide side="left"></PageSide>
    <PageSide side="right">
      <!-- <toggle-theme></toggle-theme> -->
    </PageSide>
    <div class="pages-links top flex justify-between">
      <!-- <main-link href="about">About me</main-link>
      <main-link href="skills">Skills</main-link> -->
    </div>
    <div class="wrapper-photo w-full flex items-center justify-center h-full">
      <!-- <img
        id="main-photo"
        src="img/main-dark.png"
        alt="main-dark"
        class="main-photo"
      /> -->
      <img id="main-photo" src="" alt="main-dark" class="main-photo" />
      <h2 class="font-thin nick">UIXER</h2>
    </div>
    <div class="pages-links bottom flex justify-between">
      <!-- <main-link href="projects">Projects</main-link>
      <main-link href="contact">Contact</main-link> -->
    </div>
  </section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
</script>

<style lang="scss" scoped>
img.main-photo {
  position: absolute;
  top: -150px;
  //z-index: 1500;
}

.pages-links {
  position: absolute;
  left: 0;
  padding: 0 16%;
  width: 100%;

  &.top {
    top: 220px;
  }

  &.bottom {
    bottom: 220px;
  }
}

.nick {
  font-size: 450px;
}
</style>
