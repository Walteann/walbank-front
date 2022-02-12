import { Component, EventEmitter, Output } from '@angular/core';


@Component({
	selector: 'wal-top-bar',
	templateUrl: 'top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent {

	@Output() onToggleMenu = new EventEmitter();

	constructor() { }

	onToggle(): void {
		this.onToggleMenu.emit()
	}
}
