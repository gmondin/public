import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsLineDetailsPageRoutingModule } from './products-line-details-routing.module';

import { ProductsLineDetailsPage } from './products-line-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsLineDetailsPageRoutingModule
  ],
  declarations: [ProductsLineDetailsPage]
})
export class ProductsLineDetailsPageModule {}
