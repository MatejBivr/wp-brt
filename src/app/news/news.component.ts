import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	private perPage = 6;
  private title= "news";
  constructor() { }

  ngOnInit() {
  }

}
