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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const swagger_1 = require("@nestjs/swagger");
const task_entity_1 = require("./task.entity");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const validation_pipe_1 = require("../pipes/validation.pipe");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    createTask(createTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }
    getTask(id) {
        return this.taskService.getTask(id);
    }
    getAll() {
        return this.taskService.getAllTask();
    }
    updateTask(id, updateTaskDto) {
        return this.taskService.updateTask(id, updateTaskDto);
    }
    deleteTask(taskId) {
        return this.taskService.deleteTask(taskId);
    }
    moveTask(id, newPosition) {
        return this.taskService.moveTask(id, newPosition);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create task" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: task_entity_1.Task }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get one task" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [task_entity_1.Task] }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all task" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [task_entity_1.Task] }),
    (0, roles_auth_decorator_1.Roles)("user"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update task" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [task_entity_1.Task] }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete task" }),
    (0, swagger_1.ApiResponse)({ status: 204, type: [task_entity_1.Task] }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Move task" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [task_entity_1.Task] }),
    (0, common_1.Put)(":id/move"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("newPosition", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "moveTask", null);
exports.TaskController = TaskController = __decorate([
    (0, swagger_1.ApiTags)("Task"),
    (0, common_1.Controller)("task"),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map