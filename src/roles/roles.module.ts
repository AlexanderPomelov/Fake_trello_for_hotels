import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./roles.entity";
import { Users } from "src/users/users.entity";
import { ColumnEntity } from "src/column/column.entity";
import { Task } from "src/task/task.entity";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [TypeOrmModule.forFeature([Role, Users, ColumnEntity, Task])],
  exports: [RolesService],
})
export class RolesModule {}
