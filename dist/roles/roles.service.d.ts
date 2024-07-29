import { Role } from "./roles.entity";
import { Repository } from "typeorm";
import { CreateRoleDto } from "./dto/create-role.dto";
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    getOneRole(value: string): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    createRole(dto: CreateRoleDto): Promise<Role>;
}
