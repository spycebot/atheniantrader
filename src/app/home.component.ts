import { Component, OnInit } from '@angular/core';

import { COMMODITIES } from './commodities';

import { Player } from './player';
import { Ship } from './ship';
import { Port } from './port';
import { PlayerService } from './player.service';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
})

export class HomeComponent implements OnInit {
  title = 'Athenian Trader';
  commodities = COMMODITIES;
  /* player = 'Jason';
  duckets = 0; */
  //players = PLAYERS;

  players: Player[];
  constructor(private playerService: PlayerService) { }

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

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }
}
