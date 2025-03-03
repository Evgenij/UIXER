import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import PrimeVue from "primevue/config";
import VueViewer from "v-viewer";

import "viewerjs/dist/viewer.css";
import "@/assets/app.scss";
import "primevue/resources/themes/lara-dark-amber/theme.css";
import "boxicons";
import "vue3-carousel-3d/dist/index.css";

//PrimeVue ui components
import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

//my ui components
import UButton from "@/components/ui/Button.vue";

const app = createApp(App);
app.use(PrimeVue);
app.use(VueViewer);

// registration components - PrimeVue
app.component("Button", Button);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);

// registration components - Customs components
app.component("UButton", UButton);

app.use(router).mount("#app");
