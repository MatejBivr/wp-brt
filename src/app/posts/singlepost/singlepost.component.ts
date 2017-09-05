import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss'],
  providers: [PostsService]
})
export class SinglepostComponent implements OnInit {
	post: Post;
  hero: string = null;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
        console.log(this.post);
        this.hero = '/assets/img/cover6.jpg';
        if (this.post['_embedded']['wp:featuredmedia'][0].source_url){
          this.hero = this.post['_embedded']['wp:featuredmedia'][0].source_url;
        }
      });

  }
// 

  async ngOnInit() {
  	await this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
        this.getPost(slug);

    });

  }
  ngOnChanges(){
    if(this.post){
      this.hero = this.post['_embedded']['wp:featuredmedia'][0].source_url;     
    }
  }

}