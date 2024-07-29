import { HttpException } from "@nestjs/common";
export declare class ValdationException extends HttpException {
    messages: any;
    constructor(response: string | Record<string, any>);
}
