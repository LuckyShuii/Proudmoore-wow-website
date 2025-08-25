// src/stores/twitchStore.ts
import { defineStore, storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useWsStore } from "./wsStore";
import API from "@/services/API";

interface Streamer {
  username: string;
  online: boolean;
  disabled?: boolean;
}

export const useTwitchStore = defineStore("twitch", () => {
    const streamers = ref<Streamer[]>([]);

    const loadingStreamers = ref(false);

    const { messages } = storeToRefs(useWsStore());

    // listen to WS messages on Twitch status
    watch(
        () => messages.value,
        (msgs: any[]) => {
            const last = msgs[msgs.length - 1];
            if (last?.type === "TWITCH_STATUS") {
                if (last?.disabled) {
                    streamers.value = streamers.value.filter((s) => s.username !== last.streamer);
                }

                if (last.online) {
                    const existing = streamers.value.find((st) => st.username === last.streamer);
                    if (existing) {
                        streamers.value = streamers.value.map(st =>
                            st.username === last.streamer
                                ? { ...st, online: last.online }
                                : st
                        );
                    } else {
                        streamers.value.push({ username: last.streamer, online: last.online });
                    }
                }

                if (!last.online) {
                    streamers.value = streamers.value.filter((st) => st.username !== last.streamer);
                }
            }
        },
        { deep: true }
    );

    const liveStreamers = () =>
        streamers.value.filter((s) => s.online);

    const loadStreamers = async () => {
        loadingStreamers.value = true;
        try {
            const data = (await API.contentCreators.getContentCreatorsHome()).data;
            streamers.value = data;
        } catch (error) {
            console.error("Error loading streamers:", error);
        } finally {
            loadingStreamers.value = false;
        }
    };

    return {
        streamers,
        liveStreamers,
        loadingStreamers,
        loadStreamers
    };
});
