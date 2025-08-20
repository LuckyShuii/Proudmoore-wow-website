import APIHandler from '../APIHandler';
const resource = 'users';

export default {
    getUsers() {
        return APIHandler.get(`${resource}/`);
    },

    createUser(data: any) {
        return APIHandler.post(`${resource}/`, data);
    }
}