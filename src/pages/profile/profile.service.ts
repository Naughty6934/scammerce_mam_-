import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProfileModel } from "./profile.model";

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProfileServiceProvider Provider');
  }
  getData():Promise<ProfileModel>{
    return this.http.get('../../assets/example_data/profile.json')
    .toPromise()
.then( resp => resp.json() as ProfileModel )
.catch(err => err.reject(err.message || err)); }

}
