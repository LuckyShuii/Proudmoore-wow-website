<script setup lang="ts">
import FaqSectionView from '@/components/Home/Faq/FaqSectionView.vue';
import type { Faq } from '@/types/faqType';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const faqAmISafe = computed<Faq>(() => tm('legalityPage.faqAmISafe'))
const faqTracking = computed<Faq>(() => tm('legalityPage.faqTracking'))
const faqPersonalData = computed<Faq>(() => tm('legalityPage.faqPersonalData'))
const faqDonation = computed<Faq>(() => tm('legalityPage.faqDonation'))
const faqEdgeCases = computed<Faq>(() => tm('legalityPage.faqEdgeCases'))
const faqNewOkay = computed<Faq>(() => tm('legalityPage.faqNewOkay'))
</script>

<template>
    <section class="flex flex-col items-center justify-center bg-[#0E0E0E]">
        <div class="bg-[#0F121A] w-full pt-[100px] pb-[30px] px-[30px]">
            <h1 v-html="t('legalityPage.title')" class="mb-4 font-[600] font-marcellus text-center text-[30px] lg:text-[40px]"></h1>
            <p v-html="t('legalityPage.titleDescription')" class="mb-[2rem] text-center"></p>
        </div>
        <section class="w-full max-w-[1100px] px-[30px]">
            <div class="w-full mb-[35px] bg-[#1d232f] p-[25px] rounded font-[600]">
                <h2 v-html="t('legalityPage.mainWarning')" class="text-center text-[18px]"></h2>
            </div>

            <FaqSectionView :faq="faqAmISafe" />
            <FaqSectionView :faq="faqTracking" />
            <FaqSectionView :faq="faqPersonalData" />
            <FaqSectionView :faq="faqDonation" />
            <FaqSectionView :faq="faqEdgeCases" />
            <FaqSectionView :faq="faqNewOkay" />

            <div class="flex flex-col items-center justify-center mt-[6rem] mb-[3rem] px-[20px]">
                <h3 class="mb-4 text-white font-marcellus text-[24px] lg:text-[30px] text-center font-bold">{{ t('legalityPage.firstBottomWarning') }}</h3>
                <h3 class="mb-8 text-white font-marcellus text-[24px] lg:text-[30px] text-center font-bold">{{ t('legalityPage.secondBottomWarning') }}</h3>
                <h3 class="mb-10 text-white font-marcellus text-[18px] lg:text-[22px] text-center font-bold">{{ t('legalityPage.thirdBottomWarning') }}</h3>
            </div>
        </section>
    </section>
</template>