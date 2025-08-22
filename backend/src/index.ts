import express from "express";
import "reflect-metadata";
import cors from "cors";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";

import { dataSource } from "./config/db";
import { createDefaultUser } from "./seeds/createUser";

import UsersController from "./controllers/usersController";
import RolesController from "./controllers/rolesController";
import ContentCreatorsController from "./controllers/contentCreatorsController";
import AuthController from "./controllers/authController";
import { authenticateJWT, authorizeRoles } from "./middlewares/authMiddleware";

import { checkAllStreamers } from "./services/twitchService";

import http from "http";
import { Ws } from "./ws";
import { appendUserLog } from "./utils/logger";

dotenv.config();

export const redisClient = createClient({ url: "redis://redis" });

redisClient.on("error", (err) => {
    appendUserLog(`[REDIS] Redis Client Error: ${err}`);
});

redisClient.on("connect", () => {
    appendUserLog(`[REDIS] Redis connected`);
});

const app = express();

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http://localhost:5173", "http://localhost:8081",
    ].filter(Boolean) as string[],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests from this IP, please try again later.',
    headers: true,
});

app.use(limiter);
app.set('trust proxy', 1);

const port = 8002;

// Create an http server
const server = http.createServer(app);

// "server" instead of "app" cause we are using http.createServer
server.listen(port, async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
    
    try {
        await redisClient.connect();
        appendUserLog(`[REDIS] Redis connected`);
    } catch (err) {
        appendUserLog(`[REDIS] Impossible to connect to Redis: ${err}`);
    }

    try {
        Ws.init(server);
        appendUserLog(`[WS] WebSocket initialized`);
    } catch (err) {
        appendUserLog(`[WS] Impossible to initialize WebSocket: ${err}`);
    }
    
    await createDefaultUser();

    await checkAllStreamers();
    // Check Twitch streams every 20 seconds
    setInterval(checkAllStreamers, 20000);

    appendUserLog(`Server listening on ${port}`);
});

process.on("SIGTERM", () => {
    server.close(() => process.exit(0));
});

app.get("/api", (_req, res) => {
    res.status(200).send("The server is ON");
});

/**
 * POST ROUTES
 */
app.post("/api/auth/login", AuthController.login);

app.post("/api/auth/register", 
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    AuthController.register,
);

app.post("/api/users",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    UsersController.createUser
)

/**
 * GET ROUTES
 */
app.get("/api/users",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    UsersController.getAllUsers
);

app.get("/api/users/me",
    authenticateJWT,
    UsersController.getMe
);

app.get("/api/roles",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    RolesController.getAllRoles
);

app.get("/api/content-creators",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    ContentCreatorsController.getAllContentCreators
);

app.get("/api/content-creators/home",
    ContentCreatorsController.getContentCreatorsHome
);

/**
 * DELETE ROUTES
 */

app.delete("/api/users/:uuid",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    UsersController.deleteUser
);

/**
 * PUT ROUTES
 */

app.put("/api/users/:uuid",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    UsersController.updateUser
);