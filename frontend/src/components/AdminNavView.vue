<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/authStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

// Store
const authStore = useAuthStore();
const { isAuthenticated, isAdmin, isCm, isDev, isHgm, isSmm, isTranslator } = storeToRefs(authStore);

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => router.push({ name: 'admin-dashboard' })
    },
    {
        label: 'Content Creators',
        icon: 'pi pi-pencil',
        command: () => router.push({ name: 'content-creators' }),
        disabled: !isAdmin || !isDev || !isCm || !isSmm
    },
    {
        label: 'Articles',
        icon: 'pi pi-file',
        command: () => router.push({ name: 'articles' }),
        disabled: !isAdmin || !isDev || !isCm || !isSmm
    },
    {
        label: 'Manager Users',
        icon: 'pi pi-users',
        items: [
            {
                label: 'All Users',
                icon: 'pi pi-users',
                command: () => router.push({ name: 'all-users' })
            },
            {
                label: 'Create User',
                icon: 'pi pi-user-plus',
                command: () => router.push({ name: 'create-user' })
            }
        ],
        disabled: !isAdmin
    }
]);

const logout = () => {
    authStore.logout();
    router.push({ name: 'admin-login' });
};
</script>

<template>
    <nav
      v-if="isAuthenticated"
      class="absolute top-5 left-1/2 -translate-x-1/2 max-w-[70rem] w-full z-50"
    >
        <Menubar :model="items" class="w-full">
            <template #start>
                <div class="flex items-center gap-4 mr-6 p-2">
                    <img src="/favicon-2.webp" class="w-10 [transform:rotateY(180deg)]" />
                </div>
            </template>

            <template #end>
                <Button 
                  icon="pi pi-sign-out"
                  label="Logout"
                  id="logout-button"
                  @click="logout"
                />
            </template>
        </Menubar>
    </nav>
</template>
