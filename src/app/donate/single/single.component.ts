import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit, OnChanges {
  @Input() donations;
  @Input() donationType;
  @Input() donationText;
  active:string;
  currentDonations=[];

  constructor() { }
  
  ngOnInit() {}

  ngOnChanges() {
    console.log(this.donationType);
    this.active = this.donationType === "SINGLE DONATION" ? 'single': 'monthly';
    this.currentDonations = this.donations.filter(i => {
        return i.acf.type === this.active        
      });
    console.log(this.currentDonations);
  }
 
}
// .filter((i) => {
//           return i['acf']['type'] === this.val;
//         });