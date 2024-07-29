import { forwardRef, Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { ColumnEntity } from "src/column/column.entity";
import { RolesModule } from "src/roles/roles.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, ColumnEntity]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TypeOrmModule, TaskService],
})
export class TaskModule {}
