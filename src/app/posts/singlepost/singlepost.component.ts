import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../post';
import { MainService } from '../../main.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss'],
  providers: [MainService]
})
export class SinglepostComponent implements OnInit {
	post: Post;
  content;
  hero: string = null;

  constructor(private postsService: MainService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  getPost(slug, link){
    this.postsService
      .getPost(link, slug)
      .subscribe(res => {
        this.post = res[0];
        console.log(res);
        this.hero = '/assets/img/cover6.jpg';
        if (this.post['_embedded']['wp:featuredmedia']){
          this.hero = this.post['_embedded']['wp:featuredmedia'][0].source_url;
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.post['content'].rendered);
      });

  }

  async ngOnInit() {
  	await this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       let link = this.route.snapshot.data['type']? this.route.snapshot.data['type']: 'posts';
        this.getPost(slug, link);

    });

  }
  ngOnChanges(){
    if(this.post){
      this.hero = this.post['_embedded']['wp:featuredmedia'][0].source_url;     
    }
  }

}
