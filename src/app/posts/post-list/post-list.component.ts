import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
	posts: Post[];

  constructor( private postsService: PostsService ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
      	console.log(res);
        this.posts = res;
      });
  }

  ngOnInit() {
  	this.getPosts();
  }

}
