import { createI18n } from "vue-i18n";

const DEFAULT_LOCALE  = import.meta.env.VITE_DEFAULT_LOCALE  || "cz";
const FALLBACK_LOCALE = import.meta.env.VITE_FALLBACK_LOCALE || "cz";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {},
});

export async function loadLocaleMessages(locale: string) {
  const res = await fetch(`/locales/${locale}.json?ts=${Date.now()}`, {
    cache: "no-store"
  });
  if (!res.ok) throw new Error(`Failed to load /locales/${locale}.json`);
  const msgs = await res.json();
  i18n.global.setLocaleMessage(locale, msgs);
}

export async function setupI18n() {
  if (!i18n.global.availableLocales.includes(DEFAULT_LOCALE)) {
    await loadLocaleMessages(DEFAULT_LOCALE);
  }
}

export async function setLocale(locale: string) {
  await loadLocaleMessages(locale);
  i18n.global.locale.value = locale;
}
