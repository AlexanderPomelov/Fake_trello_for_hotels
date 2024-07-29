import { ApiProperty } from "@nestjs/swagger";
import { Project } from "src/projects/projects.entity";
import { Role } from "src/roles/roles.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class Users {
  @ApiProperty({ example: "1", description: "Unique identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "John", description: "Username" })
  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @ApiProperty({ example: "john@gmail.com", description: "Email" })
  @Column({ type: "varchar", length: 100, nullable: false })
  email: string;

  @ApiProperty({ example: "123456", description: "Password" })
  @Column({ type: "varchar", length: 100, nullable: false })
  password: string;

  @ApiProperty({
    example: "2020-01-01 23:59:01",
    description: "Task creation time",
  })
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(3)",
  })
  createdAt: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @ManyToMany(() => Project, (project) => project.users, { cascade: true })
  project: Project[];
}
