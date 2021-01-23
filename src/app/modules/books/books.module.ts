import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './store/reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/effects/search.effects';
import * as fromWishlist from './store/reducers/wishlist.reducer';
import { WishlistEffects } from './store/effects/wishlist.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects, WishlistEffects]),
    StoreModule.forFeature(
      fromWishlist.wishlistFeatureKey,
      fromWishlist.reducer
    ),
  ],
})
export class BooksModule {}
