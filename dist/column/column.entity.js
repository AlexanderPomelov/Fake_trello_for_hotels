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
exports.ColumnEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const projects_entity_1 = require("../projects/projects.entity");
const task_entity_1 = require("../task/task.entity");
const typeorm_1 = require("typeorm");
let ColumnEntity = class ColumnEntity {
};
exports.ColumnEntity = ColumnEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Unique identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ColumnEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "To do", description: "Column used" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: true }),
    __metadata("design:type", String)
], ColumnEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Order number" }),
    (0, typeorm_1.Column)({ type: "integer", nullable: true }),
    __metadata("design:type", Number)
], ColumnEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => projects_entity_1.Project, (projects) => projects.columns, { cascade: true }),
    __metadata("design:type", projects_entity_1.Project)
], ColumnEntity.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.column),
    __metadata("design:type", Array)
], ColumnEntity.prototype, "tasks", void 0);
exports.ColumnEntity = ColumnEntity = __decorate([
    (0, typeorm_1.Entity)()
], ColumnEntity);
//# sourceMappingURL=column.entity.js.map