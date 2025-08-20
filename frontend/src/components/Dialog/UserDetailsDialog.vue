<script setup lang="ts">
import type { User } from '@/types/userType';
import { getRoleClass } from '@/utils/getRoleClass';
import { convertDate } from '@/utils/convertDate';

const props = defineProps<{
    user: User
    visible: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <Dialog @update:visible="emit('close')" v-model:visible="props.visible" :modal="true" :closable="true" dismissableMask closeOnEscape header="User Details">
        <section class="flex flex-col items-start p-4 gap-4 min-w-[35rem]">
            <p><span class="font-extrabold">Id:</span> {{ props.user.id }}</p>
            <p><span class="font-extrabold">Uuid:</span> {{ props.user.uuid }}</p>
            <p><span class="font-extrabold">Username:</span> {{ props.user.username }}</p>
            <p><span class="font-extrabold">Email:</span> {{ props.user.email }}</p>
            <p><span class="font-extrabold">Last Login:</span> {{ convertDate(props.user.lastLogin as any) }}</p>
            <p><span class="font-extrabold">Created by:</span> {{ props.user.createdBy?.username ?? 'System' }}</p>
            <p><span class="font-extrabold">Updated on:</span> {{ convertDate(props.user.updatedAt as any) }}</p>
            <p><span class="font-extrabold">Created on:</span class="font-extrabold"> {{ convertDate(props.user.createdAt as any) }}</p>
            <div class="flex items-center gap-4">
                <p><span class="font-extrabold">Roles:</span class="underline font-extrabold"></p>
                <div class="flex flex-wrap gap-2">
                    <Chip class="flex flex-col items-center justify-center" :class="getRoleClass(role.role.code, 'chip')" v-for="(role, index) in props.user.userRoles" :key="index" v-if="props.user.userRoles">
                        <p class="mb-[-10px]">{{ role.role.name }}</p>
                        <small>By - {{ role.grantedBy?.username ?? 'System' }}</small>
                    </Chip>
                    <Chip v-if="!props.user.userRoles">No Roles Assigned</Chip>
                </div>
            </div>
        </section>

        <template #footer>
            <Button @click="emit('close')">Close</Button>
        </template>
    </Dialog>
</template>