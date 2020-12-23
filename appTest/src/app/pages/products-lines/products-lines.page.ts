import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductLine } from 'src/app/interfaces/ProductLine';
import { ProductsLinesService } from 'src/app/services/products-lines/productsLine.service';

@Component({
  selector: 'app-products-lines',
  templateUrl: './products-lines.page.html',
  styleUrls: ['./products-lines.page.scss'],
})
export class ProductsLinesPage implements OnInit {

  results: Observable<ProductLine[]>;
  searchProductLine: '';  

  constructor(private productLineService: ProductsLinesService, private router: Router) { }

  ngOnInit() {
    this.searchAllProductsLines();
  }

  searchAllProductsLines(){
    this.results = this.productLineService.getProductLines();
  }
  
  addProductLine() {
    this.router.navigate(['products-lines']);
  }

  searchProductByName() {
    if (this.searchProductLine ==''){
      this.searchAllProductsLines();
    }else{
      this.results = this.productLineService.getProductLineById(this.searchProductLine);
    }
  }

}
