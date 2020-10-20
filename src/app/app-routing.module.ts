import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CaouraselComponent } from './caourasel/caourasel.component';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { PopularComponent } from './popular/popular.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';


import { ShoesComponent } from './men/shoes/shoes.component';
//menshoes
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

import { KshoesComponent } from './kids//kshoes/kshoes.component';
import { KsandalsComponent } from './kids/ksandals/ksandals.component';
import { KsocksComponent } from './kids/ksocks/ksocks.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  

  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'popular',component:PopularComponent},
  {path:'profile',component:ProfileComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  
  {path:'men/shoes',component:ShoesComponent},
//men shoes path
  {path:'men/shoes/mencasualshoes',component:MencasualshoesComponent},
  {path:'men/shoes/menformalshoes',component:MenformalshoesComponent},
  {path:'men/shoes/mensportsshoes',component:MensportsshoesComponent},

  {path:'men/sandals',component:SandalsComponent},
  {path:'men/flipflops',component:FlipflopsComponent},
  {path:'men/socks',component:SocksComponent},

  {path:'women/wshoes',component:WshoesComponent},
  //womenshoes
  {path:'women/wshoes/womencasualshoe',component:WomencasualshoeComponent},
  {path:'women/wshoes/womensportsshoe',component:WomensportsshoeComponent},
  
  {path:'women/wsandals',component:WsandalsComponent},
  {path:'women/wflipflops',component:WflipflopsComponent},
  {path:'women/wsocks',component:WsocksComponent},

  {path:'kids/kshoes',component:KshoesComponent},
  {path:'kids/ksandals',component:KsandalsComponent},
  {path:'kids/ksocks',component:KsocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
