import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

	private postUrl = 'http://localhost:8000/wp-json/wp/v2/'

	constructor(private http: Http) { }

	getPosts(perPage, numPage): Observable<any>{
		return this.http
			.get(this.postUrl + `posts?per_page=${perPage}&page=${numPage}`)
			.map(res => {
				let pages = res.headers.getAll('X-WP-TotalPages');
				let count = res.headers.getAll('X-WP-Total');
				let posts = res.json();
				return [posts, pages, count];
			})
	}

	getPost(slug): Observable<Post> {
		return this.http
			.get(this.postUrl + `posts?slug=${slug}&_embed`)
			.map((res: Response) => res.json());

	}


}
