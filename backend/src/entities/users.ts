import {
    BaseEntity,
    Column, Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Length } from "class-validator";
import { UserRole } from "./userRole";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'The username cannot be empty and must not exceed 255 characters.'
    })
    username: string;

    @Column({ length: 255 })
    @Length(5, 255, {
        message: 'The email must be between 5 and 255 characters long.'
    })
    email: string;

    @Column({ length: 255 })
    @Length(8, 255, {
        message: 'The password must be between 8 and 255 characters long.'
    })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    last_login: Date;

    @ManyToOne(() => Users, (u) => u.created_users, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'created_by' })
    created_by?: Users | null;

    @ManyToOne(() => Users, (u) => u.created_users, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'last_updated_by' })
    last_updated_by?: Users | null;

    @OneToMany(() => Users, (u) => u.created_by)
    created_users?: Users[];

    @OneToMany(() => UserRole, (ur) => ur.user, { cascade: false })
    user_roles!: UserRole[];

    get roles() {
        return this.user_roles?.map((ur) => ur.role) ?? [];
    }
}