import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productsList',
    pathMatch: 'full'
  },
  {
    path: 'productsList',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'productsList/:line',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products-details/products-details.module').then( m => m.ProductsDetailsPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./pages/products-details/products-details.module').then( m => m.ProductsDetailsPageModule)
  },
  {
    path: 'products-linesList',
    loadChildren: () => import('./pages/products-lines/products-lines.module').then( m => m.ProductsLinesPageModule)
  },
  {
    path: 'products-lines',
    loadChildren: () => import('./pages/products-lines-details/products-line-details.module').then( m => m.ProductsLineDetailsPageModule)
  },
  {
    path: 'products-lines/:id',
    loadChildren: () => import('./pages/products-lines-details/products-line-details.module').then( m => m.ProductsLineDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
