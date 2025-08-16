<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import DesktopNavView from './components/DesktopNavView.vue';
import { computed, ref } from 'vue';

const visible = ref(false);

const isDev = computed(() => import.meta.env.VITE_PROJECT_STATUS === 'DEV');
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top -->
    <div class="pointer-events-none fixed top-0 left-0 w-full h-[100px] bg-[url('/webp/border-top.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Bottom -->
    <div class="pointer-events-none fixed bottom-0 left-0 w-full h-[100px] bg-[url('/webp/border-bottom.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Left -->
    <div class="pointer-events-none fixed top-0 left-0 w-[100px] h-full bg-[url('/webp/border-left.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <!-- Right -->
    <div class="pointer-events-none fixed top-0 right-0 w-[100px] h-full bg-[url('/webp/border-right.png')] bg-no-repeat bg-[length:100%_100%] z-50"></div>

    <Drawer v-model:visible="visible" header="Drawer" class="!w-full md:!w-80 lg:!w-[30rem] sm:!hidden" dismissable>
      <DesktopNavView @update-visible="visible = false" />
    </Drawer>

    <DesktopNavView class="hidden sm:block" />

    <main class="flex-grow sm:pl-[300px]">
      <Message severity="warn" class="fixed top-10 right-10 sm:right-10 z-50 sm:max-w-[600px] !bg-[#c49407]" v-if="isDev">
        <div class="text-white">
          <p class="font-bold">⚠️ Development Version (W.I.P)</p>
          <p class="hidden sm:block">This is a development build of the website and not the production version.</p>
        </div>
      </Message>
      <Button icon="pi pi-bars" class="!scale-[3] !fixed !top-10 !left-10 !z-[60] pointer-events-auto block sm:!hidden" @click="visible = true" />
      <RouterView />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<style>
  .min-h-screen {
    min-height: 100vh;
  }
</style>