import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';
import { MainService } from '../../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [MainService]
})
export class PostListComponent implements OnInit {
  @Input() perPage: number;
  @Input() category: string;
  loading: boolean;
	posts: Post[];
  page = 1;
  pages: number;
  // loading: boolean= true;
  hero: string = null;

  constructor( private postsService: MainService, private router: Router ) { }

  getPosts(perPage, category, numPage = 1){
    this.postsService
      .getPosts(category, perPage, numPage)
      .subscribe(val => {
        this.posts = val[0];
        this.pages = Number(val[1][0]);
        this.loading = false;
      });
  }

  selectPost(slug) {
    let link = this.category === 'latest'? `/latest/${slug}`: `/news/${slug}`
    this.router.navigate([link]);
  }

  prevPage(){
    this.page--
    this.loading = true;
    this.getPosts(this.perPage, this.category, this.page);
  }

  nextPage(){
    this.page++
    this.loading = true;
    this.getPosts(this.perPage, this.category, this.page);
  }

  goToPage($event){
    this.page=$event
    this.getPosts(this.perPage, this.category, this.page);
  }

  ngOnInit() {
    this.loading = true;
  	this.getPosts(this.perPage, this.category, this.page);
  }

}
