import ContentCreatorsService from "../services/contentCreatorsService";
import { Request, Response } from "express";
import { redisClient } from "../index";
import { appendUserLog } from "../utils/logger";
import twitchService, { isStreamerOnline } from "../services/twitchService";

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
    },

    checkIfExists: async (username: string): Promise<boolean> => {
        try {
            const exists = await twitchService.streamerExists(username);
            return exists;
        } catch (err) {
            appendUserLog(`[CONTENT_CREATORS] Error checking if content creator exists: ${err}`);
            return false;
        }
    },

    createContentCreator: async (req: Request, res: Response) => {
        try {
            const { username, isDisabled } = req.body;
            //@ts-ignore
            const creatorId = req.user.id;

            if (!username) {
                return res.status(400).send("Username is required");
            }

            if (typeof isDisabled !== "boolean") {
                return res.status(400).send("Invalid value for isDisabled");
            }

            const creatorExists = await twitchService.streamerExists(username);
            if (!creatorExists) {
                return res.status(404).send("Content Creator not found on Twitch");
            }

            const exists = await ContentCreatorsService.getContentCreatorByUsername(username);
            if (exists) {
                return res.status(409).send("Content Creator already exists");
            }

            const newContentCreator = await ContentCreatorsService.createContentCreator(username.toLowerCase(), isDisabled, creatorId);

            appendUserLog(`[CONTENT_CREATORS] New content creator created: ${newContentCreator.id} by user ${creatorId}`);
            return res.status(201).send(newContentCreator);
        } catch (err) {
            appendUserLog(`[CONTENT_CREATORS] Error creating content creator: ${err}`);
            return res.status(500).send("An error has occured when trying to create Content Creator");
        }
    }
}

export default ContentCreatorsController;