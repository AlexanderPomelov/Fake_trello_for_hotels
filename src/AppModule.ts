import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectsModule } from "./projects/projects.module";
import { ConfigModule } from "@nestjs/config";
import { Project } from "./projects/projects.entity";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";
import { ProjectsController } from "./projects/projects.controller";
import { ProjectsService } from "./projects/projects.service";
import { DataSource } from "typeorm";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.entity";
import { Users } from "./users/users.entity";
import { AuthModule } from "./auth/auth.module";
import { TaskModule } from "./task/task.module";
import { ColumnModule } from "./column/column.module";
import { ColumnEntity } from "./column/column.entity";
import { Task } from "./task/task.entity";

@Module({
  controllers: [UsersController, ProjectsController],
  providers: [UsersService, ProjectsService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_NAME,
      password: process.env.POSTGRES_PASSWORD || "1",
      database: process.env.POSTGRES_DB || "fake_trello",
      entities: [Project, Role, Users, ColumnEntity, Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProjectsModule,
    UsersModule,
    RolesModule,
    AuthModule,
    TaskModule,
    ColumnModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
