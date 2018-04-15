import { Component, OnInit } from '@angular/core';
import { DonateService } from './donate.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  providers: []
})

export class DonateComponent implements OnInit {
  donations = [];
  active: string = "SINGLE DONATION";
  activeType: string;
  activeDonations = [];
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
Stand up for our rivers and join the BRD 500 Club by donation monthly or annually (42 EUR/month or 500 EUR annually). By linking your business to BRD you become a key part of the resistance and a part of the network of river defenders that are working on the ground to save free-flowing rivers and wilderness. Your business and employees can get involved by signing up for our newsletter, and your business will be kept up to date with our latest actions and battles. You will also have the option to have your business name and logo displayed on the BRD webpage as 500+ supporters. Your company will be helping drive forward a movement for change.<br />
<br />
We are exited to welcome you and your business to the team. Please send us an email to info@balkanriverdefence.org to speak directly to us about setting up a business donation. `;

textGoods = `If you own a business or just have some gear, office supplies, food, drinks or banner materials you can spare, we are more than happy to accept them. We are creative and resourceful and any help is welcome. <br />
<br />
Please contact us via social media or email info@balkanriverdefence.org <br />
<br />
Thanks!`;

  constructor( private route: ActivatedRoute, private donateService: DonateService, private meta: Meta ) {
      this.meta.updateTag({ property: 'title', content: 'Donate | Balkan River Defence' });
    this.meta.updateTag({ property: 'og:title', content: 'Donate | Balkan River Defence' });
    this.meta.updateTag({ name: 'description', content: 'It is your donations that make our work possible. Your contribution will enable us to continue the fight, pay our bills, organize more actions and remain grassroots; meaning there is nobody pressuring us with what to do and how to do it. Thank You!' });
    this.meta.updateTag({ property: 'og:description', content: 'It is your donations that make our work possible. Your contribution will enable us to continue the fight, pay our bills, organize more actions and remain grassroots; meaning there is nobody pressuring us with what to do and how to do it. Thank You!' });
    this.meta.updateTag({ property: 'og:image', content : 'https://www.balkanriverdefence.org/wp-content/themes/brt/dist/assets/seo/donate.jpg' });
  }

  getDonations(){
    this.donateService.getDonations()
      .subscribe(val => {
        this.donations = val
        this.onActive(this.active)
      });
  }
  onActive(activeStr) {
    this.active = activeStr;
    switch(this.active){
      case "SINGLE DONATION":
          this.text = this.textSingle;
          this.activeType = 'single';
          break;
      case "GIVE MONTHLY":
          this.text = this.textMonthly;
          this.activeType = 'monthly';
          break;
      case "BUSINESS MEMBERSHIP":
          this.text = this.textBussiness;
          this.activeType = 'business';
          break;
      case "CONTRIBUTE IN GOODS":
          this.text = this.textGoods
          break;
      default:
          break;
    }
    this.activeDonations = this.donations.filter(i => {
      if ( this.active !== "CONTRIBUTE IN GOODS"){
        return i.acf.type === this.activeType        
      }
      });
  }

  ngOnInit() {    
    this.getDonations();
  }
}
