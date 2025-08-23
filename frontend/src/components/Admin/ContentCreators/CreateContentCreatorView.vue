<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { computed, onMounted, reactive, ref } from 'vue';
import API from '@/services/API'

const form = reactive({
    username: '',
    isDisabled: false
})

const showForm = ref(false)

const isDisabled = computed(() => !form.isDisabled);

const errors = ref<{ [key: string]: string }>({});

const onSubmit = () => {
    return
}
</script>

<template>
    <div class="relative">
        <Button 
        label="Add Creator" 
        icon="pi pi-plus" 
        @click="showForm = !showForm" 
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