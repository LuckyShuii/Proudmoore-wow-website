import { Users } from "../entities/users";

const UsersService = {
    getAllUsers: async (): Promise<Users[]> => {
        const result = await Users.find();
        return result;
    },

    createUser: async (userData: Users): Promise<Users> => {
        const user = Users.create(userData);
        await user.save();
        return user;
    }
}

export default UsersService;