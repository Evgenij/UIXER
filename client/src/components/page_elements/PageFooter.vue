<template>
  <footer
    class="page-footer flex items-center justify-between absolute bottom-0 w-full"
  >
    <div class="positions flex items-center space-x-6">
      <p class="font-light">UI/UX designer</p>
      <span class="divider"></span>
      <p class="font-light">Frontend developer</p>
    </div>
    <div class="social-links flex items-center space-x-10">
      <a
        v-for="link in socialLinks"
        :key="link.id"
        :href="link.href"
        class="font-light link white underline-offset-4 hover:underline"
        >{{ link.label }}</a
      >
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    id: 1,
    href: "",
    label: "GitHub",
  },
  {
    id: 2,
    href: "",
    label: "Behance",
  },
  {
    id: 3,
    href: "",
    label: "LinkedIn",
  },
  {
    id: 4,
    href: "",
    label: "Instagram",
  },
];
</script>

<style lang="scss">
@import "../../assets/variables";

span.divider {
  height: 18px;
  width: 1px;
}
</style>
