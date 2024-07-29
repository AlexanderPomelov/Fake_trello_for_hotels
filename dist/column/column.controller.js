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
exports.ColumnController = void 0;
const common_1 = require("@nestjs/common");
const column_service_1 = require("./column.service");
const create_column_dto_1 = require("./dto/create-column.dto");
const update_colum_dto_1 = require("./dto/update-colum.dto");
const swagger_1 = require("@nestjs/swagger");
const column_entity_1 = require("./column.entity");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let ColumnController = class ColumnController {
    constructor(columnService) {
        this.columnService = columnService;
    }
    create(createColumnDto) {
        return this.columnService.createColumn(createColumnDto);
    }
    findAll() {
        return this.columnService.findAllColumn();
    }
    getTask(id) {
        return this.columnService.getColumn(id);
    }
    moveColumn(id, newPosition) {
        console.log(newPosition);
        return this.columnService.moveColumn(id, newPosition);
    }
    updateTask(id, updateColumnDto) {
        return this.columnService.updateColumn(id, updateColumnDto);
    }
    delete(id) {
        return this.columnService.deleteColumn(id);
    }
};
exports.ColumnController = ColumnController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a column" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: column_entity_1.ColumnEntity }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_column_dto_1.CreateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all columns" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: column_entity_1.ColumnEntity }),
    (0, roles_auth_decorator_1.Roles)("user"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get one column" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [column_entity_1.ColumnEntity] }),
    (0, roles_auth_decorator_1.Roles)("user"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "getTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update a column" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [column_entity_1.ColumnEntity] }),
    (0, roles_auth_decorator_1.Roles)("user"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)(":id/move"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("newPosition", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "moveColumn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update column" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [column_entity_1.ColumnEntity] }),
    (0, roles_auth_decorator_1.Roles)("user"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_colum_dto_1.UpdateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "updateTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete column" }),
    (0, swagger_1.ApiResponse)({ status: 204, type: [column_entity_1.ColumnEntity] }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "delete", null);
exports.ColumnController = ColumnController = __decorate([
    (0, swagger_1.ApiTags)("Column"),
    (0, common_1.Controller)("column"),
    __metadata("design:paramtypes", [column_service_1.ColumnService])
], ColumnController);
//# sourceMappingURL=column.controller.js.map