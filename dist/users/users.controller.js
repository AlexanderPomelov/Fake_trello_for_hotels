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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const users_entity_1 = require("./users.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    create(userDto) {
        const user = this.userService.createUser(userDto);
        return user;
    }
    addRole(dto) {
        return this.userService.addRole(dto);
    }
    getAll() {
        return this.userService.getAllUsers();
    }
    getOne(id) {
        return this.userService.getOneUser(id);
    }
    update(id, userDto) {
        return this.userService.updateUser(id, userDto);
    }
    delete(id) {
        return this.userService.deleteUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a user" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: users_entity_1.Users }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Role assignment" }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)("admin"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)("/role"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all users" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.Users] }),
    (0, roles_auth_decorator_1.Roles)("admin"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get one user" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_entity_1.Users] }),
    (0, roles_auth_decorator_1.Roles)("admin"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update user" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [users_entity_1.Users] }),
    (0, roles_auth_decorator_1.Roles)("admin"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete user" }),
    (0, swagger_1.ApiResponse)({ status: 204, type: [users_entity_1.Users] }),
    (0, roles_auth_decorator_1.Roles)("admin"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)("Users"),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map