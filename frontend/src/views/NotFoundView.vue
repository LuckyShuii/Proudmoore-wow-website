<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { t } = useI18n();

</script>

<template>
    <div class="text-center bg-[url('/webp/features-bg.webp')] bg-cover bg-center bg-no-repeat items-center h-screen justify-center flex flex-col px-8">
        <div class="p-10 rounded-2xl bg-[#1c2e50]/70 backdrop-blur-md overflow-hidden">
            <div class="z-10">
                <h1 class="text-5xl font-bold text-red-600 font-marcellus">{{ t('notFoundTitle') }}</h1>
                <p class="text-xl mt-4 mb-8 font-marcellus">{{ t('notFoundDescription') }}</p>
                <RouterLink to="/" class="mt-8 text-blue-600 hover:underline font-bold">> > > {{ t('notFoundHome') }} < < <</RouterLink>
            </div>
        </div>
    </div>
</template>