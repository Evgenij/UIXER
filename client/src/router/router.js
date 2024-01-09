import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from "@/PageLayout.vue";
import Main from "@/views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page',
      redirect: 'main',
      component: PageLayout,
      children: [
        {
          path: '/main',
          name: 'main',
          component: Main,
        },
      ]
    }
  ]
})

export default router
