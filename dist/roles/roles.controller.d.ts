import { RolesService } from "./roles.service";
import { Role } from "./roles.entity";
import { CreateRoleDto } from "./dto/create-role.dto";
export declare class RolesController {
    private RoleService;
    constructor(RoleService: RolesService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getOne(value: string): Promise<Role>;
    getAll(): Promise<Role[]>;
}
