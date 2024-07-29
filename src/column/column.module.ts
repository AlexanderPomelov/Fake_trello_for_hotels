import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColumnEntity } from "./column.entity";
import { ColumnService } from "./column.service";
import { ColumnController } from "./column.controller";
import { RolesModule } from "src/roles/roles.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ColumnEntity]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  providers: [ColumnService],
  controllers: [ColumnController],

  exports: [TypeOrmModule, ColumnService],
})
export class ColumnModule {}
