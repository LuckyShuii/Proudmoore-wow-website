import type { Role } from "./roleType";

export interface User {
    uuid?: string;
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date;
    createdBy?: User;
    lastUpdatedBy?: User;
    userRoles?: UserRole[];
}

export interface UserRole {
    role: Role;
    grantedBy?: User;
    users: User[];
}