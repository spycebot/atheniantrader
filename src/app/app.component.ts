import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	//templateUrl: 'app.component.html',
	template: `
		<!-- h1>{{title}}</h1 -->
		<router-outlet></router-outlet>
		<!-- app-home></app-home -->
	`/*,
	styleUrls: ['app.component.css'] */
}) 

export class AppComponent {
  title = 'Athenian Trader';

  /*
  getPlayer(): void {
  	this.player = this.playerService.getPlayer();
  }
  */
}