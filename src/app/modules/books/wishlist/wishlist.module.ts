import { MatCoreModule } from 'src/app/shared/mat-core/mat-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistItemComponent } from './wishlist/wishlist-item/wishlist-item.component';

@NgModule({
  declarations: [WishlistComponent, WishlistItemComponent],
  imports: [CommonModule, WishlistRoutingModule, MatCoreModule],
})
export class WishlistModule {}
