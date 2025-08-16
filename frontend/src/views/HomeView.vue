<script setup lang="ts">
import FaqView from '@/components/Home/FaqView.vue';
import FeaturesView from '@/components/Home/FeaturesView.vue';
import HeroView from '@/components/Home/HeroView.vue';
import JoinCommunityView from '@/components/Home/JoinCommunityView.vue';
import ServerDescriptionView from '@/components/Home/ServerDescriptionView.vue';
import TimelineView from '@/components/Home/TimelineView.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <section class="bg-[#0E0E0E]">
        <HeroView />
        <div class="separator"></div>
        <ServerDescriptionView />
        <FeaturesView />
        <TimelineView />
        <JoinCommunityView />
        <FaqView />
    </section>
</template>