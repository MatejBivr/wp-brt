import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';

export enum selectedCrew {
  core,
  media,
  volunteer 
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  title = "the crew";
  loading: boolean= true;
  active;
  volunteers: Array<object>=[];
  core: Array<object> = [];
  media: Array<object>=[];
  activeArray: Array<object>=[];
  constructor( private mainService: MainService, private modalService: NgbModal) { }

  open(content) {
    const options = {
      windowClass: 'crew-modal',
      
    };

    this.modalService.open(content, options);
  }

  onActive(val){
    this.active = val;
    switch(val) {
      case "CORE TEAM":
          this.activeArray = this.core;
          break;
      case "MEDIA":
          this.activeArray =  this.media;
          break;
      case "TEAM MATES":
          this.activeArray =  this.volunteers;
          break;
      default:
          break;
    } 
  }

  getCrew(){
    this.mainService
      .getCrew('crew')
      .flatMap( posts => posts)
      .subscribe(val => {
        switch(val['acf'].type_of_crew) {
          case "core":
              this.core.push(val);
              break;
          case "media":
              this.media.push(val);
              break;
          case "volunteer":
              this.volunteers.push(val);
              break;
          default:
              break;
        } 
        this.activeArray = this.core;
        this.loading = false;
      });
  }

  ngOnInit() {
    console.log(this.active);
    this.active = 'CORE TEAM';
    this.getCrew();
  }

}
