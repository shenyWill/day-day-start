import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {

    @Inject(DbService)
    private readonly dbService: DbService;

    async list() {
        const books: Book[] = await this.dbService.read();
        return books;
    }
    async findById(id: number) {
        const books: Book[] = await this.dbService.read();
        const book = books.find((item) => item.id === id);
        return book;
    }
    async create(createBookDto: CreateBookDto) {
        const books: Book[] = await this.dbService.read();
        const newBook: Book = {
            id: Math.random() * 100000000000000000,
            ...createBookDto,
        };
        books.push(newBook);
        await this.dbService.write(books);
        return newBook;
    }
    async update(updateBookDto: UpdateBookDto) {
        const books: Book[] = await this.dbService.read();
        const book = books.find((item) => item.id === updateBookDto.id);
        if (!book) {
            return null;
        }
        Object.assign(book, updateBookDto);
        await this.dbService.write(books);
        return book;
    }
    async delete(id: number) {
        const books: Book[] = await this.dbService.read();
        const bookIndex = books.findIndex((item) => item.id === id);
        if (bookIndex === -1) {
            return null;
        }
        books.splice(bookIndex, 1);
        await this.dbService.write(books);
        return {};
    }
}
