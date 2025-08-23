import APIHandler from '../APIHandler';
const resource = 'content-creators';

export default {
    getContentCreatorsHome() {
        return APIHandler.get(`${resource}/home`);
    },

    createContentCreator(data: { username: string; isDisabled: boolean }) {
        return APIHandler.post(`${resource}`, data);
    },

    checkCreatorExists(username: string) {
        return APIHandler.get(`${resource}/exists/${username}`);
    }
}