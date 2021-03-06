import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './posts/post';

@Injectable()
export class MainService {

  private postUrl = 'https://balkanriverdefence.org/wp-json/wp/v2/'

  constructor( private http: HttpClient) { }

  getPosts(type, perPage, numPage): Observable<any>{
    return this.http
      .get(this.postUrl + `${type}?per_page=${perPage}&page=${numPage}&_embed`, {observe: 'response'})
      .map(res => {
        let pages = res.headers.getAll('X-WP-TotalPages');
        let count = res.headers.getAll('X-WP-Total');
        let posts = res.body;
        return [posts, pages[0], count];
      })
  }

  getCrew(type): Observable<any> {
    return this.http
      .get(this.postUrl + type+'/?per_page=100', {observe: 'response'})
      .map((res) => res.body);
  }

  getPost(type, slug): Observable<Post> {
    return this.http
      .get(this.postUrl + `${type}?slug=${slug}&_embed`, {observe: 'response'})
      .map((res) => res.body);

  }

  getPage(slug): Observable<any> {
    return this.http
      .get(this.postUrl + `pages?slug=${slug}&_embed`, {observe: 'response'})
      .map((res) => res.body);

  }

}