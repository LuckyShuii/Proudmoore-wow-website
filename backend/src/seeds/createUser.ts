import { Users } from "../entities/users";
import { Roles } from "../entities/roles";
import { UserRole } from "../entities/userRole";
import { AuthService } from "../services/authService";
import { v4 as uuidv4 } from "uuid";
import { appendUserLog } from "../utils/logger";

export async function createDefaultUser() {
    try {
        let user = await Users.findOne({ where: { username: "root" } });
        if (user) {
            appendUserLog(`✅ User already exists: ${user.username}`);
            return;
        }

        const hashedPassword = await AuthService.hashPassword(process.env.PROUDMOORE_ADMIN_PASSWORD as string);

        user = Users.create({
            username: "root",
            email: "root@recovery.com",
            password: hashedPassword,
            uuid: uuidv4()
        });
        await user.save();

        appendUserLog(`👤 User created: ${user.username}`);

        const adminRole = await Roles.findOne({ where: { code: "ADMIN" } });
        const devRole = await Roles.findOne({ where: { code: "DEV" } });

        if (!adminRole || !devRole) {
            throw new Error("❌ Roles ADMIN or DEV not found in database");
        }

        const ur1 = UserRole.create({
            user_id: user.id,
            role_id: adminRole.id,
        });

        await UserRole.save([ur1]);

        appendUserLog(`✅ Roles ADMIN & DEV assigned to user: ${user.username}`);
    } catch (err) {
        appendUserLog(`❌ Error creating default user: ${err}`);
    }
}
