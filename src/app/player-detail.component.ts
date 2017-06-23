import { Component, Input } from '@angular/core';
import { Player } from './player';
import { Ship } from './ship';

@Component({
	selector: 'player-detail',
	templateUrl: 'player-detail.component.html'
})
export class PlayerDetailComponent {
	@Input() player: Player;
	@Input() ship: Ship;
}