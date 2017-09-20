import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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

const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent , pathMatch: 'full'},
  { path: 'news/:slug', component: SinglepostComponent, pathMatch: 'full'},
  {
    path: 'donate',
    component: DonateComponent,
    children: [
      { path: '', redirectTo: 'single', pathMatch: 'full' },
      { path: 'single', component: SingleComponent, data : {type : 'single'}},
      { path: 'monthly', component: SingleComponent, data : {type : 'monthly'}},
      { path: 'business', component: SingleComponent, data : {type : 'business'}},
    ]
  },
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: ContactComponent },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
