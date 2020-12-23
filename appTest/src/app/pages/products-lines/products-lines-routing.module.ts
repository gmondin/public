import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsLinesPage } from './products-lines.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsLinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsLinesPageRoutingModule {}
