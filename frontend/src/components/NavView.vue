<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const i18n = useI18n({ useScope: 'global' });

const emit = defineEmits<{
    (e: 'update-visible', visible: boolean): void;
}>();

const STORAGE_KEY = 'pm_lang'; // localStorage key

const op = ref<any>();
const selectedLanguage = ref<{ code: string; src: string; alt: string } | null>(null);

const flags = ref([
    { code: 'en', src: '/icons/en.svg', alt: 'English flag icon' },
    { code: 'fr', src: '/icons/fr.svg', alt: 'French flag icon' },
    { code: 'es', src: '/icons/es.svg', alt: 'Spanish flag icon' },
    { code: 'de', src: '/icons/de.svg', alt: 'German flag icon' },
    { code: 'cz', src: '/icons/cz.svg', alt: 'Czech flag icon' },
    { code: 'nl', src: '/icons/nl.svg', alt: 'Dutch flag icon' },
]);

const selectLanguageLabel = computed(() => {
    switch (i18n.locale.value) {
        case 'en': return 'Select Language';
        case 'fr': return 'Sélectionner la langue';
        case 'es': return 'Seleccionar idioma';
        case 'de': return 'Sprache auswählen';
        case 'cz': return 'Vybrat jazyk';
        case 'nl': return 'Selecteer taal';
        default: return null;
    }
});

const toggle = (event: Event) => {
    op.value?.toggle(event);
};

const setLanguage = (lang: string) => {
    const allowed = ['en', 'fr', 'es', 'de', 'cz', 'nl'];
    i18n.locale.value = allowed.includes(lang) ? lang : 'en';
};

const selectLanguage = (lang: { code: string; src: string; alt: string }) => {
    selectedLanguage.value = lang;
    setLanguage(lang.code);

    // persist choice
    try {
        localStorage.setItem(STORAGE_KEY, lang.code);
    } catch (_) { /* ignore storage errors (e.g., private mode) */ }

    op.value?.hide();
};

const handleScroll = () => {
    op.value?.hide();
};

onMounted(() => {
    // restore from storage if available
    let initial = i18n.locale.value;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) initial = saved;
    } catch (_) { /* ignore */ }

    setLanguage(initial);

    const flag = flags.value.find(f => f.code === i18n.locale.value);
    selectedLanguage.value = flag || flags.value[0];

    window.addEventListener('scroll', handleScroll);
    op.value?.hide();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
    <nav class="bg-[#0E0E0E] fixed top-0 bottom-0 left-0 z-50 flex flex-col w-[300px] py-[35px] lg:py-[70px] pl-1 shadow-[5px_0_5px_-1px_black]">
        <div class="card flex justify-center">
            <!-- Button with selected flag or text -->
            <Button type="button" @click="toggle" class="min-w-32 flex items-center gap-2 justify-center z-60">
                <template v-if="selectedLanguage">
                    <img :src="selectedLanguage.src" :alt="selectedLanguage.alt" class="w-6 h-6" />
                    {{ selectedLanguage.code.toUpperCase() }}
                </template>
                <template v-else>
                    🌐 {{ selectLanguageLabel }}
                </template>
            </Button>
            <slot name='header'></slot>
            <!-- Popover PrimeVue -->
            <Popover ref="op" class="w-[8rem] z-50" dismissable closeOnEscape>
                <div class="flex flex-col gap-4 items-center">
                    <ul class="list-none p-0 m-0 flex flex-col">
                        <li
                            v-for="flag in flags"
                            :key="flag.code"
                            class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border"
                            @click="selectLanguage(flag)"
                        >
                            <img :src="flag.src" :alt="flag.alt" class="w-6 h-6" />
                            <span class="font-medium">{{ flag.code.toUpperCase() }}</span>
                        </li>
                    </ul>
                </div>
            </Popover>
        </div>
        <div class="h-full flex flex-col justify-center text-sm font-semibold">
            <ul class="flex flex-col items-center space-y-8 font-semibold">
                <li><a class="font-lora hover:font-thin" href="#home" v-html="t('nav.home')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="#about" v-html="t('nav.about')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="#features" v-html="t('nav.features')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="#timeline" v-html="t('nav.timeline')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="#community" v-html="t('nav.discord')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="#faq" v-html="t('nav.faq')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="" v-html="t('nav.legal')" @click="emit('update-visible', false)"></a></li>
                <li><a class="font-lora hover:font-thin" href="https://forms.gle/p81uHVpJ9pUQ1GCt7" target="_blank" v-html="t('nav.appeal')" @click="emit('update-visible', false)"></a></li>
            </ul>
        </div>
        <div class="px-[40px] pt-[40px]">
            <div class="flex w-full justify-between mb-6 z-500">
                <!-- Social Media Links -->

                <!-- Reddit -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.reddit.com/r/OfficialProudmoore/">
                    <img src="/webp/reddit-scaled-1.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- Twitch -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.twitch.tv/proudmoorelive">
                    <img src="/webp/twitch_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- YouTube -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.youtube.com/@ProudmooreOfficial">
                    <img src="/webp/youtube_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- TikTok -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.tiktok.com/@proudmooreofficial">
                    <img src="/webp/tiktok_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- Instagram -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.instagram.com/proudmooreofficial/">
                    <img src="/webp/insta-scaled-1.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>
            </div>
            <p class="text-sm text-gray-400" v-html="t('copyright')"></p>
        </div>
    </nav>
</template>