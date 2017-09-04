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

  constructor( private postsService: PostsService, private router: Router ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
      	console.log(res);
        this.posts = res;
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
