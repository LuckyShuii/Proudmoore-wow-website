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
        <form @submit.prevent="login" class="flex flex-col items-center justify-center gap-4">
            <input type="text" v-model="username" placeholder="Username" class="p-2 border border-gray-300 rounded" />
            <input type="password" v-model="password" placeholder="Password" class="p-2 border border-gray-300 rounded" />
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </section>
</template>