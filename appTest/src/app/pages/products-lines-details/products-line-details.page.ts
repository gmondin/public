import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsLinesService } from 'src/app/services/products-lines/productsLine.service';
import { AlertController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-line-details',
  templateUrl: './products-line-details.page.html',
  styleUrls: ['./products-line-details.page.scss'],
})
export class ProductsLineDetailsPage implements OnInit {

  productLine = null;
  private isDisabledProductLine: boolean=true;

  constructor(private activatedRoute: ActivatedRoute, 
    private productLineService: ProductsLinesService, 
    private productService: ProductsService, 
    public alertController: AlertController,
    public router: Router) { 
    this.productLine = new Product();
  }
 
  ngOnInit() {
    let productLineId = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.productLineService.getProductLineById(productLineId).subscribe(result => {
        this.productLine = result;
    });
    if (productLineId == '' || productLineId == null){
      this.isDisabledProductLine = false;
    }
  }

  saveProductLine(){
    let productCode = this.activatedRoute.snapshot.paramMap.get('id'); 
    if (productCode == '' || productCode == null){
      this.productLineService.createProductLine(this.productLine);
        this.productLine = new Product();
        this.presentAlert('Product Added!!!', 'Sucess', '');
    }else{
      this.productLineService.updateProductLine(this.productLine);
      this.presentAlert('Product Line Updated!!!', 'Sucess', '');
    }   
  }

  deleteProductLine(){
    let productLineId = this.activatedRoute.snapshot.paramMap.get('id'); 
      if (productLineId == '' || productLineId == null){
        this.presentAlert('Product Line is Null!!!', 'Sucess', '');
      }else{
        this.productLineService.deleteProductLine(this.productLine);
        this.presentAlert('Product Line Deleted!!!', 'Sucess', '');
        this.router.navigate(['products-lines/']);
     }
  }

  searchProducsByLine(productLineName: string){
    this.router.navigate(['productsList/' + productLineName]);
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

