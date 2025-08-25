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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const common_1 = require("@nestjs/common");
const school_service_1 = require("./school.service");
const create_school_dto_1 = require("./dto/create-school.dto");
const update_school_dto_1 = require("./dto/update-school.dto");
const person_service_1 = require("../person/person.service");
const core_1 = require("@nestjs/core");
let SchoolController = class SchoolController {
    schoolService;
    moduleRef;
    constructor(schoolService, moduleRef) {
        this.schoolService = schoolService;
        this.moduleRef = moduleRef;
    }
    onApplicationShutdown() {
        const personService = this.moduleRef.get(person_service_1.PersonService);
        console.log('SchoolController onApplicationShutdown', personService.findAll());
    }
    personService;
    create(createSchoolDto) {
        return this.schoolService.create(createSchoolDto);
    }
    getPerson() {
        return this.personService.findOne(1);
    }
    findAll() {
        return this.schoolService.findAll();
    }
    findOne(id) {
        return this.schoolService.findOne(+id);
    }
    update(id, updateSchoolDto) {
        return this.schoolService.update(+id, updateSchoolDto);
    }
    remove(id) {
        return this.schoolService.remove(+id);
    }
};
exports.SchoolController = SchoolController;
__decorate([
    (0, common_1.Inject)(person_service_1.PersonService),
    __metadata("design:type", person_service_1.PersonService)
], SchoolController.prototype, "personService", void 0);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_school_dto_1.CreateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/person'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getPerson", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "remove", null);
exports.SchoolController = SchoolController = __decorate([
    (0, common_1.Controller)('school'),
    __metadata("design:paramtypes", [school_service_1.SchoolService, core_1.ModuleRef])
], SchoolController);
//# sourceMappingURL=school.controller.js.map