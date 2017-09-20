import { Component, OnInit } from '@angular/core';
import { DonateService } from './donate.service'

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  providers: [DonateService]
})
export class DonateComponent implements OnInit {

  constructor( private donateService:DonateService) { }

  getDonations(){
    this.donateService.getDonations()
      .subscribe(val => {
        console.log(val);
      });
  }

  ngOnInit() {
    this.getDonations();
  }

}
