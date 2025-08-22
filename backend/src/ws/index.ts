import { WebSocketServer, WebSocket } from "ws";
import type { Server } from "http";
import { appendUserLog } from "../utils/logger";

class WsManager {
    private static instance: WsManager;
    private wss: WebSocketServer | null = null;

    private constructor() {}

    public static getInstance(): WsManager {
        if (!WsManager.instance) {
            WsManager.instance = new WsManager();
        }
        return WsManager.instance;
    }

    public init(server: Server) {
        if (this.wss) return; 
        this.wss = new WebSocketServer({ server, path: "/ws" });

        this.wss.on("connection", (ws: WebSocket) => {
            appendUserLog(`[WS] New client connected, total: ${this.wss?.clients.size}`);
            ws.on("close", () => appendUserLog("WS client disconnected"));
        });
    }

    public broadcast(message: any) {
        if (!this.wss) {
            appendUserLog("[WS] No server initialized");
            return;
        }

        const payload = typeof message === "string" ? message : JSON.stringify(message);

        let count = 0;
        
        for (const client of this.wss.clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(payload);
                count++;
            }
        }

        appendUserLog(`[WS] Sent ${JSON.stringify(message)} to ${count} client(s)`);
    }
}

export const Ws = WsManager.getInstance();
