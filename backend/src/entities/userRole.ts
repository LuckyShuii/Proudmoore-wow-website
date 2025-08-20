// src/entities/userRole.ts
import {
  Entity, ManyToOne, JoinColumn,
  PrimaryColumn, CreateDateColumn, UpdateDateColumn,
  BaseEntity
} from "typeorm";
import { Users } from "./users";
import { Roles } from "./roles";

@Entity({ name: "user_roles" })
export class UserRole extends BaseEntity {
  @PrimaryColumn({ name: "user_id", type: "int" })
  user_id!: number;

  @PrimaryColumn({ name: "role_id", type: "int" })
  role_id!: number;

  @ManyToOne(() => Users, (u) => u.user_roles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: Users;

  @ManyToOne(() => Roles, (r) => r.user_roles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "role_id" })
  role!: Roles;

  @CreateDateColumn({ name: "created_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;

  @ManyToOne(() => Users, { nullable: true, onDelete: "SET NULL" })
  @JoinColumn({ name: "granted_by" })
  granted_by?: Users;
}
