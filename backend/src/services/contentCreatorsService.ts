import { ContentCreators } from "../entities/contentCreators";

const ContentCreatorsService = {
    getAllContentCreators: async (): Promise<ContentCreators[]> => {
        const result = await ContentCreators.find();
        return result;
    },
}

export default ContentCreatorsService;