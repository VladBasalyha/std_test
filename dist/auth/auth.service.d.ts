import { User } from "./user.model";
export declare class AuthService {
    private readonly users;
    constructor();
    validateUser(email: string, password: string): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
}
