"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.headerDecorator = (0, common_1.createParamDecorator)((key, ctx) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    return key ? headers[key] : headers;
});
//# sourceMappingURL=header-custom-decorator.js.map