import UsersAPI from "@/services/routers/UsersAPI";
import RolesAPI from "@/services/routers/RolesAPI";
import ContentCreatorsAPI from "./routers/ContentCreatorsAPI";

export default {
    users: UsersAPI,
    roles: RolesAPI,
    contentCreators: ContentCreatorsAPI
}