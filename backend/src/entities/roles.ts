import {
    BaseEntity,
    Column, Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Length } from "class-validator";
import { UserRole } from "./userRole";

@Entity()
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10, unique: true, nullable: true })
    code: string;

    @Column({ length: 255, unique: true })
    @Length(1, 255, {
        message: 'The name cannot be empty and must not exceed 255 characters.'
    })
    name: string;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'The description cannot be empty and must not exceed 255 characters.'
    })
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(() => UserRole, (ur) => ur.role, { cascade: false })
    user_roles!: UserRole[];
}