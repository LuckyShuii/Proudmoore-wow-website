import {
    BaseEntity,
    Column, Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Length } from "class-validator";
import { Users } from "./users";

@Entity()
export class ContentCreators extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255, {
        message: 'The username cannot be empty and must not exceed 255 characters.'
    })
    username: string;

    @Column({ default: false })
    is_disabled: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => Users, (u) => u.created_users, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'created_by' })
    created_by?: Users;

    @ManyToOne(() => Users, (u) => u.created_users, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'last_updated_by' })
    last_updated_by?: Users;
}