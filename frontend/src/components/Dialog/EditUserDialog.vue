<script setup lang="ts">
import type { User } from '@/types/userType';
import { getRoleClass } from '@/utils/getRoleClass';
import { onMounted, reactive, ref, watch, onUnmounted, computed } from 'vue';
import API from '@/services/API';

import { useRolesStore } from '@/store/rolesStore';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/authStore';

const { roles } = storeToRefs(useRolesStore());
const rolesStore = useRolesStore();

const authStore = useAuthStore();

const props = defineProps<{
    user?: User | null
    visible: boolean,
}>()

const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'edit', editedUser: User): void
}>()

const selectableRoles = computed(() =>
    roles.value.map(r => ({ code: r.code, name: r.name, description: r.description }))
);

const form = reactive({
    username: props.user?.username || '',
    email: props.user?.email || '',
    roles: props.user?.userRoles || [],
    password: ''
});

const errors = ref<{ [key: string]: string }>({});
const errorMessage = ref<string>(''); 

const validEmail = (email: string) => /.+@.+\..+/.test(email);

const validate = () => {
    const e: { [key: string]: string } = {};

    if (!form.username?.trim()) {
        e.username = 'Username is required';
    } else if (form.username.trim().length < 3) {
        e.username = 'Username must be at least 3 characters';
    }

    if (!form.email?.trim() || !validEmail(form.email)) {
        e.email = 'Valid email is required';
    }

    if (!Array.isArray(form.roles) || form.roles.length === 0) {
        e.roles = 'Select at least one role';
    }

    if (form.password && form.password.length > 0 && form.password.length < 8) {
        e.password = 'Password must be at least 8 characters (or leave it empty)';
    }

    errors.value = e;
    return Object.keys(e).length === 0;
};

const formHasChanged = computed(() => {
  const usernameChanged = form.username !== props.user?.username;
  const emailChanged = form.email !== props.user?.email;

  const originalRoles = (props.user?.userRoles ?? []).map(ur => ur.role?.code).filter(Boolean);
  const rolesChanged = JSON.stringify(form.roles) !== JSON.stringify(originalRoles);

  const passwordChanged = form.password !== '';

  return usernameChanged || emailChanged || rolesChanged || passwordChanged;
});

const isSubmitDisabled = computed(() => {
    const usernameOk = !!form.username?.trim() && form.username.trim().length >= 3;
    const emailOk = !!form.email?.trim() && validEmail(form.email);
    const rolesOk = Array.isArray(form.roles) && form.roles.length > 0;
    const passwordOk = !form.password || form.password.length === 0 || form.password.length >= 8;
    return !(usernameOk && emailOk && rolesOk && passwordOk) && formHasChanged.value;
});

const handleEditConfirm = async () => {
    errorMessage.value = '';
    if (!formHasChanged.value) {
        emit('close');
        return;
    }

    if (!validate()) return;

    try {
        const roleIds = (form.roles)
            // @ts-ignore
            .map(code => roles.value.find(r => r.code === code)?.id)
            .filter((v): v is number => !!v)

        const payload: Record<string, any> = {
            username: form.username.trim(),
            email: form.email.trim(),
            roles: roleIds,
        };

        if (form.password && form.password.length > 0) {
            payload.password = form.password;
        }

        const editedUser = (await API.users.editUser(props.user?.uuid as string, payload, Number(authStore.user?.id) as number)).data;
        emit('edit', editedUser);
    } catch (error: any) {
        console.error('Error editing user:', error);
        errorMessage.value = 'Failed to update user';
    }
};

const resetForm = () => {
    form.username = '';
    form.email = '';
    form.roles = [];
    form.password = '';
};

const fillFormFromProps = (u?: User | null) => {
    if (!u) {
        resetForm();
        return;
    }
    form.username = u.username ?? '';
    form.email = u.email ?? '';
    // @ts-ignore
    form.roles = (u.userRoles ?? [])
        .map(ur => ur.role?.code)
        .filter(Boolean) as string[];
    form.password = '';
    errors.value = {};
    errorMessage.value = '';
};

watch(() => props.user, (u) => fillFormFromProps(u), { immediate: true });
watch(() => props.visible, (isOpen) => { if (isOpen) fillFormFromProps(props.user); });

onMounted(() => {
    rolesStore.loadRoles();
});

onUnmounted(() => {
    resetForm();
});
</script>

<template>
    <Dialog
        @update:visible="emit('close')"
        v-model:visible="props.visible"
        :modal="true"
        :closable="true"
        dismissableMask
        closeOnEscape
    >
        <template #header>
            <h2 class="text-xl font-bold">Edit - {{ props.user?.username }} | {{ props.user?.uuid }}</h2>
        </template>

        <section class="flex flex-col items-center p-4 gap-4 min-w-[35rem]">
            {{ formHasChanged }}
            <form @submit.prevent="handleEditConfirm" class="max-w-[30rem] w-full">
                <div class="flex flex-col gap-6">
                    <!-- Username -->
                    <div>
                        <label class="block mb-1 font-medium">Username</label>
                        <InputText name="username" v-model="form.username" class="w-full" />
                        <small v-if="errors.username" class="text-red-500">{{ errors.username }}</small>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block mb-1 font-medium">Email</label>
                        <InputText name="email" v-model="form.email" class="w-full" />
                        <small v-if="errors.email" class="text-red-500">{{ errors.email }}</small>
                    </div>

                    <!-- Roles (codes) -->
                    <div>
                        <label class="block mb-1 font-medium">Roles</label>
                        <MultiSelect
                            v-model="form.roles"
                            :options="selectableRoles"
                            label="Roles"
                            optionValue="code"
                            optionLabel="name"
                            :showToggleAll="false"
                            class="w-full"
                            placeholder="Select roles"
                            display="chip"
                            :disabled="form.username === 'root'"
                        >
                            <template #option="{ option }">
                                <Chip class="text-sm" :class="getRoleClass(option.code, 'chip')">
                                    {{ option.name }} - {{ option.description }}
                                </Chip>
                            </template>
                        </MultiSelect>
                        <small v-if="errors.roles" class="text-red-500">{{ errors.roles }}</small>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">Password (optional)</label>
                        <InputText
                            name="password"
                            v-model="form.password"
                            type="password"
                            class="w-full"
                            placeholder="Leave empty to keep current password"
                        />
                        <small v-if="errors.password" class="text-red-500">{{ errors.password }}</small>
                    </div>
                </div>

                <div v-if="errorMessage" class="mt-5">
                    <p class="text-red-500 text-center">{{ errorMessage }}</p>
                </div>

                <div v-if="form.username === 'root'" class="mt-5">
                    <p class="text-red-500 text-center">Careful! You are editing the root user.</p>
                </div>

                <div class="flex justify-center gap-4 mt-6">
                    <Button icon="pi pi-times" label="Cancel" @click="emit('close')" class="cancel-button mr-2" />
                    <Button type="submit" icon="pi pi-check" label="Save Changes" class="confirm-button" :disabled="isSubmitDisabled || !formHasChanged" />
                </div>
            </form>
        </section>
    </Dialog>
</template>
