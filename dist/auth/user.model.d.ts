export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    avatar: string;
    isEmailVerified: boolean;
    constructor(id: number, email: string, password: string, name: string, avatar: string, isEmailVerified: boolean);
    validatePassword(password: string): Promise<boolean>;
}
