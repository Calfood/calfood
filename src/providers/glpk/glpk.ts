import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlpkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlpkProvider {

  constructor(public http: Http) {
    console.log('Hello GlpkProvider Provider');
  }

  private base_url = "http://localhost:3000/glpk/";
  
  sendRequest(data) {
    return this.http.get(this.base_url+data.leite+'/'+data.racao+'/'+data.feno);
  }

}
