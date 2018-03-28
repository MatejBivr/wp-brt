import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
// import { OAuth } from 'oauth-1.0a';
const OAuth = require('oauth-1.0a');

export class AuthInterceptor implements HttpInterceptor {
  private oauth = OAuth({
    consumer: {
      key: 'ck_ab01bf01523b5162fbd392fc9572af814bed5f70',
      secret: 'cs_91e88565a8141fe90ff835995ca4541309fe3eb9'
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
  });

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    let headerstr = 'OAuth ';
    let headers = new HttpHeaders();   

    const query = Object.entries(this.oauth.authorize(req)).map(val => {
      headerstr = `${headerstr} ${val[0]}="${val[1]}"`
    });
    headers = headers.append('category', ["22"]);
    headers = headers.append('Authorization', [headerstr]);
    // params = params.set('tag', '19');

    const authReq = req.clone({
      headers
    });
    return next.handle(authReq);
  }

}