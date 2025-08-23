<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { computed, onMounted, reactive, ref } from 'vue';
import API from '@/services/API'

const form = reactive<{
    username: string;
    isDisabled: boolean;
}>({
    username: '',
    isDisabled: false
})

const loading = ref<boolean>(false);

const showForm = ref<boolean>(false);

const isDisabled = computed<boolean>(() => !form.isDisabled);

const errors = ref<{ [key: string]: string }>({});

const validate = (): boolean => {
    errors.value = {};
    if (!form.username) errors.value.username = "Username is required";
    return Object.keys(errors.value).length === 0;
};

const isCreatorExists = async (username: string) => {
    try {
        const response = (await API.contentCreators.checkCreatorExists(username)).data;
        return response.exists;
    } catch (error) {
        errors.value.username = "Creator could not be found on Twitch";
    }
    return false;
};

const createContentCreator = async () => {
    try {
        return (await API.contentCreators.createContentCreator(form)).data;
    } catch (error) {
        errors.value.username = "Failed to create content creator";
    }
};

const resetForm = () => {
    form.username = '';
    form.isDisabled = false;
    errors.value = {};
};

const onSubmit = async () => {
    if (!validate()) return;

    loading.value = true;
    const creatorExists = await isCreatorExists(form.username);

    return

    if (!creatorExists) {
        loading.value = false;
        return;
    }

    const createdContentCreator = await createContentCreator();

    if (createdContentCreator.username === form.username) {
        // Handle successful creation
        resetForm();
    }

    loading.value = false;
}
</script>

<template>
    <div class="relative">
        <Button 
        label="Add Creator" 
        icon="pi pi-plus" 
        @click="showForm = !showForm" 
        id="display-create-ct"
        />

        <form
        v-if="showForm"
        @submit.prevent="onSubmit"
        class="absolute right-0 top-full mt-2 flex flex-col gap-6 bg-[#18181b] w-[22rem] p-6 rounded-2xl shadow-lg border border-gray-700 z-50"
        >
            <div class="flex flex-col gap-2">
                <label class="font-medium text-sm tracking-wide">Creator Username</label>
                <InputText
                v-model="form.username"
                class="w-full"
                placeholder="Enter creator username"
                />
                <small v-if="errors.username" class="text-red-500 text-xs">{{ errors.username }}</small>
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
                :disabled="!form.username"
                />
            </div>
        </form>
    </div>
</template>