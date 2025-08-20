<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { onMounted, ref } from 'vue';
import API from '@/services/API'
import { storeToRefs } from 'pinia';
import { convertDate } from '@/utils/convertDate';
import { getRoleClass } from '@/utils/getRoleClass';

const users = ref([]);
const { isAdmin, user } = storeToRefs(useAuthStore());

onMounted(async () => {
    users.value = (await API.users.getUsers()).data;
})
</script>

<template>
    <section class="flex flex-col items-center justify-center w-full max-w-[70rem]">
        <h1 class="text-2xl mb-4 uppercase font-marcellus">List of all the users</h1>
        <DataTable :value="users" tableStyle="max-width: 70rem; width: 100%;" :paginator="true" :rows="10" :rowsPerPageOptions="[10, 20, 50]" class="w-full">
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="lastLogin" header="Last Login">
                <template #body="{ data }">
                    {{ data.lastLogin ? convertDate(data.lastLogin) : 'Never' }}
                </template>
            </Column>
            <Column field="userRoles" header="Roles">
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2">
                        <Chip v-for="(role, index) in data.userRoles" :key="index" :label="role.role.name" :class="getRoleClass(role.role.code, 'chip')" class="text-sm" />
                    </div>
                </template>
            </Column>
        </DataTable>

    </section>
</template>