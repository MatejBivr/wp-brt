import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  title = "the crew";
  loading: boolean= true;
  volunteer: Array<object>=[];
  core: Array<object> = [];
  media: Array<object>=[];
  constructor( private mainService: MainService, private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
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
    this.getCrew();
  }

}
