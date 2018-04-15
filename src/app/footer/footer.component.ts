import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public title: string = 'footer';
  public content;
  constructor(private mainService: MainService, private sanitizer: DomSanitizer) {
    this.mainService
      .getPage(this.title)
      .subscribe(val => {
        this.content = val[0].content ? this.getSafeUrl(val[0].content.rendered) : null;
    });
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

  ngOnInit() {
  }

  scrollTop() {
    window.scrollTo(0,0);
  }

}
