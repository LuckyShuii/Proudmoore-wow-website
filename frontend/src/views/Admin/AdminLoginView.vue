<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/store/authStore';
import { ref } from 'vue';

const username = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");

interface LoginError {
    message : string;
}

const login = async () => {
    errorMessage.value = ""; // Clear previous error message
    try {
        const authStore = useAuthStore();
        await authStore.login(username.value, password.value);
        // Redirect to admin dashboard or another page after successful login
        router.push({ name: 'admin-dashboard' });

        console.log("isAuthenticated:", authStore.isAuthenticated);
        console.log("user:", authStore.user);
    } catch (error: any) {
        if (error?.response?.data) {
            errorMessage.value = (error.response.data as LoginError).message;
        } else {
            errorMessage.value = "Unknown error";
        }
    }
};
</script>

<template>
    <section class="w-full h-screen flex flex-col items-center justify-center">
        <form @submit.prevent="login" class="flex flex-col items-center justify-center gap-4 min-w-[15rem] mx-10">
            <img src="/webp/logo_t.webp" alt="Logo" class="max-w-[25rem] w-full" />
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-user"></i>
                </InputGroupAddon>
                <InputText v-model="username" placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-lock"></i>
                </InputGroupAddon>
                <InputText v-model="password" placeholder="Password" type="password" />
            </InputGroup>

            <Button type="submit" id="admin-login-button">
                Login
            </Button>
        </form>
        <p class="h-[2rem] mt-4 flex justify-center items-center"><span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span></p>
    </section>
</template>