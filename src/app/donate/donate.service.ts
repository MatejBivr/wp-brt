import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DonateService {

  private postUrl = 'http://localhost:8000/wp-json/wp/v2/'

  constructor(private http: Http) { }

  getDonations(): Observable<any>{
    return this.http
      .get(this.postUrl + `donation`)
      .map(res => {
        let posts = res.json();
        return posts;
      })
  }

  // getPost(slug): Observable<Post> {
  //   return this.http
  //     .get(this.postUrl + `posts?slug=${slug}&_embed`)
  //     .map((res: Response) => res.json());

  // }


}
