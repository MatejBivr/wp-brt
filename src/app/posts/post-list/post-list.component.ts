import { Component, OnInit , Input} from '@angular/core';
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
	posts: Post[];
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;

  constructor( private postsService: MainService, private router: Router ) { }

  getPosts(perPage, numPage = 1){
    this.postsService
      .getPosts('posts', perPage, numPage)
      .subscribe(val => {
        this.posts = val[0];
        console.log(this.posts[0]);
        this.pages = Number(val[1][0]);
        this.loading = false;
      });
  }

  selectPost(slug) {
    let link = `/news/${slug}`
    this.router.navigate([link]);
  }

  prevPage(){
    this.page--
    this.getPosts(this.perPage, this.page);
  }

  nextPage(){
    this.page++
    this.getPosts(this.perPage, this.page);
  }

  goToPage($event){
    this.page=$event
    this.getPosts(this.perPage, this.page);
  }

  ngOnInit() {
  	this.getPosts(this.perPage, this.page);
  }

}
