<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import FaqSectionView from './Faq/FaqSectionView.vue';

const { tm, t } = useI18n();

const generalFaq = ref(tm('faqGeneral'));
const faqGameplay = ref(tm('faqGameplay'));
const faqTechnical = ref(tm('faqTechnical'));
const faqAccountSecurity = ref(tm('faqAccountSecurity'));
const faqCommunity = ref(tm('faqCommunity'));
const faqEvents = ref(tm('faqEvents'));
const faqMonetization = ref(tm('faqMonetization'));
const faqRules = ref(tm('faqRules'));
const faqProgression = ref(tm('faqProgression'));
const faqDevelopment = ref(tm('faqDevelopment'));
const faqMiscellaneous = ref(tm('faqMiscellaneous'));
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