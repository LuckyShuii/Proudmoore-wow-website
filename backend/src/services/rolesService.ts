import { Roles } from "../entities/roles";

const RolesService = {
    getAllRoles: async (): Promise<Roles[]> => {
        const result = await Roles.find();
        return result;
    },
}

export default RolesService;