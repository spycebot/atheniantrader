import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		  from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component'
import { ShipDetailComponent } from './ship-detail.component';
import { PortDetailComponent } from './port-detail.component';

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
    PortDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*,
    RouterModule.forRoot([
        {
          path:'port',
          component: PortDetailComponent
        }
    ]) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
