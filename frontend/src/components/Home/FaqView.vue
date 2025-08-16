<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import FaqSectionView from './Faq/FaqSectionView.vue';

const { tm, t } = useI18n();

const generalFaq = computed(() => tm('faqGeneral'));
const faqGameplay = computed(() => tm('faqGameplay'));
const faqTechnical = computed(() => tm('faqTechnical'));
const faqAccountSecurity = computed(() => tm('faqAccountSecurity'));
const faqCommunity = computed(() => tm('faqCommunity'));
const faqEvents = computed(() => tm('faqEvents'));
const faqMonetization = computed(() => tm('faqMonetization'));
const faqRules = computed(() => tm('faqRules'));
const faqProgression = computed(() => tm('faqProgression'));
const faqDevelopment = computed(() => tm('faqDevelopment'));
const faqMiscellaneous = computed(() => tm('faqMiscellaneous'));
</script>

<template>
    <section id="faq" class="flex flex-col items-center justify-center bg-[#070A15] pl-[15px] pr-[20px] w-full pb-[5rem]">
        <div class="separator w-full max-w-[1110px] mt-[4rem]"></div>
        <h3 class="mt-[2rem] text-white font-marcellus text-[32px] text-center font-bold">{{ t('faqTitle') }}</h3>
        <div class="px-4 flex flex-col items-center justify-center w-full max-w-[1110px]">
            <FaqSectionView :faq="(generalFaq as any)" />
            <FaqSectionView :faq="(faqGameplay as any)" />
            <FaqSectionView :faq="(faqTechnical as any)" />
            <FaqSectionView :faq="(faqAccountSecurity as any)" />
            <FaqSectionView :faq="(faqCommunity as any)" />
            <FaqSectionView :faq="(faqEvents as any)" />
            <FaqSectionView :faq="(faqMonetization as any)" />
            <FaqSectionView :faq="(faqRules as any)" />
            <FaqSectionView :faq="(faqProgression as any)" />
            <FaqSectionView :faq="(faqDevelopment as any)" />
            <FaqSectionView :faq="(faqMiscellaneous as any)" />
        </div>
    </section>
</template>