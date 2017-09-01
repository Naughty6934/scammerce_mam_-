import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ShopModel } from "./shop-detail.model";

/*
  Generated class for the ShopdetailserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopdetailserviceProvider {

  constructor(public http: Http) {
    console.log('Hello ShopdetailserviceProvider Provider');
  }
  getData():Promise<ShopModel>{
    return this.http.get('../../assets/example_data/shop-detail.json')
    .toPromise()
    .then( resp => resp.json() as ShopModel)
    .catch(err => err.rejeject(err.message || err));  }

}
