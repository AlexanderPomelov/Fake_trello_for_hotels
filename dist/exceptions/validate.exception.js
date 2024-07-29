"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValdationException = void 0;
const common_1 = require("@nestjs/common");
class ValdationException extends common_1.HttpException {
    constructor(response) {
        super(response, common_1.HttpStatus.BAD_REQUEST);
        this.messages = response;
    }
}
exports.ValdationException = ValdationException;
//# sourceMappingURL=validate.exception.js.map