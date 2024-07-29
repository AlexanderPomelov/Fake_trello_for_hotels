import { ColumnService } from "./column.service";
import { CreateColumnDto } from "./dto/create-column.dto";
import { UpdateColumnDto } from "./dto/update-colum.dto";
import { ColumnEntity } from "./column.entity";
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    create(createColumnDto: CreateColumnDto): Promise<ColumnEntity>;
    findAll(): Promise<ColumnEntity[]>;
    getTask(id: number): Promise<ColumnEntity>;
    moveColumn(id: number, newPosition: number): Promise<ColumnEntity>;
    updateTask(id: number, updateColumnDto: UpdateColumnDto): Promise<ColumnEntity>;
    delete(id: number): Promise<void>;
}
