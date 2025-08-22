// src/stores/twitchStore.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useWsStore } from "./wsStore";
import API from "@/services/API";

interface Streamer {
  username: string;
  online: boolean;
}

export const useTwitchStore = defineStore("twitch", () => {
    const streamers = ref<Streamer[]>([]);

    const loadingStreamers = ref(false);

    const wsStore = useWsStore();

    // listen to WS messages on Twitch status
    watch(
        () => wsStore.messages,
        (msgs) => {
            const last = msgs[msgs.length - 1];
            if (last?.type === "TWITCH_STATUS") {
                // const s = streamers.value.find((st) => st.username === last.streamer);
                // if (s) s.online = last.online;
                if (last.online) {
                    console.log("Streamer is online:", last.streamer);
                    const existing = streamers.value.find((st) => st.username === last.streamer);
                    if (existing) {
                        existing.online = last.online;
                    } else {
                        streamers.value.push({ username: last.streamer, online: last.online });
                    }
                }

                if (!last.online) {
                    console.log("Streamer is offline:", last.streamer);
                    streamers.value = streamers.value.filter((st) => st.username !== last.streamer);
                }

                console.log("Current streamers:", streamers.value);
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
