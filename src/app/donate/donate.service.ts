import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DonateService {
  public donations;
  private postUrl = 'http://localhost:8000/wp-json/wp/v2/'
  
  constructor(private http: Http) {
    this.donations = this.http
      .get(this.postUrl + `posts`)
      .map(res => res.json());
  }

  getDonations(): Observable<any>{
    return this.donations;
  }

}
