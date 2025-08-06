<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import DesktopNavView from './components/DesktopNavView.vue';
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

    <DesktopNavView />
    <main class="flex-grow pl-[300px]">
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