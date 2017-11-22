import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-singlemerch',
  templateUrl: './singlemerch.component.html',
  styleUrls: ['./singlemerch.component.scss']
})
export class SinglemerchComponent implements OnInit {
  merch;
  type = 'merch';
  constructor(private mainService: MainService, private route: ActivatedRoute) { }

  getPost(type, slug){
    this.mainService
      .getPost(type, slug)
      .subscribe(res => {
        this.merch = res[0];
        console.log(this.merch);
      });

  }

  async ngOnInit() {
    await this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
        this.getPost(this.type, slug);

    });

  }
  // ngOnChanges(){
  //   if(this.post){
  //     this.hero = this.post['_embedded']['wp:featuredmedia'][0].source_url;     
  //   }
  // }

}
