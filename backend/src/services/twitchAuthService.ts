import fetch from "node-fetch";
import { appendUserLog } from "../utils/logger";

const clientId = process.env.TWITCH_CLIENT_ID as string;
const clientSecret = process.env.TWITCH_SECRET as string;

let accessToken = "";
let expiresAt = 0;

export async function getAccessToken(): Promise<string> {
    if (!clientId || !clientSecret) {
        appendUserLog("[TWITCH] Missing Twitch API credentials - cannot generate a new access token!");
        throw new Error("Missing Twitch API credentials");
    }

    const now = Date.now();

    if (accessToken && now < expiresAt) {
        return accessToken; // still valid
    }

    appendUserLog("[TWITCH] Refreshing twitch access token...");

    const res = await fetch("https://id.twitch.tv/oauth2/token", {
            method: "POST",
            body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "client_credentials",
        }),
    });

    if (!res.ok) {
        appendUserLog(`[TWITCH] Failed to refresh access token: ${res.status} ${res.statusText}`);
        throw new Error(`Failed to get access token: ${res.status} ${res.statusText}`);
    }

    const data: any = await res.json();
    accessToken = data.access_token;
    expiresAt = now + data.expires_in * 1000;

    appendUserLog(`[TWITCH] Token refreshed, expires in ${data.expires_in} seconds`);

    return accessToken;
}
