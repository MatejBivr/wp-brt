import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  private title = "contact";
  constructor() { }

  ngOnInit() {
  }

}
