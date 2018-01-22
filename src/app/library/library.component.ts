import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  perPage = 9;
  title = "Library";
  type = 'promotion';
  promos = [];
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;
  constructor( private mainService: MainService) { }

  getPromotions(type, perPage, numPage = 1){
    this.mainService
      .getPosts(type, perPage, numPage)
      .subscribe(val => {
        this.promos = val[0];
        console.log(this.promos);
        // this.promos = Number(val[1][0]);
        this.pages=+val[1];
        console.log(typeof this.pages)
        this.loading = false;
      });
  }

  prevPage(){
    this.page--
    this.getPromotions(this.type, this.perPage, this.page);
  }

  nextPage(){
    this.page++
    this.getPromotions(this.type, this.perPage, this.page);
  }

  goToPage($event){
    this.page=$event
    this.getPromotions(this.type, this.perPage, this.page);
  }

  ngOnInit() {
    this.getPromotions(this.type, this.perPage, this.page);
  }

}
