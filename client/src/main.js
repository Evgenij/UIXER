import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config';
import '@/assets/app.scss'
import 'primevue/resources/themes/lara-dark-amber/theme.css'
import 'boxicons'

//PrimeVue ui components
import Button from "primevue/button"
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

//my ui components
import UButton from "@/components/ui/Button.vue";

const app = createApp(App).use(router)
app.use(PrimeVue);

// registration components - PrimeVue
app.component('Button', Button)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)

// registration components - Customs components
app.component('UButton', UButton)

app.mount('#app')
