import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-standalonepage',
  templateUrl: './standalonepage.component.html',
  styleUrls: ['./page.component.scss']
})
export class StandalonepageComponent implements OnInit {
  public title: string;
  public content;
  loading: boolean;
  constructor( private router: Router, private route: ActivatedRoute, private mainService: MainService, private meta: Meta) {
    this.title = this.route.snapshot.data['title'];
    this.loading = true;
    this.getPage();
    this.meta.updateTag({ property: 'title', content: this.route.snapshot.data['meta']['title'] });
    this.meta.updateTag({ property: 'og:title', content: this.route.snapshot.data['meta']['title'] });
    this.meta.updateTag({ name: 'description', content: this.route.snapshot.data['meta']['descrition'] });
    this.meta.updateTag({ property: 'og:description', content: this.route.snapshot.data['meta']['descrition'] });
    this.meta.updateTag({ property: 'og:image', content : `"https://www.balkanriverdefence.org/wp-content/themes/brt/dist/assets/seo/${this.route.snapshot.data['meta']['img']}` });
    
  }

  getPage(){
    this.mainService
      .getPage(this.title)
      .subscribe(val => {
        this.content = val[0].content ? val[0].content.rendered : null;
        this.loading = false;
      });
  }

  ngOnInit() {
    // this.title = this.route.snapshot.data['title'];
    // this.loading = true;
    // this.getPage();
  }

}
