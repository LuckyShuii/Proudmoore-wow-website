<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const rates = computed(() => t('rates'))
const ratesComment = computed(() => t('ratesComment'))


</script>

<template>
    <section class="flex flex-col items-center justify-center mb-10 mt-[-1rem]">
        <div id="rate-animation" class="lg:text-[11.5rem]">3X</div>
        <div id="rates-frame">
            <ul class="text-center" v-html="rates"></ul>
        </div>
        <div class="under-comment" v-html="ratesComment"></div>
    </section>
</template>