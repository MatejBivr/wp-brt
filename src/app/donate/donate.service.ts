import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class DonateService {
  public donations;
  public gateway;
  private postUrl = 'https://www.balkanriverdefence.org/wp-json/wp/v2/';
  

  constructor( private http: HttpClient) {
    this.donations = this.http
      .get(this.postUrl + `product?_embed&per_page=100`)
      .map(res =>{return res});
  }

  getDonations(): Observable<any>{
    return  Observable.from(this.donations);
  }

}
