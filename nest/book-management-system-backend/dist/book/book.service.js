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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let BookService = class BookService {
    dbService;
    async list() {
        const books = await this.dbService.read();
        return books;
    }
    async findById(id) {
        const books = await this.dbService.read();
        const book = books.find((item) => item.id === id);
        return book;
    }
    async create(createBookDto) {
        const books = await this.dbService.read();
        const newBook = {
            id: Math.random() * 100000000000000000,
            ...createBookDto,
        };
        books.push(newBook);
        await this.dbService.write(books);
        return newBook;
    }
    async update(updateBookDto) {
        const books = await this.dbService.read();
        const book = books.find((item) => item.id === updateBookDto.id);
        if (!book) {
            return null;
        }
        Object.assign(book, updateBookDto);
        await this.dbService.write(books);
        return book;
    }
    async delete(id) {
        const books = await this.dbService.read();
        const bookIndex = books.findIndex((item) => item.id === id);
        if (bookIndex === -1) {
            return null;
        }
        books.splice(bookIndex, 1);
        await this.dbService.write(books);
        return {};
    }
};
exports.BookService = BookService;
__decorate([
    (0, common_1.Inject)(db_service_1.DbService),
    __metadata("design:type", db_service_1.DbService)
], BookService.prototype, "dbService", void 0);
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map