<template>
  <section class="content page-main h-full">
    <PageSide side="left"></PageSide>
    <PageSide side="right">
      <ThemeToggle/>
    </PageSide>
    <div class="pages-links top flex justify-between">
      <MainLink href="about">About me</MainLink>
      <MainLink href="skills">Skills</MainLink>
    </div>
    <div class="wrapper-photo w-full flex items-center justify-center h-full">
      <img
        id="main-photo"
        src="@/images/main-dark.png"
         alt="main-dark"
        class="main-photo"
      />
      <h2 class="font-thin nick">UIXER</h2>
      <div class="pages-links bottom flex justify-between">
        <MainLink href="projects">Projects</MainLink>
        <MainLink href="contact">Contact</MainLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
import MainLink from "@/components/MainLink.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import changeMainPhoto from '@/mixins/mainPhotoMixin.js'
import setActiveThemeToggle from '@/mixins/themeToggleMixin.js'
import {onMounted} from "vue";

onMounted(()=>{
  setActiveThemeToggle()
  changeMainPhoto()
})
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
