import { UpdateUserDto } from "./update-user.dto";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
export declare class ProfileController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfile(req: any): User;
    updateProfile(req: any, updateUserDto: UpdateUserDto): Promise<User>;
    updateAvatar(req: any, file: any): Promise<User>;
}
