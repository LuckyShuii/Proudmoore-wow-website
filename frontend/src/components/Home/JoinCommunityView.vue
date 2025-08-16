<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();
</script>

<template>
    <section class="discord-section flex flex-col items-center justify-center pt-[8rem] pb-[10rem]">
        <a href="https://discord.gg/proudmoore" target="_blank" class="flex flex-col items-center justify-center">
            <img id="discord-white-icon" src="/webp/discord-white-icon.png" alt="Discord white icon" />
            <h3 id="discord-text">{{ t('discord') }}</h3>
        </a>
    </section>
</template>