import type { User } from "./userType";

export interface ContentCreator {
    id: string;
    username: string;
    isDisabled: boolean;
    createdAt: string;
    updatedAt: string;
    createdBy: User;
    lastUpdatedBy: User;
    uuid?: string;
}