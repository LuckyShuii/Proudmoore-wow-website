import UsersService from "../services/usersService";
import { Request, Response } from "express";
import { redisClient } from "../index";

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
}

export default UsersController;