"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFilter = void 0;
const common_1 = require("@nestjs/common");
const person_exception_1 = require("./person.exception");
let TestFilter = class TestFilter {
    catch(exception, host) {
        console.log('exception', exception.name, exception.age);
        console.log(host);
        const type = host.getType();
        if (type === 'http') {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            response.status(400).json({
                message: '这是一个自定义异常',
                name: exception.name,
                age: exception.age,
            });
        }
    }
};
exports.TestFilter = TestFilter;
exports.TestFilter = TestFilter = __decorate([
    (0, common_1.Catch)(person_exception_1.PersonException)
], TestFilter);
//# sourceMappingURL=test.filter.js.map