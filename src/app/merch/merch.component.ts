import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {
  perPage = 8;
  title= "merch";
  type = 'merch';
  merch = [];
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;

  constructor( private mainService: MainService, private router: Router ) { }

  getMerch(type, perPage, numPage = 1){
    this.mainService
      .getPosts(type, perPage, numPage)
      .subscribe(val => {
        this.merch = val[0];
        this.pages=+val[1];
        this.loading = false;
      });
  }

  selectMerch(type, slug) {
    let link = `/merch/${slug}`
    this.router.navigate([link]);
  }

  prevPage(){
    this.page--
    this.getMerch(this.type, this.perPage, this.page);
  }

  nextPage(){
    this.page++
    this.getMerch(this.type, this.perPage, this.page);
  }

  goToPage($event){
    this.page=$event
    this.getMerch(this.type, this.perPage, this.page);
  }

  ngOnInit() {
    this.getMerch(this.type, this.perPage, this.page);
  }

}
