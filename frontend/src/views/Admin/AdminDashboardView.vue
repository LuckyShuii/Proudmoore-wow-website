<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { storeToRefs } from 'pinia';

const { isAdmin } = storeToRefs(useAuthStore());
</script>

<template>
    <section class="w-full flex flex-col items-center justify-center">
        DASHBOARD
    </section>
</template>