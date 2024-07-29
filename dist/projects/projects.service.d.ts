import { Project } from "./projects.entity";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
export declare class ProjectsService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    getAllProjects(): Promise<Project[]>;
    getOneProject(id: number): Promise<Project[]>;
    createProject(dto: CreateProjectDto): Promise<Project>;
    updateProject(id: number, dto: UpdateProjectDto): Promise<any>;
    deleteProject(id: number): Promise<any>;
}
