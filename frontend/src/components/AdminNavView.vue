<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/authStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const { isAuthenticated } = storeToRefs(useAuthStore());

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => router.push({ name: 'admin-dashboard' }),
        items: [
            {
                label: 'Example 1',
                icon: 'pi pi-chart-line',
            },
            {
                label: 'Example 2',
                icon: 'pi pi-cog',
            }
        ]
    },
    {
        label: 'Content Creators',
        icon: 'pi pi-users',
        command: () => router.push({ name: 'content-creators' })
    },
    {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: () => {
            const authStore = useAuthStore();
            authStore.logout();
            router.push({ name: 'admin-login' });
        },
        class: 'bg-red-500 rounded ml-4'
    }
]);

</script>

<template>
    <nav class="absolute top-5 left-0 right-0 w-full p-4 text-white flex justify-center items-center" :class="!isAuthenticated ? 'hidden' : ''">
        <Menubar :model="items" />
    </nav>
</template>