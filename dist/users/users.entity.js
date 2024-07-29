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
exports.Users = void 0;
const swagger_1 = require("@nestjs/swagger");
const projects_entity_1 = require("../projects/projects.entity");
const roles_entity_1 = require("../roles/roles.entity");
const typeorm_1 = require("typeorm");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Unique identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "John", description: "Username" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "john@gmail.com", description: "Email" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123456", description: "Password" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2020-01-01 23:59:01",
        description: "Task creation time",
    }),
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(3)",
    }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => roles_entity_1.Role, (role) => role.users),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Users.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => projects_entity_1.Project, (project) => project.users, { cascade: true }),
    __metadata("design:type", Array)
], Users.prototype, "project", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)("users")
], Users);
//# sourceMappingURL=users.entity.js.map