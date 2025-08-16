<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <section id="about" class="bg-[#0E0E0E] relative min-h-[750px] h-full">
        <div id="scrolling-runes-top" class="w-[1860px] relative left-[-510px] max-w-[1860px]"></div>
        <img id="deathwingback" src="/webp/deathwingback.png" />
        <div class="text-center justify-between max-[1850px]:justify-center flex mr-[5vw] max-[1850px]:mr-0 max-[1850px]:px-[15px]">
            <div></div>
            <div class="max-w-[800px] flex flex-col items-center pb-8">
                <h2 id="server-description-title" class="font-marcellus font-[700] color-[#ffffff] mb-[20px]" v-html="t('descriptionTitle')"></h2>
                <p id="server-description-text" class="bg-[#0C1118] w-[90%] mt-[1vh] rounded-[10px] p-[20px]" v-html="t('descriptionText')"></p>
            </div>
        </div>
        <div id="scrolling-runes-bottom"></div>
    </section>
</template>