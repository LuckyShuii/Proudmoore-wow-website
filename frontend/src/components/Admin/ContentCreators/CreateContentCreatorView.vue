<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import API from '@/services/API'
import type { ContentCreator } from '@/types/contentCreatorType';

const emit = defineEmits<{
    (e: 'content-creator-created', creator: ContentCreator): void;
}>();

const showForm = ref<boolean>(false);

const form = reactive<{
    username: string;
    isDisabled: boolean;
}>({
    username: '',
    isDisabled: false
})

const formRef = ref<HTMLElement | null>(null);

const wrapperRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (wrapperRef.value && !wrapperRef.value.contains(event.target as Node)) {
    showForm.value = false;
  }
};

const loading = ref<boolean>(false);

const isDisabled = computed<boolean>(() => !form.isDisabled);

const errors = ref<{ [key: string]: string }>({});
const successMessage = ref<string>('');

const validate = (): boolean => {
    errors.value = {};
    if (!form.username) errors.value.username = "Username is required";
    return Object.keys(errors.value).length === 0;
};

const createContentCreator = async () => {
    try {
        return (await API.contentCreators.createContentCreator({ username: form.username, isDisabled: !form.isDisabled })).data;
    } catch (error: any) {
        errors.value.username = error.response.data;
        return null;
    }
};

const resetForm = () => {
    form.username = '';
    form.isDisabled = false;
    errors.value = {};
};

const onSubmit = async () => {
    successMessage.value = '';
    if (!validate()) return;

    loading.value = true;

    const createdContentCreator = await createContentCreator();

    if (!createdContentCreator) {
        loading.value = false;
        return
    }

    if (createdContentCreator.username === form.username) {
        successMessage.value = 'Content Creator created successfully';
        emit('content-creator-created', createdContentCreator);
        resetForm();
    }

    loading.value = false;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div ref="wrapperRef" class="relative">
        <Button 
        label="Add Creator" 
        icon="pi pi-plus" 
        @click="showForm = !showForm" 
        id="display-create-ct"
        />

        <form
        v-if="showForm"
        @submit.prevent="onSubmit"
        ref="formRef"
        class="absolute right-0 top-full mt-2 flex flex-col gap-4 bg-[#18181b] w-[22rem] px-6 py-4 rounded-lg shadow-lg border border-gray-700 z-50"
        >
            <div class="flex justify-between items-center">
                <label class="font-medium text-sm tracking-wide">Creator Username</label>
                <Button
                    icon="pi pi-times"
                    class="p-button-text p-button-rounded p-button-sm ml-auto !pr-0 mr-[-0.3rem]"
                    @click="showForm = false"
                />
            </div>
            <div class="flex flex-col gap-2">
                <InputText
                v-model="form.username"
                class="w-full mt-[-0.5rem]"
                placeholder=""
                />
                <small v-if="errors.username" class="text-red-500 text-xs">{{ errors.username }}</small>
                <small v-if="successMessage" class="text-green-500 text-xs">{{ successMessage }}</small>
            </div>

            <div class="flex items-center justify-between gap-4">
                <ToggleButton
                v-model="form.isDisabled"
                onLabel="Enabled"
                offLabel="Disabled"
                class="min-w-24"
                />
                <Button
                type="submit"
                icon="pi pi-check"
                label="Create"
                id="create-ct-button"
                class="ml-auto"
                :disabled="!form.username || loading"
                :loading="loading"
                />
            </div>
        </form>
    </div>
</template>