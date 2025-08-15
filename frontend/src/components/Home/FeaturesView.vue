<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import RatesView from './Features/RatesView.vue';
import FeaturesView from './Features/FeaturesView.vue';
import BugfixesView from './Features/BugfixesView.vue';
import { ref } from 'vue';

const { t } = useI18n();

const activeTab = ref('features');

</script>

<template>
    <section class="flex flex-col w-full bg-[url('/webp/features-bg.webp')] bg-cover bg-center bg-no-repeat items-center py-20">
        <h3 class="font-marcellus text-[32px] mb-[1rem] font-[600]">{{ t('features.title') }}</h3>
        <p class="mb-[1.3rem] mt-0">{{ t('features.description') }}</p>
        <ul class="flex gap-14 mb-6 mt-10">
            <li class="hover:cursor-pointer" @click="activeTab = 'features'" :class="activeTab === 'features' ? 'border-b-2 font-bold' : 'opacity-[0.7]'">{{ t('features.nav.features') }}</li>
            <li class="hover:cursor-pointer" @click="activeTab = 'rates'" :class="activeTab === 'rates' ? 'border-b-2 font-bold' : 'opacity-[0.7]'">{{ t('features.nav.rates') }}</li>
            <li class="hover:cursor-pointer" @click="activeTab = 'bugfixes'" :class="activeTab === 'bugfixes' ? 'border-b-2 font-bold' : 'opacity-[0.7]'">{{ t('features.nav.bugfixes') }}</li>
        </ul>
        <RatesView v-if="activeTab === 'rates'" />
        <FeaturesView v-if="activeTab === 'features'" />
        <BugfixesView v-if="activeTab === 'bugfixes'" />
    </section>
</template>