import { Project } from "src/projects/projects.entity";
import { Role } from "src/roles/roles.entity";
export declare class Users {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    roles: Role[];
    project: Project[];
}
