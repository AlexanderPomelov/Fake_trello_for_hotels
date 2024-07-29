"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const column_entity_1 = require("./column.entity");
let ColumnService = class ColumnService {
    constructor(columnRepository) {
        this.columnRepository = columnRepository;
    }
    async createColumn(columnData) {
        const column = this.columnRepository.create(columnData);
        return this.columnRepository.save(column);
    }
    async updateColumn(id, dto) {
        const columnToUpdate = await this.columnRepository.preload({
            id: id,
            ...dto,
        });
        const updatedColumn = await this.columnRepository.save(columnToUpdate);
        return updatedColumn;
    }
    async getColumn(id) {
        return this.columnRepository.findOne({ where: { id } });
    }
    async findAllColumn() {
        return this.columnRepository.find({ relations: ["tasks"] });
    }
    async moveColumn(id, newPosition) {
        const column = await this.columnRepository.findOne({ where: { id } });
        if (!column) {
            throw new Error("Column not found");
        }
        column.order = newPosition;
        return this.columnRepository.save(column);
    }
    async deleteColumn(id) {
        await this.columnRepository.delete(id);
    }
};
exports.ColumnService = ColumnService;
exports.ColumnService = ColumnService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(column_entity_1.ColumnEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ColumnService);
//# sourceMappingURL=column.service.js.map