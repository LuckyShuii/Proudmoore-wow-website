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

const editingRows = ref([]);

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

const updatedContentCreatorUsername = async (username: string, id: string) => {
    loadingContentCreators.value = true;
    try {
        await API.contentCreators.updateContentCreatorUsername(id, username);
        successMessage.value = 'Username updated successfully';
        return true
    } catch (error: any) {
        errorMessage.value = error.response.data;
        return false;
    } finally {
        loadingContentCreators.value = false;
    }
};

const onRowEditSave = async (event: any) => {
    errorMessage.value = '';
    successMessage.value = '';

    const { newData, index } = event;
    const { username, id } = newData;

    if (!username) {
        errorMessage.value = 'Username is required';
        return;
    }

    const creatorExists = contentCreators.value.find((creator: Partial<ContentCreator>) => creator.username === username && creator.id !== id);

    if (creatorExists) {
        errorMessage.value = 'Content Creator already exists in another row';
        return;
    }

    if (username === contentCreators.value[index].username) {
        console.log('No changes detected');
        return;
    }

    const isUpdated = await updatedContentCreatorUsername(username, id);
    console.log('is updated', isUpdated);
    if (isUpdated) {
        contentCreators.value[index] = newData;
    }
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
        <DataTable removableSort :value="contentCreators" tableStyle="max-width: 70rem; width: 100%;" :paginator="true" :rows="10" :rowsPerPageOptions="[10, 20, 50]" class="w-full" :loading="loadingContentCreators" v-model:editingRows="editingRows" editMode="row" @row-edit-save="onRowEditSave">
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
            <Column field="username" header="Username" sortable class="max-w-[10rem] !w-[20%]">
                <template #editor="{ data, field, editorSaveCallback }">
                    <InputText v-model="data[field]" fluid @keyup.enter="editorSaveCallback(data)" />
                </template>
            </Column>
            <Column header="Dates">
                <template #body="{ data }">
                    <Button 
                    icon="pi pi-clock"
                    class="p-button-text p-button-sm"
                    v-tooltip.top="{
                        value: `Created: ${convertDate(data.createdAt)} <br/> Updated: ${convertDate(data.updatedAt)}`,
                        escape: false
                    }"                    
                    />
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
            <Column field="isDisabled" header="Status" sortable class="max-w-[100px]">
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
            <Column header="" class="w-[10%] !max-w-[3rem]">
                <template #header>
                    <div class="text-center w-full">Actions</div>
                </template>
                <template #body="{ data }">
                    <div class="w-full flex justify-center">
                        <Button icon="pi pi-trash hover:scale-[1.1] transition-all duration-200" @click="showDeleteDialog(data)" />
                    </div>
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem;"/>
        </DataTable>

        <DeleteEntityDialog :entity="(selectedContentCreator as ContentCreator)" :visible="deleteVisible" @close="deleteVisible = false" @delete-content-creator="handleDeleteContentCreator(selectedContentCreator?.id as string)" />
    </section>
</template>

