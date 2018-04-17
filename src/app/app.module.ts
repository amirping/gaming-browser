import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DynamiqueHeadreComponent } from './dynamique-headre/dynamique-headre.component';
import { FooterComponent } from './footer/footer.component';
import { StaticHeadreComponent } from './static-headre/static-headre.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ShopComponent } from './shop/shop.component';
import { BecomeStreamerComponent } from './become-streamer/become-streamer.component';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { SearchComponent } from './search/search.component';
import { SearchMediaMoreComponent } from './search-media-more/search-media-more.component';
const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'help', component: HelpComponent },
      { path: 'live', component: StreamingComponent },
      { path: 'be-streamer', component: BecomeStreamerComponent },
      { path: 'add-ads', component: AddAdsComponent},
      { path: 'search/:word/:type', component: SearchComponent},
      { path: 'shop', component: ShopComponent}
    ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    HelpComponent,
    HomeComponent,
    DynamiqueHeadreComponent,
    FooterComponent,
    StaticHeadreComponent,
    SignInUpComponent,
    StreamingComponent,
    ShopComponent,
    BecomeStreamerComponent,
    AddAdsComponent,
    SearchComponent,
    SearchMediaMoreComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  entryComponents : [
    SignInUpComponent,
    SearchMediaMoreComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
