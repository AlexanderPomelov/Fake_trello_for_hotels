import { CreateProjectDto } from "./dto/create-project.dto";
import { ProjectsService } from "./projects.service";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Project } from "./projects.entity";
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    create(projectDto: CreateProjectDto): Promise<Project>;
    getAll(): Promise<Project[]>;
    getOne(id: number): Promise<Project[]>;
    update(id: number, projectDto: UpdateProjectDto): Promise<any>;
    delete(id: number): Promise<any>;
}
