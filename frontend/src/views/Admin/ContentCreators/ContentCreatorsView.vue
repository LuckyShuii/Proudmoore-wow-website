<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { computed, onMounted, reactive, ref } from 'vue';
import API from '@/services/API'
import CreateContentCreatorView from '@/components/Admin/ContentCreators/CreateContentCreatorView.vue';
</script>

<template>
    <section class="w-full flex flex-col items-center px-4 relative">
        <div class="w-full max-w-[1110px] flex justify-between items-center mb-8 relative">
            <h2 class="text-2xl font-bold uppercase font-marcellus">Content Creators Management</h2>
            <CreateContentCreatorView />
        </div>
    </section>
</template>