import ContentCreatorsService from "../services/contentCreatorsService";
import { Request, Response } from "express";
import { redisClient } from "../index";

const ContentCreatorsController = {
    getAllContentCreators: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("allContentCreators");

            if (cacheResult) {
                const allContentCreators = JSON.parse(cacheResult);
                return res.status(200).send(allContentCreators);
            }

            const contentCreators = await ContentCreatorsService.getAllContentCreators();

            await redisClient.set('allContentCreators', JSON.stringify(contentCreators), {
                // Set to expire in 15 sec
                EX: 15,
                NX: true,
            });

            return res.status(200).send(contentCreators);
        } catch (err) {
            return res.status(500).send("An error has occured when trying to get all Content Creators");
        }
    },
}

export default ContentCreatorsController;