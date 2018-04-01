import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs/Observable';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalcontentComponent} from './modalcontent.component';
import { DomSanitizer } from '@angular/platform-browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-singlegallery',
  templateUrl: './singlegallery.component.html',
  styleUrls: ['./singlegallery.component.scss']
})
export class SinglegalleryComponent implements OnInit {
  gallery;
  galleryPerPage = [];
  videos = [];
  type = 'galleries';
  title='gallery';
  perPage = 4;
  page = 1;
  pages: number;
  loading: boolean= true;
  closeResult: string;

  constructor( private mainService: MainService, private route: ActivatedRoute, private modalService: NgbModal, private sanitizer: DomSanitizer) { }

  open(content, guid) {
    const options = {
      windowClass: 'media-modal',
    };
    this.modalService.open(content,  options);
    content.guid = guid;
  }

  getPost(type, slug){
    this.mainService
      .getPost(type, slug)
      .map((res:any) => {
        res = res[0].images
        this.pages = Math.ceil(res.length / this.perPage)
        return res;
       })
      .mergeMap(res => Observable.from(res))
      .bufferCount(this.perPage)
      .do(res => {
        this.galleryPerPage.push(res);
      })
      .subscribe(()=> {
        this.gallery = this.galleryPerPage[this.page - 1];
        this.loading = false;
      });
  }

  getVideoPost(type, slug){
     this.mainService
      .getPost(type, slug)
      .subscribe((res:any) => {
         this.videos = res[0].content.rendered
          .replace('<p>', '').replace('</p>', '').split('<br />')
          .map(val => {
            val = (val.split(">"));
            val = val[1].replace('</a', '')
              .replace("//", "//player.")
              .replace("com","com/video");
            console.log(val);
            val = this.getSafeUrl(val);
            return {url:val};
          });
          
         this.galleryPerPage = this.videos;
         console.log(this.galleryPerPage)
       });
  }

  getSafeUrl(url) {
    console.log('triggered')
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  prevPage(){
    this.page--
    this.gallery = this.galleryPerPage[this.page - 1];
  }

  nextPage(){
    this.page++
    this.gallery = this.galleryPerPage[this.page - 1];
  }

  goToPage($event){
    this.page=$event
    this.gallery = this.galleryPerPage[this.page - 1];
  }

  ngOnInit() {
    this.type = this.route.snapshot.data['title'];
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
       if( this.type === 'videos'){
         this.getVideoPost(this.type, slug);
       } else {
          this.getPost(this.type, slug);
       }
    });
  }
  
}


// <iframe src="https://player.vimeo.com/video/224368317" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>