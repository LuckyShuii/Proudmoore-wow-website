// src/entities/userRole.ts
import {
  Entity, Column, ManyToOne, JoinColumn,
  PrimaryColumn, CreateDateColumn, UpdateDateColumn
} from "typeorm";
import { Users } from "./users";
import { Roles } from "./roles";

@Entity({ name: "user_roles" })
export class UserRole {
  @PrimaryColumn({ name: "user_id", type: "int" })
  userId!: number;

  @PrimaryColumn({ name: "role_id", type: "int" })
  roleId!: number;

  @ManyToOne(() => Users, (u) => u.userRoles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: Users;

  @ManyToOne(() => Roles, (r) => r.userRoles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "role_id" })
  role!: Roles;

  @CreateDateColumn({ name: "created_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt!: Date;

  @Column({ name: "granted_by", type: "varchar", length: 255, nullable: true })
  grantedBy?: Users
}
