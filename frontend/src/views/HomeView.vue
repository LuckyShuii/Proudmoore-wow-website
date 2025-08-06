<script setup lang="ts">
import HeroView from '@/components/Home/HeroView.vue';
import ServerDescriptionView from '@/components/Home/ServerDescriptionView.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <HeroView />
    <ServerDescriptionView />
</template>