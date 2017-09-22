import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  private perPage = 6;
  private title= "media gallery";
  type = 'gallery';
  media = [];
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;
  constructor(private mainService: MainService) { }

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