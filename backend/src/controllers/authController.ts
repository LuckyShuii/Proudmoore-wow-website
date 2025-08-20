import { Request, Response } from "express";
import { Users } from "../entities/users";
import { AuthService } from "../services/authService";
import { appendUserLog } from "../utils/logger";
import UsersService from "../services/usersService";
import { v4 as uuidv4 } from "uuid";

export default class AuthController {
    static async register(req: Request, res: Response) {
        const { username, email, password } = req.body;

        try {
            const existing = await Users.findOne({ where: { username } });
            if (existing) {
                return res.status(400).json({ message: "Username already in use" });
            }

            const hashedPassword = await AuthService.hashPassword(password);

            const user = Users.create({
                username,
                email,
                password: hashedPassword,
                uuid: uuidv4()
            });

            await user.save();

            appendUserLog(`New user created: ${JSON.stringify(user)}`);
            return res.status(201).json({ message: "User registered successfully" });
        } catch (err) {
            return res.status(500).json({ message: "Error registering user", error: err });
        }
    }

    static async login(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user = await Users.findOne({
                where: { username },
                relations: ["user_roles", "user_roles.role"]
            });

            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const validPassword = await AuthService.comparePassword(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = AuthService.generateToken(user);

            await UsersService.updateLastLogin(user.id);

            appendUserLog(`${username} logged in successfully`);
            return res.json({ token });
        } catch (err) {
            appendUserLog(`${username} failed to log in: ${err.message}`);
            return res.status(500).json({ message: "Error logging in", error: err });
        }
    }
}
