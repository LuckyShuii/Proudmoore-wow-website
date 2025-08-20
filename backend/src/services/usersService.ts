import { DeepPartial } from "typeorm";
import { Users } from "../entities/users";

const UsersService = {
    getAllUsers: async (): Promise<Users[]> => {
        const result = await Users.find({relations: ["user_roles", "user_roles.role", "created_by", "user_roles.granted_by"]});
        return result;
    },

    getUserById: async (id: string, relations?: string[]): Promise<Users | null> => {
        const user = await Users.findOne({ where: { id: Number(id) }, relations: relations });
        return user;
    },

    getUserBy: async (searchType: string, searchValue: string): Promise<Users | null> => {
        const user = await Users.findOne({ where: { [searchType]: searchValue }, relations: ["user_roles", "user_roles.role", "created_by"] });
        return user;
    },

    async createUser(user: DeepPartial<Users>): Promise<Users> {
        const newUser = Users.create(user);
        await newUser.save();
        return newUser;
    },

    updateLastLogin: async (userId: number): Promise<void> => {
        await Users.update(userId, { last_login: new Date() });
    }
}

export default UsersService;