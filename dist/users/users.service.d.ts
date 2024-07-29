import { Users } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
export declare class UsersService {
    private userRepository;
    private roleRepository;
    constructor(userRepository: Repository<Users>, roleRepository: RolesService);
    getAllUsers(): Promise<Users[]>;
    addRole(dto: AddRoleDto): Promise<Users>;
    getOneUser(id: number): Promise<Users[]>;
    getUserByEmail(email: string): Promise<Users>;
    createUser(dto: CreateUserDto): Promise<Users>;
    updateUser(id: number, dto: UpdateUserDto): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
