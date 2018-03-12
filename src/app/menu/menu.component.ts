import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public isCollapsed = true;
  public routeSub:any;
  private modalRef: NgbModalRef;
  closeResult: string;

  constructor(private modalService: NgbModal, private router:Router) {
  }

  open(content) {
    const options = {
      windowClass: 'modal__nav',
      beforeDismiss: () => {
        return false;
      }
    };
    this.modalRef = this.modalService.open(content, options);
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.modalRef.close();
      }
    });
  }

  ngOnInit(){}

}
