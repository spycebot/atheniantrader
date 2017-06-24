import { Component } from '@angular/core';

import { COMMODITIES } from './commodities';

import { Player } from './player';
import { Ship } from './ship';
import { Port } from './port';

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
  title = 'Athenian Trader';
  commodities = COMMODITIES;
  /* player = 'Jason';
  duckets = 0; */

	playerTwo: Player = {
		id: 2,
			name: 'Odysseus',
				duckets: 2
	}

  player: Player = {
    id: 1,
    name: 'Jason',
    duckets: 1000
    //ship: new Ship()
  }

  //ship = 'Argo';
  ship: Ship = {
    id: 1,
	  name: 'Argo',
	  size: 50,
    hp: 55,
    cargo: [25, 0, 0, 0],
    available: 25
 }
 port: Port = {
    id: 1,
    name: 'Athens',
    stock: [100, 50, 10, 0],
    sellPrice: [12, 120, 1200, 12000],
    buyPrice: [8, 80, 800, 8000]
 }

  startGame(): void {
  	console.log("startGame!");
  }
}
