import { promises as fs } from "fs";
import path from "path";

const DEFAULT_LOG_DIR =
    process.env.LOG_DIR ??
    (process.env.PROJECT_STATUS === "PROD"
        ? "/var/log/wildtransfer"
        : path.join(process.cwd(), "logs")
    );

const LOG_DIR = DEFAULT_LOG_DIR;
const USER_LOG_FILE = path.join(LOG_DIR, "userLogs.txt");

export async function appendUserLog(line: string) {
const msg = `[${new Date().toLocaleString()}] ${line}\n`;
    try {
        await fs.mkdir(LOG_DIR, { recursive: true });
        await fs.appendFile(USER_LOG_FILE, msg, "utf8");
    } catch (err) {
        console.error("[appendUserLog] failed:", { file: USER_LOG_FILE, err });
    }
}
