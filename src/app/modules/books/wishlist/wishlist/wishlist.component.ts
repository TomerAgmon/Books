import { removeFromWishlist } from './../../store/actions/wishlist.actions';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';
import { wishlist } from '../../store/selectors/wishlist.selectors';

@Component({
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<Book[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.wishlist$ = this.store.select(wishlist);
  }

  onRemoveFromWishlist($event) {
    this.store.dispatch(removeFromWishlist({ book: $event }));
  }

  trackbyFn(index, item) {
    return item.id;
  }
}
