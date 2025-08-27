"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.customDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('customDecorator', data, request.params);
    return 123;
});
//# sourceMappingURL=person-custom-decorator.js.map