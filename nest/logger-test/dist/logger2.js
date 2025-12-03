"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger2 = void 0;
const common_1 = require("@nestjs/common");
class MyLogger2 extends common_1.ConsoleLogger {
    log(message, context) {
        console.log(`[${context}]`, message);
    }
}
exports.MyLogger2 = MyLogger2;
//# sourceMappingURL=logger2.js.map