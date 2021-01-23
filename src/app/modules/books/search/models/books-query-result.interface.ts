import { Book } from 'src/app/core/models/book.model';

export interface BooksQueryResult {
  books: Book[];
  totalItems: number;
  query: string;
}
