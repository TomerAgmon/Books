import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss'],
})
export class WishlistItemComponent {
  @Input() book: Book;
  @Output() removeFromWishlist = new EventEmitter();

  removeClick(): void {
    this.removeFromWishlist.emit(this.book);
  }
}
