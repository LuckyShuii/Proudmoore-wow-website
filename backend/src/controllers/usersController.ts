import UsersService from "../services/usersService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import bcrypt from "bcrypt";
import { Users } from "src/entities/users";
import { appendUserLog } from "../utils/logger";

const UsersController = {
    getAllUsers: async (_req: Request, res: Response) => {
        try {
            appendUserLog(`Querying all users`);

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

    createUser: async (req: Request, res: Response) => {
        try {
            const userToCreate: Users = {
                password: await bcrypt.hash(req.body.password, 10),
                ...req.body
            };

            const newUser = await UsersService.createUser(userToCreate);

            appendUserLog(`User created: ${JSON.stringify(newUser)}`);
            return res.status(201).send(newUser);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to create a User");
        }
    }
}

export default UsersController;