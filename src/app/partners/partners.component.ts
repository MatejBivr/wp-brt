import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Meta } from '@angular/platform-browser';

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
  constructor(private mainService: MainService, private meta: Meta) {
    this.meta.updateTag({ property: 'title', content: 'Partners | Balkan River Defence' });
    this.meta.updateTag({ property: 'og:title', content: 'Partners | Balkan River Defence' });
    this.meta.updateTag({ name: 'description', content: 'Our activities would not be possible without our partners. They are not just our funders; they are our friends; not sponsors but partners. Thank You!' });
    this.meta.updateTag({ property: 'og:description', content: 'Our activities would not be possible without our partners. They are not just our funders; they are our friends; not sponsors but partners. Thank You!' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.balkanriverdefence.org/wp-content/themes/brt/dist/assets/seo/partners.jpg' });
  }

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
