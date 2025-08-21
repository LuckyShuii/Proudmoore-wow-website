import { defineStore } from "pinia";
import { ref } from "vue";
import API from "@/services/API";
import type { Role } from "@/types/roleType";

export const useRolesStore = defineStore("roles", () => {
    const roles = ref<Role[]>([]);

    const loadRoles = async () => {
        try {
            const { data } = (await API.roles.getRoles());
            roles.value = data;
        } catch (error) {
            console.error("Failed to load roles:", error);
        }
    };

    return {
        loadRoles,
        roles,
    };
});
