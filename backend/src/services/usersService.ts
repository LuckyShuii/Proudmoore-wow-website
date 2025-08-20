import { Users } from "../entities/users";

const UsersService = {
    getAllUsers: async (): Promise<Users[]> => {
        const result = await Users.find();
        return result;
    },

    getUserById: async (id: string, relations?: string[]): Promise<Users | null> => {
        const user = await Users.findOne({ where: { id: Number(id) }, relations: relations });
        return user;
    },

    createUser: async (userData: Users): Promise<Users> => {
        const user = Users.create(userData);
        await user.save();
        return user;
    }
}

export default UsersService;