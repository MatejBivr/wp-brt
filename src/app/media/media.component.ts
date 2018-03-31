import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

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
    this.getMedia(this.type, this.perPage, this.page);
  }

}