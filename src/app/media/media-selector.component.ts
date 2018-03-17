import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-selector',
  template: `
    <app-page [title]="title">
      <ul class="media__list media__list--single list-unstyled">
        <li class="media__listItem">
          <a routerLink="/pictures" class="nav--link" routerLinkActive="active">
            <div class="media__imageContainer">
              <div class="media__image media__image--pictures"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">pictures</h2>
            </div>
          </a>
        </li>
        <li class="media__listItem">
          <a routerLink="/videos" class="nav--link" routerLinkActive="active">
            <div class="media__imageContainer">
              <div class="media__image media__image--videos"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">Videos</h2>
            </div>
          </a>
        </li>
      </ul>
    </app-page>
  `,
  styleUrls: ['./media.component.scss']
})
export class MediaSelectorComponent implements OnInit {
  title= "media";
  constructor() { }

  ngOnInit() {
  }

}
