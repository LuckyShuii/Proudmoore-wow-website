import RolesService from "../services/rolesService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const RolesController = {
    getAllRoles: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allRoles");

            if (cacheResult) {
                const allRoles = JSON.parse(cacheResult);
                return res.status(200).send(allRoles);
            }

            const roles = await RolesService.getAllRoles();

            await redisClient.set('allRoles', JSON.stringify(roles), {
                // Set to expire in 15 sec
                EX: 15,
                NX: true,
            });

            return res.status(200).send(roles);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all Users");
        }
    },
}

export default RolesController;