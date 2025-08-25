<script setup lang="ts">
import type { User } from '@/types/userType';
import type { ContentCreator } from '@/types/contentCreatorType';
import { computed } from 'vue';

const props = defineProps<{
    entity: User | ContentCreator
    visible: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'delete-user', userUuid: string): void
    (e: 'delete-content-creator', contentCreatorId: string): void
}>()

const idToDelete = computed(() => props.entity.uuid ? props.entity.uuid : props.entity.id);
const isUser = computed(() => props.entity.uuid);

const handleDelete = () => {
    if (isUser.value) {
        emit('delete-user', props.entity.uuid as string);
    } else {
        emit('delete-content-creator', props.entity.id as string);
    }
}
</script>

<template>
    <Dialog @update:visible="emit('close')" v-model:visible="props.visible" :modal="true" :closable="true" dismissableMask closeOnEscape>
        <template #header>
            <h2 class="text-xl font-bold">Delete - {{ props.entity.username }} | {{ idToDelete }}</h2>
        </template>
        <section class="flex flex-col items-center p-4 gap-4 min-w-[35rem]">
            <p class="text-xl">Are you sure you want to delete this {{ isUser ? 'user' : 'content creator' }} ({{ props.entity.username }})?</p>
            <p class="text-xl">⚠️ This action cannot be undone! ⚠️</p>

            <div class="flex justify-center gap-4 mt-6">
                <Button icon="pi pi-times" label="Cancel" @click="emit('close')" class="cancel-button mr-2" />
                <Button icon="pi pi-trash" label="Delete" @click="handleDelete" class="delete-button"/>
            </div>
        </section>
    </Dialog>
</template>