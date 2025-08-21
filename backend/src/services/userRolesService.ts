import { appendUserLog } from "../utils/logger";
import { dataSource } from "../config/db";

const UserRolesService = {
  async setUserRoles(userId: number, roleIds: number[], grantedByUsername: string, grantedById?: number | null) {
    const existingRoles = await this.getUserRoles(userId);
    const rolesToRemove = existingRoles.filter((role: any) => !roleIds.includes(role.id));
    const rolesToAdd = roleIds.filter(roleId => !existingRoles.some((role: any) => role.id === roleId));

    for (const role of rolesToRemove) {
      await UserRolesService.deleteUserRoles(role.id, userId, grantedByUsername);
    }

    for (const roleId of rolesToAdd) {
      await UserRolesService.addRoleToUser(roleId, userId, grantedByUsername, grantedById);
    }
  },

  async getUserRoles(userId: number) {
    const rows = await dataSource.query(
      `SELECT r.id, r.code, r.name, r.description
      FROM roles r
      INNER JOIN user_roles ur ON ur.role_id = r.id
      WHERE ur.user_id = $1`,
      [userId]
    );

    return rows;
  },

  async deleteUserRoles(userRoleId: number, userId: number, grantedByUsername: string) {
    await dataSource.query(
      `DELETE FROM user_roles WHERE role_id = $1 AND user_id = $2`,
      [userRoleId, userId]
    );

    appendUserLog(`${grantedByUsername.toUpperCase()} removed role ${userRoleId} from user ${userId}`);
  },

  async addRoleToUser(userRoleId: number, userId: number, grantedByUsername: string, grantedById?: number | null) {
    await dataSource.query(
      `INSERT INTO user_roles (role_id, user_id, granted_by) VALUES ($1, $2, $3)`,
      [userRoleId, userId, grantedById]
    );

    appendUserLog(`${grantedByUsername.toUpperCase()} added role ${userRoleId} to user ${userId}`);
  },

  async editGrantedBy(userRoleId: number, grantedById: number | null) {
    await dataSource.query(
      `UPDATE user_roles SET granted_by = $1 WHERE id = $2`,
      [grantedById, userRoleId]
    );
  }
};

export default UserRolesService;
