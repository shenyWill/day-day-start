import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(registerUserDto: RegisterUserDto): Promise<import("./entities/user.entity").User>;
    login(loginUserDto: LoginUserDto): Promise<import("./entities/user.entity").User>;
}
