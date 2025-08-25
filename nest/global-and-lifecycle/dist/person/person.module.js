"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModule = void 0;
const common_1 = require("@nestjs/common");
const person_service_1 = require("./person.service");
const person_controller_1 = require("./person.controller");
let PersonModule = class PersonModule {
    onModuleInit() {
        console.log('PersonModule onModuleInit');
    }
    onApplicationBootstrap() {
        console.log('PersonModule onApplicationBootstrap');
    }
    onModuleDestroy() {
        console.log('PersonModule onModuleDestroy');
    }
    beforeApplicationShutdown() {
        console.log('PersonModule beforeApplicationShutdown');
    }
    onApplicationShutdown() {
        console.log('PersonModule onApplicationShutdown');
    }
};
exports.PersonModule = PersonModule;
exports.PersonModule = PersonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [person_controller_1.PersonController],
        providers: [person_service_1.PersonService],
        exports: [person_service_1.PersonService],
    })
], PersonModule);
//# sourceMappingURL=person.module.js.map