import { Component, OnInit } from '@angular/core';
import {PostListComponent} from '../posts/post-list/post-list.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	perPage = 3;
  category = 'latest';
  constructor( private meta: Meta) {
    this.meta.updateTag({ property: 'title', content: 'Home | Balkan River Defence ' });
    this.meta.updateTag({ property: 'og:title', content: 'Home | Balkan River Defence ' });
    this.meta.updateTag({ name: 'description', content: 'Welcome to our new virtual home. Check out the info about who we are, what we do, how you can get involved and where you can join us for direct actions. Use resources to start the fight for your local river or raise awareness and make sure you connect with BRD network. ' });
    this.meta.updateTag({ property: 'og:description', content: 'Welcome to our new virtual home. Check out the info about who we are, what we do, how you can get involved and where you can join us for direct actions. Use resources to start the fight for your local river or raise awareness and make sure you connect with BRD network.' });
    this.meta.updateTag({ property: 'og:image', content : 'https://www.balkanriverdefence.org/wp-content/themes/brt/dist/assets/seo/homepage.jpg' });
  }

  ngOnInit() {
  }

}
