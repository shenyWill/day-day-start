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
exports.PersonV2Controller = void 0;
const common_1 = require("@nestjs/common");
const person_service_1 = require("./person.service");
let PersonV2Controller = class PersonV2Controller {
    personService;
    constructor(personService) {
        this.personService = personService;
    }
    findAllV2() {
        return this.personService.findAll() + ' => v2';
    }
};
exports.PersonV2Controller = PersonV2Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonV2Controller.prototype, "findAllV2", null);
exports.PersonV2Controller = PersonV2Controller = __decorate([
    (0, common_1.Controller)({
        path: 'person',
        version: '2',
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonV2Controller);
//# sourceMappingURL=person-v2.controller.js.map