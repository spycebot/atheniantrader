import { Component } from '@angular/core';

import { Player } from './player';
import { Ship } from './ship';
//import { CommoditiesService } from './commodities.service';
import { COMMODITIES } from './commodities';

/*
export class Ship {
  id: number;
  name: string;
  size: number;
  hp: number;
  cargo: number[];
}
/* */

//const COMMODITIES = ['Wheat', 'Wine', 'Fabrics', 'Marbles'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  //constructor(private commoditiesService: CommoditiesService) { }
  title = 'Athenian Trader';
  commodities = COMMODITIES;
  //this.commodities = this.commoditiesService.getCommodities();
  /* player = 'Jason';
  duckets = 0; */
  player: Player = {
  	id: 1,
  	name: 'Jason',
  	duckets: 5050
  }

	playerTwo: Player = {
		id: 2,
			name: 'Odysseus',
				duckets: 2
	}

  //ship = 'Argo';
  ship: Ship = {
	id: 1,
	  name: 'Argo',
	  size: 50,
    hp: 55,
    cargo: [25, 0, 0, 0]
 }


  startGame(): void {
  	console.log("startGame!");
  }
}
