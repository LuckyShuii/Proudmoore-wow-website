import UsersService from "../services/usersService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import { AuthRequest } from "src/middlewares/authMiddleware";

const UsersController = {
    getAllUsers: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allUsers");

            if (cacheResult) {
                const allUsers = JSON.parse(cacheResult);
                return res.status(200).send(allUsers);
            }

            const users = await UsersService.getAllUsers();

            await redisClient.set('allUsers', JSON.stringify(users), {
                // Set to expire in 30 sec
                EX: 30,
                NX: true,
            });

            return res.status(200).send(users);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all Users");
        }
    },

    async getMe(req: AuthRequest, res: Response) {
        try {
            // `req.user` is added by the middleware `authenticateJWT`
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // Load the user with their roles
            const user = await UsersService.getUserById(userId, ["user_roles", "user_roles.role"]);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.json({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: user.roles.map(r => { return { code: r.code, name: r.name } }),
            });
        } catch (err) {
            console.error("Error in getMe:", err);
            return res.status(500).json({ message: "Error fetching profile" });
        }
    }
}

export default UsersController;