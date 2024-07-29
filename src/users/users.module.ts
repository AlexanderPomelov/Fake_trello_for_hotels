import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Project } from "src/projects/projects.entity";
import { RolesModule } from "src/roles/roles.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([Users, Project]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
