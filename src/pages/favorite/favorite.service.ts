import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FavoriteModel } from "./favorite.model";



/*
  Generated class for the FavoriteserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteserviceProvider {

  constructor(public http: Http) {
    console.log('Hello FavoriteserviceProvider Provider');
  }

  getData(): Promise<FavoriteModel> {
    return this.http.get('../../assets/example_data/favorite.json')
      .toPromise()
      .then(resp => resp.json() as FavoriteModel)
      .catch(err => err.reject(err.message || err));
  }
}

