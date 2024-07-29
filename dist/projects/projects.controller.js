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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const create_project_dto_1 = require("./dto/create-project.dto");
const projects_service_1 = require("./projects.service");
const update_project_dto_1 = require("./dto/update-project.dto");
const swagger_1 = require("@nestjs/swagger");
const projects_entity_1 = require("./projects.entity");
const validation_pipe_1 = require("../pipes/validation.pipe");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    create(projectDto) {
        const project = this.projectsService.createProject(projectDto);
        return project;
    }
    getAll() {
        return this.projectsService.getAllProjects();
    }
    getOne(id) {
        return this.projectsService.getOneProject(id);
    }
    update(id, projectDto) {
        return this.projectsService.updateProject(id, projectDto);
    }
    delete(id) {
        return this.projectsService.deleteProject(id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a project" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: projects_entity_1.Project }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all projects" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [projects_entity_1.Project] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get one project" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [projects_entity_1.Project] }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update project" }),
    (0, swagger_1.ApiResponse)({ status: 202, type: [projects_entity_1.Project] }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete project" }),
    (0, swagger_1.ApiResponse)({ status: 204, type: [projects_entity_1.Project] }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "delete", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)("Projects"),
    (0, common_1.Controller)("api/projects"),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map