<script setup lang="ts">
import { onMounted, ref } from "vue";
import API from "@/services/API"; 
import { getRoleClass } from "@/utils/getRoleClass";
import { useAuthStore } from "@/store/authStore";
import { storeToRefs } from "pinia";

const roles = ref([]);

const { user } = storeToRefs(useAuthStore());

const confirmCreationMessage = ref<boolean>(false);
const errorMessage = ref<string>("");

const loadRoles = async () => {
    try {
        const response = await API.roles.getRoles(); // GET /roles
        roles.value = response.data;
    } catch (error) {
        console.error("Failed to load roles:", error);
        roles.value = [];
    }
};

const form = ref({
    username: "",
    email: "",
    password: "",
    roles: [] as number[],
    createdBy: user.value?.id,
    lastUpdatedBy: user.value?.id
});

const errors = ref<{ [key: string]: string }>({});

const validate = () => {
    errors.value = {};
    if (!form.value.username) errors.value.username = "Username is required";
    if (!form.value.email || !/.+@.+\..+/.test(form.value.email))
        errors.value.email = "Valid email is required";
    if (!form.value.password || form.value.password.length < 8)
        errors.value.password = "Password must be at least 8 characters";
    return Object.keys(errors.value).length === 0;
};

const onSubmit = async () => {
    if (!validate()) return;

    try {
        await API.users.createUser(form.value); // POST /users
        form.value = { username: "", email: "", password: "", roles: [], createdBy: user.value?.id, lastUpdatedBy: user.value?.id };
        confirmCreationMessage.value = true;
    } catch (error: any) {
        errorMessage.value = "Failed to create user";
    }
};

onMounted(() => {
    confirmCreationMessage.value = false;
    errorMessage.value = "";
    loadRoles();
});
</script>

<template>
<div class="w-full max-w-lg rounded-xl shadow-2xl p-10 bg-[#18181b]">
    <h2 class="text-2xl font-bold mb-10 font-marcellus text-center">Create User</h2>

    <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
        <!-- Username -->
        <div>
            <label class="block mb-1 font-medium">Username</label>
            <InputText v-model="form.username" class="w-full" placeholder="Enter username" />
            <small v-if="errors.username" class="text-red-500">{{ errors.username }}</small>
        </div>

        <!-- Email -->
        <div>
            <label class="block mb-1 font-medium">Email</label>
            <InputText v-model="form.email" class="w-full" placeholder="Enter email" />
            <small v-if="errors.email" class="text-red-500">{{ errors.email }}</small>
        </div>

        <!-- Password -->
        <div>
            <label class="block mb-1 font-medium">Password</label>
            <Password inputClass="w-full" v-model="form.password" class="w-full" toggleMask placeholder="Enter password" />
            <small v-if="errors.password" class="text-red-500">{{ errors.password }}</small>
        </div>

        <div>
            <label class="block mb-1 font-medium">Roles</label>
            <MultiSelect
                v-model="form.roles"
                :options="roles"
                placeholder="Select roles"
                optionLabel="name"
                optionValue="id"
                class="w-full"
                :showToggleAll="false"
            >
                <template #option="{ option }">
                    <Chip class="text-sm" :class="getRoleClass(option.code, 'chip')">{{ option.name }} - {{ option.description }}</Chip>
                </template>
            </MultiSelect>
        </div>

        <div v-if="confirmCreationMessage">
            <p class="text-green-500">User created successfully!</p>
        </div>

        <div v-if="errorMessage">
            <p class="text-red-500">{{ errorMessage }}</p>
        </div>

        <!-- Submit -->
        <Button type="submit" label="Create User" icon="pi pi-check" class="w-full mt-4" id="create-user-button" :disabled="!form.username || !form.email || !form.password || form.roles.length === 0" />
    </form>
</div>
</template>
