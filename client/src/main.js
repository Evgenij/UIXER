import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config';
import '@/assets/app.scss'
import 'primevue/resources/themes/lara-dark-amber/theme.css'

import changeTheme from "@/mixins/changeThemeMixin.js";

//PrimeVue ui components
import Button from "primevue/button"

//my ui components
import UButton from "@/components/ui/Button.vue";

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
// registration components
app.component('Button', Button)
app.component('UButton', UButton)

app.mount('#app')
