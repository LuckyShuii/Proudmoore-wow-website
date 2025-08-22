import projectData from "@/utils/projectData";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useWsStore = defineStore("ws", () => {
    const socket = ref<WebSocket | null>(null);
    const connected = ref(false);
    const messages = ref<any[]>([]);

    const connect = () => {
        if (socket.value) return;

        const url = projectData.WS_URL || "ws://localhost:8002/ws";
        socket.value = new WebSocket(url);

        socket.value.addEventListener("open", () => {
            connected.value = true;
        });

        socket.value.addEventListener("close", () => {
            connected.value = false;
            socket.value = null;
        });

        socket.value.addEventListener("message", (ev) => {
            try {
                const data = JSON.parse(ev.data);
                messages.value.push(data);
            } catch {
                messages.value.push(ev.data);
            }
        });
    };

    const send = (data: any) => {
        if (socket.value && connected.value) {
            const payload = typeof data === "string" ? data : JSON.stringify(data);
            socket.value.send(payload);
        }
    };

    return {
        socket,
        connected,
        messages,
        connect,
        send,
    };
});
