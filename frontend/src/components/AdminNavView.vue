<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/authStore';
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { getRoleClass } from '@/utils/getRoleClass';

// Store
const authStore = useAuthStore();
const { isAuthenticated, isAdmin, isCm, isDev, isHgm, isSmm, isTranslator, user } = storeToRefs(authStore);

const showProfileMenu = ref(false);

const items = computed(() => [
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => router.push({ name: 'admin-dashboard' })
    },
    {
        label: 'Content Creators',
        icon: 'pi pi-pencil',
        command: () => router.push({ name: 'content-creators' }),
        disabled: !(isAdmin.value || isDev.value || isCm.value || isSmm.value)
    },
    {
        label: 'Articles',
        icon: 'pi pi-file',
        command: () => router.push({ name: 'articles' }),
        disabled: !(isAdmin.value || isDev.value || isCm.value || isSmm.value)
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
        disabled: !isAdmin.value
    }
]);

const logout = () => {
    authStore.logout();
    router.push({ name: 'admin-login' });
};

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};

onMounted(() => {
    showProfileMenu.value = false;

    // Close profile menu on route change
    router.afterEach(() => {
        showProfileMenu.value = false;
    });
});
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
                <Avatar 
                    class="cursor-pointer !w-[3rem] !h-[3rem] !border-2 hover:border-blue-500 transition-all duration-200"
                    shape="circle"
                    icon="pi pi-user"
                    @click="toggleProfileMenu"
                />

                <!-- Menu Profil -->
                <div
                    v-if="showProfileMenu"
                    class="absolute right-0 top-20 w-56 bg-white shadow-lg rounded-xl p-4 z-50"
                >
                    <div class="flex flex-col items-center text-center">
                        <h3 class="font-bold text-black">Welcome</h3>
                        <p class="uppercase text-blue-500">{{ user?.username }}</p>
                        <div class="flex flex-wrap gap-2 justify-center mt-4 w-full border border-red-100 rounded-xl p-4">
                            <h4 class="text-gray-600 text-sm">Your Roles:</h4>
                            <Chip
                                v-for="role in (user?.roles as any)"
                                :key="role.code"
                                :label="role.name"
                                class="px-2 py-1 text-xs w-full flex justify-center"
                                :class="getRoleClass(role.code, 'chip')"
                            />
                        </div>
                    </div>
                    <Button 
                        icon="pi pi-sign-out"
                        label="Logout"
                        id="logout-button"
                        class="w-full h-[2rem] mt-6"
                        @click="logout"
                    />
                </div>
            </template>
        </Menubar>
    </nav>
</template>
