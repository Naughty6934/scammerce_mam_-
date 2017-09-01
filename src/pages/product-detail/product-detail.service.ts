import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductDetailModel } from "./product-detail.model";



/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductDetailServiceProvider Provider');
  }
  getData(): Promise<ProductDetailModel>{
    return this.http.get('../../assets/example_data/product-detail.json')
    .toPromise()
    .then(resp => resp.json() as ProductDetailModel)
    .catch(err => Promise.reject(err.message || err));
  }
}
