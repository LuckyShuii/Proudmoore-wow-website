<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <nav class="bg-[#0E0E0E] fixed top-0 bottom-0 left-0 z-index-10 flex flex-col w-[300px] py-[70px] pl-1">
        <div class="h-[600px] flex flex-col justify-center text-sm font-semibold">
            <ul class="flex flex-col items-center space-y-7 font-semibold">
                <li><a class="font-lora" href="#home" v-html="t('nav.home')"></a></li>
                <li><a class="font-lora" href="#about" v-html="t('nav.about')"></a></li>
                <li><a class="font-lora" href="#features" v-html="t('nav.features')"></a></li>
                <li><a class="font-lora" href="#timeline" v-html="t('nav.timeline')"></a></li>
                <li><a class="font-lora" href="#discord" v-html="t('nav.discord')"></a></li>
                <li><a class="font-lora" href="#faq" v-html="t('nav.faq')"></a></li>
                <li><a class="font-lora" href="#legal" v-html="t('nav.legal')"></a></li>
                <li><a class="font-lora" href="#appeal" v-html="t('nav.appeal')"></a></li>
            </ul>
        </div>
        <div class="px-[40px] pt-[40px]">
            <div class="flex w-full justify-between mb-8 z-500">
                <!-- Social Media Links -->

                <!-- Reddit -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.reddit.com/r/OfficialProudmoore/">
                    <img src="/public/webp/reddit-scaled-1.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- Twitch -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.twitch.tv/proudmoorelive">
                    <img src="/public/webp/twitch_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- YouTube -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.youtube.com/@ProudmooreOfficial">
                    <img src="/public/webp/youtube_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- TikTok -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.tiktok.com/@proudmooreofficial">
                    <img src="/public/webp/tiktok_new_logo.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>

                <!-- Instagram -->
                <a class="text-[33px] transform hover:scale-[1.06] transition-transform duration-200" href="https://www.instagram.com/proudmooreofficial/">
                    <img src="/public/webp/insta-scaled-1.png" alt="Logo" class="w-[33px] h-[33px] mr-2">
                </a>
            </div>
            <p class="font-lora text-sm text-gray-500" v-html="t('copyright')"></p>
        </div>
    </nav>
</template>