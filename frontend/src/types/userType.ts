import type { Role } from "./roleType";

export interface User {
    id: number;
    username: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    last_login: Date;
    created_by?: User;
    last_updated_by?: User;
    roles: UserRole[];
}

export interface UserRole {
    role: Role;
    users: User[];
}