import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';

import { ShoesComponent } from './men/shoes/shoes.component';
// menshoes
import { MencasualshoesComponent } from './men/shoes/mencasualshoes/mencasualshoes.component';
import { MenformalshoesComponent } from './men/shoes/menformalshoes/menformalshoes.component';
import { MensportsshoesComponent } from './men/shoes/mensportsshoes/mensportsshoes.component';

import { SandalsComponent } from './men/sandals/sandals.component';
import { FlipflopsComponent } from './men/flipflops/flipflops.component';
import { SocksComponent } from './men/socks/socks.component';

import { WshoesComponent } from './women/wshoes/wshoes.component';
//womenshoes
import { WomencasualshoeComponent } from './women/wshoes/womencasualshoe/womencasualshoe.component';
import { WomensportsshoeComponent } from './women/wshoes/womensportsshoe/womensportsshoe.component';

import { WsandalsComponent } from './women/wsandals/wsandals.component';
import { WflipflopsComponent } from './women/wflipflops/wflipflops.component';
import { WsocksComponent } from './women/wsocks/wsocks.component';

import { CouraselComponent } from './courasel/courasel.component';

import { KshoesComponent } from './kids//kshoes/kshoes.component';
import { KsandalsComponent } from './kids/ksandals/ksandals.component';
import { KsocksComponent } from './kids/ksocks/ksocks.component';
import { NavComponent } from './nav/nav.component';
import { PopularComponent } from './popular/popular.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ShoesComponent,
    SandalsComponent,
    FlipflopsComponent,
    SocksComponent,
    WshoesComponent,
    WsandalsComponent,
    WflipflopsComponent,
    WsocksComponent,
    CouraselComponent,
    KshoesComponent,
    KsandalsComponent,
    KsocksComponent,
    NavComponent,
    MencasualshoesComponent,
    MenformalshoesComponent,
    MensportsshoesComponent,
    WomencasualshoeComponent,
    WomensportsshoeComponent,
    PopularComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
    // HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
