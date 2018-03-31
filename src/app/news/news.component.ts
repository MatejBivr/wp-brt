import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	public perPage = 6;
  public category = 'posts';
  public title= "news";
  constructor() { }

  ngOnInit() {
  }

}
