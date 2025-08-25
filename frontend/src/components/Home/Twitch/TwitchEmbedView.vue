<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { useTwitchStore } from "@/store/twitchStore";
import { useWsStore } from "@/store/wsStore";

// Stores
const { streamers, loadingStreamers } = storeToRefs(useTwitchStore());
const twitchStore = useTwitchStore();
const wsStore = useWsStore();

const embed = ref<any>(null);
const currentChannel = ref("ProudmooreLive");

// --------- Twitch Embed loader ----------
const initEmbed = () => {
    embed.value = new (window as any).Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: currentChannel.value,
        layout: "video",
        theme: "dark",
    });
};

const loadTwitchEmbed = async (callback?: () => void) => {
    console.log("LOADING EMBED")
    await nextTick();

    if (!(window as any).Twitch) {
        const existing = document.getElementById("twitch-embed-script");
        if (!existing) {
            const script = document.createElement("script");
            script.id = "twitch-embed-script";
            script.src = "https://embed.twitch.tv/embed/v1.js";
            script.onload = () => {
                initEmbed();
                startEmbedWatcher();
                if (callback) callback();
            };
            document.body.appendChild(script);
        } else {
            existing.addEventListener(
                "load",
                () => {
                    initEmbed();
                    startEmbedWatcher();
                    if (callback) callback();
                },
                { once: true }
            );
        }
    } else {
        initEmbed();
        startEmbedWatcher();
        if (callback) callback();
    }
};

// --------- Actions ----------
const changeChannel = (channel: string) => {
    currentChannel.value = channel;
    if (embed.value) {
        try {
            embed.value.setChannel(channel);
        } catch {
            initEmbed();
        }
    }
};

// --------- Retry mechanism ----------
const embedInterval = ref<ReturnType<typeof setInterval> | null>(null);

const startEmbedWatcher = () => {
    if (embedInterval.value) return;

    embedInterval.value = setInterval(() => {
        const container = document.getElementById("twitch-embed");
        if (container && container.childElementCount === 0 && streamers.value.length > 0) {
            console.warn("[TWITCH] Embed empty, retrying init...");
            initEmbed();
        }

        if (container && container.childElementCount > 0) {
            console.log("[TWITCH] Embed initialized successfully");
            clearInterval(embedInterval.value!);
            embedInterval.value = null;
        }
    }, 2000);
};

onMounted(() => {
    wsStore.connect();
    twitchStore.loadStreamers();
});

watch(streamers, (newStreamers) => {
    if (newStreamers.length > 0) {
        const onlineStreamers = newStreamers.filter(s => s.online);
        if (onlineStreamers.length > 0) {
            const random = onlineStreamers[Math.floor(Math.random() * onlineStreamers.length)];
            currentChannel.value = random.username;
        } else {
            currentChannel.value = newStreamers[0].username;
        }

        loadTwitchEmbed();
    }
});

// --------- Styles util ---------
const wowBtnBase = ref(
    "relative px-5 py-2 rounded-xl transition shadow-md " +
        "border border-blue-500/70 ring-1 ring-inset ring-blue-400/30 " +
        "bg-gradient-to-b from-[#1B2B44] via-[#0F1C33] to-[#0A1422] " +
        "hover:from-[#25406B] hover:via-[#15243D] hover:to-[#0C1729] " +
        "backdrop-blur"
);

const activeGlow = ref(
    "before:content-[''] before:absolute before:inset-0 before:rounded-xl " +
        "before:shadow-[0_0_35px_8px_rgba(59,130,246,0.35)]"
);

const textStyle = ref(
    "font-semibold tracking-wide text-[15px] text-blue-100 drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]"
);

const chip = ref(
    "ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs " +
        "bg-[#0E1A2A] border border-blue-500/40"
);

// Badge statut live
const StatusDot = (online: boolean) =>
    online
        ? "relative w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] " +
        "after:content-[''] after:absolute after:inset-0 after:rounded-full after:animate-ping after:bg-green-400/60"
        : "w-2.5 h-2.5 rounded-full bg-red-500 opacity-80";
</script>

<template>
    <section
        id="faq"
        class="pt-16 flex flex-col items-center justify-center bg-[#070A15] px-[15px] w-full pb-[5rem]"
        v-show="streamers.length"
    >   
        <h3
            class="mb-4 font-marcellus text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]"
        >
            Content Creators
        </h3>
        <div class="w-full max-w-[1110px] mt-10">
            <div
                class="w-full mb-4 flex flex-wrap items-center gap-3 justify-center sm:justify-start"
                v-if="!loadingStreamers"
            >
                <button
                v-for="s in streamers"
                :key="s.username"
                @click="changeChannel(s.username)"
                :class="[wowBtnBase, currentChannel === s.username ? activeGlow : '']"
                >
                    <span class="flex items-center gap-2">
                        <span :class="textStyle">{{ s.username }}</span>
                        <span :class="chip" class="text-blue-200">
                        <span :class="StatusDot(s.online)"></span>
                        <span class="ml-1">{{ s.online ? "Live" : "Offline" }}</span>
                        </span>
                    </span>
                </button>
            </div>
            <div v-if="loadingStreamers">
                <p>Loading content creators list...</p>
            </div>
            <div
                class="w-full aspect-video rounded-xl overflow-hidden border border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
            >
                <div id="twitch-embed" class="w-full h-full"></div>
            </div>
        </div>
    </section>
</template>
