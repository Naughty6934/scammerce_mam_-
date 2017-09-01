import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopModel } from "../shop-detail/shop-detail.model";
import { ShopdetailserviceProvider } from "../shop-detail/shop-detail.service";

/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  shopDetailData: ShopModel = new ShopModel;
  private shop: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopdetailserviceProvider: ShopdetailserviceProvider) {
    this.shop = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
    this.shopdetailserviceProvider.getData().then(data => {
      this.shopDetailData = data;
      console.log(data);
    })

  }

}
