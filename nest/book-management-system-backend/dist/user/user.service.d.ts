import { DbService } from 'src/db/db.service';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserService {
    private readonly dbService;
    constructor(dbService: DbService);
    register(createUserDto: RegisterUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<User>;
}
