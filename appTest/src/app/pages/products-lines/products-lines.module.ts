import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsLinesPageRoutingModule } from './products-lines-routing.module';

import { ProductsLinesPage } from './products-lines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsLinesPageRoutingModule
  ],
  declarations: [ProductsLinesPage]
})
export class ProductsLinesPageModule {}
