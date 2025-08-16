<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();


</script>

<template>
    <section id="timeline" class="pt-[160px] flex flex-col items-center justify-center">
        <h3 class="mb-[1.7rem] font-marcellus timeline-title">{{ t('timeline.title') }}</h3>
        <p class="font-marcellus timeline-title mb-4">{{ t('timeline.description') }}</p>
    </section>
</template>