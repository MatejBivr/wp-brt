import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  perPage = 9;
  title:string;
  type = 'libraries';
  libraries = [];
  studies = [];
  wallpapers = [];
  desktops = [];
  brochures = [];
  active=[]
  page = 1;
  pages: number;
  loading: boolean= true;
  hero: string = null;
  constructor( private mainService: MainService) { }

  getPromotions(type, perPage, numPage = 1){
    this.mainService
      .getPosts(type, perPage, numPage)
      .subscribe(res => {
        this.libraries = res[0];
        res[0].map(val => {
          switch(val['acf'].library_type) {
          case "desktops":
              this.desktops.push(val);
              break;
          case "wallpapers":
              this.wallpapers.push(val);
              break;
          case "studies":
              this.studies.push(val);
              break;
          case "brochures":
              this.brochures.push(val);
              break;
          default:
              break;
        } 
      });         
        this.pages=+res[1];
        this.loading = false;
      });
  }

  onType(event){
    this.title= event;
     switch(event) {
          case "desktops":
              this.active = this.desktops;
              break;
          case "wallpapers":
              this.active = this.wallpapers;
              break;
          case "studies":
              this.active = this.studies;
              break;
          case "brochures":
              this.active = this.brochures;
              break;
          default:
              break;
        } 
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
