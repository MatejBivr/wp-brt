import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  title = "Partners";
  loading = true;
  huge: Array<object>=[];
  big: Array<object> = [];
  mid: Array<object>=[];
  small: Array<object>=[];
  constructor(private mainService: MainService) { }

  getPartners(){
    this.mainService
      .getCrew('partner')
      .flatMap( posts => posts)
      .subscribe(val => {
       switch(val['acf'].type) {
          case "10k":
              this.huge.push(val);
              break;
          case "5k":
              this.big.push(val);
              break;
          case "2k":
              this.mid.push(val);
              break;
          default:
              this.small.push(val);
        } 

        this.loading = false;
      });
  }

  ngOnInit() {
    this.getPartners();
  }

}
