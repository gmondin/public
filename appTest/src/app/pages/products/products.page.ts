import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  results: Observable<Product[]>;
  searchProductName: '';  

  constructor(private productService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let productLine = this.activatedRoute.snapshot.paramMap.get('line'); 
    if (productLine == '' || productLine == null){
      this.searchAllProducts();
    }else{
      this.searchProductByLine(productLine);
    }
  }

  searchAllProducts(){
    this.results = this.productService.getProducts();
  }
  
  addProduct() {
    this.router.navigate(['products']);
  }

  searchProductByName() {
    if (this.searchProductName ==''){
      this.searchAllProducts();
    }else{
      this.results = this.productService.getProductByName(this.searchProductName);
    }
  }

  searchProductByLine(productLine: string){
    this.results = this.productService.getProductByLine(productLine);
  }

}
