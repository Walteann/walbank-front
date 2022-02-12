import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'wal-sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

	@ViewChild('navigationSidebar') navigation: ElementRef;

	constructor() {}

}
