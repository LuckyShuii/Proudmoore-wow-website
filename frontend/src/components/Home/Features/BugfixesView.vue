<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CountUpView from '@/components/CountUpView.vue';

interface BugFix { title: string; description: string; }

const { tm, t } = useI18n();
const i18n = useI18n({ useScope: 'global' });

const bugFixesStats = computed<BugFix[]>(() => tm('bugFixes'));

// [0] core revisions, [1] database, [2] years
const stats = ref<number[]>([41655, 10228, 17]);
</script>

<template>
    <section class="flex flex-wrap justify-center items-center mt-8 w-[90%]" id="bug-fixes-section">
        <div
        class="text-center flex flex-col justify-center items-center max-w-[310px] w-full"
        v-for="(value, index) in bugFixesStats"
        :key="value.title"
        >
            <h3 class="text-[4rem] mb-[0.8rem] font-[600]">
                <CountUpView :end="stats[Number(index)]" :duration="2600" :locale="i18n.locale.value" />
            </h3>
            <h3 class="font-marcellus uppercase text-[1.25rem] mb-[0.5rem] font-[600]">
                {{ value.title }}
            </h3>
            <p class="mb-[1.3rem] mt-0 text-center opacity-[0.85]">
                {{ value.description }}
            </p>
        </div>
    </section>
    <div class="under-comment !max-w-[300px]" v-html="t('bugFixesComment')"></div>
</template>
