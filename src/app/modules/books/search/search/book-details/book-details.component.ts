import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/core/models/book.model';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(@Inject(MAT_DIALOG_DATA) data: Book) {
    this.book = data;
  }

  ngOnInit(): void {}
}
