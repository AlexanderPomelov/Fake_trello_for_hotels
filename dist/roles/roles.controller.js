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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_service_1 = require("./roles.service");
const roles_entity_1 = require("./roles.entity");
const create_role_dto_1 = require("./dto/create-role.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
let RolesController = class RolesController {
    constructor(RoleService) {
        this.RoleService = RoleService;
    }
    create(roleDto) {
        return this.RoleService.createRole(roleDto);
    }
    getOne(value) {
        return this.RoleService.getOneRole(value);
    }
    getAll() {
        return this.RoleService.getAllRoles();
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a role" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: roles_entity_1.Role }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get one role" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [roles_entity_1.Role] }),
    (0, common_1.Get)("/:value"),
    __param(0, (0, common_1.Param)("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all roles" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: roles_entity_1.Role }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getAll", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)("Roles"),
    (0, common_1.Controller)("roles"),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map