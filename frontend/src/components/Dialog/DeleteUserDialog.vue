<script setup lang="ts">
import type { User } from '@/types/userType';
import { getRoleClass } from '@/utils/getRoleClass';
import { convertDate } from '@/utils/convertDate';

const props = defineProps<{
    user: User
    visible: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'delete', userUuid: string): void
}>()
</script>

<template>
    <Dialog @update:visible="emit('close')" v-model:visible="props.visible" :modal="true" :closable="true" dismissableMask closeOnEscape>
        <template #header>
            <h2 class="text-xl font-bold">Delete - {{ props.user.username }} | {{ props.user.uuid }}</h2>
        </template>
        <section class="flex flex-col items-center p-4 gap-4 min-w-[35rem]">
            <p class="text-xl">Are you sure you want to delete this user ({{ props.user.username }})?</p>
            <p class="text-xl">⚠️ This action cannot be undone! ⚠️</p>

            <div class="flex justify-center gap-4 mt-6">
                <Button icon="pi pi-times" label="Cancel" @click="emit('close')" class="cancel-button mr-2" />
                <Button icon="pi pi-trash" label="Delete" @click="emit('delete', props.user.uuid as string)" class="delete-button"/>
            </div>
        </section>
    </Dialog>
</template>