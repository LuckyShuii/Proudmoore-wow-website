import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';
import '@/assets/css/home.css';
import '@/assets/css/admin.css';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Popover from 'primevue/popover';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Message from 'primevue/message';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

import { i18n, setupI18n } from "./i18n";
import { createPinia } from 'pinia';

import 'primeicons/primeicons.css';

const pinia = createPinia();
const app = createApp(App);

setupI18n().then(() => {
  app.use(i18n);
  app.component('Popover', Popover);
  app.component('Accordion', Accordion);
  app.component('AccordionPanel', AccordionPanel);
  app.component('AccordionHeader', AccordionHeader);
  app.component('AccordionContent', AccordionContent);
  app.component('Message', Message);
  app.component('Drawer', Drawer);
  app.component('Button', Button);
  app.component('InputText', InputText);
  app.component('InputGroup', InputGroup);
  app.component('InputGroupAddon', InputGroupAddon);

  app.use(pinia);
  app.use(PrimeVue, {
    theme: { preset: Aura }
  });
  app.use(router);

  app.mount('#app');
}).catch(err => {
  console.error("❌ Failed to setup i18n:", err);
});