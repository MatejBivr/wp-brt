import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-library-selector',
  template: `
    <app-page [title]="title">
      <ul class="media__list media__list--single list-unstyled">
        <li class="media__listItem">
          <div class="nav--link" (click)="onTypeSelect('wallpapers')">
            <div class="media__imageContainer">
              <div class="media__image media__image--pictures"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">BRD wallpapers</h2>
            </div>
          </div>
        </li>
        <li class="media__listItem">
          <div class="nav--link" (click)="onTypeSelect('desktops')">
            <div class="media__imageContainer">
              <div class="media__image media__image--videos"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">BRD desktops</h2>
            </div>
          </div>
        </li>
        <li class="media__listItem">
          <div class="nav--link" (click)="onTypeSelect('brochures')">
            <div class="media__imageContainer">
              <div class="media__image media__image--brochures"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">BRD brochures</h2>
            </div>
          </div>
        </li>
        <li class="media__listItem">
          <div class="nav--link" (click)="onTypeSelect('studies')">
            <div class="media__imageContainer">
              <div class="media__image media__image--studies"></div>  
            </div>
            <div class="media__body">
              <h2 class="media__heading">Studies</h2>
            </div>
          </div>
        </li>
      </ul>
    </app-page>
  `,
  styleUrls: ['../media/media.component.scss']
})
export class LibrarySelectorComponent implements OnInit {
  title: string = 'library';
  @Output() onType = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onTypeSelect(type){
    this.onType.emit(type);
  }

}
