import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-singlegallery',
  templateUrl: './singlegallery.component.html',
  styleUrls: ['./singlegallery.component.scss']
})
export class SinglegalleryComponent implements OnInit {
  private gallery = null;
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
      .subscribe(res => {
        this.title = res[0].title.rendered;
        this.gallery = Observable.create(res[0].gallery);
        // this.pages = this.gallery.length;
        console.log(this.gallery);
        this.galleryPerPage = this.gallery.take(4).subscribe();
        
      });

  }

  prevPage(){
    this.page--
    // this.galleryPerPage.subscribe();
  }

  nextPage(){
    this.page++
    // this.galleryPerPage.subscribe();
  }

  goToPage($event){
    this.page=$event
    // this.galleryPerPage.subscribe();
  }

  async ngOnInit() {
    await this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(this.type, slug);
    });
    
  }
  
}
