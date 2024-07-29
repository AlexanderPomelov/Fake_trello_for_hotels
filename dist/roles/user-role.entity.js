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
exports.UserRoles = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let UserRoles = class UserRoles {
};
exports.UserRoles = UserRoles;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Unique identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserRoles.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "13", description: "Role identifier" }),
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], UserRoles.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "22", description: "User identifier" }),
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], UserRoles.prototype, "userId", void 0);
exports.UserRoles = UserRoles = __decorate([
    (0, typeorm_1.Entity)("user_roles")
], UserRoles);
//# sourceMappingURL=user-role.entity.js.map