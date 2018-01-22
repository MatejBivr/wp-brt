import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainService } from '../../main.service';
import { Observable } from 'rxjs/Observable';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalcontentComponent} from './modalcontent.component';

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
  type = 'gallery';
  title='gallery';
  perPage = 4;
  page = 1;
  pages: number;
  loading: boolean= true;
  closeResult: string;

  constructor( private mainService: MainService, private route: ActivatedRoute, private modalService: NgbModal) { }

  open(content, guid) {
    const activeModal = this.modalService.open(content);
    console.log(content)
    content.guid = guid;
  }

  getPost(type, slug){
    this.mainService
      .getPost(type, slug)
      .map((res:any) => {
        res = res[0].gallery
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
        console.log(this.gallery)
      });
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
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(this.type, slug);      
    });
  }
  
}
