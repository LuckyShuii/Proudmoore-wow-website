import APIHandler from '../APIHandler';
const resource = 'users';

export default {
    getUsers() {
        return APIHandler.get(`${resource}/`);
    },

    createUser(data: any) {
        return APIHandler.post(`${resource}/`, data);
    },

    deleteUser(userUuid: string, whoUsername: string) {
        return APIHandler.delete(`${resource}/${userUuid}`, { data: { who: whoUsername } });
    },

    editUser(userUuid: string, data: any) {
        return APIHandler.put(`${resource}/${userUuid}`, data);
    }
}