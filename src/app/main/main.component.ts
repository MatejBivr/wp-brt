import { Component, OnInit } from '@angular/core';
import {PostListComponent} from '../posts/post-list/post-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	perPage = 3;
  constructor() { }

  ngOnInit() {
  }

}
