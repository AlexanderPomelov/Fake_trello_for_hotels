import { Users } from "src/users/users.entity";
export declare class Role {
    id: number;
    value: string;
    description: string;
    users: Users[];
}
