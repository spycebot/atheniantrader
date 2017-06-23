import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { FormsModule }		from '@angular/forms'

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component'
import { ShipDetailComponent } from './ship-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    ShipDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
