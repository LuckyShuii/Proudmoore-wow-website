<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Toast from 'primevue/toast';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Toast />
    <Header />
    <main class="flex-grow">
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