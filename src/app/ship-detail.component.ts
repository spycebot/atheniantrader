import { Component, Input } from '@angular/core';
import { Ship } from './ship';
import { COMMODITIES } from './commodities';

@Component({
	selector: 'ship-detail',
	templateUrl: 'ship-detail.component.html'
})
export class ShipDetailComponent {
	@Input() ship: Ship;
	commodities = COMMODITIES;
}