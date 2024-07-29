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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const projects_module_1 = require("./projects/projects.module");
const config_1 = require("@nestjs/config");
const projects_entity_1 = require("./projects/projects.entity");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const projects_controller_1 = require("./projects/projects.controller");
const projects_service_1 = require("./projects/projects.service");
const typeorm_2 = require("typeorm");
const roles_module_1 = require("./roles/roles.module");
const roles_entity_1 = require("./roles/roles.entity");
const users_entity_1 = require("./users/users.entity");
const auth_module_1 = require("./auth/auth.module");
const task_module_1 = require("./task/task.module");
const column_module_1 = require("./column/column.module");
const column_entity_1 = require("./column/column.entity");
const task_entity_1 = require("./task/task.entity");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController, projects_controller_1.ProjectsController],
        providers: [users_service_1.UsersService, projects_service_1.ProjectsService],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT) || 5432,
                username: process.env.POSTGRES_NAME,
                password: process.env.POSTGRES_PASSWORD || "1",
                database: process.env.POSTGRES_DB || "fake_trello",
                entities: [projects_entity_1.Project, roles_entity_1.Role, users_entity_1.Users, column_entity_1.ColumnEntity, task_entity_1.Task],
                synchronize: true,
                autoLoadEntities: true,
            }),
            projects_module_1.ProjectsModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            task_module_1.TaskModule,
            column_module_1.ColumnModule,
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=AppModule.js.map