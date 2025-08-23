// services/twitchService.ts
import fetch from "node-fetch";
import { Ws } from "../ws";
import { appendUserLog } from "../utils/logger";
import { getAccessToken } from "./twitchAuthService";
import ContentCreatorsService from "./contentCreatorsService";

const clientId = process.env.TWITCH_CLIENT_ID as string;

let statuses: Record<string, boolean> = {};

const allStreamers = async () => await ContentCreatorsService.getContentCreatorsHome();

export const streamerExists = async (username: string): Promise<boolean> => {
    if (!clientId) {
        appendUserLog("[TWITCH] Missing Twitch Client ID in streamerExists");
        return false;
    }

    try {
        const token = await getAccessToken();

        const res = await fetch(
            `https://api.twitch.tv/helix/users?login=${username.toLowerCase()}`,
            {
                headers: {
                    "Client-ID": clientId,
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        const data: any = await res.json();
        const exists = data.data && data.data.length > 0;

        if (!exists) {
            appendUserLog(`[TWITCH] Creation failed - Streamer does not exist ${username}`);
        }

        return exists;
    } catch (err) {
        appendUserLog(`[TWITCH] Error checking if streamer exists ${username}: ${err}`);
        return false;
    }
};

export const isStreamerOnline = async (username: string): Promise<boolean> => {
    if (!clientId) {
        appendUserLog("[TWITCH] Missing Twitch Client ID in isStreamerOnline");
        return false;
    }

    try {
        const token = await getAccessToken();

        const res = await fetch(
            `https://api.twitch.tv/helix/streams?user_login=${username.toLowerCase()}`,
            {
                headers: {
                    "Client-ID": clientId,
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        const data: any = await res.json();

        const isTitleProudmoore = data.data[0]?.title.toLowerCase().includes("proudmoore");

        if (!isTitleProudmoore) {
            return false;
        }

        return true;
    } catch (err) {
        appendUserLog(`[TWITCH] Error checking ${username}: ${err}`);
        return false;
    }
};

export const checkAllStreamers = async (streamers: any = []) => {
    if (!streamers.length) streamers = await allStreamers();
    const currentUsernames = new Set(streamers.map((s: any) => s.username));

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
            disabled: streamer.disabled || false,
            timestamp: new Date().toISOString(),
        });
    }

    for (const username of Object.keys(statuses)) {
        if (!currentUsernames.has(username)) {
            Ws.broadcast({
                type: "TWITCH_STATUS",
                streamer: username,
                online: false,
                disabled: true,
                timestamp: new Date().toISOString(),
            });

            delete statuses[username];
        }
    }
};

export default {
    isStreamerOnline,
    checkAllStreamers,
    streamerExists
};