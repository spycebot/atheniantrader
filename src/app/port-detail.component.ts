import { Component, Input, OnInit } from '@angular/core';
import { Port } from './port';
import { COMMODITIES } from './commodities'
import { Player } from './player';
import { Ship } from './ship';

@Component({
	selector: 'port-detail',
	templateUrl: 'port-detail.component.html'
})
export class PortDetailComponent {
	@Input() port: Port;
	@Input() player: Player;
	@Input() ship: Ship;

	commodities = COMMODITIES;

	sell(com: string, i: number, price: number): void {
		//OLD this.player.duckets = +this.player.duckets - price;
		if (this.player.duckets >= price && this.ship.available > 0) { 
			this.player.duckets = +this.player.duckets - price; 
			this.ship.cargo[i] = +this.ship.cargo[i] + 1;
			this.ship.available = +this.ship.available - 1;
		}
		//HOPEFUL this.player.ship.cargo[i] = this.player.ship.cargo[i] + 1;
		console.log(com + " sold! at position " + i + " for a price of " + price);
	}

	buy(com: string, i: number, price: number): void {
		if (this.ship.cargo[i] > 0) { 
			this.player.duckets = +this.player.duckets + price; 
			this.ship.cargo[i] = +this.ship.cargo[i] - 1;
			this.ship.available = +this.ship.available + 1;
		}
		console.log(com + " sold! but for less money, at position " + i);
	}

	ngOnInit(): void {
		console.log("PortDetailCompnent:ngOnInit:this.player.name: " + this.player.name);
	}
}