import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_roles")
export class UserRoles {
  @ApiProperty({ example: "1", description: "Unique identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "13", description: "Role identifier" })
  @Column({ type: "integer" })
  roleId: number;

  @ApiProperty({ example: "22", description: "User identifier" })
  @Column({ type: "integer" })
  userId: number;
}
