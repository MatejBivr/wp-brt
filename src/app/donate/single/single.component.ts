import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  @Input() donations;
  @Input() donationType;
  @Input() donationText;

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.donations);
  }

  

}
