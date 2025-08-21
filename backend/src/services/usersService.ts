import { DeepPartial } from "typeorm";
import { Users } from "../entities/users";

const UsersService = {
    getAllUsers: async (): Promise<Users[]> => {
        const result = await Users.find({relations: ["user_roles", "user_roles.role", "created_by", "user_roles.granted_by"], order: { id: "ASC" }});
        return result;
    },

    getUserById: async (id: string, relations?: string[]): Promise<Users | null> => {
        const user = await Users.findOne({ where: { id: Number(id) }, relations: relations });
        return user;
    },

    getUserByUuid: async (uuid: string): Promise<Users | null> => {
        const user = await Users.findOne({ where: { uuid }, relations: ["user_roles", "user_roles.role", "created_by"] });
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
    },

    deleteUser: async (userUuid: string): Promise<void> => {
        await Users.delete({ uuid: userUuid });
    },

    updateUser: async (userUuid: string, userData: DeepPartial<Users>): Promise<Users> => {
        await Users.update({ uuid: userUuid }, userData);
        const updatedUser = await UsersService.getUserByUuid(userUuid);
        if (!updatedUser) {
            throw new Error(`User with UUID ${userUuid} not found after update.`);
        }
        return updatedUser;
    }
}

export default UsersService;