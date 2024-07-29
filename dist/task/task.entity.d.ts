import { ColumnEntity } from "src/column/column.entity";
export declare class Task {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    column: ColumnEntity;
    order: number;
}
