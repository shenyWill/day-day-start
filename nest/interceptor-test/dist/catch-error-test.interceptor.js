"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CatchErrorTestInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchErrorTestInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let CatchErrorTestInterceptor = CatchErrorTestInterceptor_1 = class CatchErrorTestInterceptor {
    logger = new common_1.Logger(CatchErrorTestInterceptor_1.name);
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.catchError)(err => {
            this.logger.error(err);
            return (0, rxjs_1.throwError)(() => err);
        }));
    }
};
exports.CatchErrorTestInterceptor = CatchErrorTestInterceptor;
exports.CatchErrorTestInterceptor = CatchErrorTestInterceptor = CatchErrorTestInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], CatchErrorTestInterceptor);
//# sourceMappingURL=catch-error-test.interceptor.js.map