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
exports.Task = void 0;
const swagger_1 = require("@nestjs/swagger");
const column_entity_1 = require("../column/column.entity");
const typeorm_1 = require("typeorm");
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Unique identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Home", description: "Title task" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Cleaning home", description: "Task description" }),
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(3)",
    }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => column_entity_1.ColumnEntity, (column) => column.tasks, { cascade: true }),
    __metadata("design:type", column_entity_1.ColumnEntity)
], Task.prototype, "column", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", nullable: true }),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map