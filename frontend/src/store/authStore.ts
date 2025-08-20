import { defineStore } from "pinia";
import { ref, computed } from "vue";
import APIHandler from "@/services/APIHandler";
import type { User } from "@/types/userType";

export const useAuthStore = defineStore("auth", () => {
    const accessToken = ref<string | null>(localStorage.getItem("_proudmoore_website_access_token_"));
    const user = ref<User | null>(
        localStorage.getItem("_proudmoore_website_user_")
        ? JSON.parse(localStorage.getItem("_proudmoore_website_user_") as string)
        : null
    );

    // ROLE STRUCTURE : { code: code, name: name }
    const isAuthenticated = computed(() => !!accessToken.value);
    const hasRole = (code: string) => user.value?.roles.some(r => r.code === code) ?? false;

    const isAdmin = computed(() => { return hasRole("ADMIN") || hasRole("DEV") });

    const login = async (username: string, password: string) => {
        try {
            const { data } = await APIHandler.post("/auth/login", { username, password });

            if (!data.token) {
                throw new Error("Login failed");
            }

            accessToken.value = data.token;
            localStorage.setItem("_proudmoore_website_access_token_", accessToken.value as string);

            await fetchUserProfile();
        } catch (error: any) {
            logout();
            throw error;
        }
    };

    const fetchUserProfile = async () => {
        if (!accessToken.value) return;

        try {
            const { data } = await APIHandler.get("/users/me");
            user.value = data;
            localStorage.setItem("user", JSON.stringify(user.value));
        } catch (error) {
            logout();
        }
    };

    const logout = () => {
        accessToken.value = null;
        user.value = null;
        localStorage.removeItem("_proudmoore_website_access_token_");
        localStorage.removeItem("_proudmoore_website_user_");
    };

    return {
        accessToken,
        user,
        isAuthenticated,
        hasRole,
        isAdmin,
        login,
        fetchUserProfile,
        logout,
    };
});
