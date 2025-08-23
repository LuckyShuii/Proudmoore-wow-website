<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { computed, onMounted, reactive, ref } from 'vue';
import API from '@/services/API'
import CreateContentCreatorView from '@/components/Admin/ContentCreators/CreateContentCreatorView.vue';
import AllContentCreatorsView from '@/components/Admin/ContentCreators/AllContentCreatorsView.vue';
import type { ContentCreator } from '@/types/contentCreatorType';

const newContentCreator = ref<ContentCreator | null>(null);

const handleContentCreatorCreated = (creator: ContentCreator) => {
    newContentCreator.value = creator;
};
</script>

<template>
    <section class="w-full flex flex-col items-center px-4 relative">
        <div class="w-full max-w-[1110px] flex justify-between items-center mb-8 relative">
            <h2 class="text-2xl font-bold uppercase font-marcellus">Content Creators Management</h2>
            <CreateContentCreatorView @content-creator-created="handleContentCreatorCreated" />
        </div>
        <AllContentCreatorsView :content-creators-new="newContentCreator" />
    </section>
</template>