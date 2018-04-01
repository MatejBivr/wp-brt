import { Component, OnInit } from '@angular/core';
import { DonateService } from './donate.service';
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
  text: string;
  textSingle = `As grassroots activists fighting for nature and against corruption we need help to finance our battles through independent sources.
  <br>
  <br />
  Every little bit helps. <br />
  <br />
  We give you a promise that we will be determined, non-violent and creative river defenders.  And have fun along the way! `;

 textMonthly = `You become a part of the Balkan River Defence Team when you make a monthly donation.  Our newsletter will keep you updated on the specific projects and battles we are working on, and you will be involved in adding ideas to the movement. <br />
<br />
As grassroots activists we depend on help from independent sources to keep the fight for nature and against corruption going. This is why we are saying deep and honest thank you to every one of you contributing to the cause. <br />
  <br />
Let’s show the world there is more value in free flowing rivers and pristine ecosystems than there is in concrete and harmful hydropower. We give you a promise that we will be determined, non-violent and creative river defenders. We will be transparent and honest. <br />
  <br />
Join the team, help us and let’s defend rivers together! `;

textBussiness = `You don’t need to be a business from the Balkans to support BRD. If you and your business value wild places and free-flowing rivers, want to fight greed, corruption and environmental degradation, then connecting your business with BRD shows dedication to the cause and a strong resistance. <br />
<br />
Stand up for our rivers and join the BRD 500 Club by donation monthly or annually (42 EUR/month or 500 EUR annually). By linking your business to BRD you become a key part of the resistance and a part of the network of river defenders that are working on the ground to save free-flowing rivers and wilderness. Your business and employees can get involved by signing up for our newsletter, and your business will be kept up to date with our latest actions and battles. You will also have the option to have your business name and logo displayed on the BRD webpage as 500+ supporters. Your company will be helping drive forward a movement for change.`;

textGoods = `If you own a business or just have some gear, office supplies, food, drinks or banner materials you can spare, we are more than happy to accept them. We are creative and resourceful and any help is welcome. <br />
<br />
Please contact us via social media or email info@balkanriverdefence.org <br />
<br />
Thanks!`;

  constructor( private route: ActivatedRoute, private donateService: DonateService ) { }

  getDonations(){
    this.donateService.getDonations()
      .subscribe(val => {
        this.donations = val
      });
  }

  ngOnInit() {
    this.sub = this.route
      .data.map(val => val.type)
      .subscribe(val => this.val = val);
    switch(this.val){
      case "SINGLE DONATION":
          this.text = this.textSingle
          break;
      case "GIVE MONTHLY":
          this.text = this.textMonthly
          break;
      case "BUSINESS MEMBERSHIP":
          this.text = this.textBussiness
          break;
      case "CONTRIBUTE IN GOODS":
          this.text = this.textBussiness
          break;
      default:
          break;
    }
    this.getDonations();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
