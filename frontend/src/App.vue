<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavView from './components/NavView.vue';
import { computed, ref } from 'vue';
import projectData from './utils/projectData';

// import API from '@/services/API'

// const rolesApiTest = ref(null);

const visible = ref(false);

const isDev = computed(() => projectData.PROJECT_STATUS === 'DEV');

// onMounted(async () => {
//   rolesApiTest.value = (await API.roles.getRoles()).data;
// })
</script>

<template>
  <!-- {{ rolesApiTest }} -->
  <div class="flex flex-col min-h-screen">
    <!-- Top -->
    <div class="pointer-events-none fixed top-0 left-0 w-full h-[100px] bg-[url('/webp/border-top.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Bottom -->
    <div class="pointer-events-none fixed bottom-0 left-0 w-full h-[100px] bg-[url('/webp/border-bottom.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Left -->
    <div class="pointer-events-none fixed top-0 left-0 w-[100px] h-full bg-[url('/webp/border-left.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Right -->
    <div class="pointer-events-none fixed top-0 right-0 w-[100px] h-full bg-[url('/webp/border-right.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <div class="w-full lg:w-[30rem] lg:hidden z-60">
      <Drawer v-model:visible="visible" :showCloseIcon="false" header="">
        <NavView @update-visible="visible = false">
          <template #header>
            <div class="absolute right-4 mt-20 lg:mt-8">
              <button class="p-2" @click="visible=false" aria-label="Close">
                <i class="pi pi-times text-2xl text-white"></i>
              </button>
            </div>
          </template>
        </NavView>
      </Drawer>
    </div>
    <NavView class="hidden lg:flex" />

    <main class="flex-grow lg:pl-[300px]">
      <Message severity="warn" class="fixed top-10 right-10 lg:right-10 z-50 lg:max-w-[600px] !bg-[#c49407]" v-if="isDev">
        <div class="text-white">
          <p class="font-bold">⚠️ Development Version (W.I.P)</p>
          <p class="hidden lg:block">This is a development build of the website and not the production version.</p>
        </div>
      </Message>
      <Button id="burger-button" icon="pi pi-bars" class="!scale-[3] !fixed !top-10 !left-10 !z-[60] pointer-events-auto block lg:!hidden" @click="visible = true" />
      <RouterView />
    </main>
  </div>
</template>

<style>
  .min-h-screen {
    min-height: 100vh;
  }
</style>