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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const projects_entity_1 = require("./projects.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProjectsService = class ProjectsService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async getAllProjects() {
        const projects = await this.projectRepository.find({
            relations: ["columns"],
        });
        return projects;
    }
    async getOneProject(id) {
        const project = await this.projectRepository.findBy({ id });
        return project;
    }
    async createProject(dto) {
        const project = this.projectRepository.create(dto);
        const savedProject = await this.projectRepository.save(project);
        return savedProject;
    }
    async updateProject(id, dto) {
        const projectToUpdate = await this.projectRepository.preload({
            id: id,
            ...dto,
        });
        const updatedProject = await this.projectRepository.save(projectToUpdate);
        return updatedProject;
    }
    async deleteProject(id) {
        const deletedProject = await this.projectRepository.delete(id);
        return deletedProject;
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(projects_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map