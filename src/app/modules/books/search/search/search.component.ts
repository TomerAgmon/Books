import { BookDetailsComponent } from './book-details/book-details.component';
import {
  searchLoading,
  books,
  totalItems,
  lastQuery,
} from './../../store/selectors/search.selectors';
import { searchBooks } from './../../store/actions/search.actions';
import { username } from './../../../../core/auth/store/auth.selectors';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { addToWishlist } from '../../store/actions/wishlist.actions';
import { shareReplay, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  username$;
  loading$;
  books$;
  totalItems$;
  lastQuery;

  destroy$ = new Subject();

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.username$ = this.store.select(username);
    this.loading$ = this.store.select(searchLoading);
    this.books$ = this.store.select(books);
    this.totalItems$ = this.store.select(totalItems);

    this.store
      .pipe(select(lastQuery), takeUntil(this.destroy$))
      .subscribe((lastQuery) => {
        this.lastQuery = lastQuery;
      });
  }

  onSearchInputChanged($event) {
    this.searchBooks($event, 0);
  }

  onPageChange($event: { pageIndex: number; pageSize: number }) {
    const startIndex = $event.pageIndex * $event.pageSize;
    this.searchBooks(this.lastQuery, startIndex);
  }

  searchBooks(query, startIndex) {
    this.store.dispatch(searchBooks({ query: query, startIndex }));
  }

  onRowClicked($event) {
    let dialogRef = this.dialog.open(BookDetailsComponent, {
      data: $event,
      width: '450px',
      maxHeight: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(addToWishlist({ book: $event }));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
