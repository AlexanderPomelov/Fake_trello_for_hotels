import { ColumnEntity } from "src/column/column.entity";
import { Users } from "src/users/users.entity";
export declare class Project {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    columns: ColumnEntity[];
    users: Users[];
}
