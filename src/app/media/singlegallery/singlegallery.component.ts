import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-singlegallery',
  templateUrl: './singlegallery.component.html',
  styleUrls: ['./singlegallery.component.scss']
})
export class SinglegalleryComponent implements OnInit {
  private gallery;
  private gallery$;
  private galleryPerPage = null;
  private type = 'gallery';
  private title='gallery';
  private perPage = 4;
  private page = 1;
  private pages: number;
  private loading: boolean= true;
  constructor(private mainService: MainService, private route: ActivatedRoute) { }

  getPost(type, slug){
    this.mainService
      .getPost(type, slug)
      .map(res => { this.gallery$ = Observable.from(res[0].gallery); return res})
      .subscribe(res => {
        let i = res[0].gallery.length
        console.log(this.gallery$);
        this.title = res[0].title.rendered;
        {i % this.perPage > 0? 
          this.pages = (i - i % this.perPage)/this.perPage + 1
          :this.pages = i/this.perPage}
        this.gallery$
          .bufferCount(this.perPage)
          .take(1)
          .map(val => this.gallery = val)     
          .subscribe();
      });
  }

  prevPage(){
    this.page--
    console.log(this.page);
  }

  nextPage(){
    this.page++
    console.log(this.page);
  }

  goToPage($event){
    this.page=$event
    console.log(this.page);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(this.type, slug);      
    });
  }
  
}
