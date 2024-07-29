import { Project } from "src/projects/projects.entity";
import { Task } from "src/task/task.entity";
export declare class ColumnEntity {
    id: number;
    name: string;
    order: number;
    projects: Project;
    tasks: Task[];
}
