import APIHandler from '../APIHandler';
const resource = 'content-creators';

export default {
    getAllContentCreators() {
        return APIHandler.get(`${resource}`);
    },

    getContentCreatorsHome() {
        return APIHandler.get(`${resource}/home`);
    },

    createContentCreator(data: { username: string; isDisabled: boolean }) {
        return APIHandler.post(`${resource}`, data);
    },

    checkCreatorExists(username: string) {
        return APIHandler.get(`${resource}/exists/${username}`);
    },

    updateContentCreatorStatus(id: string, data: { isDisabled: boolean }) {
        return APIHandler.put(`${resource}/${id}/status`, data);
    },
}