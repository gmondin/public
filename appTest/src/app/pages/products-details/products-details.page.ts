import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductLine } from 'src/app/interfaces/productLine';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsLinesService } from 'src/app/services/products-lines/productsLine.service';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  product = null;
  private isDisabledProductCode: boolean=true;

  constructor(private activatedRoute: ActivatedRoute, 
    private productService: ProductsService, 
    private productLineService: ProductsLinesService, 
    public alertController: AlertController,
    public router: Router) { 
    this.product = new Product();
  }
 
  ngOnInit() {
    let productCode = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.productService.getProductById(productCode).subscribe(result => {
        this.product = result;
    });       
    if (productCode == '' || productCode == null){
      this.isDisabledProductCode = false;
    }
  }

  saveProduct(){
    let productCode = this.activatedRoute.snapshot.paramMap.get('id'); 
      if (productCode == '' || productCode == null){
        this.productService.createProduct(this.product);
          this.product = new Product();
          this.presentAlert('Product Added!!!', 'Sucess', '');
      }else{
        this.productService.updateProduct(this.product);
        this.presentAlert('Product Updated!!!', 'Sucess', '');
      }  
  }

  deleteProduct(){
    let productCode = this.activatedRoute.snapshot.paramMap.get('id'); 
    if (productCode == '' || productCode == null){
      this.presentAlert('Product Code is Null!!!', 'Sucess', '');
    }else{
      this.productService.deleteProduct(this.product);
      this.presentAlert('Product Deleted!!!', 'Sucess', '');
      this.router.navigate(['products/']);
    }
  }

  
  addProductLine(){
    this.router.navigate(['products-lines/']);
  }

  async presentAlert(messageAlert: string, alertHeader: string, alertSubHeader: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: alertHeader,
      subHeader: alertSubHeader,
      message: messageAlert,
      buttons: ['OK']
    });
    await alert.present();
  }
}
