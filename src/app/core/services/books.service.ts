import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiKey = 'AIzaSyCegaZrlIyR4vBqwGAWJgeLlbYwTSige08';
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private api: ApiService) {}

  search(query: string, startIndex: number) {
    let httpParams = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query)
      .set('maxResults', '20')
      .set('startIndex', startIndex.toString());

    return this.api.get(this.apiUrl, httpParams).pipe(
      map((result) => {
        const books = result.items.map((i) => Book.parse(i));
        const totalItems = result.totalItems;

        return { books, totalItems, query };
      })
    );
  }
}
