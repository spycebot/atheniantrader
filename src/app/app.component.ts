import { Component } from '@angular/core';

export class Player {
	id: number;
	name: string;
	duckets: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Athenian Trader';
  //player = 'Jason';
  player: Player = {
  	id: 1,
  	name: 'Jason',
  	duckets: 5000
  }
  ship = 'Argo';
  duckets = 0;


  startGame(): void {
  	console.log("startGame!");
  }
}
