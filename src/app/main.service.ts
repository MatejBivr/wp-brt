import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './posts/post';

@Injectable()
export class MainService {

  private postUrl = 'http://localhost:8000/wp-json/wp/v2/'

  constructor(private http: Http) { }

  getPosts(type, perPage, numPage): Observable<any>{
    return this.http
      .get(this.postUrl + `${type}?per_page=${perPage}&page=${numPage}&_embed`)
      // .get(this.postUrl + `${type}`)
      .map(res => {
        console.log(this.postUrl + `${type}?per_page=${perPage}&page=${numPage}&_embed`);
        let pages = res.headers.getAll('X-WP-TotalPages');
        let count = res.headers.getAll('X-WP-Total');
        let posts = res.json();
        return [posts, pages[0], count];
      })
  }

  getPost(type, slug): Observable<Post> {
    return this.http
      .get(this.postUrl + `${type}?slug=${slug}&_embed`)
      .map((res: Response) => res.json());

  }


}
