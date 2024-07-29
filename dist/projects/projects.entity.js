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
exports.Project = void 0;
const swagger_1 = require("@nestjs/swagger");
const column_entity_1 = require("../column/column.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
let Project = class Project {
};
exports.Project = Project;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Unique identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Home", description: "Title for task" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Cleaning home",
        description: "What needs to be done",
    }),
    (0, typeorm_1.Column)({ type: "varchar", length: 500 }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
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
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => column_entity_1.ColumnEntity, (column) => column.projects),
    __metadata("design:type", Array)
], Project.prototype, "columns", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.project),
    __metadata("design:type", Array)
], Project.prototype, "users", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)("projects")
], Project);
//# sourceMappingURL=projects.entity.js.map