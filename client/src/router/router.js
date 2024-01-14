import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from "@/PageLayout.vue";
import Main from "@/views/Main.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";

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
        },{
          path: '/about',
          name: 'about',
          component: About,
        },{
          path: '/skills',
          name: 'skills',
          component: Skills,
        },{
          path: '/projects',
          name: 'projects',
          component: Main,
        },{
          path: '/contact',
          name: 'contact',
          component: Main,
        },
      ]
    }
  ]
})

export default router
