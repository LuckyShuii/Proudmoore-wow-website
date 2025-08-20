import UsersService from "../services/usersService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import { AuthRequest } from "src/middlewares/authMiddleware";
import { AuthService } from "../services/authService";
import { appendUserLog } from "..//utils/logger";
import RolesService from "../services/rolesService";
import { UserRole } from "../entities/userRole";
import { v4 as uuidv4 } from "uuid";

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
                // Set to expire in 5 sec
                EX: 5,
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
                uuid: user.uuid
            });
        } catch (err) {
            console.error("Error in getMe:", err);
            return res.status(500).json({ message: "Error fetching profile" });
        }
    },

    createUser: async (req: AuthRequest, res: Response) => {
        try {
            const { username, email, password, roles, created_by } = req.body;

            const existingUsername = await UsersService.getUserBy("username", username);
            if (existingUsername) {
                return res.status(409).json({ message: "User already exists" });
            }

            const existingEmail = await UsersService.getUserBy("email", email);
            if (existingEmail) {
                return res.status(409).json({ message: "Email already exists" });
            }

            const createdBy = created_by
                ? await UsersService.getUserById(created_by)
                : req.user?.id
                ? await UsersService.getUserById(req.user.id)
                : undefined;

            const newUser = await UsersService.createUser({
                username,
                email,
                password: await AuthService.hashPassword(password),
                created_by: createdBy,
                last_updated_by: createdBy,
                uuid: uuidv4()
            });

            if (roles && roles.length > 0) {
                const roleEntities = await RolesService.getRolesByIds(roles);

                const userRoles = roleEntities.map((role) =>
                    UserRole.create({
                        user: newUser,
                        role,
                        granted_by: createdBy ?? undefined, 
                    })
                );

                console.log("CREATING : ", userRoles);

                await UserRole.save(userRoles);

                newUser.user_roles = userRoles;
            }

            appendUserLog(`${createdBy?.username ?? "system"} created user: ${username}`);
            return res.status(201).json(newUser);

        } catch (err) {
            appendUserLog(
                `Error creating user: ${err instanceof Error ? err.message : JSON.stringify(err)}`
            );
            return res.status(500).json({ message: "Error creating user" });
        }
    },

}

export default UsersController;