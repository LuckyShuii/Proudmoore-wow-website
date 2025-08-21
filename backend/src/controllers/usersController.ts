import UsersService from "../services/usersService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import { AuthRequest } from "../middlewares/authMiddleware";
import { AuthService } from "../services/authService";
import { appendUserLog } from "../utils/logger";
import RolesService from "../services/rolesService";
import { UserRole } from "../entities/userRole";
import { v4 as uuidv4 } from "uuid";
import { Users } from "../entities/users";
import UserRolesService from "../services/userRolesService";

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
            appendUserLog(`Error fetching profile: ${err instanceof Error ? err.message : JSON.stringify(err)}`);
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
                username: username.toLowerCase(),
                email: email.toLowerCase(),
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

                await UserRole.save(userRoles);

                newUser.user_roles = userRoles;
            }

            appendUserLog(`${createdBy?.username.toUpperCase() ?? "SYSTEM"} created user: ${username.toUpperCase()}`);
            return res.status(201).json(newUser);

        } catch (err) {
            appendUserLog(
                `Error creating user: ${err instanceof Error ? err.message : JSON.stringify(err)}`
            );
            return res.status(500).json({ message: "Error creating user" });
        }
    },

    async deleteUser(req: AuthRequest, res: Response) {
        try {
            const userUuid = req.params.uuid;
            const whoUsername = req.body.who;

            const user = await UsersService.getUserByUuid(userUuid);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (user.username === "root") {
                appendUserLog(
                    `${whoUsername.toUpperCase()} attempted to delete root user ${user.username.toUpperCase()} - action denied`
                );
                return res.status(403).json({ message: "Cannot delete root user" });
            }

            await UsersService.deleteUser(userUuid);

            appendUserLog(
                `${whoUsername.toUpperCase()} deleted user ${user.username.toUpperCase()}`
            );
            return res.status(204).send();
        } catch (err) {
            appendUserLog(`Error deleting user: ${err instanceof Error ? err.message : JSON.stringify(err)}`);
            return res.status(500).json({ message: "Error deleting user" });
        }
    },

    async updateUser(req: AuthRequest, res: Response) {
        try {
            const userUuid = req.params.uuid;
            const { username, email, password, roles, whoId, whoUsername } = req.body as {
                username?: string; email?: string; password?: string; roles?: number[]; whoId: number; whoUsername: string;
            };

            const user = await UsersService.getUserByUuid(userUuid);
            if (!user) return res.status(404).json({ message: 'User not found' });

            const partial: Partial<Users> = {};

            if (username) partial.username = username.toLowerCase();
            if (email) partial.email = email.toLowerCase();
            if (password && password.length > 0) {
                partial.password = await AuthService.hashPassword(password);
            }

            if (Object.keys(partial).length > 0) {
                await Users.update({ uuid: user.uuid }, partial);
            }

            if (!Array.isArray(roles)) return res.status(400).json({ message: 'Invalid roles' });

            await UserRolesService.setUserRoles(user.id, roles, whoUsername, whoId);

            const updated = await Users.findOne({
                where: { uuid: userUuid },
                relations: ['user_roles', 'user_roles.role'],
            });

            appendUserLog(`${whoUsername.toUpperCase()} updated user ${user.username.toUpperCase()}`);

            return res.status(200).json(updated);
        } catch (err) {
            appendUserLog(
                `Error updating user: ${err instanceof Error ? err.message : JSON.stringify(err)}`
            );
            return res.status(500).json({ message: 'Error updating user' });
        }
    }
}

export default UsersController;