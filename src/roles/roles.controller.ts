import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RolesService } from "./roles.service";
import { Role } from "./roles.entity";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { ValidationPipe } from "src/pipes/validation.pipe";

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private RoleService: RolesService) {}

  @ApiOperation({ summary: "Create a role" })
  @ApiResponse({ status: 201, type: Role })
  @UsePipes(ValidationPipe)
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.RoleService.createRole(roleDto);
  }

  @ApiOperation({ summary: "Get one role" })
  @ApiResponse({ status: 200, type: [Role] })
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  @Get("/:value")
  getOne(@Param("value") value: string) {
    return this.RoleService.getOneRole(value);
  }

  @ApiOperation({ summary: "Get all roles" })
  @ApiResponse({ status: 200, type: Role })
  // @Roles('admin')
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.RoleService.getAllRoles();
  }
}
