import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
// import { OAuth } from 'oauth-1.0a';
const OAuth = require('oauth-1.0a');

export class AuthInterceptor implements HttpInterceptor {
  private oauth = OAuth({
    consumer: {
      key: 'ck_8f8ac29b12043150262fa45e4002008101d0366f',
      secret: 'cs_500b7ec34daef7836258800bf862002ab01be053'
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