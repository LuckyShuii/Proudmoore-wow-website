<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import FlipCardsView from './FlipCardsView.vue';
import { computed, ref } from 'vue';

const { t, tm } = useI18n();

interface Feature {
    title: string;
    description: string;
    id: string;
    isFav: boolean;
}

const featuresList = computed<Feature[]>(() => tm('features.items'))

</script>

<template>
    <section id="#features" class="max-h-[1100px] py-8 overflow-y-auto flex flex-wrap gap-4 w-[90%] max-w-[85rem] justify-center mt-4">
        <FlipCardsView v-for="feature in featuresList"
            :key="feature.id"
            :front="feature.title"
            :back="feature.description"
            :isFav="feature.isFav" />
    </section>
</template>