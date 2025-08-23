import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Users } from "../entities/users";
import { appendUserLog } from "../utils/logger";

export class AuthService {
    private static readonly jwtSecret = process.env.JWT_SECRET as string;
    private static readonly jwtExpiresIn = "2h";

    static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    static async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    static generateToken(user: Users) {
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles.map(r => { return { code: r.code, name: r.name } }),
            uuid: user.uuid
        };
        appendUserLog(`SYSTEM: Generated JWT Token for user ${user.username.toUpperCase()}`);
        return jwt.sign(payload, this.jwtSecret, { expiresIn: this.jwtExpiresIn });
    }

    static verifyToken(token: string) {
        return jwt.verify(token, this.jwtSecret);
    }
}
