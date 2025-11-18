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
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
let DbService = class DbService {
    options;
    async read() {
        const filePath = this.options.path;
        try {
            await (0, promises_1.access)(filePath);
        }
        catch (error) {
            return [];
        }
        const str = await (0, promises_1.readFile)(filePath, {
            encoding: 'utf-8',
        });
        if (!str) {
            return [];
        }
        return JSON.parse(str);
    }
    async write(data) {
        const filePath = this.options.path;
        await (0, promises_1.writeFile)(filePath, JSON.stringify(data), {
            encoding: 'utf-8',
        });
    }
};
exports.DbService = DbService;
__decorate([
    (0, common_1.Inject)('OPTIONS'),
    __metadata("design:type", Object)
], DbService.prototype, "options", void 0);
exports.DbService = DbService = __decorate([
    (0, common_1.Injectable)()
], DbService);
//# sourceMappingURL=db.service.js.map