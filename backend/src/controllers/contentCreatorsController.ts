import ContentCreatorsService from "../services/contentCreatorsService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import { appendUserLog } from "../utils/logger";
import { isStreamerOnline } from "../services/twitchService";

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

    getContentCreatorsHome: async (_req: Request, res: Response) => {
        try {
            const cacheResult = await redisClient.get("contentCreatorsHome");

            if (cacheResult) {
                const contentCreatorsHome = JSON.parse(cacheResult);

                for (const creator of contentCreatorsHome) {
                    //@ts-ignore
                    creator.online = await isStreamerOnline(creator.username);
                }

                return res.status(200).send(contentCreatorsHome.filter((creator: any) => creator.online));
            }

            const contentCreatorsHome = await ContentCreatorsService.getContentCreatorsHome();

            await redisClient.set('contentCreatorsHome', JSON.stringify(contentCreatorsHome), {
                // Set to expire in 60 sec
                EX: 60,
                NX: true,
            });

            for (const creator of contentCreatorsHome) {
                //@ts-ignore
                creator.online = await isStreamerOnline(creator.username);
            }

            return res.status(200).send(contentCreatorsHome.filter((creator: any) => creator.online));

        } catch (err) {
            appendUserLog(`[CONTENT_CREATORS] Error fetching content creators for home: ${err}`);
            return res.status(500).send("An error has occured when trying to get Content Creators for Home");
        }
    }
}

export default ContentCreatorsController;