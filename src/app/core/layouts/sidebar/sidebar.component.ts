import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'wal-sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

	@ViewChild('navigationSidebar') navigation: ElementRef;

	constructor() {}


	get brandDevicedSelected(): string {

		return this.navigation?.nativeElement?.classList?.contains('active') ?
			'assets/images/logo-vertical-3.svg' : 'assets/images/logo-horizontal-3.svg';
	}

}
