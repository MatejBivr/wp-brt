import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InvolvedComponent } from './common/involved/involved.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { SingleComponent } from './donate/single/single.component';
import { ExpensesComponent } from './donate/expenses/expenses.component';
import { DonateService } from './donate/donate.service';
import { PageComponent } from './common/page/page.component';
import { MainService } from './main.service';
import { MediaComponent } from './media/media.component';
import { MerchComponent } from './merch/merch.component';
import { SinglemerchComponent } from './merch/singlemerch/singlemerch.component';
import { SinglegalleryComponent } from './media/singlegallery/singlegallery.component';


const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about', component: PageComponent, data: { title: 'About' } },
  { path: 'news', component: NewsComponent , pathMatch: 'full'},
  { path: 'news/:slug', component: SinglepostComponent, pathMatch: 'full'},
  { path: 'media', component: MediaComponent , pathMatch: 'full'},
  { path: 'media/:slug', component: SinglegalleryComponent, pathMatch: 'full'},
  { path: 'merch', component: MerchComponent , pathMatch: 'full'},
  { path: 'merch/:slug', component: SinglemerchComponent, pathMatch: 'full'},
  { path: 'single', component: DonateComponent, data : {type : 'single'}},
  { path: 'monthly', component: DonateComponent, data : {type : 'monthly'}},
  { path: 'business', component: DonateComponent, data : {type : 'business'}},
  { path: 'donate',  redirectTo: '/single', pathMatch: 'full'},
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: PageComponent, data: { title: 'Contact' } },
  { path: 'hidro', component: PageComponent, data: { title: 'Dirty Hidro' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MainService, DonateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
