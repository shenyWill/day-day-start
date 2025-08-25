"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_person_dto_1 = require("./create-person.dto");
class UpdatePersonDto extends (0, mapped_types_1.PartialType)(create_person_dto_1.CreatePersonDto) {
}
exports.UpdatePersonDto = UpdatePersonDto;
//# sourceMappingURL=update-person.dto.js.map