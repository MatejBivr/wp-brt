import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';
import { LibraryComponent } from './library/library.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InvolvedComponent } from './common/involved/involved.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { SingleComponent } from './donate/single/single.component';
import { ExpensesComponent } from './donate/expenses/expenses.component';
import { DonateService } from './donate/donate.service';
import { AuthInterceptor } from './donate/AuthInterceptor';
import { PageComponent } from './common/page/page.component';
import { MainService } from './main.service';
import { MediaComponent } from './media/media.component';
import { MerchComponent } from './merch/merch.component';
import { SinglemerchComponent } from './merch/singlemerch/singlemerch.component';
import { SinglegalleryComponent } from './media/singlegallery/singlegallery.component';
import { StandalonepageComponent } from './common/page/standalonepage.component';
import { ModalcontentComponent } from './media/singlegallery/modalcontent.component';
import { SoonComponent } from './soon/soon.component';
import { CrewComponent } from './crew/crew.component';
import { PartnersComponent } from './partners/partners.component';
import { MediaSelectorComponent } from './media/media-selector.component';
import { LibrarySelectorComponent } from './library/library-selector.component';
import { LoaderComponent } from './common/loader/loader.component'


const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about', component: StandalonepageComponent, data: { title: 'About' } },
  { path: 'save', component: StandalonepageComponent, data: { title: 'save your river' } },
  { path: 'intellectuals', component: StandalonepageComponent, data: { title: 'River Intellectuals' } },
  { path: 'program', component: StandalonepageComponent, data: { title: 'Program' } },
  { path: 'network', component: StandalonepageComponent, data: { title: 'BRD Network' } },
  { path: 'faq', component: StandalonepageComponent, data: { title: 'faq' } },
  { path: 'shop', component: StandalonepageComponent, data: { title: 'Shop' } },
  { path: 'hydro', component: StandalonepageComponent, data: { title: 'Dirty Hydro' } },
  { path: 'contact', component: StandalonepageComponent, data: { title: 'Contact us' } },
  { path: 'cart', component: StandalonepageComponent, data: { title: 'cart' } },
  { path: 'checkout', component: StandalonepageComponent, data: { title: 'Checkout' } },

  { path: 'news', component: NewsComponent , pathMatch: 'full'},
  { path: 'news/:slug', component: SinglepostComponent, pathMatch: 'full'},
  { path: 'latest/:slug', component: SinglepostComponent, pathMatch: 'full', data: {type : 'latest'}},
  { path: 'media', component: MediaSelectorComponent , pathMatch: 'full'},
  { 
    path: 'pictures', component: MediaComponent ,
    pathMatch: 'full', data: { title: 'Picture galleries' } 
  },
  { path: 'pictures/:slug', component: SinglegalleryComponent, pathMatch: 'full'},
  { 
    path: 'videos', component: MediaComponent , 
    pathMatch: 'full', data: { title: 'Video galleries' }
  },
  { path: 'videos/:slug', component: SinglegalleryComponent, pathMatch: 'full'},
  { path: 'merch', component: MerchComponent , pathMatch: 'full'},
  { path: 'merch/:slug', component: SinglemerchComponent, pathMatch: 'full'},
  { path: 'single', component: DonateComponent, data : {type : 'single'}},
  { path: 'monthly', component: DonateComponent, data : {type : 'monthly'}},
  { path: 'business', component: DonateComponent, data : {type : 'business'}},
  { path: 'goods', component: DonateComponent, data: { type: 'goods' } },
  { path: 'donate',  redirectTo: '/single', pathMatch: 'full'},
  { path: 'library', component: LibraryComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    MenuComponent,
    FooterComponent,
    HeroComponent,
    NewsComponent,
    DonateComponent,
    LibraryComponent,
    PagenotfoundComponent,
    InvolvedComponent,
    PaginationComponent,
    SinglepostComponent,
    SingleComponent,
    ExpensesComponent,
    PageComponent,
    MediaComponent,
    MerchComponent,
    SinglemerchComponent,
    SinglegalleryComponent,
    StandalonepageComponent,
    ModalcontentComponent,
    SoonComponent,
    CrewComponent,
    PartnersComponent,
    MediaSelectorComponent,
    LibrarySelectorComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MainService,
    DonateService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
