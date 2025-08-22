// services/twitchService.ts
import fetch from "node-fetch";
import { Ws } from "../ws";
import { appendUserLog } from "../utils/logger";
import { getAccessToken } from "./twitchAuthService";
import ContentCreatorsService from "./contentCreatorsService";

const clientId = process.env.TWITCH_CLIENT_ID as string;

let statuses: Record<string, boolean> = {};

const allStreamers = async () => await ContentCreatorsService.getContentCreatorsHome();

export const isStreamerOnline = async (username: string): Promise<boolean> => {
    if (!clientId) {
        appendUserLog("[TWITCH] Missing Twitch Client ID in isStreamerOnline");
        return false;
    }

    try {
        const token = await getAccessToken();

        const res = await fetch(
            `https://api.twitch.tv/helix/streams?user_login=${username}`,
            {
                headers: {
                    "Client-ID": clientId,
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        const data: any = await res.json();
        return data.data.length > 0; // true = live, false = offline
    } catch (err) {
        appendUserLog(`[TWITCH] Error checking ${username}: ${err}`);
        return false;
    }
};

export const checkAllStreamers = async (streamers: any = []) => {
    if (!streamers.length) streamers = await allStreamers();

    for (const streamer of streamers) {
        const online = await isStreamerOnline(streamer.username);

        if (statuses[streamer.username] !== online) {
            statuses[streamer.username] = online;

            appendUserLog(
                `SYSTEM: Twitch status changed: ${streamer.username.toUpperCase()} is now ${
                    online ? "LIVE" : "OFFLINE"
                }`
            );
        }
        
        Ws.broadcast({
            type: "TWITCH_STATUS",
            streamer: streamer.username,
            online,
            timestamp: new Date().toISOString(),
        });
    }
};

export default {
    isStreamerOnline,
    checkAllStreamers,
};