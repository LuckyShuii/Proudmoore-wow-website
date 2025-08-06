<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <section class="bg-[#0E0E0E] relative min-h-[750px] h-full">
        <div id="scrolling-runes-top" class="w-[1860px] relative left-[-510px] max-w-[1860px]"></div>
        <img id="deathwingback" src="/webp/deathwingback.png" />
        <div class="text-center justify-between flex max-w-[1800px]">
            <div></div>
            <div class="max-w-[800px] flex flex-col items-center mr-8 pb-8">
                <h2 id="server-description-title" class="text-[2.875rem] font-marcellus font-[700] color-[#ffffff] mb-[20px]" v-html="t('descriptionTitle')"></h2>
                <p id="server-description-text" class="bg-[#0C1118] w-[90%] mt-[1vh] rounded-[10px] p-[20px]" v-html="t('descriptionText')"></p>
            </div>
        </div>
        <div id="scrolling-runes-bottom"></div>
    </section>
</template>