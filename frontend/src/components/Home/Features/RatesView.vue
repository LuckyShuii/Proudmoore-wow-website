<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <section class="flex flex-col items-center justify-center mb-10 mt-[-1rem]">
        <div id="rate-animation" class="lg:text-[11.5rem]">3X</div>
        <div id="rates-frame">
            <ul class="text-center" v-html="t('rates')"></ul>
        </div>
        <div class="under-comment" v-html="t('ratesComment')"></div>
    </section>
</template>