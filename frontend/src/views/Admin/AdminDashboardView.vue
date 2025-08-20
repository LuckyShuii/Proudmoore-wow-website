<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { onMounted, ref } from 'vue';
import API from '@/services/API'

const rolesApiTest = ref(null);
const { isAdmin, user } = useAuthStore();
onMounted(async () => {
    rolesApiTest.value = (await API.roles.getRoles()).data;
})
</script>

<template>
    <section class="w-full h-screen flex flex-col items-center justify-center">
        DASHBOARD
        <pre class="text-[10px]">{{ rolesApiTest }}</pre>
    </section>
</template>