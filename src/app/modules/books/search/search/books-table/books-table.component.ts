import { Observable, Subject } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { MatPaginator } from '@angular/material/paginator';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit, OnDestroy {
  @Input() books$: Observable<Book>;
  @Input() totalItems$: Observable<number>;
  @Input() loading$: Observable<boolean>;
  @Output() pageChange = new EventEmitter<{
    pageIndex: number;
    pageSize: number;
  }>();
  @Output() rowClicked = new EventEmitter<Book>();

  totalItems = 0;

  // Table properties
  columns = ['title'];
  pageSize = 20;
  @ViewChild('paginator') paginator: MatPaginator;

  destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    // Reset paginator on new query
    this.totalItems$.pipe(takeUntil(this.destroy$)).subscribe((x) => {
      if (this.paginator) {
        this.paginator.firstPage();
      }

      this.totalItems = x;
    });
  }

  onPaginateChange($event) {
    this.pageChange.emit({
      pageIndex: $event.pageIndex,
      pageSize: $event.pageSize,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
