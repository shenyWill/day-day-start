"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: 'app-service',
                useClass: app_service_1.AppService,
            },
            {
                provide: 'person-service',
                useValue: {
                    name: '张三',
                    age: 18,
                },
            },
            {
                provide: 'school-service',
                useFactory: () => {
                    return {
                        name: '清华大学',
                    };
                }
            },
            {
                provide: 'info-service',
                useFactory: (personService, schoolService) => {
                    return {
                        name: personService.name,
                        age: personService.age,
                        school: schoolService.name,
                    };
                },
                inject: ['person-service', 'school-service'],
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map