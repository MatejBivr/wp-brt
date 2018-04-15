import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  perPage = 8;
  title: string;
  type = 'galleries';
  media = [];
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;

  constructor( private mainService: MainService,
    private router: Router,
    private route: ActivatedRoute,
    private meta: Meta) {
    this.meta.updateTag({ property: 'title', content: 'Media | Balkan River Defence' });
    this.meta.updateTag({ property: 'og:title', content: 'Media | Balkan River Defence' });
    this.meta.updateTag({ name: 'description', content: 'Take look at how we were touring Balkans in 2016 and 2017, check all our videos and see how it looks when we are raising awareness around the word.' });
    this.meta.updateTag({ property: 'og:description', content: 'Take look at how we were touring Balkans in 2016 and 2017, check all our videos and see how it looks when we are raising awareness around the word.' });
    this.meta.updateTag({ property: 'og:image', content: '/wp-content/themes/brt/dist/assets/seo/media.jpg' });
  }

  getMedia(type, perPage, numPage = 1){
    this.mainService
      .getPosts(type, perPage, numPage)
      .subscribe(val => {
        this.media = val[0];
        this.pages=+val[1];
        this.loading = false;
      });
  }

  selectMedia(type, slug) {
    let link = `${this.route.snapshot.url[0].path}/${slug}`
    this.router.navigate([link]);
  }

  prevPage(){
    this.page--
    this.getMedia(this.type, this.perPage, this.page);
  }

  nextPage(){
    this.page++
    this.getMedia(this.type, this.perPage, this.page);
  }

  goToPage($event){
    this.page=$event
    this.getMedia(this.type, this.perPage, this.page);
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    this.type = this.title ===  "Video galleries"?  'videos' : 'galleries';
    this.getMedia(this.type, this.perPage, this.page);
  }

}