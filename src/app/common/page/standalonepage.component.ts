import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-standalonepage',
  templateUrl: './standalonepage.component.html',
  styleUrls: ['./page.component.scss']
})
export class StandalonepageComponent implements OnInit {
  public title: string;
  public content;
  constructor(private router: Router, private route: ActivatedRoute, private mainService: MainService) { }

  getPage(){
    this.mainService
      .getPage(this.title)
      .subscribe(val => {
        console.log(val);
        console.log(typeof(val[0].content.rendered);
        this.content = val[0].content ? val[0].content.rendered : null;
      });
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    console.log(this.title)
    this.getPage();
  }

}
