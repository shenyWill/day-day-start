"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    dbService;
    constructor(dbService) {
        this.dbService = dbService;
    }
    async register(createUserDto) {
        const users = await this.dbService.read();
        const foundUser = users.find((user) => user.username === createUserDto.username);
        if (foundUser) {
            throw new common_1.BadRequestException('用户名已存在');
        }
        const user = new user_entity_1.User();
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        users.push(user);
        await this.dbService.write(users);
        return user;
    }
    async login(loginUserDto) {
        const users = await this.dbService.read();
        const foundUser = users.find((user) => user.username === loginUserDto.username);
        if (!foundUser) {
            throw new common_1.BadRequestException('用户名不存在');
        }
        if (foundUser.password !== loginUserDto.password) {
            throw new common_1.BadRequestException('密码错误');
        }
        return foundUser;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UserService);
//# sourceMappingURL=user.service.js.map