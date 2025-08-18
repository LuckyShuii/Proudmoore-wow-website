<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

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
        <div class="bg-[url('/webp/coming-soon.png')] h-[90px] bg-cover bg-center absolute top-0 right-0 left-0" id="nav-banner"></div>
        <div class="card flex justify-center">
            <!-- Button with selected flag or text -->
            <Button id="select-language-button" type="button" @click="toggle" class="min-w-32 flex items-center gap-2 justify-center z-60 mt-20 lg:mt-8">
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
            <ul class="flex flex-col items-center space-y-6 font-semibold">
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#home' }" @click="emit('update-visible', false)">{{ t('nav.home') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#about' }" @click="emit('update-visible', false)">{{ t('nav.about') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#features' }" @click="emit('update-visible', false)">{{ t('nav.features') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#timeline' }" @click="emit('update-visible', false)">{{ t('nav.timeline') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#community' }" @click="emit('update-visible', false)">{{ t('nav.discord') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" :to="{ path: '/', hash: '#faq' }" @click="emit('update-visible', false)">{{ t('nav.faq') }}</RouterLink></li>
                <li><RouterLink class="font-lora hover:font-thin" to="/legality-player-rights" @click="emit('update-visible', false)">{{ t('nav.legal') }}</RouterLink></li>
                <li><a class="font-lora hover:font-thin" href="https://forms.gle/p81uHVpJ9pUQ1GCt7" target="_blank" @click="emit('update-visible', false)">{{ t('nav.appeal') }}</a></li>
                <li class="flex gap-2">
                    <img src="/favicon-2.webp" class="w-[20px] transform [transform:rotateY(180deg)]"/>
                    <a class="font-lora hover:font-thin" href="https://manager.twinstar-wow.com/" target="_blank" @click="emit('update-visible', false)">
                        {{ t('nav.accountManager') }}
                    </a>
                    <img src="/favicon-2.webp" class="w-[20px]"/>
                </li>
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