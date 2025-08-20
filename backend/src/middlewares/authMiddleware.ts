import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
    user?: any;
}

/**
 * Middleware to authenticate JWT tokens
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next middleware function
 * @returns 
 */
export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Missing token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // inject the user info into the request object
        return next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

/**
 * Middleware to authorize user roles
 * @param roles - Array of roles to authorize
 * @returns Express middleware function
 */
export const authorizeRoles = (...roles: string[]) => {
    /**
     * @param req - Express request object
     * @param res - Express response object
     * @param next - Express next middleware function
     * @returns
     */
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const userRoles: string[] = req.user.roles;
        const hasRole = roles.some(r => userRoles.includes(r));

        if (!hasRole) {
            return res.status(403).json({ message: "Forbidden: insufficient role" });
        }

        return next();
    };
};
