import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    MenuComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    NewsComponent,
    DonateComponent,
    LibraryComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'main',
        component: MainComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
