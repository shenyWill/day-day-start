"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnloginFilter = exports.UnLoginExcepytion = void 0;
const common_1 = require("@nestjs/common");
class UnLoginExcepytion {
    message;
    constructor(message) {
        this.message = message;
    }
}
exports.UnLoginExcepytion = UnLoginExcepytion;
let UnloginFilter = class UnloginFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        response.status(401).json({
            code: 401,
            message: exception.message,
            data: '用户未登录'
        });
    }
};
exports.UnloginFilter = UnloginFilter;
exports.UnloginFilter = UnloginFilter = __decorate([
    (0, common_1.Catch)(UnLoginExcepytion)
], UnloginFilter);
//# sourceMappingURL=unlogin.filter.js.map