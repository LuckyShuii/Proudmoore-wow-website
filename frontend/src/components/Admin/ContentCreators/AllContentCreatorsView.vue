<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import API from '@/services/API';
import { convertDate } from '@/utils/convertDate';
import type { ContentCreator } from '@/types/contentCreatorType';
import DeleteEntityDialog from '@/components/Dialog/DeleteEntityDialog.vue';

const props = defineProps<{
    contentCreatorsNew: ContentCreator | null;
}>();

const contentCreators = ref<Partial<ContentCreator>[]>([]);
const errorMessage = ref<string>('');
const successMessage = ref<string>('');

const loadingContentCreators = ref<boolean>(false);
const loadingStatusChange = ref<boolean>(false);

const deleteVisible = ref<boolean>(false);
const selectedContentCreator = ref<ContentCreator | null>(null);

const isMessage = computed(() => errorMessage.value || successMessage.value);

const loadContentCreators = async () => {
    loadingContentCreators.value = true;
    try {
        const result = (await API.contentCreators.getAllContentCreators()).data;
        contentCreators.value = result.map((creator: ContentCreator) => ({
            ...creator,
            isDisabled: !creator.isDisabled
        }));
    } catch (error) {
        errorMessage.value = 'Failed to load content creators';
    } finally {
        loadingContentCreators.value = false;
    }
};

const handleUpdateStatus = async (contentCreator: ContentCreator) => {
    errorMessage.value = '';
    successMessage.value = '';
    loadingStatusChange.value = true;
    try {
        await API.contentCreators.updateContentCreatorStatus(contentCreator.id, { isDisabled: !contentCreator.isDisabled });
        //@ts-ignore
        contentCreators.value.find((creator: ContentCreator) => creator.id === contentCreator.id).isDisabled = contentCreator.isDisabled;
        successMessage.value = `${contentCreator.username} has been ${!contentCreator.isDisabled ? 'disabled' : 'enabled'} successfully`;
    } catch (error) {
        errorMessage.value = 'Failed to update content creator status';
    } finally {
        loadingStatusChange.value = false;
    }
};

const handleDeleteContentCreator = async (id: string) => {
    errorMessage.value = '';
    successMessage.value = '';
    try {
        await API.contentCreators.deleteContentCreator(id);
        contentCreators.value = contentCreators.value.filter((creator: Partial<ContentCreator>) => creator.id !== id);
        successMessage.value = 'Content creator deleted successfully';
    } catch (error) {
        errorMessage.value = 'Failed to delete content creator';
    } finally {
        deleteVisible.value = false;
    }
};

const showDeleteDialog = (contentCreator: ContentCreator) => {
    selectedContentCreator.value = contentCreator;
    deleteVisible.value = true;
};

onMounted(async () => {
    await loadContentCreators();
});

watch(() => props.contentCreatorsNew, (newCreator) => {
    if (newCreator) {
        newCreator.isDisabled = !newCreator.isDisabled;
        contentCreators.value = [newCreator, ...contentCreators.value];
    }
});

</script>

<template>
    <section class="w-full max-w-[1110px] flex justify-between items-center">
        <DataTable :value="contentCreators" tableStyle="max-width: 70rem; width: 100%;" :paginator="true" :rows="10" :rowsPerPageOptions="[10, 20, 50]" class="w-full" :loading="loadingContentCreators">
            <template #header>
                <div class="flex flex-wrap items-center gap-2" :class="isMessage || loadingStatusChange ? 'justify-between' : 'justify-end'">
                    <span v-if="errorMessage" class="text-red-600">{{ errorMessage }}</span>
                    <span v-if="successMessage" class="text-green-600">{{ successMessage }}</span>
                    <div class="flex items-center justify-center">
                        <ProgressSpinner 
                            style="width: 30px; height: 30px" 
                            strokeWidth="8" 
                            fill="transparent" 
                            animationDuration="2s" 
                            aria-label="Custom ProgressSpinner" 
                            v-if="loadingStatusChange"
                        />
                    </div>
                    <Button class="refresh-button" icon="pi pi-refresh" rounded raised @click="loadContentCreators" label="Refresh" />
                </div>
            </template>
            <Column field="username" header="Username" sortable></Column>
            <Column field="createdAt" header="Created At" sortable>
                <template #body="{ data }">
                    {{ convertDate(data.createdAt) }}
                </template>
            </Column>
            <Column field="updatedAt" header="Updated At" sortable>
                <template #body="{ data }">
                    {{ convertDate(data.updatedAt) }}
                </template>
            </Column>
            <Column field="createdBy" header="Created By" sortable>
                <template #body="{ data }">
                    {{ data.createdBy?.username || 'N/A' }}
                </template>
            </Column>
            <Column field="lastUpdatedBy" header="Last Updated By" sortable>
                <template #body="{ data }">
                    {{ data.lastUpdatedBy?.username || 'N/A' }}
                </template>
            </Column>
            <Column field="isDisabled" header="Status" sortable>
                <template #body="{ data }">
                    <ToggleButton
                        v-model="data.isDisabled"
                        onLabel="Enabled"
                        offLabel="Disabled"
                        class="min-w-24"
                        @change="handleUpdateStatus(data)"
                        :disabled="loadingStatusChange"
                    />
                </template>
            </Column>
            <Column header="Actions">
                <template #body="{ data }">
                    <Button icon="pi pi-pencil hover:scale-[1.1] transition-all duration-200" @click="" />
                    <Button icon="pi pi-trash hover:scale-[1.1] transition-all duration-200" @click="showDeleteDialog(data)" />
                </template>
            </Column>
        </DataTable>

        <DeleteEntityDialog :entity="(selectedContentCreator as ContentCreator)" :visible="deleteVisible" @close="deleteVisible = false" @delete-content-creator="handleDeleteContentCreator(selectedContentCreator?.id as string)" />
    </section>
</template>

