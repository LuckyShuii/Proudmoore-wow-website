import { Users } from "../entities/users";

const UsersService = {
    getAllUsers: async (): Promise<Users[]> => {
        const result = await Users.find({relations: ["user_roles", "user_roles.role", "created_by"]});
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
    },

    updateLastLogin: async (userId: number): Promise<void> => {
        await Users.update(userId, { last_login: new Date() });
    }
}

export default UsersService;