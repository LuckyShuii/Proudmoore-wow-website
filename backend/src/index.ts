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
    
    await createDefaultUser();

    console.log(`Server is listening on port ${port}`);
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

/**
 * DELETE ROUTES
 */

app.delete("/api/users/:uuid",
    authenticateJWT,
    authorizeRoles("ADMIN", "DEV"),
    UsersController.deleteUser
);