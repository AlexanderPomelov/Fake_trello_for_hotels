import { UsersService } from "./users.service";
import { Users } from "./users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddRoleDto } from "./dto/add-role.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userDto: CreateUserDto): Promise<Users>;
    addRole(dto: AddRoleDto): Promise<Users>;
    getAll(): Promise<Users[]>;
    getOne(id: number): Promise<Users[]>;
    update(id: number, userDto: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<any>;
}
