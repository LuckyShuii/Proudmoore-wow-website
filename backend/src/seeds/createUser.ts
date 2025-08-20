import { Users } from "../entities/users";
import { Roles } from "../entities/roles";
import { UserRole } from "../entities/userRole";
import { AuthService } from "../services/authService"; // pour hasher le mdp

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
            created_by_system: 'System',
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
            granted_by: 'System'
        });

        const ur2 = UserRole.create({
            user_id: user.id,
            role_id: devRole.id,
            granted_by: 'System'
        });

        await UserRole.save([ur1, ur2]);

        console.log("✅ Roles ADMIN & DEV assigned to user:", user.username);
    } catch (err) {
        console.error("❌ Error creating default user:", err);
    }
}
