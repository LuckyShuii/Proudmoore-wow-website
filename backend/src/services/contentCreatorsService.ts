import { ContentCreators } from "../entities/contentCreators";
import { dataSource } from "../config/db";
import { redisClient } from "..";
import { Users } from "../entities/users";

const ContentCreatorsService = {
    getAllContentCreators: async (): Promise<ContentCreators[]> => {
        const result = await ContentCreators.find({ relations: ["created_by", "last_updated_by"], order: { username: "ASC" } });
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
    },

    createContentCreator: async (username: string, isDisabled: boolean, creatorId: number): Promise<ContentCreators> => {
        try {
            const result = await ContentCreators.save({
                username,
                is_disabled: isDisabled,
                created_by: { id: creatorId } as Users  ,
                last_updated_by: { id: creatorId } as Users,
            });
            return result;
        } catch (error) {
            throw new Error("Error creating content creator");
        }
    },

    getContentCreatorByUsername: async (username: string): Promise<ContentCreators | null> => {
        const result = await ContentCreators.findOne({ where: { username }, relations: ["created_by", "last_updated_by"] });
        return result;
    },

    updateContentCreatorStatus: async (id: string, isDisabled: boolean, whoId: number): Promise<void> => {
        try {
            const result = await dataSource.query(
                `UPDATE content_creators
                SET is_disabled = $1,
                last_updated_by = $2,
                updated_at = NOW()
                WHERE id = $3`,
                [isDisabled, whoId, id]
            );
            if (result.rowCount === 0) {
                throw new Error("Content creator not found");
            }
        } catch (error) {
            throw new Error("Error updating content creator status");
        }
    },

    deleteContentCreator: async (id: string): Promise<void> => {
        try {
            const result = await dataSource.query(
                `DELETE FROM content_creators
                WHERE id = $1`,
                [id]
            );

            if (result.rowCount === 0) {
                throw new Error("Content creator not found");
            }
        } catch (error) {
            throw new Error("Error deleting content creator");
        }
    },

    updateContentCreatorUsername: async (id: string, username: string, whoId: number): Promise<void> => {
        try {
            const result = await dataSource.query(
                `UPDATE content_creators
                SET username = $1,
                last_updated_by = $2
                WHERE id = $3`,
                [username, whoId, id]
            );
            if (result.rowCount === 0) {
                throw new Error("Content creator not found");
            }
        } catch (error) {
            throw new Error("Error updating content creator username");
        }
    }
};

export default ContentCreatorsService;