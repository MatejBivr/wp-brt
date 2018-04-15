import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
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
  { 
    path: 'about',
    component: StandalonepageComponent,
    data: { 
      title: 'About',
      meta: {
        title: 'About | Balkan River Defence',
        descrition: 'BRD story from crazy, beer influenced, idea in 2015 till today. Our mission, approach and vision put in words for you to better understand why we are doing all we can to protect these beautiful rivers and prove nature conservation is fun.',
        img: 'about.jpg'
      }
    }
  },
  { 
    path: 'save',
    component: StandalonepageComponent,
    data: { 
      title: 'save your river',
      meta: {
        title: 'Save your river | Balkan River Defence',
        descrition: 'Step by step instructions on how to tackle aggression of greed over your local river. It might seem simple…this is because it is, at least on the paper. Dive in and invest your time and emotion in action, it will make you feel more alive. Let the force be with you!',
        img: 'save.jpg'
      }
    }
  },
  {
    path: 'apply', component: StandalonepageComponent,
    data: { 
      title: 'apply as a volunteer',
      meta: {
        title: 'Apply as volunteer | Balkan River Defence',
        descrition: 'We always need help. If you have the drive to do something good for momma Earth and want to support our actions you are more than welcome. Get in touch with us!',
        img: 'volunteer.jpg'
      }
    }
  },
  { path:
    'intellectuals',
    component: StandalonepageComponent,
    data: {
      title: 'River Intellectuals',
      meta: {
        title: 'River Intellectuals | Balkan River Defence',
        descrition: 'All river lovers, it is time to link up with the next generation of scientists and conservationist! Professors, students and research-hungry folks, this page is for you. Read through the detailed description and download the .pdf so you can discuss and share ideas with classmates, professors and mentors to help us save these beautiful rivers!',
        img: 'Intellectuals.jpg'
      }
    }
  },
  {
    path: 'program',
    component: StandalonepageComponent,
    data: {
      title: 'Program',
      meta: {
        title: 'Balkan Rivers Tour 3 | Balkan River Defence',
        descrition: 'It’s time for the third edition of BRT. Shake the dust from your kayaks, fishing rods, bikes and hiking shoes. Think about how and where you can join us, how can you contribute to creative actions and protests and who will you bring with you.',
        img: 'BRD3.jpg'
      }
    }
  },
  {
    path: 'network',
    component: StandalonepageComponent,
    data:{
      title: 'BRD Network',
      meta: {
        title: 'BRD network | Balkan River Defence',
        descrition: 'It is all about networking, organizing, synchronizing and joining forces. This is why we are listing here a group of amazing NGOs, local initiatives and groups that are fighting the fight against greed and for rivers and better tomorrow.',
        img: 'network.jpg'
      }
    }
  },
  {
    path: 'faq',
    component: StandalonepageComponent,
    data: {
      title: 'faq',
      meta: {
        title: 'BRD FAQ | Balkan River Defence',
        descrition: 'FAQ about who we are and what we do.'
      }
    }
  },
  { path: 'shop', component: StandalonepageComponent, data: { title: 'Shop' } },
  { 
    path: 'hydro',
    component: StandalonepageComponent,
    data: {
      title: 'Dirty Hydro',
      meta: {
        title: 'Dirty Hydro | Balkan River Defence',
        descrition: '7 reasons why is hydropower is dirty. There is science to prove that and here you can find them all on one spot. What was once thought of as a green solution to the energy crisis is now destroying the last pockets of untouched wilderness and intact ecosystems of the world.',
        img: 'dirty_hydro.jpg'
      }
    }
  },
  {
    path:'contact',
    component: StandalonepageComponent,
    data:{
      title: 'Contact us',
      meta: {
        title: 'Contact us | Balkan River Defence',
        descrition: 'If you would like to propose a local fight for a river we should support, if you need help with contacts, if you would like to support us, if there is a problem with donation button or if you just want to connect with us.',
        img: 'contact.jpg'
      }
    }
  },
  { path: 'cart', component: StandalonepageComponent, data: { title: 'cart' } },
  { path: 'checkout', component: StandalonepageComponent, data: { title: 'Checkout' } },
  { path: 'thankyou', component: StandalonepageComponent, data: { title: 'thank-you' } },

  { path: 'news', component: NewsComponent , pathMatch: 'full'},
  { path: 'news/:slug', component: SinglepostComponent, pathMatch: 'full'},
  { path: 'latest/:slug', component: SinglepostComponent, pathMatch: 'full', data: {type : 'latest'}},
  { path: 'media', component: MediaSelectorComponent , pathMatch: 'full'},
  { 
    path: 'pictures', component: MediaComponent ,
    pathMatch: 'full', data: { title: 'Picture galleries' } 
  },
  { path: 'pictures/:slug', component: SinglegalleryComponent, pathMatch: 'full', data: { title: 'galleries' } },
  { 
    path: 'videos', component: MediaComponent , 
    pathMatch: 'full', data: { title: 'Video galleries' }
  },
  { path: 'videos/:slug', component: SinglegalleryComponent, pathMatch: 'full', data: { title: 'videos' }},
  { path: 'merch', component: MerchComponent , pathMatch: 'full'},
  { path: 'merch/:slug', component: SinglemerchComponent, pathMatch: 'full'},
  { path: 'donate', component: DonateComponent },
  
  { path: 'goods', component: DonateComponent, data: { type: 'CONTRIBUTE IN GOODS' } },
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
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MainService,
    DonateService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
