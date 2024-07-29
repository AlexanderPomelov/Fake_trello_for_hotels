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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async getAllUsers() {
        const users = await this.userRepository.find({ relations: ["roles"] });
        return users;
    }
    async addRole(dto) {
        const users = await this.userRepository.findOne({
            where: { id: dto.userId },
            relations: ["roles"],
        });
        const role = await this.roleRepository.getOneRole(dto.value);
        if (role && users) {
            users.roles.push(role);
            await this.userRepository.save(users);
            return users;
        }
        throw new common_1.HttpException("User or role is not found", common_1.HttpStatus.NOT_FOUND);
    }
    async getOneUser(id) {
        const user = await this.userRepository.find({
            where: { id: id },
            relations: ["roles"],
        });
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            relations: ["roles"],
        });
        return user;
    }
    async createUser(dto) {
        const user = this.userRepository.create(dto);
        const savedUser = await this.userRepository.save(user);
        const role = await this.roleRepository.getOneRole("user");
        savedUser.roles = [role];
        return this.userRepository.save(savedUser);
    }
    async updateUser(id, dto) {
        const userToUpdate = await this.userRepository.preload({
            id: id,
            ...dto,
        });
        const updatedUser = await this.userRepository.save(userToUpdate);
        return updatedUser;
    }
    async deleteUser(id) {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map