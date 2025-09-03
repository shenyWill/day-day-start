"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PersonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModule = void 0;
const common_1 = require("@nestjs/common");
const person_service_1 = require("./person.service");
const person_controller_1 = require("./person.controller");
let PersonModule = PersonModule_1 = class PersonModule {
    static register(options) {
        return {
            module: PersonModule_1,
            controllers: [person_controller_1.PersonController],
            providers: [
                person_service_1.PersonService,
                {
                    provide: 'PERSON_OPTIONS',
                    useValue: options,
                }
            ],
        };
    }
};
exports.PersonModule = PersonModule;
exports.PersonModule = PersonModule = PersonModule_1 = __decorate([
    (0, common_1.Module)({})
], PersonModule);
//# sourceMappingURL=person.module.js.map