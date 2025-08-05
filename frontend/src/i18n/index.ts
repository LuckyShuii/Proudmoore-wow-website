import { createI18n } from "vue-i18n";
import pluralization from "./rules/pluralization";
import frTranslation from "./languages/fr";
import enTranslation from "./languages/en";

const translations = {
    fr: frTranslation,
    en: enTranslation,
};

export default createI18n({
    // @local: default language for the app
    locale: import.meta.env.VITE_DEFAULT_LOCALE, 
    // @fallbackLocale: fallback language for the app if a translation is not found
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    // @legacy: false: use the new composition API from Vue3 for i18n
    legacy: false,
    // @globalInjection: true: use the global injection for i18n, allows to use $t() in the template instead of importing the i18n instance everytime
    globalInjection: true,
    pluralization,
    messages: translations,
})