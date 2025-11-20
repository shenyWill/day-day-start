import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
export declare class BookService {
    private readonly dbService;
    list(): Promise<Book[]>;
    findById(id: number): Promise<Book | undefined>;
    create(createBookDto: CreateBookDto): Promise<Book>;
    update(updateBookDto: UpdateBookDto): Promise<Book | null>;
    delete(id: number): Promise<{} | null>;
}
