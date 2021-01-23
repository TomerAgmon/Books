import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
  },
  {
    path: 'search',
    loadChildren: () =>
      import('src/app/modules/books/search/search.module').then(
        (m) => m.SearchModule
      ),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('src/app/modules/books/wishlist/wishlist.module').then(
        (m) => m.WishlistModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
