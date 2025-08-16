<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue';

interface Props {
    end: number;
    start?: number;
    duration?: number;
    once?: boolean;
    locale?: string;
}
const props = withDefaults(defineProps<Props>(), {
    start: 0,
    duration: 1200,
    once: true,
    locale: undefined,
});

const el = ref<HTMLElement | null>(null);
const display = ref<number>(props.start);
const raf = ref(0);
const started = ref(false);

const formatter = computed(() => new Intl.NumberFormat(props.locale ?? undefined));

const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

const animate = (from: number, to: number, duration: number) => {
    if (prefersReduced || duration <= 0) {
        display.value = to;
        return;
    }
    const startTime = performance.now();
    const delta = to - from;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        display.value = Math.round(from + delta * easeOutCubic(t));
        if (t < 1) {
            raf.value = requestAnimationFrame(step);
        }
    };
    cancelAnimationFrame(raf.value);
    raf.value = requestAnimationFrame(step);
}

const observer = ref<IntersectionObserver | null>(null);
const startAnimation = () => {
if (started.value && props.once) return;
started.value = true;
animate(display.value, props.end, props.duration);
}

onMounted(() => {
    if (!props.once) {
        // start animation immediately if not "once"
        startAnimation();
        return;
    }
    observer.value = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            startAnimation();
            if (props.once && observer.value) observer.value.disconnect();
            }
        });
        },
        { threshold: 0.35 }
    );
    if (el.value) observer.value.observe(el.value);
});

onBeforeUnmount(() => {
    cancelAnimationFrame(raf.value);
    if (observer.value) observer.value.disconnect();
});

// If `end` changes dynamically
watch(() => props.end, (nv) => {
    animate(display.value, nv, props.duration);
});
</script>

<template>
    <span ref="el" class="font-marcellus">{{ formatter.format(display) }}</span>
</template>
