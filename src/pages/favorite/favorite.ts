import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { FavoriteserviceProvider } from "./favorite.service";
import { FavoriteModel } from "./favorite.model";

/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favoriteData: FavoriteModel = new FavoriteModel;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteserviceProvider:FavoriteserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.favoriteserviceProvider.getData().then(data =>{
      this.favoriteData = data;
      console.log(data);
      

    })
  }
  // selectTab(index) {
  //   this.pageSlider.slideTo(index);
  // }

  // changeWillSlide($event) {
  //   this.tabs = $event._snapIndex.toString();
  //  }

}
