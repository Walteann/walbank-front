import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[wal-direction-horizontal]' })
export class WalDirectionHorizontalDirective {
	constructor(private element: ElementRef) {
		this.element.nativeElement.style.display = 'flex';
		this.element.nativeElement.style.flexDirection = 'row';
	}
}
