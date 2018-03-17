import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class DonateService {
  public donations;
  public gateway;
  private postUrl = 'http://localhost:8000/wp-json/wc/v2/';
  

  constructor( private http: HttpClient) {
    this.donations = this.http
      .get(this.postUrl + `products?category=17`)
      .map(res =>{return res});
     this.gateway = this.http
       .get(this.postUrl + 'payment_gateways')
  }

  getDonations(): Observable<any>{
    // console.log(this.oauth);
    // this.donations = {};
    return  Observable.from(this.donations);
  }

}
