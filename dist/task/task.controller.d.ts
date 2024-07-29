import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./task.entity";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTask(id: number): Promise<Task>;
    getAll(): Promise<Task[]>;
    updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
    moveTask(id: number, newPosition: number): Promise<Task>;
}
