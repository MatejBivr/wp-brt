import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

declare let paypal: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  @Input() donations;
  @Input() donationText;
  @Input() activeType:string;
  active:object;
  currentDonations=[];
  paypalLoad: boolean = false;
  finalAmount: number;
  userPrice: number;
  paypalConfig = {
    env: 'production',
    client: {
      sandbox: 'AS0q7Sy9TutcWPHCoD0-Q9_yo-8zu-wX8STJ6rGV1Us1-oIbQtuLfl-jBdjw7jbiRe8kYFgJhyiw7jhX',
      production: 'Af1VdNZ4v5zfKohG8Sberj6IH481opuC9kkWLavmBHGfxLh5ipWaPOqcrMnfyWsIpGRHKv6tgL3MSYoR'
    },
     style: {
      label: 'paypal',
      size:  'responsive',    // small | medium | large | responsive
      shape: 'rect',     // pill | rect
      color: 'blue',     // gold | blue | silver | black
      tagline: false    
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        console.log('thank you')
      })
    }
  };
  constructor(private sanitizer: DomSanitizer) { }
  onActive(donation){
    this.active = donation;
    console.log(this.active);
    if(this.active['_price'] !== '0') {
      this.finalAmount = this.active['_price'];
    } else {
      this.finalAmount = this.userPrice;
    }
    if (this.active['acf'].type === 'single') {
      this.paypalLoad = true;      
    }
  }

  renderPaypal() {
    paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if(this.paypalLoad){
      setTimeout(() => this.renderPaypal(), 100)
      this.paypalLoad = false;
    }
  }

  onChange(event){
    if(this.active && this.active['_price'] !== '0') {
      this.finalAmount = this.active['_price'];
    } else {
      this.finalAmount = this.userPrice;
    }
  }
}