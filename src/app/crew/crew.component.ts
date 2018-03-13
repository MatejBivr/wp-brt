import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export enum selectedCrew {
  core = 0,
  media = 1,
  volunteer = 2  
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  title = "the crew";
  loading: boolean= true;
  active: selectedCrew = selectedCrew['core'];
  volunteer: Array<object>=[];
  core: Array<object> = [];
  media: Array<object>=[];
  constructor( private mainService: MainService, private modalService: NgbModal) { }

  open(content) {
    const options = {
      windowClass: 'crew-modal'
    };

    this.modalService.open(content, options);
  }

  onActive(val){
    this.active = val;
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
          default:
              this.volunteer.push(val);
      } 
        console.log(this.core)
        this.loading = false;
      });
  }

  ngOnInit() {
    console.log(this.active);
    this.getCrew();
  }

}
