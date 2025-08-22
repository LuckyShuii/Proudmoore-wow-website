import { ContentCreators } from "../entities/contentCreators";
import { dataSource } from "../config/db";
import { redisClient } from "..";

const ContentCreatorsService = {
    getAllContentCreators: async (): Promise<ContentCreators[]> => {
        const result = await ContentCreators.find();
        return result;
    },

    getContentCreatorsHome: async (): Promise<Partial<ContentCreators[]>> => {
        const cacheResult = await redisClient.get("contentCreatorsHome");
        
        if (cacheResult) {
            const contentCreatorsHome = JSON.parse(cacheResult);
            return contentCreatorsHome;
        }

        const result = await dataSource.query(
            `SELECT username, is_disabled
            FROM content_creators
            WHERE is_disabled = false`,
        );

        await redisClient.set('contentCreatorsHome', JSON.stringify(result), {
            // Set to expire in 60 sec
            EX: 60,
            NX: true,
        });

        return result;
    }
};

export default ContentCreatorsService;