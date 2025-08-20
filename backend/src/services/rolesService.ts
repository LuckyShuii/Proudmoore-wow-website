import { In } from "typeorm";
import { Roles } from "../entities/roles";

const RolesService = {
    getAllRoles: async (): Promise<Roles[]> => {
        const result = await Roles.find();
        return result;
    },

    async getRolesByIds(ids: number[]): Promise<Roles[]> {
        if (!ids || ids.length === 0) return [];
        return await Roles.find({
            where: { id: In(ids) }
        });
    }
}

export default RolesService;