import { Component } from '@angular/core';

import { Player } from './player';
//import { Ship } from './ship';

/* */
export class Ship {
  id: number;
  name: string;
  size: number;
  hp: number;
  cargo: number[];
}
/* */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Athenian Trader';
  commodities = ['Wheat', 'Wine', 'Fabrics', 'Marbles'];
  /* player = 'Jason';
  duckets = 0; */
  player: Player = {
  	id: 1,
  	name: 'Jason',
  	duckets: 5000
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
