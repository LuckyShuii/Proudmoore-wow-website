<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref, onMounted, onUnmounted } from 'vue'

const shadow = ref('drop-shadow(0 0 14px rgba(0,169,255,0.69)) drop-shadow(0 0 30px rgba(0,129,235,0.59))')
const interval = ref<null | ReturnType<typeof setInterval>>(null)

function randomGlow() {
  const blur1 = (12 + Math.random() * 8).toFixed(1)
  const blur2 = (25 + Math.random() * 12).toFixed(1)
  const alpha1 = (0.5 + Math.random() * 0.3).toFixed(2)
  const alpha2 = (0.4 + Math.random() * 0.2).toFixed(2)
  shadow.value =
    `drop-shadow(0 0 ${blur1}px rgba(0,169,255,${alpha1})) drop-shadow(0 0 ${blur2}px rgba(0,129,235,${alpha2}))`
}

onMounted(() => {
  interval.value = setInterval(randomGlow, 900)
})
onUnmounted(() => {
  if (interval.value) clearInterval(interval.value)
})
</script>

<template>
    <!-- Hero section -->
    <section class="relative h-screen w-full flex lg:justify-start items-center px-4 bg-[url('/webp/background-1.webp')] bg-cover bg-center bg-no-repeat">
        <div class="flex flex-col items-center mx-4 lg:ml-4 w-full lg:max-w-[700px] lg:mr-[20rem] mt-[-5rem]">
            
            <!-- Proudmoore LOGO -->
            <div class="w-full max-w-[700px] drop-shadow-xl transition-filter duration-700 hover:scale-110" :style="{ filter: shadow }">
                <img
                src="/webp/logo_t.webp"
                alt="Logo"
                class="w-full h-auto object-contain"
                />
            </div>

            <div id="video" class="w-full max-w-[520px] mt-[-2rem] rounded-2xl overflow-hidden">
                <div class="relative aspect-video">
                <iframe
                    src="https://player.vimeo.com/video/1100298165?badge=0&autopause=0&title=0&byline=0&portrait=0&loop=0&quality=1080p&player_id=0&app_id=58479"
                    class="absolute inset-0 w-full h-full"
                    title="hero-trailer-thumb"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
                </div>
            </div>

            <!-- Text -->
            <p id="video-description" class="text-[#d4e7ff] text-center w-full max-w-[450px] mt-6 px-4 text-[22px] italic font-medium tracking-[1px]" v-html="t('videoDescription')"></p>
        </div>
    </section>
</template>


