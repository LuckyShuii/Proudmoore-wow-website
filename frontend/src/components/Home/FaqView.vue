<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import FaqSectionView from './Faq/FaqSectionView.vue';
import type { Faq } from '@/types/faqType';

const { tm, t } = useI18n();

const generalFaq = computed<Faq>(() => tm('faqGeneral'));
const faqGameplay = computed<Faq>(() => tm('faqGameplay'));
const faqTechnical = computed<Faq>(() => tm('faqTechnical'));
const faqAccountSecurity = computed<Faq>(() => tm('faqAccountSecurity'));
const faqCommunity = computed<Faq>(() => tm('faqCommunity'));
const faqEvents = computed<Faq>(() => tm('faqEvents'));
const faqMonetization = computed<Faq>(() => tm('faqMonetization'));
const faqRules = computed<Faq>(() => tm('faqRules'));
const faqProgression = computed<Faq>(() => tm('faqProgression'));
const faqDevelopment = computed<Faq>(() => tm('faqDevelopment'));
const faqMiscellaneous = computed<Faq>(() => tm('faqMiscellaneous'));
</script>

<template>
    <section id="faq" class="flex flex-col items-center justify-center bg-[#070A15] pl-[15px] pr-[20px] w-full pb-[5rem]">
        <div class="separator w-full max-w-[1110px] mt-[4rem]"></div>
        <h3 class="mt-[2rem] text-white font-marcellus text-[32px] text-center font-bold">{{ t('faqTitle') }}</h3>
        <div class="px-4 flex flex-col items-center justify-center w-full max-w-[1110px]">
            <FaqSectionView :faq="generalFaq" />
            <FaqSectionView :faq="faqGameplay" />
            <FaqSectionView :faq="faqTechnical" />
            <FaqSectionView :faq="faqAccountSecurity" />
            <FaqSectionView :faq="faqCommunity" />
            <FaqSectionView :faq="faqEvents" />
            <FaqSectionView :faq="faqMonetization" />
            <FaqSectionView :faq="faqRules" />
            <FaqSectionView :faq="faqProgression" />
            <FaqSectionView :faq="faqDevelopment" />
            <FaqSectionView :faq="faqMiscellaneous" />
        </div>
    </section>
</template>