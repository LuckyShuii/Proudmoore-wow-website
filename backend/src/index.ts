import express from "express";
import "reflect-metadata";
import cors from "cors";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";

import { dataSource } from "./config/db";

import UsersController from "./controllers/usersController";
import RolesController from "./controllers/rolesController";

dotenv.config();

export const redisClient = createClient({ url: "redis://redis" });

redisClient.on("error", (err) => {
    console.log("Redis Client Error", err);
});

redisClient.on("connect", () => {
    console.log("Redis connected");
});

const app = express();

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http:localhost:5173",
    ].filter(Boolean) as string[],
    methods: ["GET", "POST"]
}));

app.use(express.json());

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 100, 
    message: 'Too many requests from this IP, please try again later.',
    headers: true,
});

app.use(limiter);
app.set('trust proxy', false);

const port = 8002;

app.listen(port, async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
    
    try {
        await redisClient.connect();
        console.log("Redis connected");
    } catch (err) {
        console.error("Impossible to connect to Redis", err);
    }
    
    console.log(`Server is listening on port ${port}`);
});

app.get("/api", (_req, res) => {
    res.status(200).send("The server is ON");
});

app.get("/api/users", UsersController.getAllUsers);
app.get("/api/roles", RolesController.getAllRoles);
