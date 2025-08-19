import APIHandler from '../APIHandler';
const resource = 'roles';

export default {
    getRoles() {
        return APIHandler.get(`${resource}/`);
    }
}