import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { BooksQueryResult } from 'src/app/modules/books/search/models/books-query-result.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiKey = 'AIzaSyCegaZrlIyR4vBqwGAWJgeLlbYwTSige08';
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  private RESULTS_PER_PAGE = '20';

  constructor(private api: ApiService) {}

  search(query: string, startIndex: number): Observable<BooksQueryResult> {
    let httpParams = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query)
      .set('maxResults', this.RESULTS_PER_PAGE)
      .set('startIndex', startIndex.toString());

    return this.api.get(this.apiUrl, httpParams).pipe(
      map((result) => {
        const books = result.items?.map((i) => Book.parse(i));
        const totalItems = result.totalItems;

        return { books, totalItems, query };
      })
    );
  }
}
