<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  front: String,
  back: String,
  id: String,
  isFav: Boolean
})

const flipped = ref(false)
</script>

<template>
  <div
    class="rounded-2xl flipCard w-[300px] h-[113px] cursor-pointer outline-none"
    tabindex="0"
    @click="flipped = !flipped"
    :id="props.id"
  >
    <div
      class="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]
             rounded-2xl border border-[rgba(0,180,255,0.12)]
             shadow-[0_0_4px_rgba(0,200,255,0.05),_inset_0_1px_3px_rgba(255,255,255,0.03)]"
      :class="flipped ? '[transform:rotateY(180deg)]' : ''"
    >
      <!-- Front Face -->
      <div
        class="absolute inset-0 grid place-items-center px-6 text-center [backface-visibility:hidden]
               rounded-2xl"
      >
        <div v-if="props.isFav" class="absolute top-2 left-3 font-[700]">
          ★
        </div>
        <h3 class="text-lg font-semibold text-white tracking-wide">
          {{ props.front }}
        </h3>
      </div>

      <!-- Back Face -->
      <div
        class="absolute inset-0 grid place-items-center px-6 text-center [backface-visibility:hidden]
               [transform:rotateY(180deg)] rounded-2xl bg-[#1c2e50]"
      >
        <p class="text-sky-100/90 font-semibold text-sm">
          {{ props.back }}
        </p>
      </div>
    </div>
  </div>
</template>
