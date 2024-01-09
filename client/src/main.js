import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config';
import '@/assets/app.scss'
import 'primevue/resources/themes/lara-dark-amber/theme.css'

import mixinTest from "@/mixins/mixinTest.js";

import $ from 'jquery';
window.$ = window.jQuery = $;

//PrimeVue ui components
import Button from "primevue/button"

//my ui components
import UButton from "@/components/ui/Button.vue";

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.mixin(mixinTest)
// registration components
app.component('Button', Button)
app.component('UButton', UButton)

app.mount('#app')
