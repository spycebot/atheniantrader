import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		  from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }           from './app.component';
import { PlayerDetailComponent }  from './player-detail.component'
import { ShipDetailComponent }    from './ship-detail.component';
import { PortDetailComponent }    from './port-detail.component';
import { HomeComponent }          from './home.component';
import { HowToPlayComponent }     from './how-to-play.component';
import { PlayerService }          from './player.service';

/*
const routes: Routes = [
  { path: '', }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    ShipDetailComponent,
    PortDetailComponent,
    HomeComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
          path:'home',
          component: HomeComponent
        } ,
        {
          path: 'how-to-play',
          component: HowToPlayComponent
        } 
    ])
  ],
  providers: [ PlayerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
