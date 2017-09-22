import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  private perPage = 8;
  private title= "media gallery";
  private type = 'gallery';
  private media = [];
  private page = 1;
  private pages: number;
  private loading: boolean= true;
  private hero: string = null;

  constructor( private mainService: MainService, private router: Router) { }

  getMedia(type, perPage, numPage = 1){
    this.mainService
      .getPosts(type, perPage, numPage)
      .subscribe(val => {
        this.media = val[0];
        console.log(this.media);
        this.pages=+val[1];
        console.log(typeof this.pages)
        this.loading = false;
      });
  }

  selectMedia(type, slug) {
    let link = `/media/${slug}`
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
    this.getMedia(this.type, this.perPage, this.page);
  }

}