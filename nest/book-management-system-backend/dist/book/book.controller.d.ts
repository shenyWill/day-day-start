import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    list(): Promise<import("./entities/book.entity").Book[]>;
    findById(id: string): Promise<import("./entities/book.entity").Book | undefined>;
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    update(updateBookDto: UpdateBookDto): Promise<import("./entities/book.entity").Book | null>;
    delete(id: string): Promise<{} | null>;
    upload(file: Express.Multer.File): Promise<string>;
}
