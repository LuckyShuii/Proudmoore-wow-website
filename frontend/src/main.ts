import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import PrimeVue from 'primevue/config';

import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import InputMask from 'primevue/inputmask';
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';

import i18n from "./i18n"

import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

const pinia = createPinia();
const app = createApp(App);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Menu', Menu);
app.component('InputText', InputText)
app.component('InputMask', InputMask);
app.component('TextArea', Textarea)
app.component('Checkbox', Checkbox)
app.component('ToastService', ToastService);
app.component('Dialog', Dialog);

app.use(pinia)
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.use(i18n);


app.mount('#app');
