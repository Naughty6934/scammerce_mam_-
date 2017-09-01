import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailServiceProvider } from "./product-detail.service";
import { ProductDetailModel } from "./product-detail.model";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productDetailData: ProductDetailModel = new ProductDetailModel();

  private product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productDetailServiceProvider:ProductDetailServiceProvider) {
    this.product = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    this.productDetailServiceProvider.getData()
    .then(data => {
      console.log(data);
      this.productDetailData = data;
    }).catch();
  }

  addToCart(){
    alert('thank you');
  }

}
