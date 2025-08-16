import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';
import '@/assets/css/home.css'; 

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; // ✅ new v4 theming

import Popover from 'primevue/popover';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import i18n from './i18n';
import { createPinia } from 'pinia';

import 'primeicons/primeicons.css';

const pinia = createPinia();
const app = createApp(App);

app.component('Popover', Popover);
app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);

app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura   
  }
});
app.use(router);
app.use(i18n);

app.mount('#app');