import { promises as fs } from "fs";
import path from "path";

const LOG_DIR = process.env.LOG_DIR || path.join(process.cwd(), "src", "logs");

/**
 * USER LOGS
 */

const USER_LOG_FILE = path.join(LOG_DIR, "userLogs.txt");

export async function appendUserLog(line: string) {
    const msg = `[${new Date().toISOString()}] ${line}\n`;
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(USER_LOG_FILE, msg, "utf8");
}

/**
 * ACCESS LOGS
 */

const ACCESS_LOG_FILE = path.join(LOG_DIR, "accessLogs.txt");

export async function appendAccessLog(line: string) {
    const msg = `[${new Date().toISOString()}] ${line}\n`;
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(ACCESS_LOG_FILE, msg, "utf8");
}