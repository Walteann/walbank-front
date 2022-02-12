import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidebarComponent } from './core/layouts/sidebar/sidebar.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	@ViewChild('walSidebar') walSidebar: SidebarComponent;
	@ViewChild('main') main: ElementRef;

	onToggleMenu() {
		this.walSidebar.navigation.nativeElement.classList.toggle('active');
		this.main.nativeElement.classList.toggle('active');
	}
}
