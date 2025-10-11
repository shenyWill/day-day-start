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
exports.Man = void 0;
const class_validator_1 = require("class-validator");
class Man {
    name;
    age;
}
exports.Man = Man;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name 不能为空' }),
    (0, class_validator_1.IsString)({ message: 'name 必须是字符串' }),
    __metadata("design:type", String)
], Man.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'age 必须是数字' }),
    __metadata("design:type", Number)
], Man.prototype, "age", void 0);
//# sourceMappingURL=man.dto.js.map