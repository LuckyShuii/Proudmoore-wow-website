import { dataSource } from "../config/db";

const UserRolesService = {
  async setUserRoles(userId: number, roleIds: number[], grantedById?: number | null) {
    // delete all existing roles
    await dataSource.query(
      `DELETE FROM user_roles WHERE user_id = $1`,
      [userId]
    );

    for (const roleId of roleIds) {
      await dataSource.query(
        `INSERT INTO user_roles (user_id, role_id, granted_by)
         VALUES ($1, $2, $3)`,
        [userId, roleId, grantedById ?? null]
      );
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
  }
};

export default UserRolesService;
