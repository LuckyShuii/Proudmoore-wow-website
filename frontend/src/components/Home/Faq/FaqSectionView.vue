<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { tm } = useI18n();

interface FaqQuestion {
    question: string;
    answer: string;
    additionalInfoTitle: string | undefined;
    additionalInfoText: string | undefined;
}

const props = defineProps<{
    faq: {
        title: string;
        questions: FaqQuestion[];
    };
}>();

</script>

<template>
    <section class="w-full mt-10">
        <div class="faq-title-section">
            <h3 class="font-marcellus faq-title">{{ faq.title }}</h3>
            <span class="faq-separator"></span>
        </div>
        <Accordion :value="['0']" multiple>
             <AccordionPanel :value="index" v-for="(value, index) in faq.questions" :key="index">
                <AccordionHeader>{{ value.question }}</AccordionHeader>
                <AccordionContent>
                    <p class="m-0 content-p-accordion" v-html="value.answer"></p>

                    <div v-if="value.additionalInfoTitle" class="additional-info">
                        <h4 class="font-marcellus additional-info-title">{{ value.additionalInfoTitle }}</h4>
                        <p class="m-0" v-html="value.additionalInfoText"></p>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </section>
</template>