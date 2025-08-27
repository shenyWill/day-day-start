"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllDecorator = AllDecorator;
const common_1 = require("@nestjs/common");
const login_guard_1 = require("./login.guard");
const login_decorator_1 = require("./login.decorator");
function AllDecorator(name, age) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', name), (0, common_1.UseGuards)(login_guard_1.LoginGuard), (0, login_decorator_1.Login)(age));
}
//# sourceMappingURL=allDecorator.js.map