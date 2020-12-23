import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsLineDetailsPage } from './products-line-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsLineDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsLineDetailsPageRoutingModule {}
