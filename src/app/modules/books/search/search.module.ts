import { MatCoreModule } from './../../../shared/mat-core/mat-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { BooksSearchInputComponent } from './search/books-search-input/books-search-input.component';
import { BooksTableComponent } from './search/books-table/books-table.component';
import { BookDetailsComponent } from './search/book-details/book-details.component';

@NgModule({
  declarations: [
    BooksTableComponent,
    BooksSearchInputComponent,
    SearchComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, MatCoreModule],
  entryComponents: [BookDetailsComponent],
})
export class SearchModule {}
