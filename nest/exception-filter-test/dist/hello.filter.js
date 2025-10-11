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
exports.HelloFilter = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let HelloFilter = class HelloFilter {
    appService;
    catch(exception, host) {
        const http = host.switchToHttp();
        const response = http.getResponse();
        const res = exception.getResponse();
        const status = exception.getStatus();
        response.status(status).json({
            code: status,
            message: res['message'] ? res['message']?.join(',') : exception.message,
            name: 'yuanwill',
            service: this.appService.getHello(),
        });
    }
};
exports.HelloFilter = HelloFilter;
__decorate([
    (0, common_1.Inject)(app_service_1.AppService),
    __metadata("design:type", app_service_1.AppService)
], HelloFilter.prototype, "appService", void 0);
exports.HelloFilter = HelloFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HelloFilter);
//# sourceMappingURL=hello.filter.js.map