import { Users } from "../entities/users";
import { Roles } from "../entities/roles";
import { UserRole } from "../entities/userRole";
import { AuthService } from "../services/authService";
import { v4 as uuidv4 } from "uuid";

export async function createDefaultUser() {
    try {
        let user = await Users.findOne({ where: { username: "proudmoore_admin" } });
        if (user) {
            console.log("✅ User already exists:", user.username);
            return;
        }

        const hashedPassword = await AuthService.hashPassword(process.env.PROUDMOORE_ADMIN_PASSWORD as string);

        user = Users.create({
            username: "proudmoore_admin",
            email: "proudmoore_admin@example.com",
            password: hashedPassword,
            uuid: uuidv4()
        });
        await user.save();

        console.log("👤 User created:", user.username);

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

        console.log("✅ Roles ADMIN & DEV assigned to user:", user.username);
    } catch (err) {
        console.error("❌ Error creating default user:", err);
    }
}
