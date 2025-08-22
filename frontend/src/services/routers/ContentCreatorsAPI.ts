import APIHandler from '../APIHandler';
const resource = 'content-creators';

export default {
    getContentCreatorsHome() {
        return APIHandler.get(`${resource}/home`);
    }
}