import { Component, OnInit } from '@angular/core';
// import { DonateService } from './donate.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  providers: []
})
export class DonateComponent implements OnInit {
  donations = [];
  sub: any;
  val: string;
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ipsum auctor, vulputate sem sed, condimentum quam. Nunc sit amet felis auctor massa faucibus tempus et ut libero. Fusce eleifend viverra dolor et efficitur. Ut non justo sed nulla tincidunt eleifend vehicula ac magna`;

  constructor( private route: ActivatedRoute ) { }

  getDonations(){
    // this.donateService.getDonations()
    //   .subscribe(val => {
    //     this.donations = val.filter((i) => {
    //       return i['donation-type'] === this.val;
    //     });
    //   });
  }

  ngOnInit() {
    this.sub = this.route
      .data.map(val => val.type)
      .subscribe(val => this.val = val);
    // this.getDonations();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
