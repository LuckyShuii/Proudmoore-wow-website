<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { onMounted, ref } from 'vue';
import API from '@/services/API'
import { storeToRefs } from 'pinia';
import { convertDate } from '@/utils/convertDate';
import { getRoleClass } from '@/utils/getRoleClass';
import UserDetailsDialog from '@/components/Dialog/UserDetailsDialog.vue';

import type { User } from '@/types/userType';
import DeleteUserDialog from '@/components/Dialog/DeleteUserDialog.vue';

const users = ref([]);
const { isAdmin, user } = storeToRefs(useAuthStore());

const infoVisible = ref<boolean>(false);
const deleteVisible = ref<boolean>(false);
const selectedUser = ref<User | null>(null);

const showUserInfo = (user: User) => {
    selectedUser.value = user;
    infoVisible.value = true;
}

const showDeleteDialog = (user: User) => {
    selectedUser.value = user;
    deleteVisible.value = true;
}

const handleDeleteUser = async (userUuid: string) => {
    if (!user.value || !isAdmin.value) {
        console.error("User not found or insufficient permissions to delete.");
        return;
    }

    try {
        await API.users.deleteUser(userUuid, user.value?.username);
        users.value = users.value.filter((u: User) => u.uuid !== userUuid);
    } catch (error) {
        console.error("Failed to delete user:", error);
    } finally {
        deleteVisible.value = false;
        selectedUser.value = null;
    }
}

onMounted(async () => {
    selectedUser.value = null;
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
                        <Chip v-for="(role, index) in data.userRoles" :key="index" :label="role.role.name" :class="getRoleClass(role.role.code, 'chip')" class="text-[14px]" />
                    </div>
                </template>
            </Column>
            <Column header="Actions">
                <template #body="{ data }">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-text hover:scale-[1.1] transition-all duration-200" @click="" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-text hover:scale-[1.1] transition-all duration-200" @click="showDeleteDialog(data)" v-if="data.username !== 'root'" />
                    <Button icon="pi pi-eye" class="p-button-rounded p-button-text hover:scale-[1.1] transition-all duration-200" @click="showUserInfo(data)" />
                </template>
            </Column>
        </DataTable>
        <UserDetailsDialog :visible="infoVisible" :user="(selectedUser as User)" @close="infoVisible = false" />

        <DeleteUserDialog :user="(selectedUser as User)" :visible="deleteVisible" @close="deleteVisible = false" @delete="handleDeleteUser(selectedUser?.uuid as string)" />
    </section>
</template>