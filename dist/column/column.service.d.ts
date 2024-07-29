import { Repository } from "typeorm";
import { ColumnEntity } from "./column.entity";
import { CreateColumnDto } from "./dto/create-column.dto";
export declare class ColumnService {
    private columnRepository;
    constructor(columnRepository: Repository<ColumnEntity>);
    createColumn(columnData: CreateColumnDto): Promise<ColumnEntity>;
    updateColumn(id: number, dto: CreateColumnDto): Promise<ColumnEntity>;
    getColumn(id: number): Promise<ColumnEntity>;
    findAllColumn(): Promise<ColumnEntity[]>;
    moveColumn(id: number, newPosition: number): Promise<ColumnEntity>;
    deleteColumn(id: number): Promise<void>;
}
