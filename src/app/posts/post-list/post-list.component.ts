import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
	posts: Post[];
  pages: number;

  constructor( private postsService: PostsService, private router: Router ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(val => {
        console.log(val[0]);
      	console.log(val[1]);
        this.posts = val[0];
        this.pages = val[1][0].parseInt;
      });
  }

  selectPost(slug) {
    let link = `/news/${slug}`
    this.router.navigate([link]);
  }


  ngOnInit() {
  	this.getPosts();
  }

}
